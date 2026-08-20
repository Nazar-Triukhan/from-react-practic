import { Component } from "react";
import styles from './TodoList.module.css'

class TodoList extends Component {


    render () {
        const {list, onTogle, onDelete} = this.props

        return (
            <ul className={styles.list}>
                {
                    list.map(e => {
                        return (
                            <li className={styles.item} key={e.id}>
                                <input type="checkbox"  checked={e.completed} onChange={() => onTogle(e.id)}/>
                                <p className={styles.text}>{e.text}</p>
                                <button className={styles.button} type="button" onClick={() => onDelete(e.id)}>delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default TodoList