import React from 'react';
import './App.css';

import Demo1 from './hooks/Demo1'
import Demo2 from './hooks/Demo2'
import Demo3 from './hooks/Demo3'
import Demo4 from './hooks/Demo4'
import Demo5 from './hooks/Demo5'
import Demo6 from './hooks/demo6'
import Demo7 from './hooks/demo7'
import {DemoStore1, DemoStore2} from './hooks/useObserver'

function App(props) {
  console.log('props', props)
  return (
    <div className="App">
      <DemoStore1></DemoStore1>
      <div>---------------无情分割线------------------</div>
      <DemoStore2></DemoStore2>
    </div>
  );
}

export default App;
