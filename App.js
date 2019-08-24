import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Provider as BlogProvider }  from './src/context/BlogContext';
import AllBlogsScreen from './src/screens/AllBlogsScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator(
    {
      AllBlogs: AllBlogsScreen,
      Show: ShowScreen,
      Create: CreateScreen,
      Edit: EditScreen
    },
    {
      initialRouteName: 'AllBlogs',
      defaultNavigationOptions: {
        title: 'Travel Cat Blogs'
      }
    }
)

const App = createAppContainer(navigator);



export default () => {
  return (
    <BlogProvider>
        <App />
    </BlogProvider>
  )
};

