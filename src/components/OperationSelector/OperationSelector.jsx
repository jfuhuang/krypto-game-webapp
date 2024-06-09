import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OperationSelector.css'; // Import the CSS file

export default function OperationSelector({location, size, onOperationSelect }) {
    const [selectedOperation, setSelectedOperation] = useState(null);

    const handleOperationClick = (operation) => {
        setSelectedOperation(operation);
        onOperationSelect(operation);
    };

    return (
        <div style={{...location, ...size}} className="operation-selector circle text-center">
            <button className="btn btn-primary quadrant top-left" onClick={() => handleOperationClick('add')}>+</button>
            <button className="btn btn-primary quadrant top-right" onClick={() => handleOperationClick('subtract')}>-</button>
            <button className="btn btn-primary quadrant bottom-left" onClick={() => handleOperationClick('multiply')}>X</button>
            <button className="btn btn-primary quadrant bottom-right" onClick={() => handleOperationClick('divide')}>÷</button>
        </div>
    );
}

OperationSelector.propTypes = {
    onOperationSelect: PropTypes.func.isRequired,
};