import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, teacherlogin} from '../../../store/actions';
import {COLORS} from '../../Assets/Theme';

const TeacherLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  // console.log('==== User Auth === null or not ====');
  // console.log(user);
  // console.log('====================================');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    console.log('====================================');
    console.log(formData);
    console.log('====================================');
    dispatch(teacherlogin(formData));
    // if ( user !== null ) {
    navigation.navigate('Home');
    // }else{
    //     Alert.alert('login error')
    //     dispatch(logout())
    // }
  };
  return (
    <>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            width: '100%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            paddingVertical: 20,
            borderRadius: 20,
            paddingTop: 40,
          }}>
          <View>
            {/* image */}
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1634828664.1699686714&semt=sph',
              }}
              // source={{ uri :"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1634828664.1699686714&semt=sph"}}
              alt=""
              style={{
                width: 100,
                height: 100,
                borderRadius: 25,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 25,
                paddingVertical: 20,
                fontWeight: 700,
              }}>
              TEACHER LOGIN
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
              paddingVertical: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}>
            {/* Login */}
            <Text
              style={{
                color: '#000',
              }}>
              Email
            </Text>
            <TextInput
              style={{
                borderColor: 'gray',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="abc@mail.com"
              editable
              onChangeText={text => handleInputChange('email', text)}
              value={formData.email}
            />
            <Text
              style={{
                color: '#000',
                paddingTop: 10,
              }}>
              Password
            </Text>
            <TextInput
              style={{
                borderColor: 'gray',
                width: '100%',
                borderWidth: 1,
                borderRadius: 10,
                padding: 10,
              }}
              placeholder="*******"
              secureTextEntry
              onChangeText={text => handleInputChange('password', text)}
              value={formData.password}
            />
          </View>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                paddingBottom: 10,
              }}>
              <Text>Don't Have Account</Text>
              <Text
                style={{
                  color: 'blue',
                }}
                onPress={() => navigation.navigate('TeacherRegister')}>
                Create One
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                paddingBottom: 10,
              }}>
              <Text>Student Login</Text>
              <Text
                style={{
                  color: 'blue',
                }}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </View>
            {/* submit */}
            <View
              style={{
                width: '55%',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
              <Button
                title={'Login'}
                color={COLORS.green}
                onPress={handleLogin}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TeacherLogin;

const styles = StyleSheet.create({});
