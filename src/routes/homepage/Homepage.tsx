import 'animate.css';

import { useState } from 'react';
import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';

import styles from './Homepage.module.scss';

function Homepage() {
  const [runConfetti, setRunConfetti] = useState(false);
  const [popped, setPopped] = useState(
    Boolean(sessionStorage.getItem('popped')),
  );

  const popConfetti = () => {
    if (!popped) {
      setRunConfetti(true);
      setPopped(true);
      sessionStorage.setItem('popped', 'true');
    }
  };

  return (
    <>
      <Confetti
        run={runConfetti}
        recycle={false}
        numberOfPieces={140}
        gravity={0.37}
      />
      <div
        className={`content animate__animated animate__fadeIn ${styles.content}`}>
        <h1
          onClick={popConfetti}
          className={!popped ? `${styles.cursorEnabled}` : ''}>
          Welcome to my page!
        </h1>
        <p>
          Here you can access my personal resources as well as the lectures for
          the current year.
        </p>
        <p>
          Also if I tinker with some stuff, and I find it cool, I put it here. I
          might also share articles about my experiences which could be useful
          someone.
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
