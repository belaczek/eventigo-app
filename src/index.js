/* @flow */
import React from 'react';
import { AppRegistry } from 'react-native';
import Homepage from './containers/Homepage';
import EventDetail from './containers/EventDetail';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import moment from 'moment';
import csLocale from 'moment/locale/cs';
import configureStore from './configureStore';
import { trackNavigationStateChange } from './ga';

const Root = StackNavigator({
  Home: { screen: Homepage },
  Detail: { screen: EventDetail }
});

const store = configureStore();

const configureLibraries = () => {
  // TODO: get device locale
  moment.updateLocale('cs', csLocale);
};

const setup = () => {
  configureLibraries();

  return (
    <Provider store={store}>
      <Root onNavigationStateChange={trackNavigationStateChange} />
    </Provider>
  );
};

export default setup;

AppRegistry.registerComponent('EventigoApp', () => setup);
