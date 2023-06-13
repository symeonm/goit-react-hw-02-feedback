import { Component } from 'react';
import SectionTitle from './section-title/SectionTitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <SectionTitle></SectionTitle>
      </div>
    );
  }
}


