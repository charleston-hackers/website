import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <header>
            <div className="headerTextDiv">
              <h1 className="mainHeaderText">Charleston Hackers</h1>
            </div>
            <nav className="navbar">
              <div className="navbarList">
                <p id="home" className="navbarListItem">
                  Home
                </p>
                <p id="projects" className="navbarListItem">
                  Projects
                </p>
                <p id="info" className="navbarListItem">
                  Info
                </p>
              </div>
            </nav>
          </header>

          <div className="mainBodyContent">
            <h2 className="subHeadDesc">People who love to code in Charleston, SC</h2>
          </div>
        </div>

        <footer>
          <div className="footerText">
            <p className="footerDescText">
              Charleston Hackers is a local organization for people that love to code
            </p>
            <p className="foundedDate">Charleston Hackers have been Hacking since Nov. 2018</p>
          </div>
          <div className="associatedLinks">
            <a
              href="https://github.com/charleston-hackers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-alt fa-3x linkIcons" />
            </a>
            <a href="https://www.meetup.com/Charleston-Hackers">
              <img
                className="meetupLogo linkIcons"
                src="https://secure.meetupstatic.com/s/img/3825254008927924706/logo/svg/logo--mSwarm.svg"
                target="_blank"
              />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
