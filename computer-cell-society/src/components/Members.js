import React from 'react';

const MemberCard = ({ name, role }) => {
  return (
    <div className='member-card'>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

const Members = () => {
  const president = { name: 'Dr. Alice Smith', role: 'President' };
  const upperMembers = [
    { name: 'Bob Johnson', role: 'Vice President' },
    { name: 'Charlie Brown', role: 'Secretary' },
  ];
  const lowerMembers = [
    { name: 'David Lee', role: 'Member' },
    { name: 'Eve Williams', role: 'Member' },
    { name: 'Frank Davis', role: 'Member' },
  ];

  return (
    <section className='members-section'>
      <h2>Our Team</h2>
      <div className='members-category'>
        <h3>President</h3>
        <MemberCard name={president.name} role={president.role} />
      </div>
      <div className='members-category'>
        <h3>Upper Members</h3>
        {upperMembers.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} />
        ))}
      </div>
      <div className='members-category'>
        <h3>Lower Members</h3>
        {lowerMembers.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} />
        ))}
      </div>
    </section>
  );
};

export default Members;
