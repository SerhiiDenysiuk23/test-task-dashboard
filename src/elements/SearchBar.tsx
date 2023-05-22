import React, {ChangeEvent} from 'react';
import sprite from '../sprites.svg'
import {Customer} from "../types/customer";

interface SearchBarProps {
    onSearch: (results: string) => void;
    data: Customer[]
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch, data}) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div className="search-bar">
            <svg>
                <use href={`${sprite}#search`}/>
            </svg>
            <input
                type="text"
                className="search-bar__input"
                placeholder="Search"
                onChange={handleInputChange}
            />
        </div>
    );
};

export default SearchBar;
