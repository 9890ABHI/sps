import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../Assets/Theme';

export const NotificationCard = ({
  navigation,
  user,
  title,
  subtitile,
  goesTo,
  setModalVisible,
  modalVisible,
  toggleModal,
}) => {
  console.log(toggleModal);
  const goesTOLink = () => {
    navigation.navigate(goesTo);
    toggleModal;
  };

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          width: '100%',
          backgroundColor: '#f2f2',
          borderRadius: 10,
          padding: 10,
          shadowColor: COLORS.black,
        }}>
        <View
          style={{
            width: '100%',
          }}
          // key={item.id}
        >
          {/* <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 9,
              gap: 10,
            }}>
            <Image
              source={{
                uri: 'https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png',
              }}
              style={{
                width: 30,
                height: 30,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                ...FONTS.h4,
                fontWeight: 700,
                color: COLORS.green,
                textAlign: 'left',
                letterSpacing: 1,
              }}>
              @{user}
            </Text>
          </View> */}
          <Text
            style={{
              ...FONTS.h2,
              fontWeight: 700,
              color: COLORS.black,
              textAlign: 'left',
              letterSpacing: 1,
            }}>
            {title}
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              fontWeight: 700,
              color: COLORS.black,
              textAlign: 'left',
              letterSpacing: 1,
            }}>
            {subtitile}
          </Text>
        </View>
        {/* {goesTo ? (
          <TouchableOpacity
            // title="click here"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={goesTOLink()}>
            <Text
              style={{
                color: COLORS.PrimaryBlue,
              }}>
              Click here
            </Text>
            <Image
              source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/bold-blue-glyphs-free-samples/32/69_Arrow_Right_Direction_Wayfinding-256.png',
              }}
              style={{
                width: 20,
                height: 20,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <></>
        )} */}
      </View>
    </>
  );
};
