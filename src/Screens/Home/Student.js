import { View, Text , FlatList ,Button  } from 'react-native'
import React from 'react'
import { CourseData, TimeTableData } from '../../Constants/Data'

export const Student = ({navigation}) => {
  return (
    <View>
      <Text>Student</Text>
    </View>
  )
}

export const Course = ({navigation}) => {
  return(
    <>
    
    <View style={{
      paddingHorizontal:20,
      paddingVertical:10
    }}>
      <Text style={{
        fontSize:25
      }}>
        Course listing
      </Text>
<View style={{
  paddingVertical:15
}} />
      <FlatList
      data={CourseData}
      renderItem={({item}) => (
        <>
        <View style={{
          paddingVertical:10,
          borderBottomColor:"#000",
          borderBottomWidth:0.5
        }}>

       
        <View style={{
          display:'flex',
          flexDirection:"row",
          justifyContent:'space-between'
        }}>
          <Text style={{
            width:'3%', fontSize:20 , color:"#000"
          }}>
            {item.id} 
          </Text>
          <Text style={{
            width:'50%', fontSize:15, textAlign:"left", color:"#000"
          }}>
            {item.courseTitle} 
          </Text>
          <Text style={{
            width:'20%', fontSize:20, color:"#000"
          }}>
            {item.courseNumber}
          </Text>
          <View style={{
            width:'15%',
            display:'flex',
            // flexDirection:'row',
            alignItems:"center",
            gap:3
          }}>
            <View style={{
              width:20,
              height:20,
              backgroundColor:item.status ? 'green' : "gray",
              borderRadius:50
            }} />

          <Text style={{
            fontSize:10
          }}>
            {item.status ? "Active" : "Inactive"}

          </Text>
            </View>

        </View>
        </View>
        </>
      )}
      
      />
      
    </View>
    <View style={{
      position:'absolute',
      bottom:0,
      width:'100%',

    }}>

      <Button title='Apply to course' color={""} />
    </View>
      </>
  )
}

export const TimeTable = ({navigation}) => {
  return(
    <>
    <View style={{
       paddingHorizontal:20,
       paddingVertical:10
    }}>
      <Text style={{
        fontSize:25
      }}>
        TimeTable / Shedule
      </Text>
    </View>
    <View style={{
      paddingVertical:10
    }} />
    <FlatList
    data={TimeTableData}
    renderItem={({item}) => (
      <>
<View style={
  {
    display:'flex',
    flexDirection:'row',
    paddingVertical:15,
    justifyContent:'center',
    alignItems:"center",
    borderBottomColor:"#000",
    borderBottomWidth:0.5,
    paddingHorizontal:10
  }
}>
  <Text style={{
    width:'25%', fontSize:18
  }}>
    {item.title}
  </Text>
  <Text style={{
    width:'25%', fontSize:15, color:'#000'
  }}>
    {item.firstPeriod}
  </Text>
  <Text style={{
    width:'25%', fontSize:15, color:'#000'
  }}>
    {item.secondPeriod}
  </Text>
  <Text style={{
    width:'25%', fontSize:15, color:'#000'
  }}>
    {item.thirdPeriod}
  </Text>

</View>
      </>
    )}
    
    />
<View>
  <Button title='Attendance' color={''} />
</View>
    </>
  )
}

export const Metting = ({navigation}) => {
  return(
    <View>
      <Text>Metting</Text>
    </View>
  )
}

export const UpdateEmail = ({navigation}) => {
  return(
    <View>
      <Text>Metting</Text>
    </View>
  )
}