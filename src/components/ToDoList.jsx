import React from "react";
import Card from "./Card";

// terminar boton de delete
const ToDoList = ({ list }) => {

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <div>
                        <Card key={index} item={item} /> <button key={index}>x</button>
                    </div>
                )
            })}
        </div>
    )
};

export default ToDoList;