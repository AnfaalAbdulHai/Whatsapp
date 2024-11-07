import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import { MenuProvider, Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://via.placeholder.com/150',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://randomuser.me/api/portraits/men/45.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'John Doe',
    avatar_url: 'https://randomuser.me/api/portraits/men/36.jpg',
    subtitle: 'Product Manager',
  },
  {
    name: 'Jane Smith',
    avatar_url: 'https://randomuser.me/api/portraits/women/25.jpg',
    subtitle: 'Marketing Director',
  },
  {
    name: 'Sam Green',
    avatar_url: 'https://randomuser.me/api/portraits/men/22.jpg',
    subtitle: 'Software Engineer',
  },
  {
    name: 'Amy Farha',
    avatar_url: 'https://via.placeholder.com/150',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://randomuser.me/api/portraits/men/45.jpg',
    subtitle: 'Vice Chairman',
  },
  {
    name: 'John Doe',
    avatar_url: 'https://randomuser.me/api/portraits/men/36.jpg',
    subtitle: 'Product Manager',
  },
  {
    name: 'Jane Smith',
    avatar_url: 'https://randomuser.me/api/portraits/women/25.jpg',
    subtitle: 'Marketing Director',
  },
  {
    name: 'Sam Green',
    avatar_url: 'https://randomuser.me/api/portraits/men/22.jpg',
    subtitle: 'Software Engineer',
  },
];

const ChatsScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredList, setFilteredList] = useState(list);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = list.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <Image
        source={require('../assets/meta-ai-logo.webp')}
        style={styles.logo}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Ask Meta AI or Search"
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={{ uri: item.avatar_url }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <MenuProvider style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>WhatsApp</Text>
          <View style={styles.headerIcons}>
            <MaterialIcon
              name="camera-alt"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Menu>
              <MenuTrigger>
                <IoniIcon name="ellipsis-vertical" size={24} color="black" />
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

        {/* Main Content */}
        <FlatList
          ListHeaderComponent={renderSearchBar}
          data={filteredList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.scrollContent}
        />

        {/* Floating Action Buttons */}
        <View style={styles.fabContainer}>
          <TouchableOpacity style={styles.fab}>
            <Image
              source={require('../assets/meta-ai-logo.webp')}
              style={styles.fabIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fabPlus}>
            <Text style={styles.fabPlusText}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 35,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 9,
  },
  headerText: {
    color: 'green',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 5,
  },
  scrollContent: {
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    alignItems: 'center',
  },
  fab: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
    width: 40,
    height: 40,
  },
  fabPlus: {
    backgroundColor: '#008000',
    borderRadius: 15,
    padding: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabIcon: {
    width: 20,
    height: 20,
  },
  fabPlusText: {
    color: 'white',
    fontSize: 24,
  },
  menuText: {
    fontSize: 16,
    padding: 10,
  },
});

export default ChatsScreen;
