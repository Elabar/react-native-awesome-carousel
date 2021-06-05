# snapTo

Programmatically snaps to an index.

## snapTo(index, animated)

| Params   | Type    | Required | Default |
| -------- | ------- | -------- | ------- |
| index    | number  | false    | N/A     |
| animated | boolean | false    | true    |

## Example

```jsx
import * as React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import AwesomeCarousel from 'react-native-awesome-carousel';

const App = () => {
  const carouselRef = React.useRef();

  const _goToSecondSlide = () => {
    carouselRef?.current?.snapTo(1, true);
  };

  return (
    <View style={styles.container}>
      <TouchableHightlight onPress={_goToSecondSlide}>
        <Text>Go to second slide</Text>
      </TouchableHightlight>
      <AwesomeCarousel ref={carouselRef} autoplay={false} loop={true}>
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
