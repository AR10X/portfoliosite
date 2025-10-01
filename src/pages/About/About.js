import React from 'react';
import NumImg2 from '../../assets/images/about/about-line.jpg';
import { BlueText, WhiteText } from '../../components/utilities/TextStyles';
import './About.css';
import ProfilePic from '../../assets/images/about/dp.jpg';
import MaheLogo from '../../assets/images/about/mahe-logo.jpg';
import SkillComp from '../../components/utilities/SkillComp';
import ReactLogo from '../../assets/images/about/react.svg'; 
import NextjsLogo from '../../assets/images/about/next.svg';
import ExpressLogo from '../../assets/images/about/express.svg';
import NodeLogo from '../../assets/images/about/nodejs.svg';
import MongoDBLogo from '../../assets/images/about/mongodb.svg';


const About = () => {
    return (
      <div className='about-main'>
        <div className='about-numbers'>
          <img src={NumImg2} alt='numbers'></img>
        </div>
        <div className='about-content'>
          <div className='about-top'>
            <div className='top-left'>
              <div className='about-txt-1'>
                <WhiteText>{'<'}</WhiteText>
                <BlueText>!DOCTYPE</BlueText>
                <WhiteText> html></WhiteText>
              </div>
              <div className='about-txt-2'>
                <WhiteText>{'<'}</WhiteText>
                <BlueText>About</BlueText>
                <WhiteText>></WhiteText>
              </div>
              <div className='about-txt-3'>
              Hey there! I’m Abdul Rehaman — a Frontend Engineer (React / Next.js / JavaScript) who builds production-grade web apps focused on performance, polished UX, and measurable outcomes. I’ve delivered realtime collaboration features, scalable UI systems, and product improvements that directly reduce friction for end users.
              </div>
              <div className='about-txt-4'>
                <WhiteText>{'<'}</WhiteText>
                <BlueText>/About</BlueText>
                <WhiteText>></WhiteText>
              </div>
              <div className='about-txt-5'>
                <WhiteText>{'<'}</WhiteText>
                <BlueText>Education</BlueText>
                <WhiteText>></WhiteText>
              </div>
              <div className='about-txt-6'>
                <div className='about-txt-6-top'>
                  <img src={MaheLogo}  alt='Mahe logo' />
                  <div className='about-txt-6-top-inner'>
                    <div>Manipal Institute of Technology, </div>
                    <div>Manipal, India.</div>
                  </div>
                </div>
                <div className='about-txt-6-bottom'>
                  <div className='about-txt-6-bottom-inner'>
                    <p>B.Tech in Mechanical Engineering</p>
                    <p>2019-2023</p>
                  </div>
                </div>
              </div>
              <div className='about-txt-7'>
                <WhiteText>{'<'}</WhiteText>
                <BlueText>/Education</BlueText>
                <WhiteText>></WhiteText>
              </div>
            </div>
            <div className='about-top-right'>
              <div>
                <img src={ProfilePic} alt='Profile pic'></img>
              </div>
            </div>
          </div>
          <div className='about-bottom'>
            <div className='about-txt-8'>
              <WhiteText>{'<'}</WhiteText>
              <BlueText>Skills</BlueText>
              <WhiteText>></WhiteText>
            </div>
            <div className='about-txt-9'>
              <SkillComp
                logo={ReactLogo}
                heading="React.js"
                description="Proficient in building dynamic, component-driven UIs with React.js. Skilled in hooks, Context API, and state management, with experience in API integration, routing, and performance optimization."
              />
              <SkillComp
                logo={NextjsLogo}
                heading="Nextjs"
                description="Experienced in developing production-ready applications with Next.js. Strong in SSR/SSG, API routes, and dynamic routing, with hands-on deployment and integration of authentication and databases."
              />
              <SkillComp
                logo={ExpressLogo}
                heading="Express.js"
                description="Skilled in building robust web applications with Express.js, including creating RESTful APIs with features like routing, middleware, and authentication."
              />
            
              <SkillComp
                logo={NodeLogo}
                heading="Node.js"
                description="Experienced in server-side development with Node.js, skilled in building scalable backend systems with Express.js, and proficient in integrating with MongoDB using Mongoose. Familiarity with asynchronous programming patterns and package management using npm or yarn."
              />
              <SkillComp
                logo={MongoDBLogo}
                heading="MongoDB"
                description="Proficient in MongoDB for database design and querying, with familiarity in Mongoose ORM for schema creation, data validation, and query building."
              />
            </div>
            <div className='about-txt-10'>
              <WhiteText>{'<'}</WhiteText>
              <BlueText>/Skills</BlueText>
              <WhiteText>></WhiteText>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default About;