import React, {Component} from "react" 

import './todo-list-item.css'

export default class TodoListItem extends Component{

    render() {

        const { label, onDeleted,
            onToggleImportant,
            onToggleDone,
            important, done} = this.props
       
        let classNames = 'todo-list-item'
        if (done) {
            classNames+=' done'
        }

        if (important) {
            classNames+=' important'
        }

    return (
        <span className={classNames}>
            <span
                className='todo-list-item-label'
                onClick={ onToggleDone }>
                {label}
            </span>
            <span>
                <button
                    type='button'
                    className='btn btn-outline-success btn-sm '
                    onClick={ onToggleImportant}>
                        <i className="bi bi-arrow-up-square"></i>
                    </button>
                <button 
                    type="button"
                    className="btn btn-outline-danger btn-sm "
                    onClick={onDeleted}>
                        <i className="bi bi-trash"></i>
                    </button>
                </span>
            </span>
    )

    }
}
