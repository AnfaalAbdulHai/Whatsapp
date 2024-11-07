import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';

import ChatsScreen from './Components/ChatsScreen';
import UpdatesScreen from './Components/UpdatesScreen';
import CommunitiesScreen from './Components/CommunitiesScreen';
import CallsScreen from './Components/CallsScreen';
import SettingsScreen from './Components/SettingsScreen';
import ProfileScreen from './Components/ProfileScreen'; // Import ProfileScreen
import CameraScreen from  './Components/CameraScreen'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomHeader = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>WhatsApp</Text>
    <View style={styles.headerIcons}>
      <TouchableOpacity onPress={() => console.log('Camera pressed')}>
        <Icon name="camera-outline" size={25} color="black" style={styles.headerIcon} />
      </TouchableOpacity>

      <Menu>
        <MenuTrigger>
          <Icon name="ellipsis-vertical" size={25} color="black" style={styles.headerIcon} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption onSelect={() => alert('New Group')}>
            <Text style={styles.menuText}>New Group</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert('New Broadcast')}>
            <Text style={styles.menuText}>New Broadcast</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert('Linked Devices')}>
            <Text style={styles.menuText}>Linked Devices</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert('Starred Messages')}>
            <Text style={styles.menuText}>Starred Messages</Text>
          </MenuOption>
          <MenuOption onSelect={() => navigation.navigate('Settings')}>
            <Text style={styles.menuText}>Settings</Text>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  </View>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Chats') {
          iconName = focused ? 'chatbubble' : 'chatbubble-outline';
        } else if (route.name === 'Updates') {
          iconName = focused ? 'notifications' : 'notifications-outline';
        } else if (route.name === 'Communities') {
          iconName = focused ? 'people' : 'people-outline';
        } else if (route.name === 'Calls') {
          iconName = focused ? 'call' : 'call-outline';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen
      name="Chats"
      component={ChatsScreen}
      options={{
        header: ({ navigation }) => <CustomHeader navigation={navigation} />,
      }}
    />
    <Tab.Screen name="Updates" component={UpdatesScreen} />
    <Tab.Screen name="Communities" component={CommunitiesScreen} />
    <Tab.Screen name="Calls" component={CallsScreen} />
  </Tab.Navigator>
);

const TabNav = () => (
  <MenuProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen   options={{headerShown: false}}  name="Main" component={TabNavigator} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> 
        <Stack.Screen name="CameraScreen" component={CameraScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  </MenuProvider>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginLeft: 15,
  },
  menuText: {
    fontSize: 16,
    padding: 10,
  },
});

export default TabNav;