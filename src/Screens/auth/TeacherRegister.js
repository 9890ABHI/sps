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
import {COLORS} from '../../Assets/Theme';
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
      Alert.alert('values are mepty');

      // navigation.navigate("TeacherLogin")
    } else {
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
        <View></View>
        <View>
          <Text
            style={{
              fontSize: 25,
              paddingVertical: 20,
              fontWeight: 700,
            }}>
            Teacher Register
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
              paddingTop: 10,
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
          {/* submit */}
          <View
            style={{
              width: '55%',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <Button
              title={'Register'}
              color={COLORS.green}
              onPress={handleRegister}
            />
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
                color: '#000',
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
        </View>
      </View>
    </View>
  );
};

export default TeacherRegister;
