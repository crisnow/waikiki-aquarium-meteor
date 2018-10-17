import React from 'react';
import MainMenu from '../components/MainMenu';
import MainImage from '../components/MainImage';
import Bottom from '../components/Bottom';


export default class WaikikiAquarium extends React.Component {
  render() {
    return (
        <div>
          <MainImage/>
          <MainMenu/>
          <Bottom/>
        </div>
    );
  }
}
