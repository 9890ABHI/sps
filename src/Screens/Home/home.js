import React from 'react';
import {useSelector} from 'react-redux';
import Students from '../../Components/homeScreens/Students';
import Teacher from '../../Components/homeScreens/Teacher';
import {View} from 'react-native';
import LoadingScreen from '../../Components/LoadingScreen';

export const Home = ({navigation}) => {
  const user = useSelector(state => state.auth);

  const stud = user.student;

  console.log('user', user);

  return (
    <>
      {user.isLoading ? (
        <>
          <LoadingScreen />
        </>
      ) : undefined}

      {stud ? <Students navigation={navigation} /> : null}

      {user.teacher ? <Teacher navigation={navigation} /> : null}
    </>
  );
};
