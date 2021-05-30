# react-native-awesome-carousel

Carousel for React Native. Built with react-native-pager-view.

## Installation

```sh
npm install react-native-awesome-carousel
```

## Usage

```js
import AwesomeCarousel from "react-native-awesome-carousel";

const App = () => {
    return (
        <View style={{flex: 1}}>
            <View style={styles.slideContainer}>
            <AwesomeCarousel loop={false}>
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
      </View>
    )
}
```

## Props
| props    | required | default | type    | description                          |
|----------|----------|---------|---------|--------------------------------------|
| loop     | false    | true    | boolean | whether the carousel should loop     |
| autoplay | false    | true    | boolean | whether the carousel should autoplay |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
