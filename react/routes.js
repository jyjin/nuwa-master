import { Route, Switch, withRouter, HashRouter as Router } from 'react-router-dom';
import React from 'react';
export default (props) => {

  console.log('App Master props == ', props)

  const appState = {
    name: 'nuwa',
    age: 1
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh)' }}>
      <div style={{ background: 'pink', height: 60 }}>Master Layout Header</div>
      <div style={{ flex: 1, display: 'flex' }}>
        <div style={{ background: 'white', width: 200 }}>Master Layout Left</div>
        <div style={{ flex: 1 }}>
          {props.app(appState)}
        </div>
      </div>
    </div>
  )
}