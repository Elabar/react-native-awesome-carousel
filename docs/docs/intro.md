---
sidebar_position: 0
---

# Motivation

Let's talk about why another React Native carousel library.

## Library left unmaintained

According to my knowledge, there are two major library that is excellent in this carousel field, namely
[react-native-snap-carousel](https://github.com/meliorence/react-native-snap-carousel) and [react-native-swiper](https://github.com/leecade/react-native-swiper). Leaving library unmaintained is usually not a real problem if the
library itself is stable enough, like [ExpressJS](https://expressjs.com/). But upon my usage, both library did not
meet my expectation and I will list down their problem here.

#### react-native-snap-carousel

- swiping the carousel will sometime hang in the middle of swipping, leaving the carousel showing two slides at once.
- swiping is not as smooth
- when loop is enabled, swiping from last slide to first slide will have a blink (beta 4)

#### react-native-swiper

- It is using ScrollView for Android implementation. When `removeSubClipedViews` is enabled, sliding from last slide
  to first slide will blink.

## Solution

After trying two of the libraries, I have decided to write a whole new library that is based on [react-native-pager-view](https://github.com/callstack/react-native-pager-view). Under the hood, it is using [Android ViewPager](https://developer.android.com/reference/android/support/v4/view/ViewPager) and [iOS UIPageViewController](https://developer.apple.com/documentation/uikit/uipageviewcontroller). Personally, I think this approach should be more performant as it is using Native Component under the hood. This library ***does not*** try to be the next **react-native-snap-carousel** nor the **react-native-swiper**, I just built it for my own use case. But of course, I'm still open for any good suggestions!
