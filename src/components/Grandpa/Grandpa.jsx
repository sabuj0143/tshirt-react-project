import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('damion')
export const MoneyContext = createContext(0)

const Grandpa = () => {
    const ring = 'Gold'
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h3>Grandpa is here..</h3>
            <p>has Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='damion ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;