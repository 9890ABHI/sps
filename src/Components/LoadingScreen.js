import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../Assets/Theme';

const LoadingScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigation.navigate('Login'); // Navigate to your main screen
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={COLORS.green}
        animating={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Animated, Easing, Image} from 'react-native';

// const LoadingScreen = ({navigation}) => {
//   const [spinValue] = useState(new Animated.Value(0));

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(spinValue, {
//         toValue: 1,
//         duration: 3000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }),
//     ).start();
//     setTimeout(() => {
//       //   navigation.navigate('Login');
//     }, 9000);
//   }, [spinValue, navigation]);

//   const spin = spinValue.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../Assets/Book.gif')}
//         style={{
//           width: 100,
//           height: 100,
//         }}
//       />
//       <Animated.Image
//         style={[styles.studentImage, {transform: [{rotate: spin}]}]}
//         source={require('../Assets/Book.gif')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   studentImage: {
//     width: 150,
//     height: 150,
//   },
// });

// export default LoadingScreen;
