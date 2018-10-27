import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text, 
    Dimensions,
    I18nManager,
    Image
} from 'react-native';
import TextManager from '../managers/TextManager'

export default class UserDetails extends Component{
    static navigationOptions = {
        headerTitle: "User Details"
    }

    constructor(props){
        super(props);
    }
    

    render(){
        return(
            <View
                style={{flex: 1, backgroundColor: 'white', flexDirection: 'column'}}
            >
                <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center' , borderBottomWidth:1, borderColor: "#eeeeee"}}>
                    <Image source= {{uri: this.props.navigation.state.params.user.picture.large, height: 180, width: 180}}/>
                </View>

                <View style={{flex: 3, marginLeft: 10}}>
                    <View style={{flex: 0.7, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#eeeeee'}}>
                        <Text style={{fontSize: 15, color: 'black'}}>
                            {String().concat("First Name: ", TextManager.capitalizeText(this.props.navigation.state.params.user.name.first))}
                        </Text>
                    </View>

                    <View style={{flex: 0.7, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#eeeeee'}}>
                        <Text style={{fontSize: 15, color: 'black'}}>
                            {String().concat("Last Name: ", TextManager.capitalizeText(this.props.navigation.state.params.user.name.last))}
                        </Text>
                    </View>

                    <View style={{flex: 0.7, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#eeeeee'}}>
                        <Text style={{fontSize: 15, color: 'black'}}>
                            {String().concat("Gender: ", TextManager.capitalizeText(this.props.navigation.state.params.user.gender))}
                        </Text>
                    </View>

                    <View style={{flex: 0.7, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#eeeeee'}}>
                        <Text style={{fontSize: 15, color: 'black'}}>
                            {String().concat("City: ", TextManager.capitalizeText(this.props.navigation.state.params.user.location.city))}
                        </Text>
                    </View>

                    <View style={{flex: 0.7, justifyContent: 'center', borderBottomWidth: 1, borderColor: '#eeeeee'}}>
                        <Text style={{fontSize: 15, color: 'black'}}>
                            {String().concat("Email: ", this.props.navigation.state.params.user.email)}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}