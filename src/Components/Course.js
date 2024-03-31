import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';
import {BASEURL} from '../../store/actions';
import axios from 'axios';
import {COLORS, FONTS} from '../Assets/Theme';

export const CourseStudent = ({navigation}) => {
  const [apply, setApply] = useState();
  const [applyLoading, setapplyLoading] = useState(true);
  const user = useSelector(state => state.auth.user);
  console.log(user);
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          BASEURL + `api/course/${user.courseId}`,
        );
        console.log('====================================');
        console.log('data', response.data);
        console.log('====================================');
        setApply(response.data);
        setapplyLoading(false);
      } catch (error) {
        console.error('Error fetching course:', error);
        setapplyLoading(false);
      }
    };

    fetchCourse();
  }, []);
  const appliedCourse = useMemo(() => apply, [apply]);
  console.log('appliedCourse', appliedCourse);
  console.log('setdata', apply);
  const course = appliedCourse;
  return (
    <>
      <View
        style={{
          paddingBottom: 30,
          display: 'flex',
          gap: 20,
        }}>
        <Text style={{...FONTS.h2, color: COLORS.black}}>Courses Applied </Text>
        {applyLoading ? (
          <>
            <ActivityIndicator
              size="large"
              color={COLORS.green}
              animating={applyLoading}
            />
          </>
        ) : (
          <>
            {course ? (
              <>
                <>
                  <TouchableOpacity
                    key={course?.id}
                    onPress={() => {
                      navigation.navigate('CourseDetails', {
                        courseId: course._id,
                      });
                    }}>
                    <View
                      key={course?.id}
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
                          Course Name : {course?.courseName}
                        </Text>
                        <Text
                          style={{
                            textTransform: 'capitalize',
                            ...FONTS.h3,
                            color: COLORS.black,
                          }}>
                          Duration: {course?.duration} month
                        </Text>
                      </View>
                      <Text
                        style={{
                          paddingVertical: 10,
                          ...FONTS.body3,
                          color: COLORS.darkGray,
                        }}>
                        Teachers available : {course?.subjects.length}
                      </Text>
                      {course?.subjects.slice(0, 2).map(teach => (
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
              </>
            ) : (
              <>
                <Text>Their is no applied course</Text>
              </>
            )}
          </>
        )}
      </View>
    </>
  );
};
