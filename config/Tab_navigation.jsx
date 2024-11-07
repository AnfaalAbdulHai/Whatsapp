import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFont from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IoniIcon from 'react-native-vector-icons/Ionicons';

import UpdateScreen from '../Screens/UpdateScreen';
import CallsScreen from '../Screens/CallsScreen';
import CommunitiesScreen from '../Screens/CommunitiesScreen';
import ChatsScreen from '../Screens/ChatsScreen';
// import Stack_navigation from './config/Stack_navigation';

const Tab = createBottomTabNavigator();

function Tab_navigation() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#008000',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarLabelStyle: {
            color: 'black',
            fontWeight: 'bold', // Bold text for active tab
          },
          tabBarStyle: {
            height: 70, // Adjust height of tab bar
            paddingBottom: 10, // Add extra padding at the bottom
          },
        }}>
        <Tab.Screen
          name="Chats"
          component={ChatsScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeTabBackground,
                ]}>
                <IconFont name="comments" size={size} color={color} />
              </View>
            ),
            headerTitle: 'WhatsApp',
            headerTitleStyle: {
              color: 'green',
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Updates"
          component={UpdateScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeTabBackground,
                ]}>
                <MaterialIcon name="update" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Communities"
          component={CommunitiesScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeTabBackground,
                ]}>
                <MaterialIcon name="groups" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={CallsScreen}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <View
                style={[
                  styles.iconContainer,
                  focused && styles.activeTabBackground,
                ]}>
                <IoniIcon name="call-outline" size={size} color={color} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 75, // Rounded borders
    padding: 6, // Padding for better layout
  },
  activeTabBackground: {
    alignContent: 'center',
    alignItems: 'center',

    width: 65,
    backgroundColor: 'rgba(199, 246, 199, 0.5)', // Light green background for active tab
  },
});

export default Tab_navigation;


