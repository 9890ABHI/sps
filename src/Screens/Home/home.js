import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Students from '../../Components/homeScreens/Students';
import Teacher from '../../Components/homeScreens/Teacher';
import {View} from 'react-native';
import LoadingScreen from '../../Components/LoadingScreen';
import {COLORS} from '../../Assets/Theme';
import {PopUp} from '../../Components/popup';

export const Home = ({navigation}) => {
  const user = useSelector(state => state.auth);
  const [modalVisible, setModalVisible] = useState(false);
  const stud = user.student;
  console.log('user', user);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <View style={{backgroundColor: COLORS.layout}}>
        {user.isLoading && <LoadingScreen navigation={navigation} />}

        {user.error !== 'undefined' && (
          <>
            {stud && <Students navigation={navigation} />}
            {user.teacher && <Teacher navigation={navigation} />}
          </>
        )}
      </View>
      <View>
        <PopUp
          navigation={navigation}
          modalVisible={modalVisible}
          toggleModal={toggleModal}
        />
      </View>
    </>
  );
};
