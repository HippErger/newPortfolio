import React, { Component } from 'react';
import './App.css';
// Swiping Tabs Imports
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
// import profileComponent from './components/profileComponent';
//Want to move all of these to their own component but it wasn't rendering when I put it into its seperate component... @TODO
//Profile View Imports
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';
//Project Imports
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
    backgroundColor: '#222',
    color: 'white',
    height: '100vh'
  },
  tabs: {
    backgroundColor: '#222',
    color: 'white',
    padding: '1%',
  },
  icon: {
    maxWidth: '250px',
    margin: '2% auto 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  flatButton: {
    margin: '12',
    color: 'white',
  },
  hr: {
    maxWidth: '350px',
    height: '.2px',
    // color: 'blue'
  },
  name: {
    textDecoration: 'none',
    fontSize: '3em',
    color: '#FFFAFF',
    margin: '20% auto 1%',
    fontFamily: 'Roboto',
    maxWidth: '600px',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '65vw',
    maxWidth: '1000px',
    height: '100vh',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Random Grouping',
    author: 'under construction',
    url: '#'
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Charge Bar',
    author: 'under construction',
    url: '#'
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Checkers',
    author: 'under construction',
    url: '#'
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'tic-tac-toe',
    author: 'under construction',
    url: '#'
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Towers Of Hanoi',
    author: 'under construction',
    url: ''
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Towers Of Hanoi',
    author: 'under construction',
    url: '#'
  }
];

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

    handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Tabs onChange={this.handleChange} value={this.state.slideIndex} inkBarStyle={{background: '#1A237E'}} >
          <Tab label="Profile" value={0} style={styles.tabs} />
          <Tab label="Portfolio" value={1} style={styles.tabs}/>
          <Tab label="Contacts" value={2} style={styles.tabs}/>
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} >
          <div style={styles.slide}>
            <p style={styles.name}>Clayton Berger</p>
            <p>practical, theatrical, web dev</p>
            <hr ref='blue-hr' style={styles.hr}/>
            <FlatButton
              href="https://github.com/HippErger"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="fa fa-github fa-4x heady-Icon" />}
              style={styles.flatButton}
            />
            <FlatButton
              href="https://www.linkedin.com/in/clayton-berger/"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="fa fa-linkedin-square fa-2x heady-Icon" />}
              style={styles.flatButton}
            />
            <FlatButton
              href="https://medium.com/@berger.clayton"
              target="_blank"
              secondary={true}
              icon={<FontIcon className="fa fa-medium fa-2x heady-Icon" />}
              style={styles.flatButton}
            />
          </div>
          <div style={styles.slide}>
            <div style={styles.root}>
              <GridList cellHeight={180} style={styles.gridList}>
                <Subheader style={styles.headline}>Projects</Subheader>
                {tilesData.map((tile) => (
                  <a href={tile.url}>
                  <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  >
                    <img src={tile.img} />
                  </GridTile>
                  </a>
                ))}
              </GridList>
            </div>
          </div>
          <div style={styles.slide}>
            Contacts
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;

/*When I build the functionality of the grid list view of all of my games and apps I want the favorite star to create a list to the right of starred list and then I want it to resize the tile dynamically adjusting the column and row props. */
