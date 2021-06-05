import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { StyleSheet } from 'react-native';
import PagerView, {
  PagerViewOnPageSelectedEvent,
  PageScrollStateChangedNativeEvent,
} from 'react-native-pager-view';

interface IAwesomeCarousel {
  children: JSX.Element[];
  loop?: boolean;
  autoplay?: boolean;
  onSnap?: (index: number) => void;
  autoplayInterval?: number;
}

interface IAwesomeCarouselForward {
  snapTo: (index: number, animated: boolean) => void;
}

const AwesomeCarousel = forwardRef<IAwesomeCarouselForward, IAwesomeCarousel>(
  (
    {
      children = [],
      loop = true,
      autoplay = true,
      onSnap,
      autoplayInterval = 2500,
    },
    ref
  ) => {
    const viewPagerRef = useRef<PagerView>(null);
    const [components, setComponents] = useState<JSX.Element[]>([]);
    const [scrollingState, setScrollingState] = useState('idle');
    const [currentPage, setCurrentPage] = useState(1);
    const timeoutRef = useRef<NodeJS.Timeout[]>([]);

    useImperativeHandle(ref, () => {
      return {
        snapTo: (index, animated = true) => {
          if (index < 0 || index > children.length - 1) {
            console.warn(`snapTo(${index}) index out of bound!`);
            return;
          }
          timeoutRef.current.map((v) => {
            clearTimeout(v);
          });
          let destination = index;
          if (children.length > 1 && loop) {
            destination = index + 1;
          }
          if (animated) {
            viewPagerRef.current?.setPage(destination);
          } else {
            viewPagerRef.current?.setPageWithoutAnimation(destination);
          }
        },
      };
    });

    useEffect(() => {
      if (scrollingState === 'idle' && loop) {
        const reachedFakeLastSlide = currentPage === 0;
        const reachedFakeFirstSlide = currentPage === components.length - 1;

        if (reachedFakeFirstSlide) {
          viewPagerRef?.current?.setPageWithoutAnimation(1);
        } else if (reachedFakeLastSlide) {
          viewPagerRef?.current?.setPageWithoutAnimation(components.length - 2);
        }
      }
    }, [scrollingState, components.length, currentPage, loop]);

    useEffect(() => {
      if (
        components.length > 1 &&
        currentPage !== 0 &&
        currentPage !== components.length - 1 &&
        autoplay
      ) {
        const currentTimeout = setTimeout(() => {
          if (viewPagerRef?.current) {
            viewPagerRef.current.setPage(currentPage + 1);
          }
        }, autoplayInterval);

        timeoutRef.current.push(currentTimeout);
      }
    }, [viewPagerRef, currentPage, components, autoplay, autoplayInterval]);

    useEffect(() => {
      if (children.length > 1 && loop) {
        const transformchildren = [
          children[children.length - 1],
          ...children,
          children[0],
        ];
        setComponents(transformchildren);
      } else {
        setCurrentPage(0);
        setComponents(children);
      }
    }, [loop, children]);

    const _onPageSelected = (event: PagerViewOnPageSelectedEvent) => {
      if (onSnap) {
        if (children.length > 1 && loop) {
          if (
            event.nativeEvent.position !== components.length - 1 &&
            event.nativeEvent.position !== 0
          ) {
            onSnap(event.nativeEvent.position - 1);
          }
        } else {
          onSnap(event.nativeEvent.position);
        }
      }
      setCurrentPage(event.nativeEvent.position);
    };

    const _onPageScrollStateChanged = (
      e: PageScrollStateChangedNativeEvent
    ) => {
      if (e.nativeEvent.pageScrollState === 'dragging') {
        timeoutRef.current.map((v) => {
          clearTimeout(v);
        });
      }
      setScrollingState(e.nativeEvent.pageScrollState);
    };

    return (
      <PagerView
        ref={viewPagerRef}
        style={styles.pagerViewContainer}
        initialPage={currentPage}
        onPageScrollStateChanged={_onPageScrollStateChanged}
        onPageSelected={_onPageSelected}
      >
        {components}
      </PagerView>
    );
  }
);

const styles = StyleSheet.create({
  pagerViewContainer: {
    flex: 1,
  },
});

export default memo(AwesomeCarousel);
