import React from 'react';
import {useSelector} from 'react-redux';
import Students from '../../Components/homeScreens/Students';
import Teacher from '../../Components/homeScreens/Teacher';

export const Home = ({navigation}) => {
  const user = useSelector(state => state.auth);

  const stud = user.student;

  console.log('user', user);

  return (
    <>
      {stud ? (
        <Students navigation={navigation} />
      ) : (
        <Teacher navigation={navigation} />
      )}
    </>
  );
};
