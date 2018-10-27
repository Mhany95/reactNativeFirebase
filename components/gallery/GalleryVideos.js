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
export default class GalleryVideos extends Component{
    
    static navigationOptions = {
        tabBarLabel: "Videos",
    }

    constructor(props){
        super(props);
        this.state={
            videos: []
        }
    }

    componentDidMount() {
        CameraRoll.getPhotos({
            first: 15,
            assetType: 'Videos',
          })
          .then(r => {
            this.setState({ videos: r.edges });
          })
          .catch((ex) => {
             console.log(ex);
          });
    }

    render(){
        return(
            <View style={{flex:1 , backgroundColor: 'white'}}>
                {this.state.videos.length == 0?
                    <View
                        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Text
                            style={{fontSize: 16, fontWeight:"500"}}
                        >
                            No Videos were found in your gallery!
                        </Text>
                    </View>
                    :
                    <FlatList
                        style={{flex: 1}}
                        data={this.state.videos}
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