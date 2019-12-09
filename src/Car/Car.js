import React from 'react';
import Radium from 'radium';
import './Car.scss';

const Car = prop=>{
    const inputClasses = ['input'];


    if(prop.name !== ''){
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }

    if(prop.name.length > 4 ){
        inputClasses.push('bold');
    }

    const style = {
        border:'1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0,0,0,.14)',
        ':hover':{
            border:'1px solid #aaa',
            boxShadow:'0 4px 15px 0 rgba(0,0,0, .25)'
        }
    }

    return (
        <div className="car" style={style} >
            <h3>Car model:{prop.name}</h3>
            <p>Car year:<strong>{prop.year} </strong></p>
            <input type='text' 
            onChange={prop.onChangeName} 
            value={prop.name}
            className={inputClasses.join(' ')}/>
            <button onClick={prop.onDelete}>Delete</button>
        </div>
    )
};

export default Radium(Car)