import React from 'react';
import '../css/about.css';
import dev from '../images/dev.jpg';

export const About = () => {
  return (
    <div className='about'>
      <p className='about-text'>
        I am passionate about Software Development & learning new things as I keep challenging myself to become better.
        As a junior Full Stack Developer with, I am looking for an opportunity to showcase my skills and what I've learnt in various projects.
      </p>
      <p className='quote'>“Tell me and I forget, teach me and I may remember, involve me and I learn.”<span>Benjamin Franklin</span></p>
      <div className='image'>
        <img className='dev' src={dev} alt='dev'/>
      </div>
    </div>
  )
};
