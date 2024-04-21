import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="aboutImg" />
        </div>
        <div className='banner'>
            <p>Biography</p>
            <h3>Who We Are</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur blanditiis autem ex? Corrupti quaerat dolor labore pariatur! Exercitationem, ad cumque. Blanditiis, reprehenderit minus rerum, dolorum dolores nobis vero, sed tempora molestias consequatur numquam. Officiis sint, porro deserunt rem earum quod inventore! Cumque quibusdam sint veritatis fugit voluptatibus nemo incidunt doloribus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo maiores nesciunt inventore delectus. Beatae reiciendis sapiente dolores modi atque exercitationem voluptas, officiis tenetur aliquid ipsam fugit reprehenderit? Vero obcaecati culpa doloremque et, excepturi aperiam accusamus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illo.</p>
            <p>Lorem, ipsum dolor.</p>
        </div>
    </div>
  )
}

export default Biography