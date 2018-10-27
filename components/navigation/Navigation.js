import React, {Component} from 'react'
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import Login from '../registration/Login'
import Home from '../content/Home'
import DrawerContent from '../drawer/DrawerContent'
import UsersList from '../users/UsersList'
import UserDetails from '../users/UserDetails'
import GalleryPhotos from '../gallery/GalleryPhotos'
import GalleryVideos from '../gallery/GalleryVideos'

export const Stack = StackNavigator({
    Login: {
      screen: Login,
    },
    Home: {
        screen: Home,
    },
    DrawerContent: {
      screen: DrawerContent
    },
    UsersList: {
      screen: UsersList
    },
    UserDetails: {
      screen: UserDetails
    },
    TabNav:{
      screen: TabNavigator({
        GalleryPhotos:{
          screen: GalleryPhotos
        },
        GalleryVideos:{
          screen: GalleryVideos
        }
      },
      {
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
          labelStyle: {
            fontSize: 13,
            color: '#000000'
          },
          style: {
            backgroundColor: '#ffffff'
          }
        },
      })
    }
  },
  {
    initialRouteName: "Login"
  });
