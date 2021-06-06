import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <article className='article'>
        <div className='article--img'>
          <img src={this.props.src} alt={this.props.alt} />
        </div>
        <h3 className='subtitle'>{this.props.subtitle}</h3>
        <p className='description'>{this.props.description}</p>
      </article>
    );
  }
}

export default Card;
