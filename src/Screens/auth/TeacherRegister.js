import { View, Text , Image,Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../Assets/Theme';
import axios from 'axios';

const TeacherRegister = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    

      const handleRegister = () => {
        if (name === "" || email === '' || mobile === "" || password===''){
            Alert.alert('values are mepty')
            
            // navigation.navigate("TeacherLogin")
        }else{

            const userData = { name: name, email, mobile, password, code };
            axios.post('http://192.168.0.197:3001/registerteacher', userData 
        // , {
            //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }
        )
        .then((res) => {console.log(res.data)
            if (res.data.status === 'ok'){
                Alert.alert('Registration Succesfull')
                navigation.navigate("TeacherLogin")
            }else{
                Alert.alert(JSON.stringify(res.data))
            }
        })
        .catch(e => console.log(e))
        // Perform user registration logic here using userData state
        console.log('User data:', userData);
        // Add your registration logic here (e.g., API calls, validation, etc.)
    }
    };
  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        height:'100%',
        paddingHorizontal:20
       }}>
        <View style={{
            width:'100%',
            backgroundColor:'#fff',
            display:'flex',
            alignItems:'center',
            paddingVertical:20,
            borderRadius:20,paddingTop:40
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
            <View>
            <Text style={{
                fontSize:25,
                paddingVertical:20
                ,fontWeight:700
            }}>Teacher Register</Text>
        </View>
        <View style={{
            width:"100%",
            paddingHorizontal:20,
            paddingVertical:20,
            display:'flex',
            flexDirection:'column',
            gap:10
        }}>
            {/* Register */}
            <Text style={{
                color:'#000'
            }}>
                Name
            </Text>
            <TextInput
        style={{borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10, }}
        placeholder='abc xyz'
        editable
        onChangeText={(text) => setName(text)}        
        value={name}
      />
            <Text style={{
                color:'#000'
            }}>
                Email
            </Text>
            <TextInput
        style={{borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10, }}
        placeholder='abc@mail.com'
        editable
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
            <Text style={{
                color:'#000'
            }}>
                Mobile
            </Text>
            <TextInput
        style={{borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10, }}
        placeholder='00000 00000'
        editable
        onChangeText={(text) => setMobile(text)}
        value={mobile}
        keyboardType='phone-pad'
      />
       <Text style={{
                color:'#000',
                paddingTop:10
            }}>
                Code
            </Text>
                  <TextInput
        style={{ borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}
        placeholder='****'
        onChangeText={(text) => setCode(text)}
        value={code}
      />
       <Text style={{
                color:'#000',
                paddingTop:10
            }}>
                Password
            </Text>
                  <TextInput
        style={{ borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,}}
        placeholder='*******'
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
        </View>
        <View style={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            {/* submit */}
            <View style={{
                width:"55%",
                borderRadius:10,
                overflow:'hidden'
            }}>

            <Button  title={'Register'} 
            color={COLORS.green} 
            onPress={handleRegister} />
            </View>
                <View style={{
                    display:'flex',
                    flexDirection:'row',
                    gap:10,
                    paddingBottom:10
                }}>
                    <Text>
                        Have Teacher Account
                    </Text>
                        <Text style={{
                            color:'blue',
                            
                        }}
                        onPress={() => navigation.navigate('TeacherLogin')}
                        >
                         Login
                        </Text>
                </View>
            </View>
            </View>
    </View>
  )
}

export default TeacherRegister