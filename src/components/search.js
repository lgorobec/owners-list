import React, { useState } from 'react';
import styles from '../styles/search.module.less';
import SearchIcon from '@material-ui/icons/Search';

const Search = (props) => {

    const { filter } = useState('');

    const filterOwners = (event) => {
        props.setCurrentOwners(event.target.value);
    };

    return (
        <div className={ styles.search }>
            <SearchIcon className={ styles.search__icon }/>
            <input type="text" className={ styles.search__input } onInput={ filterOwners } defaultValue={ filter }/>
        </div>
    );
};

export default Search;