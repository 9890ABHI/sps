import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Card from '../Card';
import {TextHeader} from '../Header';
import {useDispatch, useSelector} from 'react-redux';
import {BASEURL, loginSuccess, logout} from '../../../store/actions';
import axios from 'axios';
import Notfound from './notfound';

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
        }}>
        <TextHeader title={'Student Portal System'} />
      </View>

      {!user ? (
        <>
          <Text>loading.....</Text>
        </>
      ) : (
        <>
          <ScrollView>
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
                paddingVertical: 20,
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
          </ScrollView>
        </>
      )}
    </>
  );
};

export default Students;
