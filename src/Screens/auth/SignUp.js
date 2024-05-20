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

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(true);

  const handleRegister = () => {
    const userData = {name: name, email, mobile, password};
    if (name === '' || email === '' || mobile === '' || password === '') {
      Alert.alert('Inputs are empty', 'some values are empty');
    }

    if (name !== '' || email !== '' || mobile !== '' || password !== '') {
      axios
        .post(BASEURL + 'register', userData)
        .then(res => {
          console.log(res.data);
          if (res.data.status === 'ok') {
            Alert.alert('Registration Succesfull');
            navigation.navigate('Login');
          }
        })
        .catch(e => Alert.alert('Registration unsuccesfull'));
    }
  };
  return (
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
          paddingTop: 10,
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
        {/* <Image
        source={{
          uri: 'https://img.freepik.com/premium-vector/3d-simple-user-icon-isolated_169241-7120.jpg?w=740',
        }}
        alt=""
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          // backgroundColor: COLORS.transparent,
          // tintColor: COLORS.gray,
        }}
      /> */}
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
            paddingTop: 20,
          }}>
          <View>
            {/* image */}
            {/* <Image source={{ uri :"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1634828664.1699686714&semt=sph"}}
                alt=''
                style={{
                    width:100,
                    height:100,
                    borderRadius:25,
    
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
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: COLORS.Primary1,
                }}
                onPress={() => navigation.navigate('Login')}>
                Login
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
                  Register
                </Text>
              </View>
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
            {/* Register */}
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
              }}
              placeholderTextColor={COLORS.gray}
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
              }}
              placeholder="abc@mail.com"
              placeholderTextColor={COLORS.gray}
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
              placeholderTextColor={COLORS.gray}
              editable
              onChangeText={text => setMobile(text)}
              value={mobile}
              keyboardType="phone-pad"
            />
            <Text
              style={{
                color: '#000',
                // paddingTop: 10,
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
                Have Account
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text
                  style={{
                    color: 'blue',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            {/* submit */}
            {/*  */}
            <View
              style={{
                paddingTop: 20,
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
                Register
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
              {/* <Button title={''} color={'#c90f90'} onPress={handleLogin} /> */}
            </View>
            {/*  */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
