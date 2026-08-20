import { Component } from "react";
import styles from './Info.module.css'

class Info extends Component {



    render() {
        const {total,completed } = this.props

        return(
            <div className={styles.info}>
            <p className={styles.item}>Всього завданн: {total}</p>
            <p className={styles.item}>Виканоно: {completed}</p>
            </div>
        )
    }
} 

export default Info