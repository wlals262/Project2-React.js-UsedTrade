import React from 'react';
import 'react-native-gesture-handler'; // swipe 등을 이용한 제스쳐로 기능 수행
import 'react-native-devsettings';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}
export default App;
