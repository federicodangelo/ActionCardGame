//@flow

import React from "react";
import TabNavigator from "react-navigation/src/navigators/TabNavigator";
import BattleScreen from "./screens/BattleScreen";
import ShopScreen from "./screens/ShopScreen";
import CardsScreen from "./screens/CardsScreen";
import ChatScreen from "./screens/ChatScreen";
import TournamentScreen from "./screens/TournamentScreen";
import TabBarBottom from "react-navigation/src/views/TabView/TabBarBottom";
import {Image} from "react-native";

export default TabNavigator(
    {
        Shop: {
            screen: ShopScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../assets/icons/shopping-cart.png')}
                        style={[styles.icon, {tintColor}]}
                    />
                ),
            }
        },
        Cards: {
            screen: CardsScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../assets/icons/card-joker.png')}
                        style={[styles.icon, {tintColor}]}
                    />
                ),
            }
        },
        Battle: {
            screen: BattleScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../assets/icons/battle-axe.png')}
                        style={[styles.icon, {tintColor}]}
                    />
                ),
            }
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../assets/icons/discussion.png')}
                        style={[styles.icon, {tintColor}]}
                    />
                ),
            }
        },
        Tournament: {
            screen: TournamentScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../assets/icons/trophy-cup.png')}
                        style={[styles.icon, {tintColor}]}
                    />
                ),
            }
        }
    },
    {
        headerMode: "none",
        initialRouteName: "Battle",
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
        },
    }
);

const styles = {
    icon: {
        width: 26,
        height: 26,
    },
};
