import React, {useEffect, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {COLORS, FONTS} from '../Assets/Theme';
import {NotificationCard} from './notificationCard';
import axios from 'axios';
import {BASEURL} from '../../store/actions';

export const PopUp = ({
  navigation,
  // Content,
  // HeaderContent,
  countNotification,
  // DataDetails,
  // notifications,
  modalVisible,
  toggleModal,
}) => {
  // const [modalVisible, setModalVisible] = useState(false);

  // const data = notifications.push(DataDetails);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(() => {
      fetchNotifications();
    }, 2 * 60 * 1000); // 2 minutes in milliseconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
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
  console.log('data popup', notifications);
  const DataDetails = {
    user: 'system',
    title: 'Add Subject',
    subtitle: 'Please add Subject deatils in profile section',
    goTO: 'Teacher',
  };
  console.log('before togel', toggleModal);
  return (
    <>
      {!modalVisible ? (
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={toggleModal}>
          <Image
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/basic-ui-181/24/Basic_UI_Glyph_Notification-256.png',
            }}
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode="contain"
          />
          {countNotification ? (
            <Text
              style={{
                color: COLORS.red,
                backgroundColor: COLORS.white,
                borderRadius: 20,
                width: 'auto',
                position: 'absolute',
                paddingHorizontal: 5,
                right: 10,
                top: 7,
              }}>
              {countNotification}
            </Text>
          ) : (
            <></>
          )}
          {/* <Text style={styles.textStyle}>{HeaderContent}</Text> */}
        </Pressable>
      ) : (
        <></>
      )}
      {/* <SafeAreaProvider> */}
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: COLORS.Primary,
          position: 'absolute',
          top: modalVisible ? -1000 : undefined,
          left: 0,
          right: 0,
          bottom: 0,
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.modalView}>
            <View
              style={{
                width: '100%',
              }}>
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
                        color: COLORS.black,
                      }}>
                      their is no new notification....
                    </Text>
                  </View>
                </>
              ) : (
                <></>
              )}
              <ScrollView>
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
                        width: '100%',
                      }}
                      // key={i}
                    >
                      {/* <Text
                        style={{
                          ...FONTS.h2,
                          color: COLORS.black,
                        }}>
                        {i + 1}
                        {' '}
                      </Text> */}
                      <View>
                        <Text
                          style={{
                            ...FONTS.h2,
                            color: COLORS.black,
                          }}>
                          {item.text}
                        </Text>
                        {/* <Text
                          style={{
                            ...FONTS.h6,
                            color: COLORS.black,
                          }}>
                          end: {item.timestamp}
                        </Text> */}
                      </View>
                    </View>
                  </>
                ))}
              </ScrollView>
            </View>
            {/* <NotificationCard
              navigation={navigation}
              title={DataDetails.title}
              subtitile={DataDetails.subtitle}
              goesTo={DataDetails.goTO}
              // user={DataDetails.user}
              // user={'someone'}
              // modalVisible={modalVisible}
              toggleModal={toggleModal}
            /> */}
          </View>
          <Pressable
            style={[styles.buttonc, styles.buttonClose]}
            onPress={toggleModal}>
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </Modal>
      </SafeAreaView>
      {/* </SafeAreaProvider> */}
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: COLORS.Primary,
    position: 'absolute',
    top: -1000,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '95%',
  },
  button: {
    padding: 15,
    elevation: 2,
    position: 'absolute',
    // zIndex: 10,
    top: -120,
    right: 20,
    // width: '100%',
    display: 'flex',
    borderRadius: 50,
  },
  buttonc: {
    padding: 10,
    elevation: 2,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: COLORS.Primary,
    // backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: COLORS.darkGray,
    // backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: COLORS.black,
  },
});
