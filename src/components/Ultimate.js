import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ult from './ult.js';

class Ultimate extends React.Component{
  constructor(){
      super();
      this.state = {
        answer: "yes",
        count: 0
      }
  }

 
  render(){
    const helpcomp = ult.map((item) => <Help key={item.id} ability={item} />);
    return (
      <div className="ult" id="ultimate">
        {helpcomp}
      </div>
    );
  }
}

class Help extends React.Component{
  render(){
    return(
      <div>
        <img src={this.props.ability.imageNormal} alt="skillImage" />
        <h1>{this.props.ability.name}</h1>
        <h2>{this.props.ability.textNormal}</h2>
      </div>
  );
  }
}

export default Ultimate;
