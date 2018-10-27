import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text, Dimensions,
    I18nManager
} from 'react-native';

export default class DrawerContent extends Component {

    render() {
        return (
            <View style={{ width: Dimensions.get('window').width }}>
               
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('UsersList')}   
                >
                    <View
                        style={{
                            height: 55,
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottomColor: '#eeeeee',
                            borderBottomWidth: 1,
                            marginLeft: 10
                        }}
                    >
                        <Text>Users List</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('GalleryPhotos')}   
                >
                    <View
                        style={{
                            height: 55,
                            flexDirection: "row",
                            alignItems: "center",
                            marginLeft: 10
                        }}
                    >
                        <Text>Gallery</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}