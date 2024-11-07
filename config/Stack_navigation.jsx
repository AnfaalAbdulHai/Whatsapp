import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../Screens/SettingsScreen';
import ImageScreen from '../Screens/ImageScreen';
import Tab_navigation from './Tab_navigation';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Stack_navigation() {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tab_navigation}
        options={{headerShown: false, headerTintColor: 'white'}}
        //   options={{
        //     tabBarIcon: ({focused, color, size}) => (
        //       <View
        //         style={[
        //           styles.iconContainer,
        //           focused && styles.activeTabBackground,
        //         ]}>
        //         <IconFont name="comments" size={size} color={color} />
        //       </View>
        //     ),
        //     headerTitle: 'WhatsApp',
        //     headerTitleStyle: {
        //       color: 'green',
        //       fontWeight: 'bold',
        //     },
        //   }}
      />
      <Stack.Screen
        name="Settings"
        options={{
          headerTitle: 'Settings',
          headerTitleStyle: {
            color: 'white', // Set text color to white
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#008000', // Set background color of the header
          },
          headerTintColor: 'white',
          headerTitleAlign: 'left', // Align the title to the left
          headerLeftContainerStyle: {
            paddingLeft: 10, // Adjust padding between back arrow and screen edge
          },
        }}
        component={SettingsScreen}
      />
      <Stack.Screen name="Profile" options={{
          headerTitle: 'Settings',
          headerTitleStyle: {
            color: 'white', // Set text color to white
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#008000', // Set background color of the header
          },
          headerTintColor: 'white',
          headerTitleAlign: 'left', // Align the title to the left
          headerLeftContainerStyle: {
            paddingLeft: 10, // Adjust padding between back arrow and screen edge
          },
        }}
        component={ImageScreen} />
    </Stack.Navigator>
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

export default Stack_navigation;
