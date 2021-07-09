import React from 'react';

const Timeline = ({ meow }) => {
  return (
    <div className="card text-dark m-1 col-md-3">
      <div className="card-body">
        <p><span className="card-title badge bg-success">{meow.username}</span>
        <span className="small text-muted mb-0"> {meow.datestamp} @ {meow.timestamp}</span>
        </p>
        <p className="card-text">{meow.message}</p>
      </div>
    </div>
  );
};

export default Timeline;