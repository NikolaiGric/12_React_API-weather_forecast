import React from 'react';

const Search = props => (
    <div className="search">
        <form onSubmit={props.weatherMethod}>
            <input type='text' name='city' placeholder='Город'/>
            <button>Получить погоду</button>
        </form>
    </div>
);


export default Search;