import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

const Image2 = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name: 'Your Name',
    about: 'Hey there! I am using WhatsApp.',
    phoneNumber: '123-456-7890',
    profileImage: null,
  });

  // Load profile data from AsyncStorage on component mount
  useEffect(() => {
    const loadProfile = async () => {
      const data = await AsyncStorage.getItem('profile');
      if (data) {
        setProfile(JSON.parse(data));
      }
    };
    loadProfile();
  }, []);

  const goToProfileScreen = () => {
    navigation.navigate('ProfileScreen', { profile, setProfile });
  };

  const settingsOptions = [
    { id: '1', title: 'Account', icon: 'person' },
    { id: '2', title: 'Privacy', icon: 'lock-closed' },
    { id: '3', title: 'Avatar', icon: 'image' },
    { id: '4', title: 'Favourites', icon: 'star' },
    { id: '5', title: 'Chats', icon: 'chatbubbles' },
    { id: '6', title: 'Notifications', icon: 'notifications' },
    { id: '7', title: 'Storage and Data', icon: 'folder' },
    { id: '8', title: 'App Language', icon: 'language' },
  ];

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.profileContainer} onPress={goToProfileScreen}>
        {profile.profileImage ? (
          <Image source={{ uri: profile.profileImage }} style={styles.profileImage} />
        ) : (
          <View style={[styles.profileImage, styles.placeholder]}>
            <Text style={styles.placeholderText}>No Image</Text>
          </View>
        )}
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.about}>{profile.about}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.phoneNumber}>Phone: {profile.phoneNumber}</Text>

      {settingsOptions.map((option) => (
        <TouchableOpacity 
          key={option.id} 
          style={styles.optionContainer} 
          onPress={() => console.log(`Go to ${option.title}`)}
        >
          <Icon name={option.icon} size={24} color="#000" style={styles.optionIcon} />
          <Text style={styles.optionText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  profileContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  placeholder: { justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0e0e0' },
  placeholderText: { color: '#777' },
  name: { fontSize: 20, fontWeight: 'bold' },
  about: { fontSize: 16, color: 'gray' },
  phoneNumber: { fontSize: 16, color: 'black' },
  optionContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  optionIcon: { marginRight: 10 },
  optionText: { fontSize: 18 },
});

export default Image2;