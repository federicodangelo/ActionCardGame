//@flow

import React, {Component} from "react";
import {Image, Text, View} from "react-native";

export default class CardView extends Component {

    render() {

        return (
            <View style={{padding: 2}}>
                <View style={{backgroundColor: "black", paddingBottom: 2}}>
                    <Image
                        style={{width: 100}}
                        resizeMode="contain"
                        source={this.props.card.icon}
                    />
                    <Text style={{color: "white", textAlign: "center"}}>{this.props.card.name}</Text>
                </View>
            </View>
        );
    }

}
