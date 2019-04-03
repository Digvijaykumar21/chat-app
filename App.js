
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,
} from 'react-native';

import{Router,Scene,} from 'react-native-router-flux';
import Chat from './src/components/Chat';
import Home from './src/components/Home';

const App = () => {
  return (
    <Router>
      <Scene key="root" style={{paddingTop:Platform.OS =='ios'? 64:54}}>
        <Scene key="home"
          component={Home}
          title="Home"
          initial
        />
        <Scene
          key="chat"
          component={Chat}
          title="Chat"
        />
      </Scene>
    </Router>
    
  );
}

export default App;
