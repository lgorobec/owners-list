import React, { createContext, useEffect, useState } from 'react';
import * as axios from 'axios';

export const OwnerContext = createContext();

const OwnerContextProvider = (props) => {
    const  [owners, setOwners] = useState([]);
    const  [currentOwners, setCurrentOwners] = useState([]);
    const  [choosenOwner, setChoosenOwner] = useState(null);

    const getOwners = async () => {
        try {
            const { data } = await axios.get('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json');
            setOwners(data);
            setCurrentOwners(data);
        } catch (err){
            throw new Error(err);
        }
    };

    useEffect(() => {
        getOwners();
    }, []);

    return (
        <OwnerContext.Provider value={ { owners, currentOwners, setCurrentOwners, choosenOwner, setChoosenOwner } }>
            { props.children }
        </OwnerContext.Provider>
    );
};

export default OwnerContextProvider;