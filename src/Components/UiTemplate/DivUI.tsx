import React from 'react'
import './DivUI.css'
import MiniCard from '../MiniCard/MiniCard'
import ButtonBlack from '../ButtonBlack/buttonBlack'


const MiniCardListe = [
  {
      title: '15+',
      description: 'Ready to use React Components',
  },
  {
      title: '60+',
      description: 'Predefined colors for theme setup',
  },
  {
      title: '</>',
      description: 'Detailed documentation for each component',
  },
  {
      title: 'Free',
      description: 'Open source with regular updates',
  },
]

function DivUI() {
  return (
    <div>
      <div className='divMiniCard'>
      {MiniCardListe.map((MiniCardListe) => (
        <MiniCard title={MiniCardListe.title} description={MiniCardListe.description} />
      ))}
      </div>
      <div className='UI'>
          <div className='UI2'>
              <div className='UI3'>
              <p className='Title'>UI Templates are on their way 🚀</p>
              <p className='Desc'>Official UI templates build on Atomize React will be released very soon.</p>
              </div>
              <ButtonBlack/>
          </div>
      </div>
    </div>
  )
}

export default DivUI
