import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = ({navigation}) => {
  // Sample data for the settings list
  const settingsData = [
    {
      title: 'Account',
      subtitle: 'Privacy, Security, Change Number',
      icon: 'user',
    },
    {
      title: 'Chats',
      subtitle: 'Backup, History, Wallpaper',
      icon: 'comments',
    },
    {
      title: 'Notifications',
      subtitle: 'Message, Group and Call Tones',
      icon: 'bell',
    },
    {
      title: 'Data and Storage Usage',
      subtitle: 'Network Usage, Auto Download',
      icon: 'database',
    },
    {
      title: 'Help',
      subtitle: 'FAQ, Contact Us, Privacy Policy',
      icon: 'question-circle',
    },
    {
      title: 'Invite a Friend',
      subtitle: '',
      icon: 'group',
    },
  ];

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      {/* User Info Section */}
      <TouchableOpacity style={styles.userInfoContainer} onPress={()=>navigation.navigate('Profile')}>
      <Image
        source={require('../assets/avatargirl2.jpg')}
        style={styles.userImage}
      />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>Anfaal Abdul Hai</Text>
          <Text style={styles.userStatus}>Hello</Text>
        </View>
      </TouchableOpacity>

      {/* Settings List */}
      <FlatList
        data={settingsData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.settingItem}>
            <Icon name={item.icon} size={24} color="#007A33" />
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingTitle}>{item.title}</Text>
              <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Invite Friends Section with Separator */}
      {/* <View style={styles.inviteContainer}>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.inviteContent}>
          <Icon name="group" size={24} color="#007A33" />
          <Text style={styles.inviteText}>Invite Friends</Text>
        </TouchableOpacity>
      </View> */}
    </View>
    // </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
    // backgroundColor: '#F0F0F0',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  userInfoText: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 14,
    color: '#777',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0', // Add a subtle border between items
  },
  settingTextContainer: {
    marginLeft: 10,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  inviteContainer: {
    marginTop: 0,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 0, // Space between separator and invite text
  },
  inviteContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  inviteText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#007A33',
  },
});

export default SettingsScreen;
