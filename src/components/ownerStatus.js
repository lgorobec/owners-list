import React from "react";
import styles from '../styles/ownerStatus.module.less';
import cx from "classnames";

const OwnerStatus = (props) => {
    const status = props.status === 'assigned' ? 'ASD' : (props.status === 'unassigned' ? 'UNA' : 'COM');
    const className = cx(styles.status, {
        [styles.status_UNA]: status === 'UNA',
        [styles.status_COM]: status === 'COM',
        [styles.status_ASD]: status === 'ASD'
    });

    return (
        <span className={ className }>
            { status }
        </span>
    );
};

export default OwnerStatus;