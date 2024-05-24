/* eslint-disable quotes */
import React from 'react';
import {Text} from 'react-native';
class Home extends React.Component {
  constructor() {
    super();
		console.log('constructor');
  }
  render() {
		console.log('render')
    return <Text>Hello World from class!</Text>;
  }
  componentDidMount() {
		console.log('componentdidMount');
	}
}
export default Home;
