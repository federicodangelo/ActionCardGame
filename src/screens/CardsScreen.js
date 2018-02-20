//@flow

import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import styles from "./Styles";
import CardView from "../components/CardView";
import {CardDefinition} from "../model/Cards"
import {getCardsDefinitions} from "../model/Cards"

interface CardsScreenProps {
  cards:CardDefinition[]
}

export default class CardsScreen extends Component<CardsScreenProps> {

    static defaultProps = {
      cards:getCardsDefinitions()
    }

    cards = []

    constructor(props:CardsScreenProps) {
        super(props)

        let cards = props.cards;

        cards.forEach((card, i) =>
            this.cards.push({id: i, card: card})
        );

        cards.forEach((card, i) =>
            this.cards.push({id: i + 100, card: card})
        );

        cards.forEach((card, i) =>
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
                                <CardView key={card.id} card={card.card} id={card.id}/>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}
