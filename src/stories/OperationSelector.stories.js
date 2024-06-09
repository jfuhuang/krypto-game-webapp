import React from 'react';
import OperationSelector from '../components/OperationSelector/OperationSelector.jsx';

export default {
    title: "Operation Selector",
    component: OperationSelector,
    argTypes: {
        onOperationSelect: { action: 'clicked' },
    },
};

const Template = (args) => <OperationSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
    onOperationSelect: () => {},
    location: { top: 50, right: 75, bottom: 0, left: 0 },
    size: { width: "12rem", height: "12rem" }
};