// src/App.js
import React from 'react';
import styled from 'styled-components';
import DropdownSelector from './components/DropdownSelector';
import CircularSelector from './components/CircularSelector';
import CustomMenuSelector from './components/CustomMenuSelector';
import DefaultSelector from "./components/DefaultSelector"

const AppContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  width:100vw;
`;

const App = () => {
  return (
    <AppContainer>
      <div>
        <h1>Week Selector</h1>
        <DropdownSelector multiple={true} excludeDays={[0,1]}/>
        <CircularSelector multiple={true}/>
        <DefaultSelector/>
        <CustomMenuSelector multiple={true}/>
      </div>
    </AppContainer>
  );
};

export default App;
