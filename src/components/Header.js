import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => props.toggle()}>
                <Icon 
                    name="bars"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>            
            <View style={styles.logoContain}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <Text style={styles.logoText}> aPhim </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => props.navigator.push({ident: 'Search'})}>
                <Icon 
                    name="search"
                    color="white"
                    size={25}
                />
            </TouchableWithoutFeedback>
        </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15
    },
    logoContain: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40
    },
    logoText: {
        fontSize: 22,
        color: 'white'
    }
});

export default Header