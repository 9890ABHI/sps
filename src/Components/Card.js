import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../Assets/Theme';

const Card = ({navigation, title, img, link}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // width: 180,
        gap: 20,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 20,
        // height: 200,
        // flexDirection: 'row',
        minWidth: 180,
        maxWidth: 180,
        height: 200,
        justifyContent: 'space-around',
        // borderWidth: 0.5,
        // borderColor: COLORS.gray2,
        shadowColor: COLORS.black,
      }}
      // key={item.id}
    >
      <Image
        source={{uri: img}}
        style={{
          width: '100%',
          height: '75%',
          borderRadius: 20,
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          ...FONTS.h3,
          fontWeight: 700,
          color: COLORS.green,
          textAlign: 'center',
          letterSpacing: 1,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Card;
