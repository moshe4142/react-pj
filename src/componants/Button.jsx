import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button 
                onClick={props.func} 
                className={`${props.number === props.page ? 'myBg' : ''} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 m-2 mx-5`}
            >
                {props.number}
            </button>
        </div>
    );
}

export default Button;
