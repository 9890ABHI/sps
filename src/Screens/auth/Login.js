import { StyleSheet, Text, View , Image , TextInput, Button } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
  return (
   <>
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
            <Image source={{ uri :"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1634828664.1699686714&semt=sph"}}
            alt=''
            style={{
                width:100,
                height:100,
                borderRadius:25,

            }}
            />
        </View>
        <View>
            <Text style={{
                fontSize:25,
                paddingVertical:20
                ,fontWeight:700
            }}>LOGIN</Text>
        </View>
        <View style={{
            width:"100%",
            paddingHorizontal:20,
            paddingVertical:20,
            display:'flex',
            flexDirection:'column',
            gap:10
        }}>
            {/* Login */}
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
      />
        </View>
        <View style={{
            width:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
        }}>
            <View style={{
                display:'flex',
                flexDirection:'row',
                gap:10,
                paddingBottom:10
            }}>
                <Text>
                    Don't Have Account
                </Text>
                    <Text style={{
                        color:'blue',
                        
                    }}
                    onPress={() => navigation.navigate('SignUp')}
                    >

                     Create One
                    </Text>
            </View>
            {/* submit */}
            <View style={{
                width:"55%",
                borderRadius:10,
                overflow:'hidden'
            }}>

            <Button  title={'Login'} color={'#c90f90'} onPress={() => navigation.navigate('Home')} />
            </View>
        </View>
    </View>
   </View>
   </>
  )
}

export default Login

const styles = StyleSheet.create({})