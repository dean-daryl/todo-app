import React, { useState } from 'react';

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState('Dashboard');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="sidebar">
            {/* Sidebar content goes here */}
            <ul>
                <li className={selectedItem === 'Dashboard' ? 'active' : ''} onClick={() => handleItemClick('Dashboard')}>Dashboard</li>
                <li className={selectedItem === 'Projects' ? 'active' : ''} onClick={() => handleItemClick('Projects')}>Projects</li>
                <li className={selectedItem === 'Tasks' ? 'active' : ''} onClick={() => handleItemClick('Tasks')}>Tasks</li>
                <li className={selectedItem === 'Calendar' ? 'active' : ''} onClick={() => handleItemClick('Calendar')}>Calendar</li>
                <li className={selectedItem === 'Settings' ? 'active' : ''} onClick={() => handleItemClick('Settings')}>Settings</li>
            </ul>
        </div>
    );
};

export default Sidebar;