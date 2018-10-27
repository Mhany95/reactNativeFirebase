import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text, Dimensions,
    I18nManager,
    DrawerLayoutAndroid,
    Image
} from 'react-native';
import DrawerContent from '../drawer/DrawerContent'
import UsersList from '../users/UsersList'

export default class Home extends Component{
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null
    }
    openDrawer =()=>{
        this.refs["drawer"].openDrawer();
    }
    render() {
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "column"
                }}
            >
                <View style={{flex: 0.07, justifyContent: 'center', marginLeft: 10}}>
                    <TouchableOpacity onPress={this.openDrawer}>
                        <Image source={{uri: "https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-128.png", height: 25, width: 25}}/>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1}}>
                    <DrawerLayoutAndroid
                        renderNavigationView= {()=> <DrawerContent navigation= {this.props.navigation}/>} 
                        drawerWidth={(Dimensions.get('window').width) / 1.6}
                        drawerPosition={DrawerLayoutAndroid.positions.Left}
                        style={{backgroundColor: "#ffffff"}}
                        ref={"drawer"}
                    >
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text
                                style={{fontSize: 16, fontWeight:"500"}}
                            >
                                Welcome to the application!
                            </Text>
                        </View>
                    </DrawerLayoutAndroid>
                </View>
            </View>
        )
    }
}