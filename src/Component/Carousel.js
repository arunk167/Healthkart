import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import colors from '../styles/colors';


const images = [
  'https://img2.hkrtcdn.com/14192/bnr_1419161_o.jpg',
 'https://img4.hkrtcdn.com/14086/bnr_1408553_o.jpg',
  'https://img4.hkrtcdn.com/14192/bnr_1419163_o.jpg',
  'https://img10.hkrtcdn.com/14086/bnr_1408549_o.jpg',
  'https://img2.hkrtcdn.com/14086/bnr_1408551_o.jpg',
];

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
    };
  }

  change(nativeEvent) {
    if (nativeEvent) {
      const slide = Math.ceil(                      
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== this.state.active) {
        this.setState({
          active: slide,
        });
      }
    }
  }

  render() {
    const {active} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({nativeEvent}) => this.change(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{uri: e}}
              />
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={active === index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  wrap: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height * 0.30, 
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    margin: 3,
    color: '#888',
  },
  dotActive: {
    margin: 3,
    color: colors.white,
  },
});

export default Carousel;