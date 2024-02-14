import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import Card from '../Card';
import {TextHeader} from '../Header';
import {useDispatch, useSelector} from 'react-redux';
import {BASEURL, loginSuccess, logout} from '../../../store/actions';
import axios from 'axios';

const Students = ({navigation}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.auth.user);
  // useEffect(() => {
  //   const fetchStudentDetails = async () => {
  //     try {
  //       const response = await axios.get(BASEURL + `api/student/${user.email}`);
  //       console.log('Student', response.data);
  //       setData(response.data);
  //       setLoading(false);
  //       dispatch(loginSuccess(response.data));
  //     } catch (error) {
  //       console.log('Error fetching Student details:', error.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchStudentDetails();
  // }, []);
  const handleLogOut = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: 20,
        }}>
        <TextHeader title={'Student Portal System'} />
      </View>
      {loading ? (
        <>
          <Text>loading.....</Text>
        </>
      ) : (
        <>
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

            <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
              <Card
                title="TimeTable"
                img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}>
              <Card
                title="Announcements and Notifications"
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

            <TouchableOpacity onPress={() => navigation.navigate('Calculator')}>
              <Card
                title="Calculator"
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
  );
};

export default Students;
