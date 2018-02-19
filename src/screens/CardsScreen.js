import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import styles from "./Styles";
import CardView from "../components/CardView";
import {getCardsDefinitions} from "../model/Cards"

export default class CardsScreen extends Component {

    cards = []

    constructor(props) {
        super(props)

        getCardsDefinitions().forEach((card, i) =>
            this.cards.push({id: i, card: card})
        );

        getCardsDefinitions().forEach((card, i) =>
            this.cards.push({id: i + 100, card: card})
        );

        getCardsDefinitions().forEach((card, i) =>
            this.cards.push({id: i + 200, card: card})
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: 'space-around'}}>
                        {
                            this.cards.map((card) => (
                                <CardView key={card.id} card={card.card}/>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
