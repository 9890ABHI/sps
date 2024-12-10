import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, Image, Text} from 'react-native';
import {COLORS} from '../Assets/Theme';
import {Images} from '../Assets/Image';
import {TextHeader} from './Header';

const LoadingScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.navigate('InitPage');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBottom: 30,
        }}>
        <View style={styles.container}>
          <Image
            source={Images.imge1}
            alt=""
            style={{
              width: 100,
              height: 100,
            }}
          />

          <ActivityIndicator
            size="large"
            color={COLORS.green}
            animating={loading}
          />
        </View>
        <View
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextHeader title={'SPS'} />
          <Text>STUDENT PROFILE SYSTEM</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
  },
});

export default LoadingScreen;
