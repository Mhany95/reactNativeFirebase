import React, {Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text, Dimensions,
    I18nManager,
    DrawerLayoutAndroid,
    Image,
    CameraRoll,
    FlatList
} from 'react-native';
export default class GalleryPhotos extends Component{
    
    static navigationOptions = {
        tabBarLabel: "Photos",
    }

    constructor(props){
        super(props);
        this.state={
            photos: []
        }
    }

    componentDidMount() {
        CameraRoll.getPhotos({
            first: 15,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges });
          })
          .catch((ex) => {
             console.log(ex);
          });
    }

    render(){
        return(
            <View style={{flex:1 , backgroundColor: 'white'}}>
                {this.state.photos.length == 0?
                    <View
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Text
                            style={{fontSize: 16, fontWeight:"500"}}
                        >
                            No Photos were found in your gallery!
                        </Text>
                    </View>
                    :
                    <FlatList
                        style={{flex: 1}}
                        data={this.state.photos}
                        keyExtractor={(obj, index) => index}
                        renderItem={(item)=>
                            <Image
                                style={{
                                    //To have a square shape
                                    width: Dimensions.get("window").width / 3,
                                    height: Dimensions.get("window").width / 3,
                                }}
                                source={{uri: item.item.node.image.uri}}
                            />
                        }
                        numColumns={3}
                    />
                }
            </View>
        );
    }
}