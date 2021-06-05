import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        RNAwesomeCarousel was designed to help developers to drop in a carousel
        in React Native application without hassle.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        RNAwesomeCarousel lets you focus on your development instaed of
        struggling to make a working carousel on your own.
      </>
    ),
  },
  {
    title: 'Powered by PagerView',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This library is built with{' '}
        <a href="https://github.com/callstack/react-native-pager-view">
          react-native-pager-view
        </a>{' '}
        that is using{' '}
        <a href="https://developer.android.com/reference/android/support/v4/view/ViewPager">
          Android ViewPager
        </a>{' '}
        and{' '}
        <a href="https://developer.apple.com/documentation/uikit/uipageviewcontroller">
          iOS UIPageViewController
        </a>{' '}
        under the hood.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
