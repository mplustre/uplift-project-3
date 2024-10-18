import React from 'react';

const Results = ({ activities, triggerSearch }) => {
  if (!triggerSearch) {
    return null; 
  }

  if (!activities || activities.length === 0) {
    return (
      <div className="no-results">
        <p>No exact matches</p>
        <p>Try changing or removing some of your filters or adjusting your search area.</p>
      </div>
    );
  }

  return (
    <div className="results">
      {activities.map(activity => (
        <div key={activity.name} className="activity">
          <h3>{activity.name}</h3>
          <h6>{activity.location}</h6>
          <img src={activity.image} alt={activity.name} />
          <p>{activity.price === 0 ? 'Free' : `PHP ${activity.price}`}</p>
          <p>{activity.pax}</p>
          <p>{activity.duration}</p>
          <p>{activity.description}</p>
          {activity.link && (
            <p>
              <a href={activity.link} target="_blank" rel="noopener noreferrer">
                More info
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
