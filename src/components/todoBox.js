import { useState } from "react";

export const TodoBox = (props)=>{
    const [isChecked, setChecked] = useState(false)
    return (
        <div className="todo-box">
            <span className="todobox-checked" style={{backgroundColor:isChecked?"crimson":"rgb(196, 196, 196)"}} onClick={()=>{setChecked(!isChecked)}}></span>
            {props.title}
        </div>
    );    
}