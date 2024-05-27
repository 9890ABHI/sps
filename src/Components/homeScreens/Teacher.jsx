import {View, Text, TouchableOpacity, ScrollView, Button} from 'react-native';
import React, {useEffect} from 'react';
import Card from '../Card';
import {TextHeader} from '../Header';
import {useDispatch, useSelector} from 'react-redux';
import {BASEURL, logout, teacherLoginSuccess} from '../../../store/actions';
import axios from 'axios';

const Teacher = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  // useEffect(() => {
  //   const fetchTeacherDetails = async () => {
  //     try {
  //       // const teacherEmail = teacher.email
  //       const response = await axios.get(`${BASEURL}api/teacher/${user.email}`);
  //       // const teacher = response.data; // Assuming your API returns the teacher ID
  //       // console.log('====================================');
  //       // console.log('teacher',teacher);
  //       // console.log('====================================');
  //       //  setTeacher(response.data)
  //       // You can dispatch an action to update the Redux state with teacher details or do anything else with the data
  //       dispatch(teacherLoginSuccess(response.data));
  //     } catch (error) {
  //       console.log('Error fetching teacher details:', error.message);
  //     }
  //   };
  //   fetchTeacherDetails();
  // }, []);
  const handleLogOut = () => {
    dispatch(logout());
    navigation.navigate('TeacherLogin');
  };
  return (
    <>
      {!user ? (
        <>
          <Text>loading....</Text>
        </>
      ) : (
        <>
          <ScrollView>
            <View
              style={{
                paddingHorizontal: 20,
              }}>
              <TextHeader title={'Teacher Portal System'} />
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
