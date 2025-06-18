import React from 'react';

const WorkshopCard = ({ title, date, description }) => {
  return (
    <div className='workshop-card'>
      <h3>{title}</h3>
      <p className='workshop-date'>Date: {date}</p>
      <p>{description}</p>
    </div>
  );
};

const Workshops = () => {
  const pastWorkshops = [
    {
      title: 'Introduction to React',
      date: '2024-03-15',
      description: 'A beginner-friendly workshop covering the fundamentals of React, including components, props, and state.'
    },
    {
      title: 'Web Development with Django',
      date: '2024-02-20',
      description: 'Learned to build dynamic web applications using the Django Python framework.'
    },
    {
      title: 'Machine Learning Basics',
      date: '2024-01-10',
      description: 'An overview of machine learning concepts, algorithms, and applications.'
    },
  ];

  return (
    <section className='workshops-section'>
      <h2>Past Workshops & Seminars</h2>
      <div className='workshops-list'>
        {pastWorkshops.map((workshop, index) => (
          <WorkshopCard
            key={index}
            title={workshop.title}
            date={workshop.date}
            description={workshop.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Workshops;
