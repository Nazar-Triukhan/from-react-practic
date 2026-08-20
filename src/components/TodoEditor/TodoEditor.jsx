import { Component } from "react";
import styles from './TodoEditor.module.css'

class TodoEditor extends Component {
    state={
        textValue: '',
    }

    hendelChange = (e) => {
        this.setState({
            textValue: e.target.value
        })
    }

    hendelSudmit = (e) => {
        e.preventDefault()

        const text = this.state.textValue.trim()

        if(!text){
            return
        }

        this.props.onAddTodo(text)
        this.setState({
            textValue: '', 
        })
    }


    render() {
        const {textValue} = this.state

        return(
            <form className={styles.form} onSubmit={this.hendelSudmit}>
                <input className={styles.input} type="text" name="" value={textValue} onChange={this.hendelChange}/>
                <button className={styles.button} type="submit">Create</button>
            </form>
        )
    }
}

export default TodoEditor