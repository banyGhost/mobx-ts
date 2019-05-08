import React, {Component} from 'react';
import {observable, computed} from "mobx";
import {observer} from "mobx-react";

@observer
class JForm extends Component {

  @observable
  student = {
    name: 'bob',
    age: 18
  };

  @computed get intro() {
    return `${this.student.name} ${this.student.age}`
  }

  handleClick = () => {
    this.student.name = 'James'
  };

  render() {
    return (
      <div>
        <div>{this.student.name}</div>
        <div>{this.student.age}</div>
        <div>{this.intro}</div>
        <button onClick={this.handleClick}>change name</button>
      </div>
    )
  }
}

export default JForm;
