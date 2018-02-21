import React,{Component } from 'react';
import Chield1 from './Chield1';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
'name':"Sriaknth"
    }
  }
  handalChange(e){
    console.log(this.refs.MyName.value)
    this.setState({
      name: this.refs.MyName.value
})
  }
  render() {
    return (
      <div>
       
      {this.state.name}
      <input type="text" ref= "MyName" onBlur={this.handalChange.bind(this)} />
      <Chield1/>
         </div>
    );
  }
}
export default App;