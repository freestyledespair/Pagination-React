import React from 'react';

const Paginator = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            {
                pageNumbers.map((number) => (

                    <button onClick={() => paginate(number)} key={number}>{number}</button>
                ))
            }
        </div>
    );
};

export default Paginator;