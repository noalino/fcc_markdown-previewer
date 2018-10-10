import React from 'react';
import Input from './Input';
import Preview from './Preview';
import '../App.css';

const Container = ({ onChange, preview }) => (
  <div id="container">
    <Input onChange={onChange} />
    <Preview preview={preview} />
  </div>
);

export default Container;
