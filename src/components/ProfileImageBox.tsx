import React from 'react';

const ProfileImageBox: React.FC = () => {
  return (
    <div className="box-image">
      <img
        src="/saumya-portrait.png"
        alt="Saumya Shrestha"
        className="w-full object-cover"
      />
    </div>
  );
};

export default ProfileImageBox;