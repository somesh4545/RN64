import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Constants from '../../Constants';
import AppStyles from '../../AppStyles';
import LinearGradient from 'react-native-linear-gradient';

// import {ProgressBar, MD3Colors} from 'react-native-paper';

const Splash = () => {
  console.log(Constants.colour.btnBgColor);
  return (
    <LinearGradient
      colors={[Constants.colour.primary, Constants.colour.secondary]}
      style={[AppStyles.container, styles.container]}>
      <Text>Cash Mine</Text>
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
