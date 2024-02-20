import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../Assets/Theme';
import axios from 'axios';
import {BASEURL} from '../../../store/actions';

const TeacherRegister = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [showPass, setShowPass] = useState(true);
  const [showCode, setShowCode] = useState(true);

  const handleRegister = () => {
    if (name === '' || email === '' || mobile === '' || password === '') {
      Alert.alert('Inputs are empty', 'some values are empty');
    }

    if (name !== '' || email !== '' || mobile !== '' || password !== '') {
      const userData = {name: name, email, mobile, password, code};
      axios
        .post(BASEURL + 'registerteacher', userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status === 'ok') {
            Alert.alert('Registration Succesfull');
            navigation.navigate('TeacherLogin');
          }
        })
        .catch(() => Alert.alert('Registration unsuccesfull'));
      console.log('User data:', userData);
    }
  };
  return (
    <>
      <View
        style={{
          // display: 'flex',
          // justifyContent: 'end',
          // alignItems: 'center',
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
              width: '100%',
              backgroundColor: '#fff',
              display: 'flex',
              alignItems: 'center',
              paddingVertical: 20,
              borderRadius: 20,
              // paddingTop: 40,
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
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: COLORS.Primary1,
                  }}
                  onPress={() => navigation.navigate('TeacherLogin')}>
                  Sign in
                </Text>

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
                    Sign up
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                paddingHorizontal: 20,
                // paddingVertical: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}>
              <Text
                style={{
                  color: '#000',
                }}>
                Name
              </Text>
              <TextInput
                style={{
                  borderColor: 'gray',
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  color: '#000',
                }}
                placeholder="abc xyz"
                editable
                onChangeText={text => setName(text)}
                value={name}
              />
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
                  color: '#000',
                }}
                placeholder="abc@mail.com"
                editable
                onChangeText={text => setEmail(text)}
                value={email}
              />
              <Text
                style={{
                  color: '#000',
                }}>
                Mobile
              </Text>
              <TextInput
                style={{
                  borderColor: 'gray',
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                }}
                placeholder="00000 00000"
                editable
                onChangeText={text => setMobile(text)}
                value={mobile}
                keyboardType="phone-pad"
              />
              <Text
                style={{
                  color: '#000',
                }}>
                Code
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
                  }}
                  placeholder="****"
                  placeholderTextColor={COLORS.gray}
                  onChangeText={text => setCode(text)}
                  value={code}
                  secureTextEntry={showCode}
                />
                <TouchableOpacity onPress={() => setShowCode(!showCode)}>
                  <Image
                    source={{
                      uri: showCode
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

              <Text
                style={{
                  color: '#000',
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
                  }}
                  placeholder="*******"
                  placeholderTextColor={COLORS.gray}
                  onChangeText={text => setPassword(text)}
                  value={password}
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
                paddingTop: 10,
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
                  Have Teacher Account
                </Text>
                <Text
                  style={{
                    color: 'blue',
                  }}
                  onPress={() => navigation.navigate('TeacherLogin')}>
                  Login
                </Text>
              </View>
              {/* submit */}
              {/* <View
                style={{
                  width: '55%',
                  borderRadius: 10,
                  overflow: 'hidden',
                }}>
                <Button
                  title={'Register'}
                  color={COLORS.green}
                  
                />
              </View> */}
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
                  Sign up
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
                  onPress={handleRegister}>
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

export default TeacherRegister;
