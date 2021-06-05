import * as React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import AwesomeCarousel from 'react-native-awesome-carousel';

const { width } = Dimensions.get('window');
const height = 100;
export default function App() {
  const sampleOneRef = React.useRef<any>();
  const sampleTwoRef = React.useRef<any>();
  const [sampleOneIndex, setSampleOneIndex] = React.useState(0);
  const [sampleTwoIndex, setSampleTwoIndex] = React.useState(0);

  const _onPrev = () => {
    sampleOneRef?.current?.snapTo(sampleOneIndex - 1);
  };

  const _onNext = () => {
    sampleOneRef?.current?.snapTo(sampleOneIndex + 1);
  };

  const _onPrev2 = () => {
    sampleTwoRef?.current?.snapTo(sampleTwoIndex - 1, false);
  };

  const _onNext2 = () => {
    sampleTwoRef?.current?.snapTo(sampleTwoIndex + 1, false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={false} />
      <Text style={styles.title}>Normal Carousel</Text>
      <View style={styles.slideContainer}>
        <View style={styles.row}>
          <TouchableHighlight onPress={_onPrev}>
            <Text>Previous</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={_onNext}>
            <Text>Next</Text>
          </TouchableHighlight>
        </View>
        <AwesomeCarousel
          loop={false}
          onSnap={setSampleOneIndex}
          ref={sampleOneRef}
        >
          <View style={styles.slide1}>
            <Text>Normal Carousel</Text>
            <Text>Slide 1</Text>
          </View>
          <View style={styles.slide2}>
            <Text>Normal Carousel</Text>
            <Text>Slide 2</Text>
          </View>
        </AwesomeCarousel>
        <Text>{`current index: ${sampleOneIndex}`}</Text>
      </View>

      <Text style={styles.title}>Autoplay loop Carousel</Text>
      <View style={styles.slideContainer}>
        <View style={styles.row}>
          <TouchableHighlight onPress={_onPrev2}>
            <Text>Previous</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={_onNext2}>
            <Text>Next</Text>
          </TouchableHighlight>
        </View>
        <AwesomeCarousel
          autoplay={true}
          loop={true}
          onSnap={setSampleTwoIndex}
          autoplayInterval={2500}
          ref={sampleTwoRef}
        >
          <View style={styles.slide1}>
            <Text>Normal Carousel</Text>
            <Text>Slide 1</Text>
          </View>
          <View style={styles.slide2}>
            <Text>Normal Carousel</Text>
            <Text>Slide 2</Text>
          </View>
        </AwesomeCarousel>
        <Text>{`current index: ${sampleTwoIndex}`}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  slideContainer: {
    marginBottom: 10,
    height,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
