import { Link } from 'react-router-dom';

import styles from 'routes/homepage/Homepage.module.scss';

import 'animate.css';
import classNames from 'classnames';
import { useRef, useState } from 'react';

function Homepage() {
  const confettiContainer = useRef<HTMLSpanElement>(null);

  const [confetti, setConfetti] = useState(false);

  const COOLDOWN_TIME = 3_000; // in ms
  const [confettiCooldown, setConfettiCooldown] = useState(0);

  const handleConfettiEffect = () => {
    if (Date.now() < confettiCooldown + COOLDOWN_TIME) return;

    setConfettiCooldown(Date.now());

    setConfetti(true);

    confettiContainer.current?.addEventListener(
      'animationend',
      () => setConfetti(false),
      { once: true },
    );
  };

  return (
    <>
      <div
        className={classNames(
          'content',
          'animate__animated animate__fadeIn',
          styles.content,
        )}>
        <h1
          className={classNames(styles.heading, {
            [styles.cursorEnabled]: !confetti,
          })}
          onClick={() => handleConfettiEffect()}>
          Welcome to my page!
          <span
            className={classNames(styles.confetti, {
              [styles.explosion]: confetti,
            })}
            ref={confettiContainer}>
            {Array.from({ length: 50 }).map((_, i) => (
              <span key={i}></span>
            ))}
          </span>
        </h1>
        <p>
          Here you can access my personal resources as well as the lectures for
          the current year.
        </p>
        <p>
          Also if I tinker with some stuff, and I find it cool, I put it here.
        </p>
        <p>
          If you come across any errors, please reach out to me in the email
          address provided on the{' '}
          <Link to={'/contact'} className="link">
            Contact
          </Link>{' '}
          page.
        </p>
      </div>
    </>
  );
}

export default Homepage;
