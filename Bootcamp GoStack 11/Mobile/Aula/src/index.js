import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, StyleSheet, StatusBar} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#f26" />
      <View style={styles.container}>
        {projects.map((proj) => (
          <Text style={styles.project} key={proj.id}>
            {proj.title}
          </Text>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f26',
    justifyContent: 'center',
    alignItems: 'center',
  },

  project: {
    color: '#fff',
    fontSize: 80,
  },
});
