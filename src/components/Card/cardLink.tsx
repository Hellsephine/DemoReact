import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  linkURL: string;
}

const CardLink: React.FC<CardProps> = ({ title, description,imageUrl,linkURL }) => {
  return (
    <div className="card">
        <img src={imageUrl} alt={title}/>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#">{linkURL}</a>
    </div>
  );
};

export default CardLink;
