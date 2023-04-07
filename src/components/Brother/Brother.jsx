import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h3>Brother: {ring}</h3>
        </div>
    );
};

export default Brother;