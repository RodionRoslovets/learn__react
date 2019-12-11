import React from 'react';
import './App.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false);
class App extends React.Component{

  constructor(props){
    console.log('App constructor');
    super(props)

    this.state = {
      cars:[
        {
          name:'Ford',
          year:2018
        }
        ,
        {
          name:'Audi',
          year:2015
        },
        {
          name:'Mazda',
          year:2011
        }
      ],
      pageTitle:'React components',
      showCars:false,
      clicked:false
    };
  }

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

  componentWillMount(){
    console.log('App componentWillMount');
  }
  
  componentDidMount(){
    console.log('App componentDidMount');
  }
  
  render(){
    console.log('App render');
    let cars = this.state.cars;

    let cars2;

    if(this.state.showCars){
      cars2 = cars.map((car, ind)=>{
        return(
          <ErrorBoundary key={ind}>
            <Car 
            name={car.name}
            year={car.year}
            index={ind}
            onDelete={this.deleteHandler.bind(this, ind)}
            onChangeName={(e) => this.onChangeName(e.target.value, ind)}
            />
          </ErrorBoundary>
        )           
      });
    }
    
    return (
      <div className="App" style={this.styles}>
        
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter></Counter>
        </ClickedContext.Provider>
        

        <hr></hr>
        
        <button style={{marginTop:20}} onClick={this.toggleCarsHandler}>Toggle cars</button>
        <button onClick={()=>this.setState({clicked:true})}>Change clicked</button>
        
        { cars2 }

      </div>
    );
  }
  
}

export default App;