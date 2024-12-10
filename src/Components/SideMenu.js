import {View, Text, Image, TouchableOpacity, Settings} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../Assets/Theme';

export const StudentSideMenu = ({navigation, user}) => {
  const handleLogOut = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  console.log('hell yeah', user);

  const user_name = user.user == null ? user.teacher.name : user.user.name;

  console.log(user_name);
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          paddingTop: 80,
          height: '85%',
          flexDirection: 'column',
          padding: 10,
          // zIndex: 100,
        }}>
        <View
          style={{
            gap: 10,
            display: 'flex',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Student')}>
            <WideCard
              wideImage={
                'https://cdn0.iconfinder.com/data/icons/seo-web-4-1/128/Vigor_User-Avatar-Profile-Photo-01-256.png'
              }
              name={user_name}
              underline_name={'Profile'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Course')}>
            <WideCard
              wideImage={
                'https://cdn2.iconfinder.com/data/icons/knowledge-is-power/60/books-256.png'
              }
              // name={'Admin Name'}
              underline_name={'Courses'}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <WideCard
              wideImage={
                'https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-06-256.png'
              }
              // name={'Admin Name'}
              underline_name={'Setting'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handleLogOut}>
            <WideCard
              underline_name="LogOut"
              // img="https://cdn-icons-png.flaticon.com/512/4400/4400629.png"
              wideImage="https://cdn4.iconfinder.com/data/icons/social-media-and-branding/24/logout_1-256.png"
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export const WideCard = ({wideImage, name, underline_name}) => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 20,
          gap: 20,
          borderRadius: 10,
          backgroundColor: '#9c9c',
          // width: '100%',
          // height: 'auto',
        }}>
        <Image
          source={{
            uri: wideImage,
          }}
          style={{
            width: 60,
            height: 60,
          }}
          resizeMode="contain"
        />
        <View>
          {!name ? (
            <Text
              style={{
                ...FONTS.h2,
                color: COLORS.darkGray,
                fontWeight: 900,
              }}>
              {underline_name}
            </Text>
          ) : (
            <>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.darkGray,
                  fontWeight: 700,
                  textTransform: 'capitalize',
                }}>
                @{name}
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.white,
                }}>
                {underline_name}
              </Text>
            </>
          )}
        </View>
      </View>
    </>
  );
};
