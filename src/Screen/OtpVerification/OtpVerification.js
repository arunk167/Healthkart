
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Platform,
} from 'react-native';


import navigationStrings from '../../constants/navigationStrings';
import api from '../../redux/actions/index';
import {showMessage, hideMessage} from 'react-native-flash-message';


import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from './styles';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import strings from '../../constants/lang';
import imagePath from '../../constants/imagePath';


import colors from '../../styles/colors';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import WrapperContainer from '../../Component/WrapperContainer';


const CELL_COUNT = 5;
export default class OtpVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp:'',
      isLoading: false,
    };

   
  }

  _onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }

  onOtpVerify= () => {
    const {userId} = this.props.route.params;
    const {otp} = this.state;
    const {navigation} = this.props;
    this.setState({
      isLoading: true,
    });

    api
      .otpVerify({
        userId,
        otp: otp,
        deviceToken:'123',
        registerFrom: Platform.OS.toUpperCase(),
      })
      .then(res => {
        this.setState({
          isLoading: false,
        });

        showMessage({
          type: 'success',
          message: 'Otp Verification Successful',
          icon: 'success',
        });

       
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });

        showMessage({
          type: 'danger',
          message: 'Otp Verification Faild',
          icon: 'danger',
        });
        
      });
  };

  render() {
    const {otp, isLoading} = this.state;
    const{navigation}=this.props
     
    return (
      <WrapperContainer statusBarColor={colors.themeColor}>
        
        <View
          style={{
            flex: 1,
            marginTop: moderateScaleVertical(88),
            
          }}>
          <Text style={styles.header}>{strings.OTP_VERIFICATION}</Text>
          <Text style={styles.txtSmall}>{strings.ENTER_OTP_SENT}</Text>
          <View style={{height: moderateScaleVertical(50)}} />
          <View >
          <CodeField
            value={otp}
            onChangeText={this._onChangeText('otp')}
            cellCount={CELL_COUNT}
            rootStyle={styles.root}
            blurOnSubmit
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            selectionColor={colors.themeColor}
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          </View>
         
         <View style={{marginHorizontal:20}}>
         <ButtonWithLoader
           
           btnText={'Verify OTp'} onPress={this.onOtpVerify} isLoading={isLoading} 
         />
         </View>
        
        </View>
        {/* <Loader isLoading={isLoading}/> */}
      </WrapperContainer>

      
    );
  }
}
