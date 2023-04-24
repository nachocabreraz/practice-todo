import React from "react";

const Card = ({ item }) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', margin: '1rem'}}>
            {item.task}
            <button onClick={(e)=> console.log(e.currentTarget.id)} >x</button>
        </div>
    )
};

export default Card;