import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';

//import shows you need to bundle this file
import './index.scss';

//Main component (will use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

//Finds the root of app
const container = document.getElementsByClassName('app-container')[0];

//Tells React to render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
