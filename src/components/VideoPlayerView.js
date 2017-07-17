import React, { Component } from 'react';
import { 
    Text,
    View,
    StyleSheet
} from 'react-native';

import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation';

export default class VideoPlayerView extends Component {
    componentDidMount() {
        Orientation.lockToLandscape();
    }
    render() {
        return (
            <View style={styles.container}>
                <VideoPlayer
                    source={require('../videos/video.mp4')}
                    title={"Chung TV"}
                    onBack={() => null}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})
