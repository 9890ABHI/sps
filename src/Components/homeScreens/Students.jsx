import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Card from '../Card';
import {TextHeader} from '../Header';
import {useDispatch, useSelector} from 'react-redux';
import {BASEURL, loginSuccess, logout} from '../../../store/actions';
import axios from 'axios';
import Notfound from './notfound';
import {COLORS, FONTS} from '../../Assets/Theme';
import {ImageSlider} from 'react-native-image-slider-banner';

const Students = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const handleLogOut = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };
  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 5,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: COLORS.layout,
          width: '100%',
        }}>
        <TextHeader title={'Student Portal System'} />
      </View>
      <ScrollView>
        {!user ? (
          <>
            <Text>loading.....</Text>
          </>
        ) : (
          <>
            <View
              style={{
                paddingTop: 20,
              }}>
              <ImageSlider
                data={[
                  {
                    img: 'https://media.gettyimages.com/id/1059546642/vector/e-learning.jpg?s=612x612&w=0&k=20&c=r9vGsIBsml-8a49NATvd8W4mS5gJ1J5IQU9Ty95X3CE=',
                  },
                  {
                    img: 'https://media.gettyimages.com/id/1136822845/vector/vector-set-of-design-templates-and-elements-for-online-education-in-trendy-linear-style.jpg?s=612x612&w=0&k=20&c=47nBZlcEafMWT3_lZdZAcxkfafmK80cAhrBcBiSAQDA=',
                  },
                  {
                    img: 'https://media.gettyimages.com/id/1341159990/vector/online-education-related-vector-banner-design-concept-modern-line-style-with-icons.jpg?s=612x612&w=0&k=20&c=Q3REyIi0P7R251PqkrwzeAyD4DkZqT7CnK--DCcPNoE=',
                  },
                ]}
                autoPlay={false}
                onItemChanged={item => item}
                closeIconColor="#fff"
              />
            </View>
            <View
              style={{
                paddingHorizontal: 20,
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
                paddingBottom: 20,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Student')}>
                <Card
                  title="Profile"
                  img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
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
                  img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Notifications')}>
                <Card
                  title="Announcements"
                  img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('StudentSupport')}>
                <Card
                  title="Student Support"
                  img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Calculator')}>
                <Card
                  title="Calculator"
                  img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Lectures')}>
                <Card
                  title="lectures"
                  img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogOut}>
                <Card
                  title="LogOut"
                  img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
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
