import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import imagePath from '../constants/imagePath';
export default function MenProducts(props) {
  const {data, datapass,  onItemAdd} = props;

  return (
    <View>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <TouchableOpacity onPress={() => datapass(data.id)}>
          <Image style={styles.image} source={{uri: data.image}} />
        </TouchableOpacity>
        <Text style={{fontStyle: 'italic'}}>{data.name}</Text>
        <Text style={{fontSize: 10, color: 'gray'}}>{data.detail}</Text>
        <Text style={{marginBottom: 5}}>Rs.{data.price}</Text>
        <Button
          title="Buy Now"
          color="#FF3E6C"
          onPress={() =>onItemAdd(data.id)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 220,
    width: 160,
  },
});
