// SplitcartDetail.jsx
import React from 'react';
import ScreenshotGallery from './ScreenshotGallery'; // adjust path
import screenshotCart from '../../../assets/images/projects/Project-readme/splitcart/cart-1.jpg';
import screenshotCreate from '../../../assets/images/projects/Project-readme/splitcart/create-cart.jpg';
import screenshotHome from '../../../assets/images/projects/Project-readme/splitcart/home.jpg';
import screenshotLogin from '../../../assets/images/projects/Project-readme/splitcart/login.jpg';
import screenshotOrder from '../../../assets/images/projects/Project-readme/splitcart/orderplaced.jpg';
import screenshotOtp from '../../../assets/images/projects/Project-readme/splitcart/otp.jpg';
import screenshotPayment from '../../../assets/images/projects/Project-readme/splitcart/payment-1.jpg';

const SplitcartDetail = () => {
  const shots = [
    { src: screenshotLogin,  alt: 'Login Screen',                 kind: 'desktop' },
    { src: screenshotOtp,    alt: 'OTP / Join Cart Screen',       kind: 'desktop' },
    { src: screenshotHome,   alt: 'Splitcart Home / Catalog',     kind: 'phone'   },
    { src: screenshotCreate, alt: 'Create Cart Screen',           kind: 'phone'   },
    { src: screenshotCart,   alt: 'Shared Cart View',             kind: 'phone'   },
    { src: screenshotPayment,alt: 'Checkout / Payment Screen',    kind: 'phone'   },
    { src: screenshotOrder,  alt: 'Order Placed / Order History', kind: 'phone'   },
  ];

  return (
    <div>
      <h2>Splitcart — Real-time Group Cart</h2>
      <p>
        Splitcart is a collaborative group-shopping cart built with React and Firebase that lets multiple users
        add, remove and split items in a single shared cart in real-time. Designed for small groups and households,
        Splitcart focuses on low-latency sync, robust state reconciliation, and a simple mobile-first UX.
      </p>

      <h3>Project Highlights</h3>
      <ul>
        <li>Real-time synchronization (&lt;1s observed UI latency) via Firebase (Auth + Firestore/RTDB).</li>
        <li>Reducer-based client state to avoid conflicts and duplicate updates.</li>
        <li>Guest & OTP login to reduce onboarding friction.</li>
        <li>Responsive UI optimized for mobile-first usage.</li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li>React, Context + Reducer</li>
        <li>Firebase (Auth, Firestore/Realtime DB)</li>
        <li>Tailwind/CSS Modules</li>
        <li>Vercel/Netlify</li>
      </ul>

      <h3>Visual Overview</h3>
      <ScreenshotGallery shots={shots} />

      <h3>Challenges & Solutions</h3>
      <ul>
        <li><strong>Concurrent updates:</strong> optimistic UI + reducer reconciliation + server timestamps.</li>
        <li><strong>Offline/poor network:</strong> local persistence and retry queue.</li>
        <li><strong>Onboarding friction:</strong> OTP & guest flows.</li>
      </ul>

      <h3>Notes for Recruiters / Interviewers</h3>
      <p>
        Demonstrates real-time sync, conflict handling, and low-latency UX. I can walk through architecture, state design, and deployment in detail.
      </p>
    </div>
  );
};

export default SplitcartDetail;
