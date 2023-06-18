import React from 'react';
import Spinner from '../Spinner/Spinner';
import "./Countries.css"

const Countries = ({ countries, isLoading }) => {

    if (isLoading) {
        return (
            <Spinner />
        )
    }
    return (
        <ul className='wrapper'>
            {
                countries?.map(el => (
                    <li key={el.name} className="country">
                        <h4>{el.name}</h4>
                        <img src={el.flag} alt={el.name} />
                    </li>
                ))
            }
        </ul>
    );
};

export default Countries;