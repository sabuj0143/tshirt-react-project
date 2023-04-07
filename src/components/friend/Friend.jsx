import React from 'react';

const Friend = ({ring}) => {
    return (
        <div>
            <h3>friend</h3>
            {ring && <p>Ring: {ring}</p>}
        </div>
    );
};

export default Friend;