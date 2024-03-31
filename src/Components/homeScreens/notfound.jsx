import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../Assets/Theme';

const Notfound = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text
        style={{
          ...FONTS.h2,
        }}>
        notfound
      </Text>
      <View>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.green,
            paddingVertical: 20,
            borderRadius: 100,
            paddingHorizontal: 30,
          }}
          onPress={handleBack}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/256/545/545682.png?ga=GA1.1.1634828664.1699686714&semt=ais',
            }}
            alt=""
            style={{
              width: 35,
              height: 35,
              // borderRadius: 25,
              transform: 'rotate(180deg)',
              tintColor: COLORS.white,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notfound;

const styles = StyleSheet.create({});
