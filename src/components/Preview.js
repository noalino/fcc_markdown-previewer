import React from 'react';
import ReactMarkdown from 'react-markdown';

const Preview = ({ preview }) => (
  <div id="preview">
    <ReactMarkdown source={preview} />
  </div>
);

export default Preview;