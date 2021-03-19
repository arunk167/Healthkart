import React, {Component} from 'react';
import {Text, View, StyleSheet,TouchableOpacity,Image} from 'react-native';
import ButtonWithImage from '../../Component/ButtonWithImage';
import ButtonWithLoader from '../../Component/ButtonWithLoader';

import TextInputWithLabel from '../../Component/TextInputWithLabel';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';


import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    onmoveLogin=()=>{
        const {navigation}=this.props;
        navigation.navigate(navigationStrings.LOGIN)
    }
  render() {
      
    return (
      <WrapperContainer>
          <View style={{flex: 1,backgroundColor:colors.white}}>
        <View style={{marginHorizontal: 15, marginVertical: 15}}>
          <Text style={styles.text}>
            Your number is safe with us.We won't share your details with anyone.
          </Text>
        </View>
        <View style={{height: moderateScaleVertical(30), marginHorizontal: 15}}>
          <TextInputWithLabel label="Email" placeholder="Enter your email" />
          <ButtonWithLoader btnText={'Sign Up'} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: moderateScaleVertical(130),
            marginHorizontal: 20,
            justifyContent:'center',
            alignItems:'center'
          }}>
          <Text style={{color: colors.textGreyB,fontSize:12}}>
            By signing up you agree to our{' '}
          </Text>
          <Text style={{color: colors.themeColor,fontSize:12}}>Terms & Conditions</Text>
        </View>
        <View style={styles.socialRow}>
          <View style={styles.hyphen} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.hyphen} />
        </View>
        <View
            style={styles.socialButton}>
            <View
              style={{width: '46%', borderWidth: 1, borderColor: colors.blue}}>
              <ButtonWithImage
                imageSource={imagePath.fb}
                buttonText={'Facebook'}
                isImageVisiable={true}
                btnTextColor={colors.blue}
              />
            </View>
            <View
              style={{width: '46%', borderWidth: 1, borderColor: colors.red}}>
              <ButtonWithImage
                imageSource={imagePath.google}
                buttonText={'Google'}
                isImageVisiable={true}
                btnTextColor={colors.red}
              />
            </View>
          </View>
        <View style={styles.bottomContainer}>
         <TouchableOpacity onPress={this.onmoveLogin}>
         <Text style={{...styles.txtSmall, color: colors.textGrey}}>
            Already have an account?
            <Text 
              style={{
                color: colors.themeColor,
              }}>
              {' '}
              Log in
            </Text>
          </Text>
         </TouchableOpacity>
        </View>
      </View>
      </WrapperContainer>
    );
  }
}
const styles = StyleSheet.create({
  hyphen: {
    width: 100,
    height: 1,
    backgroundColor: colors.textGrey,
    opacity: 0.6,
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScaleVertical(20),
    
  },
  orText: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',

    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(16),
  },
  text: {
    color: colors.textGrey,
  },
  bottomContainer:{
     justifyContent:'center',
     alignItems:'center',
     marginVertical: moderateScaleVertical(15),

  },
  socialRowBtn:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:moderateScale(40),
    marginVertical: moderateScaleVertical(10),
  },
  socialParentView:{borderWidth:1,padding:3,borderColor:colors.blue},
  socialView:{flexDirection:'row',marginHorizontal:8,marginVertical:2},
  socialImage:{height:25,width:25},
  socialText:{marginHorizontal:5,marginTop:2},
  socialButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 20,
  }


});
