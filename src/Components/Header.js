import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../Assets/Theme';

export const Header = ({navigation, title}) => {
  return (
    <View
      style={{
        width: '100%',
        paddingVertical: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
        paddingHorizontal: 20,
      }}>
      {/* <TouchableOpacity>
            <Text>
               Back
            </Text>
        </TouchableOpacity> */}
      <Text
        style={{
          fontSize: 25,
          fontWeight: 700,
        }}>
        SPS
      </Text>

      <Text
        style={{
          fontSize: 25,
          fontWeight: 700,
        }}>
        {title}
      </Text>
      <View
        style={{
          width: '10%',
        }}></View>
    </View>
  );
};

export const TextHeader = ({title}) => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          // position: 'relative',
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
              fontWeight: 700,
            }}>
            {title}
          </Text>
          <Text
            style={{
              ...FONTS.h1,
              color: COLORS.green,
              fontWeight: 900,
            }}>
            .
          </Text>
        </View>
      </View>
    </>
  );
};

export const SideStudentButton = () => {
  const [valu, setValu] = useState(true);
  const OnClickButton = () => {
    setValu(!valu);
  };

  console.log(valu);
  return (
    <>
      {valu ? (
        <>
          <TouchableOpacity onPress={OnClickButton}>
            <View>
              <Image
                source={{
                  uri: 'https://cdn2.iconfinder.com/data/icons/css-vol-2/24/menu-right-256.png',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                }}
                // resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity onPress={OnClickButton}>
            <View>
              <Image
                source={{
                  uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-round-256.png',
                }}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                }}
                // resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </>
      )}

      {!valu ? (
        <>
          <View
            style={{
              position: 'absolute',
              width: '100wh',
              height: 'auto',
              backgroundColor: '#f2f',
            }}>
            <TouchableOpacity onPress={OnClickButton}>
              <View>
                <Image
                  source={{
                    uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-round-256.png',
                  }}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                  }}
                  // resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
