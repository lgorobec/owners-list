import React, { useContext } from 'react';
import { OwnerContext } from '../context/ownerContext';
import Sidebar from './sidebar';
import OwnerDetails from './ownerDetails';
import styles from '../styles/workspace.module.less';

const Workspace = () => {
    const { choosenOwner } = useContext(OwnerContext);

    const format = function date2str(x, y) {
        let z = {
            M: x.getMonth() + 1,
            d: x.getDate(),
            h: x.getHours(),
            m: x.getMinutes(),
            s: x.getSeconds()
        };
        y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
        });

        return y.replace(/(y+)/g, function(v) {
            return x.getFullYear().toString().slice(-v.length)
        });
    };

    return (
        <div className={ styles.workspace }>
            <h1 className={ styles.workspace__title }>Tickets</h1>
            <div className={ styles.workspace__i }>
                <Sidebar formatDate={ format }/>
                <OwnerDetails choosenOwner={ choosenOwner } formatDate={ format }/>
            </div>
        </div>
    );
};

export default Workspace;