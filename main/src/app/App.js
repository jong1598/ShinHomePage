import React, { Component } from 'react';
import './Total.css';
import './Component.css';
import { Main, Home, Introduction, SHIN, QuestionAnswering } from '../code'
import {BrowserRouter as Router, Switch, Route, HashRouter, RouteComponentProps } from "react-router-dom";

function scrollToTop() {
  document.body.scrollTop = 0
}

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isDark: true
    };
  }

  callbackFunction = {
    setIsDark: (isDark) => {
      this.setState({ isDark })
      if (isDark === true) document.getElementById('body').style.background = '#000000'
      else document.getElementById('body').style.background = '#ffffff'
    }
  }


  render(){
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Main isDark={this.state.isDark} callbackFunction={this.callbackFunction}  />} >
            </Route>
            <Route exact path="/Home" render={() => <Home isDark={this.state.isDark} callbackFunction={this.callbackFunction} selected_Index={'0'}/>}>
            </Route>
            <Route exact path="/Introduction" render={() => <Introduction isDark={this.state.isDark} callbackFunction={this.callbackFunction} selected_Index={'1'}/>}>
            </Route>
            <Route exact path="/SHIN" render={() => <SHIN isDark={this.state.isDark} callbackFunction={this.callbackFunction} selected_Index={'2'}/>}>
            </Route>
            <Route exact path="/QuestionAnswering" render={() => <QuestionAnswering isDark={this.state.isDark} callbackFunction={this.callbackFunction} selected_Index={'3'}/>}>
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
