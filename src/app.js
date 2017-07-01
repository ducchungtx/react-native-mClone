import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import List from './components/List';
import Slide from './components/Slider';
import Header from './components/Header';
import SideMenu from 'react-native-side-menu';
import Menu from './components/Menu';

export default class App extends Component {   
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,

        }        
    }
    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    updateMenu(isOpen) {
        this.setState({
            isOpen
        })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                <View style={[{ flex: 1 }, styles.container]}>
                    <Header navigator={this.props.navigator} toggle={this.toggle.bind(this)} />
                    <Slide/>
                    <List navigator={this.props.navigator} />
                </View>                    
                </SideMenu>                
            </View>           
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
});