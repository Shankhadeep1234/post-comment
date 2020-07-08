import React from 'react';
import faker from 'faker';

function App() {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <div class="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            Matt
          </a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">How artistic!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
