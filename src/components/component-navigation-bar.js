import React, { Component } from 'react';

class NavigationBar extends Component {
  render() {
    return (
      <div className="container-navigation-bar">
        <div className="component-navbar">
          <div className="navigation-bar">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#">Contact Managment</a>
                </div>
                <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <p className="navbar-text">
                      Contact number <span
                      className="label label-primary">item number</span>
                    </p>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationBar