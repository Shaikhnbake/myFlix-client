import React from 'react';
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import moviesApp from './reducers/reducers';
import MainView from './components/main-view/main-view';

//import shows you need to bundle this file
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

//Main component (will use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container fluid sm={12} md={6} lg={3}>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

//Finds the root of app
const container = document.getElementsByClassName('app-container')[0];

//Tells React to render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
