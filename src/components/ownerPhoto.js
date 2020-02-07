import React from "react";
import styles from '../styles/ownerPhoto.module.less';

const OwnerPhoto = (props) => {
    const ownerPhoto = props.photo;

    return (
        <img src={ ownerPhoto } alt="" className={ styles.owner__photo }/>
    );
};

export default OwnerPhoto;