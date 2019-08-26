import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';


const AllBlogsScreen = ({ navigation }) => {

  const { state, deleteBlogPosts, getBlogPosts } = useContext(BlogContext);

  //calls my API on compondentDidMount: call to server and pull in state
  useEffect(() => {
    getBlogPosts();
    navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    //to avoid memory leak (if choose to unmount this screen)
    return() => {
      listener.remove();
    };
  }, []);

    return(
        <View>
          <FlatList
              data={state}
              keyExtractor={(item) => item.title}
              renderItem={({ item }) => {
                return ( 
                  <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                      <View style={styles.container}>
                        <Text style={styles.text}> {item.title} </Text>
                        <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                          <FontAwesome name="trash-o" style={styles.icon}/>
                        </TouchableOpacity>
                      </View>
                  </TouchableOpacity>
                )}}
          />
        </View>
    )
};

//use this to customize the header/navigation
AllBlogsScreen.navigationOptions= ({ navigation }) => {
  return {
      headerRight: 
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name="plus" style={styles.iconTop}/>
      </TouchableOpacity>
  }
}


const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderColor: "gray",
      borderBottomWidth: 1
    },
    text: {
      fontSize: 18,
    },
    icon: {
      fontSize: 24
    },
    iconTop: {
      paddingRight: 10,
      fontSize: 30
    }
  });


export default AllBlogsScreen;