import React, { useState } from "react";

const Form = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} placeholder="Enter new task" onChange={handleChange} />
            <button>Submit</button>
        </form>
    )
};

export default Form;