import React from "react";
import styles from '../styles/ownerList.module.less';
import OwnerItem from "./ownerItem";

const OwnerList = (props) => {
    const owners = props.currentOwners;
    const activeOwner = props.chosenOwner;

    return (
        <div className={ styles.owners }>
            <div>
                <div className={ styles.owners__headers }>
                    <span className={ styles.owners__headers_td }>Owner</span>
                    <span className={ styles.owners__headers_td }>Reported</span>
                    <span className={ styles.owners__headers_td }>Asset</span>
                    <span className={ styles.owners__headers_td }>Status</span>
                </div>
                {
                    owners.map((owner) => {
                        const active = activeOwner === owner;
                        return ( <OwnerItem formatDate={ props.formatDate } owner={ owner } key={ owner.ticketId } clickOwner={ props.clickOwner } active={ active }/> );
                    })
                }
            </div>
        </div>
    );
};

export default OwnerList;