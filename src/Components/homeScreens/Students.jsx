import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Card from '../Card';
import {TextHeader} from '../Header';
import {useDispatch, useSelector} from 'react-redux';
import {BASEURL, loginSuccess, logout} from '../../../store/actions';
import axios from 'axios';
import Notfound from './notfound';
import {COLORS, FONTS} from '../../Assets/Theme';
import {ImageSlider} from 'react-native-image-slider-banner';
import {StudentSideMenu} from '../SideMenu';

const Students = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const handleLogOut = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  const [valu, setValu] = useState(true);
  const OnClickButton = () => {
    setValu(!valu);
  };

  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 5,
          // position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: COLORS.layout,
          width: '100%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextHeader title={'Student Portal System'} />
        <View>
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
                {/* <TouchableOpacity onPress={OnClickButton}>
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
                </TouchableOpacity> */}
              </>
            )}
          </>
        </View>
      </View>

      {/* side menu */}
      <>
        {!valu ? (
          <>
            <View
              style={{
                display: 'flex',
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#f2f2f2',
                zIndex: 10000,
              }}>
              <>
                <TouchableOpacity
                  onPress={OnClickButton}
                  style={{
                    // padding: 20,
                    position: 'absolute',
                    right: 20,
                    top: 20,
                  }}>
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
              <>
                <StudentSideMenu navigation={navigation} user={user} />
              </>
            </View>
          </>
        ) : null}
      </>
      {/*  */}
      <ScrollView
        style={{
          backgroundColor: COLORS.lightGray1,
        }}>
        {!user ? (
          <>
            <Text>loading.....</Text>
          </>
        ) : (
          <>
            <View
              style={{
                // paddingTop: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '17%',
              }}>
              <ImageSlider
                data={[
                  {
                    img: 'https://img.freepik.com/premium-vector/landing-page-web-template-education_101434-276.jpg?w=1060',
                  },
                  // {
                  //   img: 'https://media.gettyimages.com/id/1059546642/vector/e-learning.jpg?s=612x612&w=0&k=20&c=r9vGsIBsml-8a49NATvd8W4mS5gJ1J5IQU9Ty95X3CE=',
                  // },
                  {
                    img: 'https://img.freepik.com/free-vector/gradient-background-international-day-education_23-2151016699.jpg',
                  },
                  // {
                  //   img: 'https://media.gettyimages.com/id/1136822845/vector/vector-set-of-design-templates-and-elements-for-online-education-in-trendy-linear-style.jpg?s=612x612&w=0&k=20&c=47nBZlcEafMWT3_lZdZAcxkfafmK80cAhrBcBiSAQDA=',
                  // },
                  {
                    img: 'https://media.gettyimages.com/id/1341159990/vector/online-education-related-vector-banner-design-concept-modern-line-style-with-icons.jpg?s=612x612&w=0&k=20&c=Q3REyIi0P7R251PqkrwzeAyD4DkZqT7CnK--DCcPNoE=',
                  },
                ]}
                autoPlay={true}
                timer={3000}
                onItemChanged={item => item}
                closeIconColor="#fff"
                caroselImageStyle={{
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingBottom: 10,
              }}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.black,
                  fontWeight: 700,
                }}>
                Option to choose
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor:"#000",
                gap: 10,
                // paddingVertical: 20,
                paddingBottom: 50,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Student')}>
                <Card
                  title="Profile"
                  // img="https://cdn.vectorstock.com/i/1000x1000/05/79/student-profile-line-icon-concept-vector-24720579.webp"
                  img="https://cdn-icons-png.freepik.com/256/5509/5509537.png?ga=GA1.1.1634828664.1699686714&semt=ais_hybrid"
                  // img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <Card
                  title="Course"
                  img="https://img.freepik.com/free-vector/professor-concept-illustration_114360-3767.jpg"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('TimeTable')}>
                <Card
                  title="TimeTable"
                  img="https://img.freepik.com/free-vector/schedule-concept-illustration_114360-1531.jpg?t=st=1716835855~exp=1716839455~hmac=1f2da6948ad6aa050ba69c27e8970ca6fc80befcdb04d0fa9609ae0ae7e244ba&w=826"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}>
                <Card
                  title="Announcements"
                  img="https://img.freepik.com/premium-vector/notice-free-vector_734448-5.jpg?w=826"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('StudentSupport')}>
                <Card
                  title="Student Support"
                  img="https://img.freepik.com/free-vector/customer-service-concept-illustration_114360-22120.jpg?t=st=1716835953~exp=1716839553~hmac=80d40917cbafe323e303d259511b431ad31b99fbf976959074083e1e71064065&w=826"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Calculator')}>
                <Card
                  title="Calculator"
                  img="https://play-lh.googleusercontent.com/OiFA7RIjk3B6ibeRIUO2aSu_Z65VabTRwkqBHF9AuheVhr9H4RRmcWLxIHV2JWy94vM=w240-h480-rw"
                  // img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Lectures')}>
                <Card
                  title="lectures"
                  img="https://img.freepik.com/free-vector/public-talk-concept-illustration_114360-8970.jpg?t=st=1716836147~exp=1716839747~hmac=af53f4ead9131038ae2a4f78f449fe4e362300e064b5eb9b7550accfc37d85ac&w=1380"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogOut}>
                <Card
                  title="LogOut"
                  // img="https://cdn-icons-png.flaticon.com/512/4400/4400629.png"
                  img="https://img.freepik.com/premium-vector/door-silhouette-open-door-sign-exit-with-arrow-symbol_532867-457.jpg?w=826"
                />
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Students;
