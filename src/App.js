import React from 'react';
import ApprovalCard from './components/ApprovalCard';
import CommentDetails from './components/CommentDetail';

import faker from 'faker';

function App() {
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:54pm"
          post="Nice post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="Max"
          timeAgo="Today at 6:04pm"
          post="Awesome work"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="Elon"
          timeAgo="Today at 3:20pm"
          post="Really loved it"
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
