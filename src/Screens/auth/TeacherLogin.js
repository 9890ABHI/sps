import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout, teacherlogin} from '../../../store/actions';
import {COLORS, FONTS} from '../../Assets/Theme';

const TeacherLogin = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);
  const [showPass, setShowPass] = useState(true);
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

  const handleLogin = async () => {
    if (formData.email === '' || formData.password === '') {
      Alert.alert('Enter Email and Password', 'Some values are empty');
    } else {
      try {
        const response = await dispatch(teacherlogin(formData));
        if (response === 'User dosent Exist' || user.error === undefined) {
          Alert.alert('User Not Found', 'Please check your email or password');
        } else {
          navigation.navigate('Home');
        }
      } catch (error) {
        console.error('Error during login:', error);
        Alert.alert('Login Failed', 'An error occurred during login');
      }
    }
  };
  const handleNotFound = error => {
    Alert.alert(error);
  };
  return (
    <>
      <View
        style={{
          height: '100%',
        }}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '45%',
            backgroundColor: COLORS.green,
            top: 0,
            left: 0,
            right: 0,
            zIndex: 0,
            alignItems: 'center',
            paddingTop: 30,
          }}>
          <Text
            style={{
              ...FONTS.largeTitle,
              fontWeight: 900,
              color: COLORS.white,
              fontSize: 100,
            }}>
            SPS
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              paddingVertical: 20,
              borderRadius: 20,
              paddingTop: 20,
            }}>
            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 40,
                paddingBottom: 20,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 700,
                  color: COLORS.Primary,
                }}>
                Teacher
              </Text>
              <View style={{flexDirection: 'row', gap: 10}}>
                <View
                  style={{
                    borderBottomColor: COLORS.Primary,
                    borderBottomWidth: 1,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 700,
                      color: COLORS.Primary,
                    }}>
                    Login
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: COLORS.Primary1,
                  }}
                  onPress={() => navigation.navigate('TeacherRegister')}>
                  Register
                </Text>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 40,
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
                  color: COLORS.black,
                }}
                placeholderTextColor={COLORS.gray}
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
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 10,
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  borderColor: 'gray',
                }}>
                <TextInput
                  style={{
                    paddingVertical: 10,
                    color: COLORS.black,
                    width: 'auto',
                  }}
                  placeholder="*******"
                  placeholderTextColor={COLORS.gray}
                  onChangeText={text => handleInputChange('password', text)}
                  value={formData.password}
                  secureTextEntry={showPass}
                />
                <TouchableOpacity onPress={() => setShowPass(!showPass)}>
                  <Image
                    source={{
                      uri: showPass
                        ? 'https://img.icons8.com/?size=30&id=60022&format=png'
                        : 'https://image.shutterstock.com/image-vector/closed-eye-vector-icon-web-260nw-354263150.jpg',
                    }}
                    alt=""
                    style={{
                      width: '20%',
                      height: 20,
                      borderRadius: 25,
                    }}
                  />
                </TouchableOpacity>
              </View>
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
                <Text
                  style={{
                    color: COLORS.gray,
                  }}>
                  Don't Have Account
                </Text>
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
                <Text
                  style={{
                    color: COLORS.gray,
                  }}>
                  Student Login
                </Text>
                <Text
                  style={{
                    color: 'blue',
                  }}
                  onPress={() => navigation.navigate('Login')}>
                  Login
                </Text>
              </View>
              {/* submit */}
              {/*  */}
              <View
                style={{
                  paddingTop: 30,
                  width: '95%',
                  // borderRadius: 10,
                  // overflow: 'hidden',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <Text
                  style={{
                    color: COLORS.black,
                    ...FONTS.h2,
                    fontSize: 25,
                  }}>
                  Login
                </Text>

                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: COLORS.green,
                    paddingVertical: 20,
                    borderRadius: 100,
                    paddingHorizontal: 30,
                  }}
                  onPress={handleLogin}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.freepik.com/256/545/545682.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                    }}
                    alt=""
                    style={{
                      width: 35,
                      height: 35,
                      // borderRadius: 25,
                      tintColor: COLORS.white,
                    }}
                  />
                </TouchableOpacity>
              </View>
              {/*  */}
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default TeacherLogin;

const styles = StyleSheet.create({});
