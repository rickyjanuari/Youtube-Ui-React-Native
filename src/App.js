/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './components/VideoItem';
import data from './data.json';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.NavBav}>
            <Image source={require('./images/logo.png')} style={{width:98,height:22}}/>
            <View style={styles.RightNav}>
                <TouchableOpacity>
                    <Icon style={styles.NavIcon} name="search" size={25}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon style={styles.NavIcon} name="account-circle" size={25}/>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.Body}>
            
            <FlatList
                data={data.items}
                renderItem={(video)=><VideoItem video={video.item}/>}
                keyExtractor={(item)=>item.id}
            />
        </View>
        <View style={styles.TabBar}>
            <TouchableOpacity style={styles.TabItem}>
                <Icon style={styles.TabIcon,styles.red} name="home" size={25}/>
                <Text style={styles.TabTitle,styles.red}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabItem}>
                <Icon style={styles.TabIcon} name="whatshot" size={25}/>
                <Text style={styles.TabTitle}>Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabItem}>
                <Icon style={styles.TabIcon} name="subscriptions" size={25}/>
                <Text style={styles.TabTitle}>Subscriptions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabItem}>
                <Icon style={styles.TabIcon} name="notifications" size={25}/>
                <Text style={styles.TabTitle}>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TabItem}>
                <Icon style={styles.TabIcon} name="folder" size={25}/>
                <Text style={styles.TabTitle}>Library</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NavBav: {
      height: 70,
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingTop: 15,
      shadowOffset: {width:0, height: 0.5},
      shadowOpacity: 0.3,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  RightNav: {
      flexDirection: 'row',
  },
  NavIcon: {
      marginLeft: 20,
  },
  TabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  TabItem: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  TabTitle: {
      fontSize: 11,
      color: '#3c3c3c'
  },
  TabIcon: {
     color: '#3c3c3c'
  },
  Body: {
      flex: 1,
  },
  red: {
      color: 'red'
  }

});
