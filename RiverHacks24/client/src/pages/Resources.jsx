import React from 'react'
import NavBar from '../components/NavBar'
import '../css/resources.css'

const Resources = () => {


  return (
    <>
      <div id='navDivResourcePage'>
      <NavBar />
      </div>
      <h1 id='resourceHeader'>Resources</h1>
      <h2 id='header2'>Special thanks to all of the wonderful women in STEM that have inspired us to lead the next generation of young learners. Here are some extra resources specifically catered to girls and women who are looking to learn more: </h2>
      <div className='resourceCard'>
      <a href="https://klru.pbslearningmedia.org/collection/scigirls/" className='resourceLink' >SciGirls: PBS Learning:</a>
      <p className='resourceDesc'>Science videos targeted for girls from grades 3-12, dive into the experiences and adventures of young women in tech with 30-minute SciGirls episodes, following groups of middle schoolers as they engineer and invent alongside professional scientists. Many episodes are also available in Spanish!</p>
      </div>
      <div className='resourceCard'>
      <a href="hhttps://members.womenwhocode.com/resources" className='resourceLink' >Women Who Code:</a>
      <p className='resourceDesc'>A community of women empowering women. Providing educational resources as well as communities and support for all those seeking to to develop thier skills and connect with other women who code.</p>
      </div>
      <div className='resourceCard'>
      <a href="https://girlswhocode.com/" className='resourceLink' >Girls Who Code</a>
      <p className='resourceDesc'>Girls Who Code is on a mission to close the gender gap in technology and to change the image of what a programmer looks like and does. Providing hundreds of offline and online resources to girls who are interested in computer science, the #1 spot for the next generation of female engineers.</p>
      </div>
    </>
  )
}

export default Resources