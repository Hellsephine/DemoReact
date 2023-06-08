import React from 'react'
import './Footer.css'
import FooterCard from '../FooterCard/FooterCard'


const Liste = [
    {
      id: 1,
      title: "Documentation",
      p: ["Installation", "Thème", "Setup", "Atom"]
    },
    {
      id: 2,
      title: "Communauté",
      p: ["GitHub", "Discord", "Twitter", "Facebook"]
    },
    {
      id: 3,
      title: "A propos",
      p: ["A propos", "Mentions légales", "CGU", "Contact"]
    },
    {
      id: 4,
      title: "Ressource",
      p: ["Blog", "Tutoriels", "Vidéos", "Podcasts"]
    }
  ];

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='FooterOrga'>
      {Liste.map((Liste) => (
        <FooterCard id={Liste.id} title={Liste.title} p={Liste.p} />
        ))}
        </div>
    </div>
  )
}

export default Footer