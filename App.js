import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';

export default function App() {
  const [currentSubject, setCurrentsubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentsubject} />
      ) : (
        <View>
          <Text>I am going to render the timer</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.blue,
  },
  text: {
    color: colors.white,
    fontSize: 30,
  },
});
