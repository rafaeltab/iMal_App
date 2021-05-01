import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { Colors } from "../Configuration/Colors";
import { AnimeNode } from "../APIManager/ApiBasicTypes";
import NoImageKurabu from "../../assets/NoImageKurabu.svg";
import { StackNavigationProp } from "@react-navigation/stack";
import { Console } from "node:console";

type AnimeItemProps = {
    item: AnimeNode;
    width?: number;
    navigator: StackNavigationProp<any, any>;
};

type AnimeItemState = {
    item: AnimeNode;
    navigator: StackNavigationProp<any, any>;
};

class AnimeItem extends React.Component<AnimeItemProps, AnimeItemState> {
    constructor(props: AnimeItemProps) {
        super(props);

        this.state = {
            item: props.item,
            navigator: props.navigator,
        };
    }

    public openDetails() {
        this.state.navigator.push("DetailsScreen", {
            item: this.state.item.node.id,
        });
    }

    render() {
        var width = this.props.width ?? Dimensions.get("window").width / 2 - 15;

        var fontSize = Dimensions.get("window").width / 34;

        var sizer = Dimensions.get("window").width / 400;

        const styles = StyleSheet.create({
            animeContainer: {
                // height: 200,
                width: width,
                marginTop: 10,
                marginLeft: 10,
            },
            title: {
                fontSize: fontSize,
                color: Colors.TEXT,
                textAlign: 'center',
                position: 'absolute',
                backgroundColor: Colors.TRANSPARENT_BACKGROUND,
                // top: (1.5 * width) - 50 * sizer, 
                left: 0,
                right: 0, 
                bottom: 0,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 5,
                paddingLeft: 5,
                minHeight: 40 * sizer
            },
            image: {
                width: width,
                height: 1.5 * width,
            },
        });

        return (
            <TouchableOpacity
                style={styles.animeContainer}
                onPress={this.openDetails.bind(this)}>
                {this.state.item.node.main_picture !== undefined ? (
                    <Image
                        style={styles.image}
                        source={{
                            uri: this.state.item.node.main_picture.medium,
                        }}
                    />
                ) : (
                    <View style={styles.image}>
                        <NoImageKurabu style={styles.image} />
                    </View>
                )}
                <Text style={styles.title}>{this.state.item.node.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default AnimeItem;
