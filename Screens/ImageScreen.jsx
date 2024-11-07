import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ImageScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);
  const [userName, setUserName] = useState('');

  // Function to handle image selection
  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  // Function to save image and name to AsyncStorage and navigate back
  const saveData = async () => {
    if (!userName || !imageUri) {
      Alert.alert('Error', 'Please select an image and enter your name.');
      return;
    }

    try {
      await AsyncStorage.setItem('userImage', imageUri);
      await AsyncStorage.setItem('userName', userName);
      Alert.alert('Success', 'Data saved successfully!');
      navigation.goBack(); // Navigate back to the previous screen
    } catch (error) {
      console.error('Error saving data', error);
      Alert.alert('Error', 'Failed to save data.');
    }
  };

  // useEffect to retrieve image and name from AsyncStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('userImage');
        const storedName = await AsyncStorage.getItem('userName');

        if (storedImage) {
          setImageUri(storedImage);
        } else {
          // Set default image or leave as null
          setImageUri('https://via.placeholder.com/200'); // Placeholder image
        }

        if (storedName) {
          setUserName(storedName);
        } else {
          // Set default name if needed
          setUserName('Default Name');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <View style={styles.container}>
      {/* Image Selection */}
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
        <Button title="Select Image" onPress={selectImage} />
      </View>

      {/* User Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={userName}
        onChangeText={setUserName}
      />

      {/* Save Button */}
      <Button title="Save" onPress={saveData} />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholder: {
    fontSize: 16,
    color: '#777',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});

export default ImageScreen;

