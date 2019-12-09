import React from 'react';
import './App.scss';
import Car from './Car/Car';

class App extends React.Component{
  state = {
    cars:[
      {
        name:'Ford',
        year:'2018'
      },
      {
        name:'Audi',
        year:'2015' 
      },
      {
        name:'Mazda',
        year:'2011'
      }
    ],
    pageTitle:'React components',
    showCars:false,
    style:{
      border:'4px'
    }
  };

  toggleCarsHandler = () => {
    this.setState({
      showCars:!this.state.showCars
    });
  }

  onChangeName(name, ind){
    let car = this.state.cars[ind];

    car.name = name;

    let cars = [...this.state.cars];

    cars[ind] = car;

    this.setState({
      cars
    })
  }

  deleteHandler(ind){
    let cars = this.state.cars.concat();
    cars.splice(ind, 1);
    this.setState({
      cars
    })
  }
  
  styles = {
    fontSize:'20px',
    textAlign:'center'
  };
  
  render(){
    
    let cars = this.state.cars;

    let cars2 = false;

    if(this.state.showCars){
      cars2 = cars.map((car, ind)=>{
        return(
          <Car 
          mouseover={this.mousehandler}
          key={ind} 
          name={car.name}
          year={car.year}
          onDelete={this.deleteHandler.bind(this, ind)}
          onChangeName={(e) => this.onChangeName(e.target.value, ind)}
          />
        )           
      });
    }
    
    return (
      <div className="App" style={this.styles}>
        <h1 style={{color:'blue'}}>{this.state.pageTitle}</h1>
        
        <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        
        { cars2 }

      </div>
    );
  }
  
}

export default App;