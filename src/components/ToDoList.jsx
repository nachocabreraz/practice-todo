import React from "react";
import Card from "./Card";

const ToDoList = ({ list, toggleHandler }) => {

    return (
        <div>
            {list.map((item, index) => {
                return (
                    <div>
                        <Card key={index} item={item} toggleHandler={toggleHandler} />
                    </div>
                )
            })}
        </div>
    )
};

export default ToDoList;