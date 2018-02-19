//@flow

import React, {Component} from "react";
import {Button, View} from "react-native";
import styles from "./Styles";

interface BattleScreenProps {

}

export default class BattleScreen extends Component<BattleScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <Button title="Start Battle" onPress={() => onStartBattlePressed()}/>
                </View>
            </View>
        );
    }
}

function onStartBattlePressed() {

}
