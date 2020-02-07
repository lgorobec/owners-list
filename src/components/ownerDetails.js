import React from "react";
import OwnerPhoto from "./ownerPhoto";
import OwnerStatus from "./ownerStatus";
import styles from '../styles/ownerDetails.module.less';

const OwnerDetails = (props) => {
    const choosenOwner = props.choosenOwner;

    return choosenOwner ? (
        <div className={ styles.details }>
            <div className={ styles.details__header }>
                <span className="owner-details__span">Ticket No. { choosenOwner.number }</span>
                <span className="owner-details__span">Last updated { props.formatDate(new Date(choosenOwner.lastUpdatedTime), 'dd/MM/yyyy hh:mm') }</span>
            </div>
            <div className={ styles.details__i }>
                <p className={ styles.details__title }>Owner</p>
                <div className={ styles.details__content }>
                    <OwnerPhoto photo={ choosenOwner.owner.avatar }/>
                    <div className={ styles.details__information }>
                        <p className={ styles.details__name }>{ `${choosenOwner.owner.firstName} ${choosenOwner.owner.lastName}` }</p>
                        <p className={ styles.details__spec }>{ choosenOwner.owner.specialities.join(', ') }</p>
                    </div>
                </div>
            </div>
            <div className={ styles.details__i }>
                <p className={ styles.details__title }>Details</p>
                <div className={ styles.details__content_wrap }>
                    <div className={ styles.details__info }>
                        <p className={ styles.details__caption }>Reported</p>
                        <p className={ styles.details__value }>{ props.formatDate(new Date(choosenOwner.reportedTime), 'dd/MM/yyyy hh:mm') }</p>
                    </div>
                    <div className={ styles.details__info }>
                        <p className={ styles.details__caption }>Status</p>
                        <OwnerStatus status={ choosenOwner.status }/>
                    </div>
                    <div className={ styles.details__info }>
                        <p className={ styles.details__caption }>Description</p>
                        <p className={ styles.details__value }> { choosenOwner.description }</p>
                    </div>
                </div>
            </div>
            <div className={ styles.details__i }>
                <p className={ styles.details__title }>Asset</p>
                <div className={ styles.details__content_wrap }>
                    <div className={ styles.details__info }>
                        <p className={ styles.details__caption }>Name</p>
                        <p className={ styles.details__value }>{ choosenOwner.asset.name }</p>
                    </div>
                    <div className={ styles.details__info }>
                        <p className={ styles.details__caption }>GeoCode</p>
                        <p className={ styles.details__value }>{ choosenOwner.asset.geoCode }</p>
                    </div>
                    <div className={ styles.details__info }>
                        <p className={ styles.details__caption }>Location</p>
                        <p className={ styles.details__value }>
                            <span className={ styles.details__location }>{ choosenOwner.asset.kmFrom.toFixed(3) }</span>
                            <span className={ styles.details__location }>{ choosenOwner.asset.kmTo.toFixed(3) }</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className={ styles.details }>No owner is choosen...</div>
    );
};

export default OwnerDetails;