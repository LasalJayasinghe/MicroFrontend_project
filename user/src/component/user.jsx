import React from 'react';

const UserDataCard = ({ user }) => {
  const { name, email, phone } = user;

  return (
    <div className="attendance-graph">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '20px 0' }}>User Data</h2>
      </div>
      <div style={{ marginLeft: '30px' }}>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Name:</p>
        <p style={{ fontSize: '14px' }}>{name}</p>
      </div>
      <div style={{ marginLeft: '30px' }}>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Email:</p>
        <p style={{ fontSize: '14px' }}>{email}</p>
      </div>
      <div style={{ marginLeft: '30px' }}>
        <p style={{ fontWeight: 'bold', fontSize: '16px' }}>Phone:</p>
        <p style={{ fontSize: '14px' }}>{phone}</p>
      </div>
    </div>
  );
};

export default UserDataCard;
