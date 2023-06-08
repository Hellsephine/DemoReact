import React from 'react';
import './FooterCard.css';


type FooterCardProps = {
  id: number;
  title: string;
  p: string[];
};

const FooterCard: React.FC<FooterCardProps> = ({ title, p }) => {
  return (
    <div className='card'>
      <p>{title}</p>
      <a>{p[0]}</a>
      <a>{p[1]}</a>
      <a>{p[2]}</a>
      <a>{p[3]}</a>
    </div>
  );
};

export default FooterCard;
