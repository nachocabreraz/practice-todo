import React from "react";
import Card from "./Card";

const ToDoList = ({ list }) => {

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <div>
                        <Card key={index} item={item} />
                    </div>
                )
            })}
        </div>
    )
};

export default ToDoList;