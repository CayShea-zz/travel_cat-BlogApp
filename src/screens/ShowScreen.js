import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {

    const { state } = useContext(BlogContext);
    const blogPost = state.find((blog) => blog.id === navigation.getParam('id'));
    
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>

        </View>
    )
};


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: 
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
            <MaterialIcons 
                name='edit'
                style={styles.iconTop}
            />
        </TouchableOpacity>
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    iconTop: {
        paddingRight: 10,
        fontSize: 30
      }
  });


  export default ShowScreen;