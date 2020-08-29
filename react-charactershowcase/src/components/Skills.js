import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import abilities from './abilities.js';

class Skills extends React.Component{
  constructor(){
      super();
      this.state = {
        answer: "yes",
        count: 0
      }
  }

 
  render(){
    const helpcomp = abilities.map((item) => <Help key={item.id} ability={item} />);
    return (
      <div className="abilities" id="abilities">
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
        <img src={this.props.ability.imageEmpowered} alt="" />
        <h1>{this.props.ability.name}</h1>
        <h2>{this.props.ability.textNormal}</h2>
      </div>
  );
  }
}

export default Skills;
