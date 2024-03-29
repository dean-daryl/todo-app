import React, { useState } from 'react';

const NavBar = () => {
    const [profileImage, setProfileImage] = useState('./src/assets/react.svg');
    const [content, setContent] = useState('');

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    return (
      <nav>
          <h2>Neet</h2>
        <div className='profile'>
          <img src={profileImage} alt="Profile Image" />
        </div>
      </nav>
    );
};

export default NavBar;