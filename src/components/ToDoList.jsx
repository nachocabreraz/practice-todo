import React from "react";
import Card from "./Card";

const ToDoList = ({ list }) => {

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <Card key={index} item={item} />
                )
            })}
        </div>
    )
};

export default ToDoList;