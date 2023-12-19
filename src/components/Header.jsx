import React from 'react'
import cat from '../assets/cat-photo.jpg'

export default function Header(){
    return (
        <header>
            <img src={cat} alt='Avatar photo' />
            <h1>Leonus Kota</h1>
            <p> Frontend Developer</p>
            <h6>leonus@kota.meaow</h6>
            <div className='buttons'>
                <button id='email'><i class="fa-solid fa-envelope"></i> Email</button>
                <button id='linkedin'><i class="fa-brands fa-linkedin"></i> Linkedin</button>
            </div>
        </header>
    )
}