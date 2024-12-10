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
import {login, logout} from '../../../store/actions';
import {COLORS, FONTS} from '../../Assets/Theme';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const User = useSelector(state => state.auth);
  const [showPass, setShowPass] = useState(true);
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
    if (!formData.email || !formData.password) {
      Alert.alert('Enter Email and Password', 'Some values are empty');
      return;
    }

    try {
      const response = await dispatch(login(formData));
      console.log('====================================');
      console.log(response.status);
      console.log('====================================');
      if (response.status !== 201) {
        // if (response.data === 'User dosent Exist' || 'null') {
        Alert.alert('User Not Found', 'Please check your email or password');
      } else {
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('Login Failed', 'An error occurred during login');
    }
  };

  // ----------------------
  const handleNotFound = error => {
    Alert.alert(error);
  };
  return (
    <>
      <>
        <View
          style={{
            height: '100%',
          }}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: '40%',
              backgroundColor: COLORS.green,
              top: 0,
              left: 0,
              right: 0,
              zIndex: 0,
              // justifyContent: 'center',
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
              // display: 'flex',
              paddingHorizontal: 10,
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              // paddingBottom: 90,
            }}>
            <View
              style={{
                // height: '100%',
                width: '100%',
                backgroundColor: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 20,
                borderRadius: 20,
                // marginHorizontal: 10,
                zIndex: 1,
                // paddingTop: 40,
              }}>
              <View>
                {/* image */}
                {/* <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1634828664.1699686714&semt=sph',
              }}
              alt=""
              style={{
                width: 100,
                height: 100,
                borderRadius: 25,
              }}
            /> */}
              </View>
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
                  Student
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
                    onPress={() => navigation.navigate('SignUp')}>
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
                  placeholder="abc@mail.com"
                  placeholderTextColor={COLORS.gray}
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
                      width: '80%',
                      color: COLORS.black,
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
                        width: 20,
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
                    paddingVertical: 10,
                  }}>
                  <Text
                    style={{
                      color: COLORS.gray,
                    }}>
                    Don't Have Account
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}>
                    <Text
                      style={{
                        color: 'blue',
                      }}>
                      Create One
                    </Text>
                  </TouchableOpacity>
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
                    Teacher Login
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('TeacherLogin')}>
                    <Text
                      style={{
                        color: 'blue',
                      }}>
                      Login
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* submit */}
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
                  {/* <Button title={''} color={'#c90f90'} onPress={handleLogin} /> */}
                </View>
              </View>
            </View>
          </View>
        </View>
      </>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
