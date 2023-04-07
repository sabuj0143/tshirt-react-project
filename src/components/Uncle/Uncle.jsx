import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin>nabil</Cousin>
                <Cousin>nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;