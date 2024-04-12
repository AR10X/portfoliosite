import React from 'react';
import NumImg from '../../assets/images/home/home-line.jpg';
import './Home.css';
import Illust from '../../assets/images/home/Group.svg';
import { BlueText, GreenText, YellowText, WhiteText } from '../../components/utilities/TextStyles';


const Home = () => {
  return (
      <div className='home-main'>
        <div>
          <img src={NumImg} alt='numbers'></img>
        </div>
        <div className='home-left'>
          <div className='home-txt-1'>
            <BlueText>const </BlueText>
            <WhiteText>express </WhiteText>
            <YellowText>= </YellowText>
            <BlueText>require</BlueText>
            <YellowText>(</YellowText>
            <WhiteText>'express'</WhiteText>
            <YellowText>)</YellowText>
            <YellowText>;</YellowText>
          </div>
          <div className='home-txt-2'>
            <BlueText>const </BlueText>
            <WhiteText>app </WhiteText>
            <YellowText>= </YellowText>
            <WhiteText>express</WhiteText>
            <YellowText>(</YellowText>
            <YellowText>)</YellowText>
            <YellowText>;</YellowText>
          </div>
          <div className='home-txt-3'>
            <WhiteText>app.use</WhiteText>
            <YellowText>(</YellowText>
            <BlueText>function( </BlueText>
            <WhiteText>req, res</WhiteText>
            <BlueText>){'{'}</BlueText>
          </div>
          <div className='home-block'>
            <div className='hm-green'>
              <GreenText>// Hello! I am</GreenText>
            </div>
            <h1>Abdul Rehaman</h1>
            <div className='hm-green'>
              <GreenText>// I am a Backend Engineer.</GreenText>
            </div>
          </div>
          <div className='home-txt-4'>
            <BlueText>{'}'}</BlueText>
            <YellowText>)</YellowText>
            <WhiteText>;</WhiteText>
          </div>
        </div>
        <div className='home-right'>
          <img src={Illust} alt='illustration'></img>
        </div>
      </div>
    );
};
  
export default Home;