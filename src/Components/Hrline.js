import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../Assets/Theme';

const Hrline = () => {
  return (
    <>
      <View
        style={{
          width: '100%',
          paddingTop: 20,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.gray,
        }}
      />
    </>
  );
};

export default Hrline;
