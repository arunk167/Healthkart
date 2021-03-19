import React from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../styles/colors';

export default function ModalView(props) {
  const {onCloseModal, _onChangeText, isModalVisiable, onItemAction,buttonText} = props;
  return (
    <View>
      <Modal
        transparent
        onRequestClose={onCloseModal}
        visible={isModalVisiable}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            flex: 1,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: 10,
              marginVertical: 10,
              elevation: 10,
              borderRadius: 10,
            }}>
            <TextInput
              style={styles.inputText}
              placeholder="Taskname"
              onChangeText={_onChangeText('inputText')}
            />
            <TextInput
              style={styles.inputText}
              placeholder="stutus"
              onChangeText={_onChangeText('stutus')}
            />
            <View style={styles.actionView}>
              <TouchableOpacity onPress={onItemAction} style={styles.actionButton}>
                <Text style={styles.actionText}>{buttonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  inputText: {
    borderBottomWidth: 1,
    marginVertical: 2,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  actionButton: {
    backgroundColor: colors.themeColor,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
  },
  actionText: {
    fontSize: 22,
    color: colors.white,
    marginVertical: 5,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  actionView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
