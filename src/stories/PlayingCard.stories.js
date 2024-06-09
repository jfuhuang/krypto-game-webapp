import PlayingCard from '../components/PlayingCard.jsx';
export default {
    title: "Playing Card",
    component: PlayingCard,
    argTypes: {
        cardData: {
            description: "The card data to display",
            control: {
                type: "object"
            }
        },
        cardDimensions: {
            description: "The dimensions of the card",
            control: {
                type: "object"
            }
        },
        isInteractive: {
            description: "Whether the card is interactive",
            control: {
                type: "boolean"
            }
        },
        isSelected: {
            description: "Whether the card is selected",
            control: {
                type: "boolean"
            }
        },
        onSelect: {
            description: "Function to call when the card is selected",
            control: {
                type: "function"
            }
        },
        onDeselect: {
            description: "Function to call when the card is deselected",
            control: {
                type: "function"
            }
        }
    }
}

const template = args => <PlayingCard {...args} />;

export const defaultCard = template.bind({});
defaultCard.args = {
    cardData: {
        id: 1,
        name: "ace"
    },
    cardDimensions: {
        height: "8.375rems",
        width: "12.4375rem",
    },
    isInteractive: false,
    isSelected: false,
    onSelect: () => {},
    onDeselect: () => {}
}