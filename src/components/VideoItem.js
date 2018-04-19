import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class VideoItem extends Component {
    render(){
        let video = this.props.video;
        return (
            <View style={styles.container}>
                <Image source={{uri:video.snippet.thumbnails.medium.url}} style={{height:200}}/>
                <View style={styles.descContainer}>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/men/85.jpg'}} style={{width:50, height:50, borderRadius:25}}/>
                    <View style={styles.VideoDetail}>
                        <Text numberOfLines={2} style={styles.VideoTitle}>{video.snippet.title}</Text>
                        <Text style={styles.VideoStats}>{video.snippet.channelTitle + " · " + nFormatter(video.statistics.viewCount, 1)}</Text>
                        <Text style={styles.VideoStats}>4 Month Ago</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon color="#3c3c3c" name="more-vert" size={20}/>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
        function nFormatter(num, digits) {
            var si = [
              { value: 1, symbol: "" },
              { value: 1E3, symbol: "k" },
              { value: 1E6, symbol: "M" },
              { value: 1E9, symbol: "G" },
              { value: 1E12, symbol: "T" },
              { value: 1E15, symbol: "P" },
              { value: 1E18, symbol: "E" }
            ];
            var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
            var i;
            for (i = si.length - 1; i > 0; i--) {
              if (num >= si[i].value) {
                break;
              }
            }
            return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + ' views' ;
          }
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 0.5,
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 15,
    },
    VideoTitle: {
        
        fontSize: 16
    },
    VideoStats: {
        fontSize: 15,
        paddingTop: 3,
        color: '#3c3c3c',
    },
    VideoDetail: {
        paddingHorizontal: 15,
        flex: 1,
    }
});