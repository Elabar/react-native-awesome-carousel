---
sidebar_position: 2
---

# Quickstart

If you have used [react-native-pager-view](https://github.com/callstack/react-native-pager-view) before, the API is pretty similar with it. Below is a snippet that you can use to show the carousel within seconds!

```jsx
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AwesomeCarousel from 'react-native-awesome-carousel';

const App = () => {
  return (
    <View style={styles.container}>
      <AwesomeCarousel autoplay={true} loop={true} autoplayInterval={2500}>
        <View style={styles.slide1}>
          <Text>Normal Carousel</Text>
          <Text>Slide 1</Text>
        </View>
        <View style={styles.slide2}>
          <Text>Normal Carousel</Text>
          <Text>Slide 2</Text>
        </View>
      </AwesomeCarousel>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide1: {
    height,
    width,
    backgroundColor: '#FED7AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    height,
    width,
    backgroundColor: '#FECACA',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```
