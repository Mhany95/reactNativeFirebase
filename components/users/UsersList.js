import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text, 
    Dimensions,
    I18nManager,
    FlatList
} from 'react-native';
import TextManager from '../managers/TextManager'

export default class UsersList extends Component{
    static navigationOptions = {
        headerTitle: "Users"
    }
    constructor(props){
        super(props);
        this.state={
            listData: []
        }
    }
    
    componentDidMount() {
        this.getDataFromAPI();
    }

    getDataFromAPI = async () =>{
        const response = await fetch("https://randomuser.me/api?results=15");
        const jsonList = await response.json();
        this.setState({ listData: jsonList.results})
    }

    handlePress = (user) =>{
        this.props.navigation.navigate('UserDetails', {user: user});
    }

    render(){
        return(
            <View style={{backgroundColor: 'white'}}>
                {this.state.listData == []?
                    <Text
                        style={{fontSize: 15, alignSelf: 'center'}}
                    >
                        Fetching Data ..
                    </Text>
                    :
                    <FlatList
                        data={this.state.listData}
                        keyExtractor={(obj, index) => index}
                        renderItem={(item)=>
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <TouchableOpacity
                                    onPress={()=>this.handlePress(item.item)}
                                    style={{height: 50, borderColor:"#eeeeee", borderTopWidth:1, borderBottomWidth:1, alignItems: 'flex-start'}}
                                >
                                    <View style={{justifyContent: 'center', flex: 1, marginLeft: 15}}>
                                        <Text style={{fontSize: 14, color: 'black'}}>
                                            {String().concat(TextManager.capitalizeText(item.item.name.first)," ", TextManager.capitalizeText(item.item.name.last))}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                }
            </View>
        );
    }
}