import { Component } from "react";
import styles from './Filter.module.css'

class Filter extends Component {



    render() {
         
        const { value, onChange} = this.props

        return(
            <input className={styles.input} type="text" value={value} onChange={onChange}/>
        )
    }
}

export default Filter