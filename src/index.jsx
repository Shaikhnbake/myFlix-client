import React from 'react';
import ReactDOM from 'react-dom';

//import shows you need to bundle this file
import './index.scss';

//Main component (will use all others)
class MyFlixApplication extends React.component {
  render() {
    return (
      <div className="my-flix">
        <div> Good morning </div>
      </div>
    );
  }
}

//Finds the root of app
const container = document.getElementsByClassName('app-container')[0];

//Tells React to render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
