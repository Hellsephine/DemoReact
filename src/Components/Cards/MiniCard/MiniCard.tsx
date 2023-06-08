import React from 'react'
import './MiniCard.css'

type MiniCardProps = {
    title: string;
    description: string;
}

const MiniCard: React.FC<MiniCardProps> = ({title, description}) =>{
  return (
    <div className='MiniCard'>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
    </div>
  )
}

export default MiniCard
