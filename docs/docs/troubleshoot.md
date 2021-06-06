---
sidebar_position: 5
---

# Troubleshoot
Read the right side TOC to quickly check if your problem is listed here, if not, please open an issue in the GitHub.

## Known issue from PagerView
As this library is built on top of [react-native-pager-view](https://github.com/callstack/react-native-pager-view), they share the same limitations. I'll share some details here, for more details, please read [PagerView known issue](https://github.com/callstack/react-native-pager-view#known-issues). 

:::caution
Note that you can only use View components as children of PagerView. For Android if View has own children, set prop collapsable to false https://reactnative.dev/docs/view#collapsable, otherwise react-native might remove those children views and and it's children will be rendered as separate pages.
:::

:::caution
flex:1 does not work for child views, please use width:”100%”, height:”100%” instead.
:::

_____

## Carousel is not showing up
This happens because the carousel is not aware of the height it can occupy.
### Solution
Make sure you have a parent `<View>` to wrap the carousel. The `<View/>` should define the height for the carousel.

### Example
```jsx
// ...
<View style={{height: "50%"}}>
    <AwesomeCarousel>
        // ...
    <AwesomeCarousel>
</View>
```

_____

## Carousel autoplay weird behaviour
When in development, the hot reload will mess up the timeout function. But this problem should not happen in production mode.

### Solution 
Reload the app.

