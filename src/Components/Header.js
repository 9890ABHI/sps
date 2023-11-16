import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({navigation , title}) => {
  return (
    <View style={{
        width:'100%',
        paddingVertical:30,
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:"center",
        backgroundColor:"gray",
        paddingHorizontal:20
    }}>
        {/* <TouchableOpacity>
            <Text>
               Back
            </Text>
        </TouchableOpacity> */}
        <Text style={{
        fontSize:25, fontWeight:700
      }}>
            SPS
        </Text>
        
      <Text style={{
        fontSize:25, fontWeight:700
      }}>{title}</Text>
      <View style={{
        width:'10%'
      }}>

      </View>
    </View>
  )
}

export default Header