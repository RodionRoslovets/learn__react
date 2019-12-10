import React from 'react';
// import Radium from 'radium';
import './Car.scss';


class Car extends React.Component{

    componentWillReceiveProps(nextProps){
        console.log('Car componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Car shouldComponentUpdate', nextProps, nextState);

        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState){
        console.log('Car componentWillUpdate', nextProps, nextState);
    }

    // static getDerivedStateFromProps(nextProps, previousState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, previousState);

    //     return previousState
    // }

    componentDidUpdate(){
        console.log('Car componentDidUpdate');
    }

    // getSnapshotBeforeUpdate(){
    //     console.log('Car getSnapshotBeforeUpdate');
    // }

    componentWillUnmount(){
        console.log('Car componentWillUnmount');
    }

    render(){
        console.log('Car render');

        if(Math.random()>0.7){
            throw new Error('Car random failed');
        }

        const inputClasses = ['input'];

        if(this.props.name !== ''){
            inputClasses.push('green');
        } else {
            inputClasses.push('red');
        }

        if(this.props.name.length > 4 ){
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
                <h3>Car model:{this.props.name}</h3>
                <p>Car year:<strong>{this.props.year} </strong></p>
                <input type='text' 
                onChange={this.props.onChangeName} 
                value={this.props.name}
                className={inputClasses.join(' ')}/>
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car