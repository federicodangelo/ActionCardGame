//@flow

import ImageSourcePropType from "react-native/Libraries/Image/ImageSourcePropType.js"

interface CardDefinition {
    id: string;
    icon: string
}

function buildCardNameFromId(id:string) : string {
    return id.split("-").slice(1).map(x => x[0].toUpperCase() + x.substr(1)).join(" ");
}

function createCardDefinition(id: string, icon: ImageSourcePropType): CardDefinition {
    return {id: id, icon: icon, name: buildCardNameFromId(id)};
}

let cardsDefinitions: CardDefinition[] = [
    createCardDefinition("card-2-diamonds", require("../../assets/cards/card-2-diamonds.png")),
    createCardDefinition("card-3-diamonds", require("../../assets/cards/card-3-diamonds.png")),
    createCardDefinition("card-4-clubs", require("../../assets/cards/card-4-clubs.png")),
    createCardDefinition("card-5-hearts", require("../../assets/cards/card-5-hearts.png")),
    createCardDefinition("card-ace-clubs", require("../../assets/cards/card-ace-clubs.png")),
    createCardDefinition("card-jack-hearts", require("../../assets/cards/card-jack-hearts.png")),
    createCardDefinition("card-king-spades", require("../../assets/cards/card-king-spades.png")),
    createCardDefinition("card-queen-diamonds", require("../../assets/cards/card-queen-diamonds.png"))

];

let cardsDefinitionsMap: { [cardId: string]: CardDefinition } = {}
cardsDefinitions.forEach((card) => cardsDefinitionsMap[card.id] = card)

export function getCardsDefinitions(): CardDefinition[] {
    return cardsDefinitions;
}

export function getCardsDefinitionsMap(): { [cardId: string]: CardDefinition } {
    return cardsDefinitionsMap;
}
