import React, { useEffect, useRef, useState } from 'react';
import PagerView, {
  PagerViewOnPageSelectedEvent,
  PageScrollStateChangedNativeEvent,
} from 'react-native-pager-view';

interface IAwesomeCarousel {
  children: JSX.Element[];
  loop?: boolean;
  autoplay?: boolean;
}

const AwesomeCarousel = ({
  children = [],
  loop = true,
  autoplay = true,
}: IAwesomeCarousel) => {
  const viewPagerRef = useRef<PagerView>(null);
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const [scrollingState, setScrollingState] = useState('idle');
  const [currentPage, setCurrentPage] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout[]>([]);

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
      }, 2500);

      timeoutRef.current.push(currentTimeout);
    }
  }, [viewPagerRef, currentPage, components, autoplay]);

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
    setCurrentPage(event.nativeEvent.position);
  };

  const _onPageScrollStateChanged = (e: PageScrollStateChangedNativeEvent) => {
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
      style={{ flex: 1 }}
      initialPage={currentPage}
      onPageScrollStateChanged={_onPageScrollStateChanged}
      onPageSelected={_onPageSelected}
    >
      {components}
    </PagerView>
  );
};

export default AwesomeCarousel;
