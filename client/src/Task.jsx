import React, {useState} from 'react';

const Task = (props) => {
    const [number, setNumber] = useState(1);
    const handleClick = () => {
        setNumber(number+1);
    }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded space-y-4 m-8 text-gray-400"> Task Description : {props.description} <br/>
    Task Status : {props.status} <br/>
    {number} <button onClick={handleClick} className="bg-blue-600 p-4 rounded"> click </button><br/>
    </div>
  )
}

export default Task