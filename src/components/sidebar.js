import React, {useContext} from "react";
import {OwnerContext} from "../context/ownerContext";
import Search from "./search";
import OwnerList from "./ownerList";
import styles from '../styles/sidebar.module.less';

const Sidebar = (props) => {
    const { owners, currentOwners, setCurrentOwners, choosenOwner, setChoosenOwner } = useContext(OwnerContext);

    const filterOwnersByInput = (filterWord) => {
        if (filterWord === '') return setCurrentOwners([...owners]);
        const newCurrentOwners = currentOwners.filter((owner) => {
            return owner.owner.firstName.toLowerCase().indexOf(filterWord.toLowerCase()) !== -1 ||
                owner.owner.lastName.toLowerCase().indexOf(filterWord.toLowerCase()) !== -1;
        });
        setCurrentOwners([...newCurrentOwners]);
    };

    const clickOnOwner = (chooseOwner) => {
        if (chooseOwner !== choosenOwner) setChoosenOwner(chooseOwner);
        else setChoosenOwner(null);
    };

    return currentOwners && currentOwners.length ? (
        <div className={ styles.sidebar }>
            <div className="sidebar__search">
                <Search setCurrentOwners={ filterOwnersByInput }/>
            </div>
            <div className="sidebar__owners-list owners">
                <OwnerList formatDate={ props.formatDate } currentOwners={ currentOwners } clickOwner={ clickOnOwner } chosenOwner={ choosenOwner }/>
            </div>
        </div>
    ) : (
        <div className={ styles.sidebar }>
            <div className="sidebar__search">
                <Search setCurrentOwners={ filterOwnersByInput }/>
            </div>
            <div className="sidebar__owners-list">
                <h4 className={ styles.sidebar__title }>Loading owners...</h4>
            </div>
        </div>
    );
};

export default Sidebar;