import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../Assets/Theme';

export const InitPage = ({navigation}) => {
  return (
    <>
      <View
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          backgroundColor: COLORS.white,
        }}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,

            // height: '50%',
            // paddingBottom: 100,
            paddingLeft: 30,
            width: '100%',
            // gap: 20,
          }}>
          <Image
            source={{
              uri: 'https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?t=st=1733589366~exp=1733592966~hmac=5c76aca97cf285c07ddc6749bff80be76a90f808f684b789746ffe7485e2283e&w=740',
            }}
            style={{
              width: '100%',
              height: '60%',
            }}
            // resizeMode="contain"
            resizeMode="contain"
          />
          <View
            style={{
              //   paddingTop: 10,
              width: '100%',
              //   gap: 10,
            }}>
            <Text
              style={{
                //   ...FONTS.h1,
                textAlign: 'left',
                color: COLORS.Primary,
                fontWeight: 900,
                fontSize: 45,
                fontFamily: 'sans-serif',
                // fontFamily: 'lucida grande',
              }}>
              Hello
            </Text>
            <Text
              style={{
                ...FONTS.body1,
                textAlign: 'left',
                color: COLORS.PrimaryBlue,
                fontWeight: 400,
                fontSize: 35,
              }}>
              Welcome to SPS
            </Text>
          </View>
        </View>
        <View
          style={{
            // paddingTop: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1 / 2,
            // backgroundColor: COLORS.lightGray1,
            width: '80%',
            gap: 10,
          }}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('SignUp')}
            onPress={() => navigation.navigate('Login')}
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.Primary,
              borderColor: COLORS.gray,
              borderWidth: 1 / 2,
              borderRadius: 15,
            }}>
            <View
              style={{
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                width: '100%',
              }}>
              <Text
                style={{
                  ...FONTS.body1,
                  textAlign: 'left',
                  color: COLORS.white,
                }}>
                Student login
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.layout,
              borderColor: COLORS.gray,
              borderWidth: 1 / 2,
              borderRadius: 15,
            }}
            onPress={() => navigation.navigate('TeacherLogin')}>
            <View
              style={{
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}>
              <Text
                style={{
                  ...FONTS.body1,
                  textAlign: 'left',
                  color: COLORS.PrimaryBlue,
                }}>
                Teacher login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
