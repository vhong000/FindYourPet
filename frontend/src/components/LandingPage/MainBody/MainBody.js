import React, { Component } from 'react';
import Carusel from '../Carusel/Carusel';
import MainNavigation from '../MainNavigation/MainNavivation';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <Carusel />
        <MainNavigation />
      </div>
    )
  }
}
