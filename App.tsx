import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 25,
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    padding: 15,
    backgroundColor: 'blue',
  },
});
