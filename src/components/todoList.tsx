/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import styles from "./todo.module.scss";
import './todo.scss';



interface item {
    id: number;
    text: string;
    complected: boolean;
}


const TodoList: React.FC = () => {

    const [todus, setTudos] = useState<item[]>([
       
    ]);

    const handleDelete = (id: number) => {
        const newTodos = todus.filter(todo => todo.id !== id);
        setTudos(newTodos);
    }

    const [input, setInput] = useState<string>("")
    const handleToogel = (id:number) =>  {
        setTudos(
            todus.map((todo) => {
                if(todo.id === id) {
                    return {
                        ...todo, complected: !todo.complected
                    };
                }
                return todo;
            })
        );
    }

    const toAdd =() => {
        const newTodo: item = {id:Date.now(),text:input,complected:false}
        setTudos([...todus, newTodo]);
    }


  
    
return (
    <>

    
    <div className={styles.main}>
    <h1 className={styles.firsth1}>To Do</h1>
    <ul className={styles.forul}>
        {todus.map((todo) => (
            <>
            <li className={styles.forli}
            key={todo.id} 
            onClick={() => handleToogel(todo.id)}> 
            {todo.text}
            </li>
            <button className="forbutton"
            onClick={() =>
            handleDelete(todo.id)}>
                Delete
            </button> 
            </>
        ))}
    </ul>

    <input className="forinput" type="text"  
        placeholder="enter text" 
        onChange={(e) => setInput(e.currentTarget.value)}/>

    <button className="forbutton" 
    onClick={toAdd}> 
        click to add
    </button>

    </div>



    </>
)
}

export default TodoList
