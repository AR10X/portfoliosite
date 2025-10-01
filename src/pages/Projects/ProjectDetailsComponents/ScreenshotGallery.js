// components/ScreenshotGallery.jsx
import React from 'react';
import './ScreenshotGallery.css';

export default function ScreenshotGallery({ shots = [] }) {
  return (
    <div className="shots">
      {shots.map(({ src, alt, kind = 'desktop' }, i) => (
        <figure key={i} className={`shot ${kind === 'phone' ? 'shot--phone' : 'shot--desktop'}`}>
          <img src={src} alt={alt} loading="lazy" />
          <figcaption>{alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
