import React, { useState } from 'react';

const TabComponent = () => {
  // State to track the selected tab
  const [selectedTab, setSelectedTab] = useState('Class1');

  // Class names for tabs
  const classes = ['Class1', 'Class2', 'Class3'];

  // Function to render content based on the selected tab
  const renderContent = (tab) => {
    switch (tab) {
      case 'Class1':
        return <div>Content for Class 1</div>;
      case 'Class2':
        return <div>Content for Class 2</div>;
      case 'Class3':
        return <div>Content for Class 3</div>;
      default:
        return <div>Select a class to see content.</div>;
    }
  };

  return (
    <div>
      <div className="tabs">
        {classes.map((tab) => (
          <button
            key={tab}
            className={selectedTab === tab ? 'tab-selected' : ''}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="content">{renderContent(selectedTab)}</div>
    </div>
  );
};

export default TabComponent;
