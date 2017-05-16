import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {brown500} from 'material-ui/styles/colors';


class Header extends Component {
  render() {
    return (
      <div className="Header">
            <AppBar style={{backgroundColor: brown500}}
              title="Property Tax"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
      </div>
    );
  }
}

export default Header;
