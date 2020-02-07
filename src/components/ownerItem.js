import React from "react";
import OwnerPhoto from "./ownerPhoto";
import OwnerStatus from "./ownerStatus";
import styles from '../styles/ownerItem.module.less';
import cx from "classnames";

const OwnerItem = (props) => {
    const owner = props.owner;
    const isActiveOwner = props.active;

    const className = cx(styles.owner, {
        [styles.owner_true]: isActiveOwner
    });

    const reportedTime = props.formatDate(new Date(owner.reportedTime), 'dd/MM/yyyy hh:mm');

    return (
        <div className={ className }  onClick={ () => props.clickOwner(owner) }>
            <div className={ styles.owner__i }>
                <span className={ styles.owner__td }>
                    <OwnerPhoto photo={ owner.owner.avatar }/>
                </span>
                    <span className={ styles.owner__td }>
                    { reportedTime }
                </span>
                    <span className={ styles.owner__td }>
                    { owner.asset.name }
                </span>
                    <OwnerStatus status={ owner.status }/>
            </div>
        </div>
    );
};
 
export default OwnerItem;