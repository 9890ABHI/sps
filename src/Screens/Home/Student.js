import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
  Image,
  Linking,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {TimeTableData} from '../../Constants/Data';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, FONTS} from '../../Assets/Theme';
import {TextHeader} from '../../Components/Header';
import axios from 'axios';
import {BASEURL} from '../../../store/actions';
import {CourseStudent} from '../../Components/Course';
export const Student = ({navigation}) => {
  const [edit, setEdit] = useState(false);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const [studentData, setStudentData] = useState({
    name: user.name,
    mobile: user.mobile,
    email: user.email,
  });

  const handleChange = (field, value) => {
    setStudentData({...studentData, [field]: value});
  };

  const updateStudentInformation = async () => {
    const StudentEmail = user.email; // Replace with the actual teacher's email
    const updatedData = {
      name: studentData.name,
      mobile: studentData.mobile,
      // email:studentData.email
    };

    try {
      const response = await axios.put(
        BASEURL + `api/student/${StudentEmail}`,
        // teacherData
        updatedData,
      );
      console.log('Student information updated:', response.data);
      // dispatch(teacherLoginSuccess(response.data));
      Alert.alert('Succefully Updated Information', 'Update Succefully');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating Student information:', error.message);
    }
  };

  return (
    <View>
      <View
        style={{
          paddingHorizontal: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextHeader title={'Profile'} />
        <TouchableOpacity onPress={() => setEdit(!edit)}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.green,
            }}>
            {edit ? 'close' : 'Edit'}
            {/* Edit  */}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View
          style={{
            padding: 20,
            display: 'flex',
            gap: 10,
          }}>
          <Text
            style={{
              color: '#000',
              ...FONTS.h3,
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
              ...FONTS.h3,
            }}
            // placeholder='abc xyz'
            editable={edit ? true : false}
            // onEndEditing={(text) => setName(text)}
            value={studentData.name}
            onChangeText={e => handleChange('name', e)}
          />
          <Text
            style={{
              color: '#000',
              ...FONTS.h3,
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
              ...FONTS.h3,
            }}
            // placeholder='
            editable={edit ? true : false}
            // onChangeText={(text) => setMobile(text)}
            // value={teacherDeatils?.mobile}
            value={studentData.mobile}
            onChangeText={e => handleChange('mobile', e)}
          />

          <Text
            style={{
              color: '#000',
              ...FONTS.h3,
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
              ...FONTS.h3,
            }}
            // placeholder='
            editable={false}
            // onChangeText={(text) => setMobile(text)}
            // value={teacherDeatils?.mobile}
            value={studentData.email}
            onChangeText={e => handleChange('mobile', e)}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={updateStudentInformation}
          style={{
            backgroundColor: edit ? COLORS.green : COLORS.gray3,
            paddingVertical: 10,
            paddingHorizontal: 25,
            borderRadius: 10,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: edit ? COLORS.white : COLORS.darkGray,
            }}>
            Save Deatils
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Course = ({navigation}) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(BASEURL + 'api/courses');
        // if (!response.ok) {
        //   throw new Error('Failed to fetch courses');
        // }
        // const data = await response.json();
        console.log('====================================');
        console.log('data', response.data);
        console.log('====================================');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const memoizedCourses = useMemo(() => data, [data]);

  return (
    <>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <View
            style={{
              paddingVertical: 15,
              display: 'flex',
              gap: 10,
            }}
          />
          <CourseStudent navigation={navigation} />

          <>
            <View
              style={{
                paddingBottom: 30,
                display: 'flex',
                gap: 20,
              }}>
              <Text style={{...FONTS.h2, color: COLORS.black}}>
                Courses Available :
                {loading ? (
                  <>
                    <ActivityIndicator
                      size="small"
                      color={COLORS.black}
                      animating={loading}
                    />
                  </>
                ) : (
                  <>
                    {' '}
                    {memoizedCourses?.length > 0 ? memoizedCourses.length : 0}
                  </>
                )}
              </Text>
              {loading ? (
                <>
                  <ActivityIndicator
                    size="large"
                    color={COLORS.green}
                    animating={loading}
                  />
                </>
              ) : (
                <>
                  {memoizedCourses?.length < 0 ? (
                    <>
                      {' '}
                      <View>
                        <Text>Courses Not Available.</Text>
                      </View>{' '}
                    </>
                  ) : (
                    memoizedCourses.map(course => (
                      <>
                        <TouchableOpacity
                          key={course.id}
                          onPress={() => {
                            navigation.navigate('CourseDetails', {
                              courseId: course._id,
                            });
                          }}>
                          <View
                            key={course.id}
                            style={{
                              padding: 20,
                              backgroundColor: COLORS.white,
                              borderRadius: 10,
                            }}>
                            <View
                              style={{
                                display: 'flex',
                              }}>
                              <Text
                                style={{
                                  textTransform: 'capitalize',
                                  ...FONTS.h2,
                                  color: COLORS.black,
                                }}>
                                Course Name : {course.courseName}
                              </Text>
                              <Text
                                style={{
                                  textTransform: 'capitalize',
                                  ...FONTS.h3,
                                  color: COLORS.black,
                                }}>
                                Duration: {course.duration} month
                              </Text>
                            </View>
                            <Text
                              style={{
                                paddingVertical: 10,
                                ...FONTS.body3,
                                color: COLORS.darkGray,
                              }}>
                              Teachers available : {course.subjects.length}
                            </Text>
                            {course.subjects.slice(0, 2).map(teach => (
                              <>
                                <View
                                  key={teach.id}
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                  }}>
                                  <Text
                                    style={{
                                      color: COLORS.black,
                                      textTransform: 'capitalize',
                                    }}>
                                    {teach.teacherId.name}
                                  </Text>
                                  <Text>{teach.subjectName}</Text>
                                </View>
                              </>
                            ))}
                            <View
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                // alignItems:'flex-end',
                                flexDirection: 'row',
                                paddingTop: 20,
                              }}>
                              <TouchableOpacity
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  gap: 10,
                                  justifyContent: 'center',
                                  width: '100%',

                                  backgroundColor: COLORS.Primary,
                                  padding: 10,
                                  borderRadius: 14,
                                }}
                                onPress={() =>
                                  navigation.navigate('CourseDetails', {
                                    courseId: course._id,
                                  })
                                }>
                                <Text
                                  style={{
                                    ...FONTS.h3,
                                    color: COLORS.white,
                                  }}>
                                  About course
                                </Text>
                                <Image
                                  source={{
                                    uri: 'https://cdn-icons-png.freepik.com/128/271/271228.png?ga=GA1.2.1634828664.1699686714&semt=ais',
                                  }}
                                  alt=""
                                  style={{
                                    width: 15,
                                    height: 15,
                                    borderRadius: 0,
                                    tintColor: COLORS.white,
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </>
                    ))
                  )}
                </>
              )}
            </View>
          </>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
          }}>
          {/* <Button title="Apply to course" color={''} /> */}
        </View>
      </ScrollView>
    </>
  );
};

export const TimeTable = ({navigation}) => {
  const user = useSelector(state => state.auth);
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  const [selected, setSelected] = React.useState('');
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  // const d = new Date();
  // let day = weekday[d.getDay()];
  const handleAttendance = () => {
    const date = new Date();
    Alert.alert(
      `Attendance for ${
        weekday[date.getDay()]
      } ${date.getDate()}  ${date.getFullYear()} 
      `,
    );
  };
  // console.log('====================================');
  // console.log(d.getFullYear(), d);
  // console.log('====================================');

  return (
    <>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            fontSize: 25,
          }}>
          TimeTable / Shedule
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 20,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          Regular
        </Text>
        {/* <Text
          style={{
            ...FONTS.h2,
            color: COLORS.black,
          }}>
          Exam
        </Text> */}
      </View>
      <View
        style={
          {
            // paddingVertical: 10,
          }
        }
      />
      <FlatList
        data={TimeTableData}
        renderItem={({item}) => (
          <>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#000',
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
                gap: 5,
              }}>
              <Text
                style={{
                  width: '25%',
                  fontSize: 18,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  width: '25%',
                  fontSize: 15,
                  color: '#000',
                }}>
                : {item.firstPeriod}
              </Text>
              <Text
                style={{
                  width: '25%',
                  fontSize: 15,
                  color: '#000',
                }}>
                {item.secondPeriod}
              </Text>
              <Text
                style={{
                  width: '25%',
                  fontSize: 15,
                  color: '#000',
                }}>
                {item.thirdPeriod}
              </Text>
            </View>
          </>
        )}
      />

      <View>
        <Button
          title="Attendance"
          color={COLORS.green}
          onPress={handleAttendance}
        />
      </View>
    </>
  );
};

export const Notifications = ({navigation}) => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = () => {
    axios
      .get(BASEURL + 'api/notifications')
      .then(response => {
        console.log('Notifications fetched successfully:', response.data);
        setNotifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  };
  return (
    <View
      style={{
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextHeader title={'Notification'} />
      </View>
      <>
        <View>
          {notifications.length === 0 ? (
            <>
              <View
                style={{
                  padding: 20,
                }}>
                <Text
                  style={{
                    ...FONTS.h3,
                    textTransform: 'uppercase',
                  }}>
                  their is no new notification....
                </Text>
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    ...FONTS.h3,
                    textTransform: 'uppercase',
                  }}>
                  Notification available : {notifications.length}
                </Text>
              </View>
            </>
          )}
          <FlatList
            data={notifications}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  padding: 14,
                  borderRadius: 8,
                  paddingHorizontal: 15,
                }}>
                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.black,
                  }}>
                  {item.text}
                </Text>
              </View>
            )}
          />
        </View>
      </>
    </View>
  );
};

export const StudentSupport = () => {
  const openHelpDesk = () => {
    Linking.openURL('mailto:helpdesk@example.com');
  };

  const openCounselingServices = () => {
    Linking.openURL('mailto:counseling@example.com');
  };

  return (
    <>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/customer-support-flat-design-illustration_23-2148889374.jpg?t=st=1705728191~exp=1705728791~hmac=08ebd051e5a2a05607d7415cbd041dcc91b4b3b23331ff1c0c24503f2d088ea0',
        }}
        style={{
          width: '100%',
          height: '50%',
          borderRadius: 20,
        }}
        resizeMode="cover"
      />
      <View
        style={{
          // flex: 1,
          paddingTop: 30,
          // justifyContent: 'center',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={openHelpDesk}
          style={{
            backgroundColor: COLORS.green,
            padding: 10,
            margin: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/128/13654/13654111.png?ga=GA1.1.1634828664.1699686714&semt=ais',
            }}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.white,
            }}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              ...FONTS.h2,
            }}>
            Contact Help Desk
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={openCounselingServices}
          style={{
            backgroundColor: COLORS.green,
            padding: 10,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 20,
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.freepik.com/128/13654/13654111.png?ga=GA1.1.1634828664.1699686714&semt=ais',
            }}
            style={{
              width: 25,
              height: 25,
              tintColor: COLORS.white,
            }}
            resizeMode="cover"
          />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              ...FONTS.h2,
            }}>
            Counseling Services
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const Calculator = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [grade, setGrade] = useState('');

  const addCourse = () => {
    if (courseName && grade) {
      setCourses([...courses, {courseName, grade}]);
      setCourseName('');
      setGrade('');
    }
  };

  const calculateGPA = () => {
    const totalCredits = courses.length;
    const totalGradePoints = courses.reduce((total, course) => {
      return total + getGradePoints(course.grade);
    }, 0);

    const gpa = totalGradePoints / totalCredits;
    alert(`Your GPA is: ${gpa.toFixed(2)}`);
  };

  const calculateCGPA = () => {
    const totalCredits = courses.length;
    const totalGradePoints = courses.reduce((total, course) => {
      return total + getGradePoints(course.grade);
    }, 0);

    const cgpa = (totalGradePoints / totalCredits) * 2.5;
    alert(`Your CGPA (out of 10) is: ${cgpa.toFixed(2)}`);
  };

  const getGradePoints = grade => {
    switch (grade.toUpperCase()) {
      case 'A':
        return 4;
      case 'B':
        return 3;
      case 'C':
        return 2;
      case 'D':
        return 1;
      default:
        return 0;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <TextHeader title={'Grade Calculator'} />
        {/* <Text style={styles.heading}>Grade Calculator</Text> */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Course Name"
            value={courseName}
            onChangeText={text => setCourseName(text)}
            placeholderTextColor={COLORS.gray}
          />
          <TextInput
            style={styles.input}
            placeholder="Grade (A, B, C, etc.)"
            value={grade}
            onChangeText={text => setGrade(text)}
          />
          <TouchableOpacity
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: COLORS.green,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 20,
              borderRadius: 10,
            }}
            onPress={addCourse}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.freepik.com/128/64/64580.png?ga=GA1.1.1634828664.1699686714&semt=ais',
              }}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.white,
              }}>
              Add Course
            </Text>
          </TouchableOpacity>
          {/* <Button title="Add Course" onPress={addCourse} color={COLORS.green} /> */}
        </View>
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          {courses.length > 0 && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  textTransform: 'uppercase',
                }}>
                No.
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  textTransform: 'uppercase',
                }}>
                Course name
              </Text>
              <Text
                style={{
                  ...FONTS.body3,
                  color: COLORS.black,
                  textTransform: 'uppercase',
                }}>
                Grades
              </Text>
            </View>
          )}
          <FlatList
            data={courses}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <View style={styles.courseItem}>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textTransform: 'uppercase',
                  }}>
                  {index + 1}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textTransform: 'uppercase',
                  }}>
                  {item.courseName}
                </Text>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    textTransform: 'uppercase',
                  }}>
                  {item.grade}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          gap: 2,
          flexDirection: 'row',
          // paddingHorizontal: 10,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{
            padding: 10,
            width: '48%',
            backgroundColor: COLORS.green,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 20,
            // gap: 20,
          }}
          onPress={calculateGPA}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}>
            Calculate GPA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            width: '48%',
            backgroundColor: COLORS.green,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 20,
            // gap: 20,
          }}
          onPress={calculateCGPA}>
          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.white,
            }}>
            Calculate CGPA
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export const Lectures = ({navigation}) => {
  const DataImage = [
    {
      id: 1,
      name: 'What is Big Data | Big Data in 2 Minutes | Introduction to Big Data | Big Data Training | Edureka',
      image_link: 'https://img.youtube.com/vi/UQeyU0YcPKY/maxresdefault.jpg',
      youtube_link: 'https://youtu.be/UQeyU0YcPKY?si=IgBrXFk-rH8JyRKw',
    },

    {
      id: 2,
      name: 'What is HPC ?',
      image_link: 'https://img.youtube.com/vi/Xou32Th2Eos/sddefault.jpg',
      youtube_link: 'https://youtu.be/Xou32Th2Eos?si=lfd68bTcdMimrhEw',
    },
    {
      id: 3,
      name: 'Cloud computing in 6 Minutes | Chat is Cloud Computing ?',
      image_link: 'https://img.youtube.com/vi/M988_fsOSWo/sddefault.jpg',
      youtube_link: 'https://youtu.be/M988_fsOSWo?si=lkvi9eZ6UvYuvDlQ',
    },
    {
      id: 4,
      name: 'What is HPC ?',
      image_link: 'https://img.youtube.com/vi/tGIobcyKViI/maxresdefault.jpg',
      youtube_link: 'https://youtube.com/watch?v=tGIobcyKViI',
    },
  ];
  return (
    <>
      <ScrollView>
        <View>
          <View
            style={{
              paddingLeft: 10,
            }}>
            <TextHeader title={'Lectures'} key={''} />
          </View>

          <View>
            <FlatList
              data={DataImage}
              style={{
                gap: 20,
                paddingBottom: 20,
              }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      backgroundColor: COLORS.white,
                      borderRadius: 20,
                    }}
                    onPress={() => Linking.openURL(item.youtube_link)}>
                    <View
                      style={{
                        padding: 0,
                        height: 200,
                        position: 'relative',
                      }}>
                      <Image
                        source={{
                          uri: item.image_link,
                        }}
                        alt=""
                        style={{
                          // width: 3,
                          height: '100%',
                          borderRadius: 14,
                          objectFit: 'contain',

                          // tintColor: COLORS.white,
                          // transform: 'rotate(45deg)',
                        }}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{
                            uri: 'https://cdn-icons-png.freepik.com/256/7826/7826802.png?ga=GA1.2.1634828664.1699686714&',
                          }}
                          alt=""
                          style={{
                            width: 70,
                            height: 70,
                            borderRadius: 0,
                            shadowOpacity: 3,
                            shadowColor: COLORS.PrimaryBlue,
                            // tintColor: COLORS.white,
                          }}
                        />
                      </View>
                    </View>

                    <Text
                      style={{
                        ...FONTS.h3,
                        color: COLORS.black,
                        fontWeight: 700,
                        paddingHorizontal: 10,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
          {/* <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 10,
          }}>
          <View
            style={{
              padding: 10,
              height: 200,
              position: 'relative',
            }}>
            <Image
              onPress={() =>
                Linking.openURL('https://youtube.com/watch?v=tGIobcyKViI')
              }
              source={{
                uri: 'https://img.youtube.com/vi/tGIobcyKViI/maxresdefault.jpg',
              }}
              alt=""
              style={{
                // width: 3,
                height: '100%',
                borderRadius: 10,
                objectFit: 'contain',

                // tintColor: COLORS.white,
                // transform: 'rotate(45deg)',
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.freepik.com/256/7826/7826802.png?ga=GA1.2.1634828664.1699686714&',
                }}
                alt=""
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 0,
                  shadowOpacity: 3,
                  shadowColor: COLORS.PrimaryBlue,
                  // tintColor: COLORS.white,
                }}
              />
            </View>
          </View>

          <Text
            style={{
              ...FONTS.h3,
              color: COLORS.black,
              fontWeight: 700,
              paddingHorizontal: 10,
            }}>
            {' >'} WHat is HPC?
          </Text>
        </View> */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    paddingTop: 15,
    marginBottom: 16,
  },
  input: {
    // height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    textTransform: 'uppercase',
    ...FONTS.h3,
    borderRadius: 10,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});
