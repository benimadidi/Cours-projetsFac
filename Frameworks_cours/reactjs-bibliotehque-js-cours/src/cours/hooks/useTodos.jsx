
import { useCallback, useReducer } from "react"

function todosReducer (state, action) {
    if (action.type === 'REMOVE_TODO') {
        return {
          ...state,
          todos: state.todos.filter(todo => todo !== action.payload)  
        }
    }
    if (action.type === 'TOGGLE_TODO'){
        return{
            ...state,
            todos: state.todos.map(todo => todo === action.payload ? {
                ...todo,
                checked: !todo.checked
            } : todo)
        }
    }
    if (action.type === 'REMOVE_ALL_TODO'){
        return{
            ...state,
            todos: state.todos.filter(todo => !todo.checked)
        }
    }

    if (action.type === 'TOGGLE_FILTER'){
        return{
            ...state,
            showCompleted: !state.showCompleted}
    }
    return state
}

export function useTodos () {
    const [state, dispatch] = useReducer(todosReducer, {
        showCompleted: true,
        todos : [{
            name: 'Faire les courses',
            checked: false
        }, 
        {
            name: 'Ranger les courses',
            checked: false
        },
        {
            name: 'Manger les courses',
            checked: false
        }]
    })

    const visibleTodos = state.showCompleted ? state.todos : state.todos.filter(todo => !todo.checked)

    return {
        showCompleted: state.showCompleted,
        visibleTodos: visibleTodos, 
        toggleTodo: (todo) => dispatch({type: 'TOGGLE_TODO', payload: todo}),
        removeTodo: (todo) => dispatch({type: 'REMOVE_TODO', payload: todo}),
        removeAllTodo: () => dispatch({type: 'REMOVE_ALL_TODO'}),
        toggleFilter: useCallback(() => dispatch({type: 'TOGGLE_FILTER'}), [])
    }
}