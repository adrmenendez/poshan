import React from 'react';

const Form = (props) => {
  return (
    <form action='' className='form container'>
      <h2 className='form_title font_subtitle--bold'>Contact us</h2>
      <label htmlFor='name' className='form_label font_description'>
        Name
      </label>
      <input
        type='text'
        id='name'
        placeholder='John Wayne'
        className='form_input'
      />
      <label htmlFor='email' className='form_label font_description'>
        Email
      </label>
      <input
        type='email'
        id='email'
        placeholder='wayne@gmail.com'
        className='form_input'
      />
      <label htmlFor='phone' className='form_label font_description'>
        Phone
      </label>
      <input
        type='tel'
        id='phone'
        placeholder='625 852 963'
        className='form_input'
      />
      <label htmlFor='comment' className='form_label font_description'>
        Do you have any doubt about our plans?
      </label>
      <textarea
        name='comment'
        cols='30'
        rows='10'
        id='comment'
        placeholder='Leave here your comment and we"ll answer you as soon as possible...'
        className='form_textarea'
      ></textarea>
    </form>
  );
};

export default Form;
