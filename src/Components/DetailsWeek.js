import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {BASEURL} from '../../store/actions';
import {COLORS, FONTS} from '../Assets/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Hrline from './Hrline';

const DetailsWeek = ({
  route,
  navigation,
  course,
  refresh,
  setRefresh,
  setOpen,
}) => {
  console.log('course', course);
  //   const {courseId} = route.params;
  const AddCourseDetails = async () => {
    await axios
      .put(BASEURL + `api/course/${course._id}/week`, weeks)
      .then(() => {
        console.log('info added succefully');
        setWeeks([
          {
            weekNumber: 1,
            information: [{info: ''}],
          },
        ]);
      })
      .catch(() => console.log('error in info added unsucceful '));

    setRefresh(prevRefresh => !prevRefresh);
    setOpen(prevRefresh => !prevRefresh);
  };

  const [weeks, setWeeks] = useState(
    course.weeks.length <= 0
      ? [
          {
            weekNumber: 1,
            information: [{info: ''}],
          },
        ]
      : course.weeks,
  );

  const handleTextChange = (weekIndex, infoIndex, newText) => {
    const updatedWeeks = [...weeks];
    updatedWeeks[weekIndex].information[infoIndex].info = newText;
    setWeeks(updatedWeeks);
  };

  const addWeek = () => {
    const newWeek = {
      weekNumber: weeks.length + 1,
      information: [{info: ''}],
    };
    setWeeks([...weeks, newWeek]);
  };

  const removeWeek = weekIndex => {
    const updatedWeeks = weeks.filter((_, index) => index !== weekIndex);
    setWeeks(updatedWeeks);
  };

  const removeinfo = (weekIndex, infoindex) => {
    const updatedinfo = weeks.filter((_, index) => index === weekIndex);
    const updatedWeeks = weeks.filter((_, index) => index !== weekIndex);
    const newvalue = updatedinfo[0].information.filter(
      (_, index) => index !== infoindex,
    );
    setWeeks([
      {weekNumber: weekIndex + 1, information: newvalue},
      ...updatedWeeks,
    ]);
  };
  const addinfo = weekIndex => {
    const update = weeks.filter((_, index) => index === weekIndex)[0];
    const updatedWeeks = weeks.filter((_, index) => index !== weekIndex);
    const getvalues = {
      weekNumber: update.weekNumber,
      information: [...update.information, {info: ''}],
    };
    console.log('update', getvalues);
    setWeeks([getvalues, ...updatedWeeks]);
  };
  return (
    <>
      <ScrollView>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            {/* */}
            <TouchableOpacity onPress={() => setOpen(prev => !prev)}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.freepik.com/128/1828/1828665.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                }}
                alt=""
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 0,
                  tintColor: COLORS.gray,
                  // transform: 'rotate(45deg)',
                }}
              />
            </TouchableOpacity>
            {/*  */}
            <TouchableOpacity
              style={{
                paddingHorizontal: 10,
                backgroundColor: COLORS.green,
                borderRadius: 10,
                paddingVertical: 5,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
              onPress={addWeek}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.freepik.com/128/1828/1828665.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                }}
                alt=""
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 0,
                  tintColor: COLORS.white,
                  transform: 'rotate(45deg)',
                }}
              />
              <Text
                style={{
                  ...FONTS.h3,
                  color: COLORS.white,
                  textTransform: 'capitalize',
                }}>
                Add Week
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 20,
            }}>
            {weeks
              .sort((a, b) => a.weekNumber - b.weekNumber)
              .map((week, weekIndex) => (
                <View key={weekIndex} style={styles.weekContainer}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={styles.weekText}>Week {week.weekNumber}</Text>
                    <TouchableOpacity
                      onPress={() => removeWeek(weekIndex)}
                      style={styles.removeButton}>
                      <Text
                        style={{
                          ...FONTS.body4,
                          color: '#cd5c5c',
                        }}>
                        Remove Week
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {week.information.map((item, infoIndex) => (
                    <>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          gap: 10,
                        }}>
                        <TextInput
                          key={infoIndex}
                          style={styles.input}
                          placeholder={`Info ${infoIndex + 1}`}
                          value={item.info}
                          onChangeText={text =>
                            handleTextChange(weekIndex, infoIndex, text)
                          }
                        />
                        <TouchableOpacity
                          onPress={() => removeinfo(weekIndex, infoIndex)}
                          style={styles.removeButton}>
                          <Icon name={'delete'} size={30} color={'#cd5c5c'} />
                          {/* <Image
                            source={{
                              uri: 'https://cdn-icons-png.freepik.com/128/1828/1828665.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                            }}
                            alt=""
                            style={{
                              width: 15,
                              height: 15,
                              borderRadius: 0,
                              // tintColor: COLORS.red,
                              // transform: 'rotate(45deg)',
                            }}
                          /> */}
                        </TouchableOpacity>
                      </View>
                    </>
                  ))}
                  <TouchableOpacity
                    onPress={() => addinfo(weekIndex)}
                    style={{
                      // width: '100%',
                      // display: 'flex',
                      // justifyContent: 'center',
                      // alignItems: 'center',
                      // flexDirection: 'row',
                      // gap: 10,
                      // paddingTop: 10,
                      paddingHorizontal: 10,
                      backgroundColor: COLORS.green,
                      borderRadius: 10,
                      paddingVertical: 5,
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                    }}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.freepik.com/128/1237/1237946.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                      }}
                      alt=""
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: 0,
                        tintColor: COLORS.layout,
                        // transform: 'rotate(45deg)',
                      }}
                    />
                    <Text
                      style={{
                        ...FONTS.h2,
                        color: COLORS.layout,
                      }}>
                      add info
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => AddCourseDetails()}
        style={{
          padding: 10,
          backgroundColor: COLORS.green,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // width: '100%',
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}>
        <Text style={{...FONTS.h2, color: COLORS.white}}>Update Course</Text>
      </TouchableOpacity>
    </>
  );
};

export default DetailsWeek;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  weekContainer: {
    marginBottom: 5,
    backgroundColor: COLORS.layout,
    padding: 10,
    borderRadius: 10,
  },
  weekText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: COLORS.black,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    padding: 8,
    flex: 1,
    borderRadius: 10,
    color: COLORS.black,
  },
});
