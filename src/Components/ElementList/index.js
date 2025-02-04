import styles from './ElementList.module.css'
import React from 'react'
function ElementList(props){

    const {title, icon} = props.data

    return(
        <li>
            <div className={styles.iconContainer}>
                {React.cloneElement(icon, { className: styles.iconStyle })}
                <p>{title}</p>
            </div>
        </li>
    )
}

export default ElementList