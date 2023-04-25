import React from "react";

const Card = ({ item, toggleHandler }) => {

    const handleClick = (e) => {
        e.preventDefault();
        toggleHandler(e.currentTarget.id)
    };

    return (
        <div id={item.id} key={item.id + item.task} name="item" value={item.id} onClick={handleClick} className={item.complete ? 'strike' : ''}>
            {item.task}
        </div>
    )
};

export default Card;