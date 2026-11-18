import { useEffect } from 'react';
import markup from '../../legacy/sections/act-hero.html?raw';
import HtmlFragment from '../HtmlFragment.jsx';

export default function HeroSection() {
  useEffect(() => {
    const video = document.getElementById('hero-bg-video');
    if (!video) return;

    // 1. Ensure 100% muted & inline for autoplay compliance
    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
    video.playsInline = true;

    const tryPlay = () => {
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => { });
      }
    };

    // 2. Play immediately
    tryPlay();

    // 3. Play as soon as media is buffered
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('canplaythrough', tryPlay);

    // 4. Play when window gets focus or tab becomes visible
    const onVisibilityChange = () => {
      if (!document.hidden && video.paused) {
        tryPlay();
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('focus', tryPlay);

    // 5. Also trigger on earliest cursor movement or interaction (without requiring a click)
    const instantEvents = ['pointermove', 'mousemove', 'scroll', 'wheel', 'touchstart', 'pointerdown'];
    const onInstantTrigger = () => {
      if (video.paused) {
        tryPlay();
      }
      instantEvents.forEach((evt) => window.removeEventListener(evt, onInstantTrigger));
    };
    instantEvents.forEach((evt) => {
      window.addEventListener(evt, onInstantTrigger, { once: true, passive: true });
    });

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('canplaythrough', tryPlay);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('focus', tryPlay);
      instantEvents.forEach((evt) => window.removeEventListener(evt, onInstantTrigger));
    };
  }, []);

  return <HtmlFragment markup={markup} />;
}
