import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScaleVertical,
  moderateScale,
  textScale,
} from '../../styles/responsiveSize';

export default StyleSheet.create({
  backContainer:{
    height: moderateScaleVertical(80),
    borderBottomColor: colors.borderLight,
    borderBottomWidth: 2,
    paddingHorizontal: moderateScale(24),
    justifyContent: 'center',
  },
  header: {
    color: colors.black,
    fontSize: moderateScale(24),
    fontFamily: fontFamily.futuraBtHeavy,
    textAlign: 'center',
  },
  txtSmall: {
    ...commonStyles.mediumFont14,
    lineHeight: 24,
    textAlign: 'center',
    fontFamily: fontFamily.medium,
    marginTop: moderateScaleVertical(15),
  },

  root: {
    marginHorizontal: moderateScale(20),
    marginVertical: 30,
    justifyContent: 'space-between',
  },
 
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: textScale(55),
    height: textScale(55),
    fontFamily: fontFamily.regular,
    lineHeight: textScale(57),
    fontSize: 24,
    borderWidth: 1,
    borderRadius: textScale(30),
    borderColor: colors.black,
    color: colors.black,
    textAlign: 'center',
   
  },
  focusCell: {
    borderColor: colors.themeColor,
  },
});
