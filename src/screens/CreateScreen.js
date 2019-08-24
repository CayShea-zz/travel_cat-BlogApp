import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import { Context as BlogContext } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // const navId = navigation.getParam('id');
    const { addBlogPosts } = useContext(BlogContext);
    // const blogPost = state.find((blog) => blog.id === navId);

    
    return (
        <View>
            <Text style={styles.header}>Enter Title:</Text>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input}/>
            <Text style={styles.header}>Enter Content:</Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input}/>
            <Button 
                title="Add Blog Post" 
                onPress={() => {
                    addBlogPosts(title, content, () => {
                        navigation.navigate('AllBlogs')
                    });
                }}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    header: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
  });


  export default CreateScreen;