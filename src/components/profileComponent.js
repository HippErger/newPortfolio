import React, { Component } from 'react';
import '../componentStyles/profileComponentStyle.css';

class profileComponent extends Component {
  render() {
    return (
      <div className="App">
        <portfolioButton />
        <header className="App-header">
          <h1 className="App-title title-Name">
              Clayton Berger
          </h1>
          <hr />
          <div class='iconDiv'>
            <a href='https://github.com/HippErger'>
              <i class="fa fa-github fa-2x heady-Icon" aria-hidden="true"></i>
            </a>
            <a href='https://www.linkedin.com/in/clayton-berger/'>
              <i class="fa fa-linkedin-square fa-2x heady-Icon" aria-hidden="true"></i>
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default profileComponent;
