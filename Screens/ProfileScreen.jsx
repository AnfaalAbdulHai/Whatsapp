import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation, route }) => {
  const { profile, setProfile } = route.params;
  const [name, setName] = useState(profile.name);
  const [about, setAbout] = useState(profile.about);
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [profileImage, setProfileImage] = useState(profile.profileImage);

  const saveData = async () => {
    const updatedProfile = { ...profile, name, about, phoneNumber, profileImage };
    setProfile(updatedProfile);
    await AsyncStorage.setItem('profile', JSON.stringify(updatedProfile));
    navigation.goBack();
  };

  const goToCameraScreen = () => {
    navigation.navigate('CameraScreen', { setProfileImage });
  };

  return (
    <View style={styles.container}>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <View style={[styles.profileImage, styles.placeholder]}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      
      <Text style={styles.label}>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />

      <Text style={styles.label}>About:</Text>
      <TextInput value={about} onChangeText={setAbout} style={styles.input} />

      <Text style={styles.label}>Phone Number:</Text>
      <TextInput value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} />

      <TouchableOpacity onPress={goToCameraScreen} style={styles.button}>
        <Text style={styles.buttonText}>Capture Image</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={saveData} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
},
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    alignSelf: 'center', 
    marginBottom: 20 
},
  placeholder: { 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#e0e0e0' 
},
  placeholderText: { 
    color: '#777' 
},
  label: { 
    fontSize: 16, 
    color: 'gray', 
    marginTop: 10 
},
  input: { 
    borderBottomWidth: 1, 
    padding: 5, 
    fontSize: 16, 
    marginBottom: 15 
},
  button: { 
    marginTop: 20, 
    backgroundColor: 'green', 
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center' 
},
  buttonText: { 
    color: 'white', 
    fontSize: 16 
},
});

export default ProfileScreen;