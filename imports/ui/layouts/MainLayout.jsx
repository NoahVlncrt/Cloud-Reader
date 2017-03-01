import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navigation from '/imports/ui/components/Navigation.jsx';



export default class MainLayout extends React.Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
        <Navigation/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}
