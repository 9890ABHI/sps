import { View, Text, Image  } from 'react-native'
import React from 'react'

const Card = ({
    navigation , title ,img , link
}) => {
  return (
    

    <View style={{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        width:180,
        gap:20,
        backgroundColor:"#fff",
        borderRadius:20,
        paddingVertical:20
    }} 
    // key={item.id}
    
    > 
        <Image source={{uri : img}} style={{
            width:150, height:150,borderRadius:20
        }}/>
        <Text style={{fontSize:20 , paddingTop:10 , color:"#c90"}}>{title}</Text>
    </View>
  )
}

export default Card