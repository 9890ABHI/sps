import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import {
  Calculator,
  Course,
  Notifications,
  Student,
  StudentSupport,
  TimeTable,
} from './Home/Student';
import {useSelector} from 'react-redux';
import TeacherLogin from './auth/TeacherLogin';
import TeacherRegister from './auth/TeacherRegister';
import {Home} from './Home/home';
import {
  AttendanceScreen,
  ClassMangement,
  CourseDetails,
  CreateCourseScreen,
  CreateNotifications,
  Teacher,
} from './Home/Teacher';
import DetailsWeek from '../Components/DetailsWeek';
import LoadingScreen from '../Components/LoadingScreen';

const Index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName="LoadingScreen" headerMode="none">
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TeacherLogin"
          component={TeacherLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TeacherRegister"
          component={TeacherRegister}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="TimeTable" component={TimeTable} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Notification" component={CreateNotifications} />
        <Stack.Screen name="Teacher" component={Teacher} />
        <Stack.Screen name="ClassMangement" component={ClassMangement} />
        <Stack.Screen
          name="CreateCourseScreen"
          component={CreateCourseScreen}
        />
        <Stack.Screen name="Attendance" component={AttendanceScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="DetailsCourse" component={DetailsWeek} />
        <Stack.Screen name="StudentSupport" component={StudentSupport} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </>
  );
};

export default Index;
