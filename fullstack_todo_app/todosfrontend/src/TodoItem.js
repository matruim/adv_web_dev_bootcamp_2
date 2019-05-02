import React from 'react';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
        <li
            style={{listStyle: 'none', margin:'5px'}}
        >
            <span
                style={{
                    textDecoration: completed ? 'line-through':'none'
                }}
                onClick={onToggle}
            >
                {name}
            </span>
            <span 
                style={{color: 'red', border: '2px solid red',textAlign:'center', margin:'5px', paddingRight:'3px'}}
                onClick={onDelete}
            > X </span>
        </li>
    );
export default TodoItem;