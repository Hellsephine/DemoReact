import React from 'react';
import Card from '../Card/card';
import './maincard.css';


const Maincard = () => {
  return (
   <div className="mainCard">
    <Card title="Meagan Fisher" description="Engineering Manager" imageUrl="Photo" />
    <Card title="Meagan Fisher" description="Engineering Manager" imageUrl="Photo" />
    <Card title="Meagan Fisher" description="Engineering Manager" imageUrl="Photo" />
   </div>
  );
};

export default Maincard;