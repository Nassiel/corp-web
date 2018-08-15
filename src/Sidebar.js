import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
      return (
        <ul className="sidebar-nav tenthNav">
            <li className="menuItem">
                <a href="#services">
                    <span className="icon">
                        <i aria-hidden="true" className="icon-services"/>
                    </span>
                </a>
            </li>
            <li className="menuItem">
                <a href="#portfolio">
                    <span className="icon">
                        <i aria-hidden="true" className="icon-portfolio"/>
                    </span>
                </a>
            </li>
            <li className="menuItem">
                <a href="#team">
                    <span className="icon">
                        <i aria-hidden="true" className="icon-team"/>
                    </span>
                </a>
            </li>
            <li className="menuItem">
                <a href="#contact">
                    <span className="icon">
                        <i aria-hidden="true" className="icon-contact"/>
                    </span>
                </a>
            </li>
        </ul>
      );
    }
  }
  
  export default Sidebar;