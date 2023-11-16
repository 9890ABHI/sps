import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from '../../Components/Card'
import Header from '../../Components/Header'

const Home = ({navigation}) => {
  
  return (
    <View>
      {/* <Header title="HOME"  /> */}
        {/* <View>

      <Text>Home</Text> 
        </View> */}
        <View>
          
            {/* Search */}
        </View>
        <View style={{
          display:'flex',
          flexWrap:'wrap',
          flexDirection:'row',
          width:'100%',
          height:'100%',
          justifyContent:'center',
          alignItems:"center",
          // backgroundColor:"#000",
          gap:10,
          paddingTop:20
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Student')}>

          <Card title="Student" img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg"  />
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('Course')}>
          <Card title="Course" img="https://img.freepik.com/free-vector/professor-concept-illustration_114360-3767.jpg" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
          <Card title="TimeTable" img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Metting')}>
          <Card title="Metting" img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate('UpdateEmail')}>
          <Card title="update Email" img="https://img.freepik.com/free-vector/diary-concept-illustration_114360-3755.jpg?size=626&ext=jpg" />
          </TouchableOpacity>
          {/* {
            HomeData.map((item , id) => (
              <>
              <Card item={item} key={id} navigation={navigation}/>
              </>
            ))
          } */}
          
        </View>
      
    </View>
  )
}

export default Home