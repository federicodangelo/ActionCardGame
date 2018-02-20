//@flow

import React, {Component} from "react";
import {Image, Text, View, TouchableHighlight, Alert} from "react-native";
import {CardDefinition} from "../model/Cards"

interface CardViewProps {
  id:number;
  card:CardDefinition;
}

export default class CardView extends Component<CardViewProps> {

    render() {

        return (
            <View style={{padding: "0.5%", width: "25%"}}>
                <TouchableHighlight onPress={() => this.onCardClicked(this.props.id, this.props.card) }>
                    <View style={{backgroundColor: "black", paddingBottom: "5%"}}>
                        <Image
                            style={{width: "100%"}}
                            resizeMode="contain"
                            source={this.props.card.icon}
                        />
                        <Text numberOfLines={1} style={{color: "white", textAlign: "center"}}>{this.props.card.name}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }

    onCardClicked(id:number, card:CardDefinition) : void {
        Alert.alert(`Clicked on card ${card.name} with id ${id}`)
    }

}
