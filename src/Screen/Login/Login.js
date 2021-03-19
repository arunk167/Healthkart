import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ButtonWithImage from '../../Component/ButtonWithImage';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import TextInputWithLabel from '../../Component/TextInputWithLabel';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import validator from '../../utils/validation';
import {showMessage} from 'react-native-flash-message';
import api from '../../apis';

import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';

export default class Login extends Component {
  state = {
    userEmail: '',
    userPassword: '',
    isLoading: false,
  };
  onmove = () => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.SIGNUP);
  };
  isValidData = () => {
    const {
      userEmail,
      userName,
      userPassword,
      confirmPassword,
      dateOfBirth,
    } = this.state;
    const error = validator({
      name: userName,
      email: userEmail,
      password: userPassword,
      confirmPassword: confirmPassword,
    });
    if (error) {
      showMessage({
        type: 'info',
        icon: 'info',
        message: error,
      });
      return false;
    }

    return true;
  };
  onLogin = () => {
    const {userPassword, userEmail} = this.state;
    const {navigation} = this.props;
    if (this.isValidData()) {
      this.setState({
        isLoading: true,
      });

      api
        .login({
          email: userEmail,
          password: userPassword,
        })
        .then(res => {
          this.setState({
            isLoading: false,
          });
          showMessage({
            type: 'success',
            icon: 'success',
            message: 'Login success',
          });

          navigation.navigate(navigationStrings.HOMEPAGE);
        })
        .catch(error => {
          this.setState({
            isLoading: false,
          });
          showMessage({
            type: 'danger',
            icon: 'danger',
            message: 'Enter correct username password',
          });
        });
    }
  };
  _onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }
  render() {
    const {userPassword, userEmail} = this.state;
    return (
      <WrapperContainer>
        <View style={{flex: 1, backgroundColor: colors.white}}>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: moderateScaleVertical(15),
            }}>
            <TextInputWithLabel
              label="Email"
              placeholder="Enter your Email"
              onChangeText={this._onChangeText('userEmail')}
              value={userEmail}
            />
            <TextInputWithLabel
              label="Password"
              placeholder="Enter your password"
              secureTextEntry={true}
              value={userPassword}
              onChangeText={this._onChangeText('userPassword')}
            />
            <View>
              <ButtonWithLoader btnText={'login'} onPress={this.onLogin} />
            </View>
          </View>

          <View style={styles.socialRow}>
            <View style={styles.hyphen} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.hyphen} />
          </View>
          <View style={styles.socialButton}>
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
            <TouchableOpacity onPress={this.onmove}>
              <Text style={{...styles.txtSmall, color: colors.textGrey}}>
                New to HealthKart?
                <Text
                  style={{
                    color: colors.themeColor,
                  }}>
                  {' '}
                  Sign in
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
    marginTop: moderateScaleVertical(20),
  },
  orText: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',

    opacity: 0.6,
    marginTop: 0,
    marginHorizontal: moderateScale(16),
  },
  socialRowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(40),
    marginTop: moderateScaleVertical(20),
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(20),
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
