import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../Card';
import {TextHeader} from '../Header';
import {useDispatch, useSelector} from 'react-redux';
import {
  BASEURL,
  fetchNotifications,
  logout,
  teacherLoginSuccess,
} from '../../../store/actions';
import axios from 'axios';
import {COLORS, FONTS} from '../../Assets/Theme';
import {StudentSideMenu} from '../SideMenu';
import {PopUp} from '../popup';
import {NotificationCard} from '../notificationCard';

const Teacher = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  const handleLogOut = () => {
    dispatch(logout());
    navigation.navigate('TeacherLogin');
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
                zIndex: 100,
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

      {!user ? (
        <>
          <Text>loading....</Text>
        </>
      ) : (
        <>
          <ScrollView
            style={{
              backgroundColor: COLORS.lightGray1,
              height: '100%',
            }}>
            <View
              style={{
                // paddingHorizontal: 20,
                paddingVertical: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.black,
                  fontWeight: 700,
                }}>
                Teacher only options
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
                paddingTop: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Teacher')}>
                <Card
                  title="Profile"
                  // img="https://cdn-icons-png.freepik.com/256/7941/7941584.png?ga=GA1.1.1634828664.1699686714&semt=ais_hybrid"
                  img="https://cdn-icons-png.freepik.com/256/4818/4818066.png?ga=GA1.1.1634828664.1699686714&semt=ais_hybrid"
                  // img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('ClassMangement')}>
                <Card
                  title="Class Mangement"
                  img="https://img.freepik.com/premium-vector/businessman-talking-time-management-business-strategy_7081-2171.jpg?w=1380"
                  // img="https://img.freepik.com/free-vector/professor-concept-illustration_114360-3767.jpg"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateCourseScreen')}>
                <Card
                  title="Course Mangement"
                  img="https://img.freepik.com/free-vector/professor-concept-illustration_114360-3767.jpg"
                />
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
        <Card
          title="Gradebook and assessments"
          img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
        />
      </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <Card
                  title="Announcements and Notifications"
                  img="https://img.freepik.com/free-vector/megaphone-concept-illustration_114360-19564.jpg?t=st=1716835112~exp=1716838712~hmac=7e3bd79b323d2967fe369fee783e167a399f5510b4e33bab27df81ef4802d2e1&w=826"
                />
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => navigation.navigate('Attendance')}>
          <Card
            title="Attendance Tracker"
            img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
          />
        </TouchableOpacity> */}
              {/* <TouchableOpacity onPress={() => navigation.navigate('UpdateEmail')}>
        <Card
          title="Settings"
          img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
        />
      </TouchableOpacity> */}
              <TouchableOpacity onPress={handleLogOut}>
                <Card
                  title="LogOut"
                  img="https://img.freepik.com/premium-vector/door-silhouette-open-door-sign-exit-with-arrow-symbol_532867-457.jpg?w=826"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Teacher;
