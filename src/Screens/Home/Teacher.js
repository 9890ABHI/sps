import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {lazy, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {COLORS, FONTS} from '../../Assets/Theme';
import {useDispatch, useSelector} from 'react-redux';
import {BASEURL, teacherLoginSuccess} from '../../../store/actions';
import {TextHeader} from '../../Components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Hrline from '../../Components/Hrline';
import DetailsWeek from '../../Components/DetailsWeek';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Accordian from '../../Components/Accordian';

export const Teacher = ({navigation}) => {
  const [edit, setEdit] = useState(false);
  const teacher = useSelector(state => state.auth.teacher);
  const dispatch = useDispatch();

  const [teacherData, setTeacherData] = useState({
    name: teacher.name,
    mobile: teacher.mobile,
    code: teacher.code,
    subject: teacher.subject,
  });

  const handleChange = (field, value) => {
    setTeacherData({...teacherData, [field]: value});
  };

  const updateTeacherInformation = async () => {
    const teacherEmail = teacher.email; // Replace with the actual teacher's email
    const updatedData = {
      name: teacherData.name,
      mobile: teacherData.mobile,
      code: teacherData.code,
      subject: teacherData.subject,
    };

    try {
      const response = await axios.put(
        BASEURL + `api/teacher/${teacherEmail}`,
        // teacherData
        updatedData,
      );
      console.log('Teacher information updated:', response.data);
      dispatch(teacherLoginSuccess(response.data));
      Alert.alert('Succefully Updated Information', 'Update Succefully');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating teacher information:', error.message);
    }
  };

  return (
    <>
      <View
        style={{
          padding: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.black,
            }}>
            Teacher Profile
          </Text>
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
              borderColor: edit ? COLORS.Primary : 'gray',
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              ...FONTS.h3,
              color: edit ? COLORS.Primary : 'gray',
              textTransform: 'capitalize',
            }}
            // placeholder='abc xyz'
            editable={edit ? true : false}
            // onEndEditing={(text) => setName(text)}
            value={teacherData.name}
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
              borderColor: edit ? COLORS.Primary : 'gray',
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              ...FONTS.h3,
              color: edit ? COLORS.Primary : 'gray',
            }}
            // placeholder='
            editable={edit ? true : false}
            // onChangeText={(text) => setMobile(text)}
            // value={teacherDeatils?.mobile}
            value={teacherData.mobile}
            onChangeText={e => handleChange('mobile', e)}
          />
          <Text
            style={{
              color: '#000',
              ...FONTS.h3,
            }}>
            code
          </Text>
          <TextInput
            style={{
              borderColor: edit ? COLORS.Primary : 'gray',
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              ...FONTS.h3,
              color: edit ? COLORS.Primary : 'gray',
            }}
            // placeholder={code}
            editable={edit ? true : false}
            // onChangeText={(text) => setcode(text)}
            // value={teacherDeatils?.code}
            value={teacherData.code}
            onChangeText={e => handleChange('code', e)}
          />
          <Text
            style={{
              color: '#000',
              ...FONTS.h3,
            }}>
            subject
          </Text>
          <TextInput
            style={{
              borderColor: edit ? COLORS.Primary1 : 'gray',
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              ...FONTS.h3,
              textTransform: 'capitalize',
              color: edit ? COLORS.Primary : 'gray',
            }}
            // placeholder='abc xyz'
            editable={edit ? true : false}
            // onChangeText={(text) => setSubject(text)}
            // value={teacherDeatils?.subject === "" ? "Add Subject" :teacherDeatils?.subject }
            value={teacherData.subject}
            onChangeText={e => handleChange('subject', e)}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          // top: 0,
          bottom: 10,
          left: 0,
          right: 0,
          zIndex: 10,
        }}>
        <TouchableOpacity
          onPress={updateTeacherInformation}
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
    </>
  );
};

export const ClassMangement = ({navigation}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

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
        setCourses(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, [refresh]);
  const handleDeleteCourse = async id => {
    await axios
      .delete(BASEURL + `api/courses/${id}`)
      .then(response => {
        console.log('Deleted Course:', response.data);
        setRefresh(prevRefresh => !prevRefresh);
      })
      .catch(error => {
        console.error(
          'Error Deleting Course:',
          error.response ? error.response.data : error.message,
        );
      });
  };

  // Memoize the courses to prevent unnecessary re-renders
  const memoizedCourses = useMemo(() => courses, [courses]);
  console.log('====================================');
  console.log('memoizedCourses', memoizedCourses);
  console.log('====================================');

  return (
    <>
      <ScrollView>
        <View>
          <View
            style={{
              paddingHorizontal: 20,
            }}>
            <TextHeader title={'Class Management'} />
          </View>
          <View>
            {loading ? (
              <Text>Loading courses...</Text>
            ) : (
              <View
                style={{
                  display: 'flex',
                  gap: 10,
                  padding: 10,
                }}>
                <Text style={{...FONTS.h2, color: COLORS.black}}>
                  Courses List : {memoizedCourses.length}
                </Text>
                {memoizedCourses.map(course => (
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
                            // flexDirection:'row',
                            // justifyContent:'space-between',
                            // alignItems:"center"
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
                            Duration: {course.duration} months
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
                          // console.log(teach)
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
                        <Text
                          style={{
                            paddingVertical: 10,
                            ...FONTS.body3,
                            color: COLORS.darkGray,
                          }}>
                          Students count : {course.students.length}
                        </Text>
                        {course.students.slice(0, 2).map(stud => (
                          <>
                            <View
                              key={stud.id}
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
                                {stud.name}
                              </Text>
                              <Text>{/* {stud.email} */}</Text>
                            </View>
                          </>
                        ))}
                        {/* Add more details as needed */}
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
                              width: '50%',

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
                          <TouchableOpacity
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                              gap: 10,
                              justifyContent: 'center',
                              width: '50%',
                              // backgroundColor:COLORS.,
                              padding: 10,
                            }}
                            onPress={() => handleDeleteCourse(course._id)}>
                            <Image
                              source={{
                                uri: 'https://cdn-icons-png.freepik.com/128/6861/6861362.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                              }}
                              alt=""
                              style={{
                                width: 20,
                                height: 20,
                                borderRadius: 0,
                              }}
                            />
                            <Text
                              style={{
                                ...FONTS.h3,
                                color: COLORS.red,
                              }}>
                              Delete
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                ))}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export const CreateCourseScreen = ({navigation}) => {
  const teacherEmail = useSelector(state => state.auth.teacher.email);
  // console.log('====================================');
  // console.log(teacherEmail);
  // console.log('====================================');
  const [students, setStudents] = useState([]);
  const [teacherDetails, setTeacherDetails] = useState();

  const [courseData, setCourseData] = useState({
    students: [],
    subjects: [],
    duration: '',
    courseName: '',
  });

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        // const teacherEmail = teacher.email
        const response = await axios.get(BASEURL + 'api/teachers');
        const teacher = response.data; // Assuming your API returns the teacher ID
        // console.log('====================================');
        // console.log(teacher);
        // console.log('====================================');
        setTeacherDetails(response.data);
        // You can dispatch an action to update the Redux state with teacher details or do anything else with the data
        // dispatch(updateTeacherDetails(response.data));
      } catch (error) {
        console.error('Error fetching teacher details:', error.message);
      }
    };
    // Fetch the list of students when the component mounts
    const fetchStudents = async () => {
      try {
        const response = await axios.get(BASEURL + 'api/students');
        setStudents(response.data); // Assuming the response contains an array of students
      } catch (error) {
        console.error('Error fetching students:', error.message);
      }
    };

    fetchTeacherDetails();
    fetchStudents();
  }, []);
  // console.log('====================================');
  // console.log(courseData.subjects.find(item => item.teacherId));
  // console.log('====================================');

  const handleCreateCourse = async () => {
    console.log('====================================');
    console.log(courseData);
    console.log('====================================');
    try {
      const response = await axios.post(`${BASEURL}api/courses`, courseData);
      console.log('Course created:', response.data);
      navigation.goBack();
    } catch (error) {
      console.error('Error creating course:', error.message);
    }
  };
  // console.log('====================================');
  // console.log('courseData.subjects', courseData.subjects);
  // console.log('====================================');
  const handleTeacherSelection = (teacherId, subject) => {
    const isTeacherSelected = courseData.subjects.some(
      teacher => teacher.teacherId === teacherId,
    );

    if (isTeacherSelected) {
      // If teacher is already selected, remove them from the list
      const updatedSubjects = courseData.subjects.filter(
        teacher => teacher.teacherId !== teacherId,
      );
      setCourseData({...courseData, subjects: updatedSubjects});
    } else {
      // If teacher is not selected, add them to the list
      const updatedSubjects = [
        ...courseData.subjects,
        {teacherId, subjectName: subject},
      ];
      setCourseData({...courseData, subjects: updatedSubjects});
    }
  };
  const handleStudentSelection = studentId => {
    // Add or remove the selected student based on their current presence in the students array
    const updatedStudents = courseData.students.includes(studentId)
      ? courseData.students.filter(id => id !== studentId)
      : [...courseData.students, studentId];

    setCourseData({...courseData, students: updatedStudents});
  };

  return (
    <>
      <View>
        <View>
          {/* <Text>
          {teacherDetails.name}
        </Text> */}
        </View>

        <View
          style={{
            display: 'flex',
            gap: 10,
            padding: 10,
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: '#000',
              ...FONTS.h3,
            }}>
            Course Name
          </Text>
          <TextInput
            style={{
              borderColor: COLORS.gray2,
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              ...FONTS.h3,
              backgroundColor: COLORS.white,
            }}
            placeholder="Course Name"
            onChangeText={text =>
              setCourseData({...courseData, courseName: text})
            }
            value={courseData.courseName}
          />
          <Text
            style={{
              color: '#000',
              ...FONTS.h3,
            }}>
            Duration
          </Text>
          <TextInput
            style={{
              borderColor: COLORS.gray2,
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              ...FONTS.h3,
              backgroundColor: COLORS.white,
            }}
            placeholder="Duration in Months"
            onChangeText={text =>
              setCourseData({...courseData, duration: text})
            }
            value={courseData.duration}
          />
        </View>
        <View
          style={{
            display: 'flex',
            gap: 10,
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              ...FONTS.h3,
            }}>
            Select Techers:
          </Text>
          <ScrollView
            style={{
              display: 'flex',
              paddingHorizontal: 10,
              gap: 10,
            }}>
            {/* {courseData.subjects.map(item => (
            <>
              <View key={item.id}>
                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.black,
                  }}>
                  {item.teacherId}
                </Text>
              </View>
            </>
          ))} */}
            {teacherDetails?.map((teacher, i) => (
              <View
                key={teacher._id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                }}>
                <Text>{i + 1}</Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.black,
                    textTransform: 'capitalize',
                  }}>
                  {teacher.name}
                </Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.black,
                    textTransform: 'capitalize',
                  }}>
                  {teacher.subject}
                </Text>

                <View
                  style={
                    {
                      // width:'30%'
                    }
                  }>
                  <TouchableOpacity
                    onPress={() =>
                      handleTeacherSelection(teacher._id, teacher.subject)
                    }>
                    {courseData.subjects.some(
                      subject => subject.teacherId === teacher._id,
                    ) ? (
                      // <Icon name={'add'} size={30} color={COLORS.green} />
                      <Icon name={'delete'} size={30} color={COLORS.red} />
                    ) : (
                      // <Icon name={'delete'} size={30} color={COLORS.red} />
                      <Icon name={'add'} size={30} color={COLORS.green} />
                    )}
                  </TouchableOpacity>
                  {/* <Button
            title={courseData.subjects.includes(teacher._id) ? 'Remove' : 'Add'}
            onPress={() => handleTeacherSelection(teacher._id)}
          />
           */}
                </View>
              </View>
            ))}
          </ScrollView>
          {/* Display the list of students */}
          <Text>Select Students:</Text>

          <ScrollView
            style={{
              display: 'flex',
              paddingHorizontal: 10,
              gap: 10,
            }}>
            {students.map((student, i) => (
              <View
                key={student._id}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  paddingVertical: 5,
                  paddingHorizontal: 10,

                  borderRadius: 10,
                }}>
                <Text>{i + 1}</Text>
                <Text
                  style={{
                    ...FONTS.h3,
                    color: COLORS.black,
                    textTransform: 'capitalize',
                  }}>
                  {student.name}
                </Text>
                <View
                  style={
                    {
                      // width:'30%'
                    }
                  }>
                  <TouchableOpacity
                    onPress={() => handleStudentSelection(student._id)}>
                    {!courseData.students.includes(student._id) ? (
                      <Icon name={'add'} size={30} color={COLORS.green} />
                    ) : (
                      <Icon name={'delete'} size={30} color={COLORS.red} />
                    )}
                  </TouchableOpacity>
                  {/* <Button
            title={courseData.students.includes(student._id) ? 'Remove' : 'Add'}
            onPress={() => handleStudentSelection(student._id)}
          /> */}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* Add more input fields for other properties if needed */}

        {/* <Button title="Create Course" onPress={handleCreateCourse} /> */}
      </View>

      <>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            gap: 2,
            flexDirection: 'row',
            // paddingHorizontal: 10,
            justifyContent: 'space-around',
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              width: '78%',
              backgroundColor: COLORS.green,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              borderRadius: 20,
              gap: 20,
            }}
            onPress={handleCreateCourse}>
            <Icon name={'add'} size={30} color={COLORS.white} />
            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.white,
                fontWeight: 700,
                letterSpacing: 1,
              }}>
              Create Course
            </Text>
          </TouchableOpacity>
        </View>
      </>
    </>
  );
};

export const CourseDetails = ({route, navigation}) => {
  const {courseId} = route.params;
  const user = useSelector(state => state.auth.student);
  console.log(user);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [studentID, setStudentID] = useState([]);
  const [open, setOpen] = useState(false);
  const [DropOpen, setDropOpen] = useState(false);

  useEffect(() => {
    const fetcheCourse = async () => {
      try {
        const responce = await axios.get(BASEURL + `api/course/${courseId}`);
        // console.log('responce get', responce.data);
        const Id = responce.data.students.map(stud => stud._id);
        // console.log('Id ', Id);
        setData(responce.data);
        setStudentID(Id);
        setLoading(false);
      } catch (error) {
        console.log('error fetching course ', error);
      }
    };
    const fetchallStudnet = async () => {
      try {
        const responce = await axios.get(BASEURL + 'api/students');
        const newdata = await responce.data.filter(
          stud => !studentID.includes(stud._id),
        );
        setStudData(newdata);
        console.log('geting all student data ::: ', newdata);
      } catch (error) {
        error =>
          console.error(
            'Error geting  studnet data:',
            error.response ? error.response.data : error.message,
          );
      }
    };

    fetcheCourse();
    fetchallStudnet();
  }, [refresh]);

  // useEffect(() => {
  //   const fetchallStudnet = async () => {
  //     try {
  //       const responce = await axios.get(BASEURL + 'api/students');
  //       const newdata = await responce.data.filter(
  //         stud => !studentID.includes(stud._id),
  //       );
  //       setStudData(newdata);
  //       console.log('geting all student data ::: ');
  //     } catch (error) {
  //       error =>
  //         console.error(
  //           'Error geting  studnet data:',
  //           error.response ? error.response.data : error.message,
  //         );
  //     }
  //   };

  //   fetchallStudnet();
  // }, [refresh]);

  const handleDeleteCourse = async id => {
    await axios
      .delete(BASEURL + `api/courses/${id}`)
      .then(response => {
        // console.log('Deleted Course:', response.data);
        setRefresh(prevRefresh => !prevRefresh);
      })
      .catch(error => {
        console.error(
          'Error Deleting Course:',
          error.response ? error.response.data : error.message,
        );
      });
  };

  const handledeleteStudent = async (studentId, courseId) => {
    await axios
      .delete(BASEURL + `api/students/${studentId}/courses/${courseId}`)
      .then(responce => {
        // console.log('Deleted student from course:', responce.data);
        setStudentID(studentID.filter(stud => stud !== studentId));
        setRefresh(prevRefresh => !prevRefresh);
      })
      .catch(error =>
        console.error(
          'Error Deleting studnet from Course:',
          error.response ? error.response.data : error.message,
        ),
      );
  };

  const handleaddstudent = async (studentId, courseId) => {
    await axios
      .put(BASEURL + `api/students/${studentId}/courses/${courseId}`)
      .then(responce => {
        // console.log('added student from course:', responce.data);
        setStudentID([...studentID] + studentId);
        setRefresh(prevRefresh => !prevRefresh);
      })
      .catch(error =>
        console.error(
          'Error adding studnet in Course:',
          error.response ? error.response.data : error.message,
        ),
      );
  };

  const [studData, setStudData] = useState([]);
  const course = useMemo(() => data, [data]);
  const student = useMemo(() => studData, [studData]);

  return (
    <>
      <ScrollView>
        <View>
          <View
            style={{
              display: 'flex',
              // padding: 10,
              paddingHorizontal: 10,
            }}>
            <TextHeader title={'CourseDetails'} />
          </View>
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
              <View
                style={{
                  paddingBottom: 30,
                }}>
                <View
                  style={{
                    padding: 20,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // justifyContent:
                        // alignItems: 'center',
                        gap: 10,
                        width: '85%',
                      }}>
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          ...FONTS.h2,
                          color: COLORS.black,
                          paddingTop: 7,
                        }}>
                        Name :
                      </Text>
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          ...FONTS.h1,
                          color: COLORS.black,
                          fontWeight: 700,
                        }}>
                        {course.courseName}
                      </Text>
                    </View>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // justifyContent:
                        alignItems: 'center',
                        gap: 10,
                        paddingTop: 10,
                      }}>
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          ...FONTS.h2,
                          color: COLORS.black,
                        }}>
                        Duration :
                      </Text>
                      <Text
                        style={{
                          textTransform: 'capitalize',
                          ...FONTS.h2,
                          color: COLORS.green,
                          fontWeight: 700,
                        }}>
                        {course.duration} month
                      </Text>
                    </View>
                  </View>
                  <Hrline />
                  <View
                    style={{
                      paddingTop: 0,
                    }}>
                    <Text
                      style={{
                        paddingVertical: 10,
                        ...FONTS.body2,
                        color: COLORS.black,
                      }}>
                      Teachers Details :{/* {course.subjects.length} */}
                    </Text>
                  </View>
                  {course.subjects.slice(0, 2).map((teach, i) => (
                    // console.log(teach)
                    <>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View
                          key={teach.id}
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            gap: 10,
                          }}>
                          <Text>{i + 1}</Text>
                          <Text
                            style={{
                              color: COLORS.black,
                              textTransform: 'capitalize',
                              ...FONTS.body3,
                            }}>
                            {teach.teacherId.name}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: COLORS.black,
                            textTransform: 'capitalize',
                            ...FONTS.body3,
                          }}>
                          {teach.subjectName}
                        </Text>
                      </View>
                    </>
                  ))}
                  {!user && (
                    <>
                      <>
                        <Text
                          style={{
                            paddingVertical: 10,
                            ...FONTS.body3,
                            color: COLORS.darkGray,
                            fontWeight: 'bold',
                          }}>
                          Students Details :
                        </Text>
                        <View
                          style={{
                            display: 'flex',
                            gap: 10,
                          }}>
                          {course.students.map((stud, i) => (
                            <>
                              <View
                                key={stud.id}
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
                                  {i + 1} {stud.name}
                                </Text>
                                <Text>{/* {stud.email} */}</Text>
                                <TouchableOpacity
                                  onPress={() =>
                                    handledeleteStudent(stud._id, course._id)
                                  }>
                                  <Image
                                    source={{
                                      uri: 'https://cdn-icons-png.freepik.com/128/6861/6861362.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                                    }}
                                    alt=""
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: 0,
                                    }}
                                  />
                                </TouchableOpacity>
                              </View>
                            </>
                          ))}
                        </View>
                      </>
                      <>
                        {student.length < 1 ? (
                          <>
                            <Text
                              style={{
                                paddingVertical: 10,
                                ...FONTS.body3,
                                color: COLORS.darkGray,
                              }}>
                              All student are added in course
                            </Text>
                          </>
                        ) : (
                          <>
                            <Text
                              style={{
                                paddingVertical: 10,
                                ...FONTS.body3,
                                color: COLORS.darkGray,
                                fontWeight: 'bold',
                              }}>
                              Add new Students in course :
                            </Text>
                          </>
                        )}
                        <View
                          style={{
                            display: 'flex',
                            gap: 10,
                          }}>
                          {student.map((stud, i) => (
                            <>
                              <View
                                key={stud.id}
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
                                  {i + 1} {stud.name}
                                </Text>
                                <Text>{/* {stud.email} */}</Text>
                                <TouchableOpacity
                                  onPress={() =>
                                    handleaddstudent(stud._id, course._id)
                                  }>
                                  <Image
                                    source={{
                                      uri: 'https://cdn-icons-png.freepik.com/128/4315/4315609.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                                    }}
                                    alt=""
                                    style={{
                                      width: 20,
                                      height: 20,
                                      borderRadius: 0,
                                    }}
                                  />
                                </TouchableOpacity>
                              </View>
                            </>
                          ))}
                        </View>
                      </>
                    </>
                  )}

                  <Hrline />
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        ...FONTS.h2,
                        color: COLORS.black,
                      }}>
                      Course details :
                    </Text>
                    {!user && (
                      <>
                        <TouchableOpacity onPress={() => setOpen(!open)}>
                          {/* // navigation.navigate('DetailsCourse', {course: {course}}) */}
                          <Text>edit</Text>
                        </TouchableOpacity>
                      </>
                    )}
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      gap: 10,
                      paddingTop: 10,
                    }}>
                    {course.weeks.length < 1 ? (
                      <>
                        <Text
                          style={{
                            color: COLORS.gray,
                            ...FONTS.body3,
                          }}>
                          Course Details Are Not available
                        </Text>
                      </>
                    ) : (
                      <>
                        {course.weeks.map(item => (
                          <>
                            <Accordian
                              user={user}
                              item={item}
                              navigation={navigation}
                            />
                          </>
                        ))}
                      </>
                    )}
                  </View>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
      {open && (
        <>
          <View
            style={{
              display: 'flex',
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              backgroundColor: COLORS.white,
              zIndex: 10,
              padding: 20,
            }}>
            <DetailsWeek
              course={course}
              refresh={refresh}
              setRefresh={setRefresh}
              setOpen={setOpen}
            />
          </View>
        </>
      )}
      {!user && (
        <>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              backgroundColor: COLORS.white,
            }}>
            <TouchableOpacity
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                justifyContent: 'center',
                // backgroundColor:COLORS.,
                padding: 10,
              }}
              onPress={() => handleDeleteCourse(course._id)}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.freepik.com/128/6861/6861362.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                }}
                alt=""
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 0,
                }}
              />
              <Text
                style={{
                  ...FONTS.h2,
                  color: COLORS.red,
                }}>
                Delete Course
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};

export const AttendanceScreen = () => {
  return (
    <>
      <View>
        <TextHeader title={'Attendece Tracer'} />
      </View>
    </>
  );
};
export const CreateNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [notificationText, setNotificationText] = useState('');
  const [expiration, setExpiration] = useState('');
  const [open, setOpen] = useState(false);
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

  const createNotification = () => {
    if (notificationText != '')
      axios
        .post(BASEURL + `api/notifications`, {
          text: notificationText,
          expiration: expiration || null,
        })
        .then(() => {
          fetchNotifications();
          setNotificationText('');
          setExpiration('');
          setOpen(!open);
        })
        .catch(error => {
          console.error('Error creating notification:', error);
        });
    else {
      Alert.alert('Empty notifications !!!');
    }
  };

  console.log('====================================');
  console.log(notifications);
  console.log('====================================');
  return (
    <>
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
                      // paddingBottom: 20,
                    }}>
                    Notification available : {notifications.length}
                  </Text>
                </View>
              </>
            )}
            <View
              style={{
                paddingVertical: 10,
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                  textTransform: 'uppercase',
                  paddingBottom: 10,
                }}>
                Notification available for only : 24 hours
              </Text>
            </View>
            {notifications.map((item, i) => (
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    // justifyContent: 's',
                    alignItems: 'center',
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
                    {i + 1}
                    {' '}
                  </Text>

                  <Text
                    style={{
                      ...FONTS.h2,
                      color: COLORS.black,
                    }}>
                    {item.text}
                  </Text>
                </View>
              </>
            ))}
          </View>
        </>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          backgroundColor: COLORS.green,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
        onPress={() => setOpen(prev => !prev)}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.freepik.com/128/1237/1237946.png?ga=GA1.1.1634828664.1699686714&semt=ais',
          }}
          alt=""
          style={{
            width: 20,
            height: 20,
            borderRadius: 0,
            tintColor: COLORS.white,
          }}
        />
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h2,
          }}>
          Add or Create Notification
        </Text>
      </TouchableOpacity>

      <>
        {open && (
          <>
            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: COLORS.layout,
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TextHeader title={'Create Notification'} />
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 10,
                    gap: 10,
                  }}
                  onPress={() => setOpen(prev => !prev)}>
                  <Image
                    source={{
                      uri: 'https://cdn-icons-png.freepik.com/128/2976/2976286.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                    }}
                    alt=""
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 0,
                      tintColor: COLORS.darkGray,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{paddingTop: 20}}>
                {/* <Text style={styles.heading}>Teacher Screen</Text> */}
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    multiline
                    numberOfLines={4}
                    placeholder="Enter notification text"
                    value={notificationText}
                    onChangeText={text => setNotificationText(text)}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 15,
                  backgroundColor: COLORS.green,
                  padding: 10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}
                onPress={createNotification}>
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.freepik.com/128/1237/1237946.png?ga=GA1.1.1634828664.1699686714&semt=ais',
                  }}
                  alt=""
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 0,
                    tintColor: COLORS.white,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.h2,
                    color: COLORS.white,
                  }}>
                  Create Notification
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </>
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
    marginBottom: 16,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 10,
    ...FONTS.body2,
  },
  notificationItem: {},
});
