import React from 'react';

class HowSection extends React.Component {
  render() {
    return (
      <section className='how_main_text'>
        <div>
          <p className='how_main_text--circle'>{this.props.number}</p>
        </div>
        <div className='how_main_text--all'>
          <h3 className='subtitle'>{this.props.subtitle}</h3>
          <p className='description'>{this.props.description}</p>
        </div>
      </section>
    );
  }
}

export default HowSection;
