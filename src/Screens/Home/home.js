import React from 'react';
import {useSelector} from 'react-redux';
import Students from '../../Components/homeScreens/Students';
import Teacher from '../../Components/homeScreens/Teacher';
import {View} from 'react-native';
import LoadingScreen from '../../Components/LoadingScreen';
import {COLORS} from '../../Assets/Theme';

export const Home = ({navigation}) => {
  const user = useSelector(state => state.auth);

  const stud = user.student;

  console.log('user', user);

  return (
    <>
      <View style={{backgroundColor: COLORS.layout}}>
        {user.isLoading && <LoadingScreen />}

        {user.error !== 'undefined' && (
          <>
            {stud && <Students navigation={navigation} />}
            {user.teacher && <Teacher navigation={navigation} />}
          </>
        )}
      </View>
    </>
  );
};
