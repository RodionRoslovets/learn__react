import React from 'react';
import './Car.scss';
import withClass from  '../hoc/withClass';
import PropTypes from 'prop-types';

class Car extends React.Component{

    constructor(props){
        super(props);

        this.inputRef = React.createRef();
    }

    componentDidMount(){
        if(this.props.index === 0){
            this.inputRef.current.focus();
        }        
    }

    render(){
        console.log('Car render');

        const inputClasses = ['input'];

        if(this.props.name !== ''){
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if(this.props.name.length > 4 ){
            inputClasses.push('bold');
        }

        return (
            <React.Fragment>
                <h3>Car model:{this.props.name}</h3>
                <p>Car year:<strong>{this.props.year} </strong></p>
                <input type='text' 
                ref={this.inputRef}
                onChange={this.props.onChangeName} 
                value={this.props.name}
                className={inputClasses.join(' ')}/>
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>
        )
    }
}

Car.propTypes = {
    name:PropTypes.string ,
    year:PropTypes.number,
    index:PropTypes.number,
    onChangeName:PropTypes.func ,
    onDelete:PropTypes.func
}
export default withClass(Car, 'car')