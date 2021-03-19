import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  alert,
  ImageBackground,
} from 'react-native';
import imagePath from '../../constants/imagePath';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import colors from '../../styles/colors';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import navigationStrings from '../../constants/navigationStrings';
import {height, width} from '../../styles/responsiveSize';
import WrapperContainer from '../../Component/WrapperContainer';
import ButtonWithImage from '../../Component/ButtonWithImage';

export default class OuterScreen extends Component {
  state = {
    carouselItems: [
      {id: 1, image: imagePath.tab1, title: 'Shop Genuine Health Supplements'},
      {id: 2, image: imagePath.tab2, title: 'Get Customized Diet Plans'},
      {id: 3, image: imagePath.tab3, title: 'Consult with Best Nutritionists'},
      {},
    ],
    activeIndex: 0,
  };

  get pagination() {
    const {carouselItems, activeIndex} = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#ffff',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  _renderItem({item, index}) {
    if (index != 3) {
      return (
        <View>
          <Image
            style={{
              marginTop: '20%',
              height: 300,
              width: '100%',
              resizeMode: 'cover',
            }}
            source={item.image}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      );
    } else {
      return <View></View>;
    }
  }

    

  render() {
    const {carouselItems, activeIndex} = this.state;
    const {navigation} = this.props;
    console.log(activeIndex);
    return (
      <WrapperContainer>
        <View style={styles.containerView}>
          {activeIndex != 3 ? (
            <View style={{flex: 1}}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Carousel
                    data={carouselItems}
                    layout={'default'}
                    sliderWidth={5}
                    itemWidth={width}
                    renderItem={this._renderItem}
                    onSnapToItem={index => this.setState({activeIndex: index})}
                  />
                </View>
                {this.pagination}
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <View style={styles.buttonView}>
                    <Text style={{color: colors.themeColor, fontSize: 18}}>
                      Get Started
                    </Text>
                  </View>
                </TouchableOpacity>
                <Text
                  onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
                  Skip Now
                </Text>
              </View>
            </View>
          ) : (
            <ImageBackground
           
              source={imagePath.logo}
              style={{height: height, width: width}}>
              <View
                style={{
                 flexDirection: 'row',
                  width: width,
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    width: '40%',
                    backgroundColor: colors.white,
                    marginHorizontal: 10,
                    marginTop: height / 1.4,
                   
                  }} >
                       
                  <ButtonWithImage
                    buttonText={'Login'}
                    btnTextColor={colors.themeColor}
                    onMove={()=>navigation.navigate(navigationStrings.LOGIN)}
                    
                  />
                </View>

                <View
                  style={{
                    width: '40%',
                    backgroundColor: colors.white,
                    marginHorizontal: 10,
                    marginTop: height / 1.4,
                  }}>
                  <ButtonWithImage
                    buttonText={'Sign Up'}
                    btnTextColor={colors.themeColor}
                    onMove={()=>navigation.navigate(navigationStrings.SIGNUP)}
                  />
                </View>
              </View>
            </ImageBackground>
          )}
        </View>
      </WrapperContainer>
    );
  }
}
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 40,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  ButtonView: {
    width: '40%',
    alignItems: 'center',
    marginTop: height / 1.5,
  },
  title: {
    color: colors.white,
    fontSize: 23,
    textAlign: 'center',
    marginTop: '10%',
    marginHorizontal: 10,
  },
  buttonView: {
    backgroundColor: colors.white,
    width: width / 1.2,
    height: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
