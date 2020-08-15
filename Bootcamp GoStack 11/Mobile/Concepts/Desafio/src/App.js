import React, { useEffect, useState } from 'react';
import api from './services/api';

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then((response) => setRepositories(response.data));
  }, []);

  async function handleLikeRepository(id) {
    api.post(`/repositories/${id}/like`).then(() => {
      const repoIndex = repositories.findIndex(
        (repository) => repository.id === id
      );

      repositories[repoIndex].likes++;

      setRepositories([...repositories]);
    });
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={repositories}
          keyExtractor={(repo) => repo.id}
          renderItem={({ item: repo }) => (
            <View style={styles.repositoryContainer}>
              <Text style={styles.repository}>{repo.title}</Text>

              <View style={styles.techsContainer}>
                <Text style={styles.tech}>ReactJS</Text>
                <Text style={styles.tech}>Node.js</Text>
              </View>

              <View style={styles.likesContainer} activeOpacity={0.8}>
                <Text
                  style={styles.likeText}
                  testID={`repository-likes-${repo.id}`}
                >
                  {repo.likes} curtidas
                </Text>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleLikeRepository(repo.id)}
                testID={`like-button-${repo.id}`}
              >
                <Text style={styles.buttonText}>Curtir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    paddingTop: 20,
  },

  repositoryContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },

  repository: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  techsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },

  tech: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
    backgroundColor: '#04d361',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff',
  },

  likesContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },

  button: {
    marginTop: 10,
    // alignItems: 'flex-start',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#fff',
    backgroundColor: '#8167e0',
    padding: 15,
    borderRadius: 10,
  },
});
