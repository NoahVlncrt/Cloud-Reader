import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Navigation extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {open: false, loggedIn: false};
    if(Meteor.user()){
      this.setState({loggedIn: true})
    }
  }
  
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false})
  
  render(){
    return (
      <div>
        <AppBar
          title="Cloud Comics"
          onLeftIconButtonTouchTap={this.handleToggle}/>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
        </Drawer>
      </div>
    );
  }
}