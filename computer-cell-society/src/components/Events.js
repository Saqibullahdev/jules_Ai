import React, { useState, useEffect } from 'react';

const EventCard = ({ title, date, description }) => {
  return (
    <div className='event-card'>
      <h3>{title}</h3>
      <p className='event-date'>Date: {date}</p>
      <p>{description}</p>
    </div>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/events.json') // Path relative to the public folder
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <section className='events-section'><p>Loading events...</p></section>;
  }

  if (error) {
    return <section className='events-section'><p>Error loading events: {error}</p></section>;
  }

  return (
    <section className='events-section'>
      <h2>Upcoming Events & Notifications</h2>
      {events.length > 0 ? (
        <div className='events-list'>
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))}
        </div>
      ) : (
        <p>No upcoming events at the moment. Please check back later!</p>
      )}
    </section>
  );
};

export default Events;
