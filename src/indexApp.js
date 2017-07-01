import React, { Component } from 'react';
import CustomComponents from 'react-native-deprecated-custom-components';

import App from './app';
import Search from './components/Search';
import Details from './components/Details';

import buildStyleInterpolator from 'buildStyleInterpolator';

const NoTransition = {
    opacity: {
        from: 1,
        to: 1,
        min: 1,
        max: 1,
        type: 'linear',
        extrapolate: false,
        round: 100
    }
}

export default class IndexApp extends Component {
    state = {  }

    _renderScene(route, navigator) {
        var navigator = {navigator};
        switch(route.ident){
            case 'App':
                return (
                    <App {...navigator} />
                )
            case 'Search':
                return (
                    <Search {...navigator} />
                )
            case 'Details':
                return (
                    <Details {...navigator} {...route.passProps} />
                )
        }
    }
    _configureScene(route, routeStack) {
        switch(route.ident){
            case 'Search':
                return {
                    ...CustomComponents.Navigator.SceneConfigs.FloatFromLeft,
                    gestures: null,
                    defaultTransitionVelocity: 100,
                    animationInterpolators: {
                        into: buildStyleInterpolator(NoTransition),
                        out: buildStyleInterpolator(NoTransition),
                    }
                }
            case 'Details':
                return {
                    ...CustomComponents.Navigator.SceneConfigs.FloatFromLeft,
                    gestures: null,
                    defaultTransitionVelocity: 100,
                    animationInterpolators: {
                        into: buildStyleInterpolator(NoTransition),
                        out: buildStyleInterpolator(NoTransition),
                    }
                }
        }
    }
    render() {
        return (
            <CustomComponents.Navigator
                initialRoute={{ident: 'App'}}
                renderScene={this._renderScene}
                configureScene={this._configureScene}
            />
        );
    }
}