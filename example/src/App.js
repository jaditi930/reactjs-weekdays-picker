import React from 'react';
import styled from 'styled-components';
import { DropdownSelector, CircularSelector, CustomMenuSelector, DefaultSelector } from 'reactjs-weekdays-picker';

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
        <h1>Week Selectors</h1>
        <DropdownSelector multiple={true} excludeDays={[0,1]}/>
        <br/>
        <br/>
        <CircularSelector multiple={true} size={250}/>
        <br/>
        <DefaultSelector/>
        <br/>
        <CustomMenuSelector multiple={true}/>
      </div>
    </AppContainer>
  );
};

export default App;
