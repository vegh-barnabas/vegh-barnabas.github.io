import 'animate.css';

import { useState } from 'react';
import Confetti from 'react-confetti-boom';
import { Link } from 'react-router-dom';

import styles from './Homepage.module.scss';

type ConfettiProps = {
  x?: number;
  y?: number;
  deg?: number;
  particleCount?: number;
  spreadDeg?: number;
};

const ConfettiBoom = (props: ConfettiProps) => {
  const Boom = Confetti as unknown as (p: ConfettiProps) => JSX.Element;

  return <Boom {...props} />;
};

function Homepage() {
  const [boom, setBoom] = useState<{
    x: number;
    y: number;
    deg: number;
  } | null>(null);

  const [popped, setPopped] = useState(
    Boolean(sessionStorage.getItem('popped')),
  );

  const popConfetti = (e: React.MouseEvent) => {
    if (!popped) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      const deg = Math.random() * (300 - 240) + 240;

      setBoom({ x, y, deg });

      setPopped(true);
      sessionStorage.setItem('popped', 'true');
    }
  };

  return (
    <>
      {boom && (
        <ConfettiBoom
          x={boom.x}
          y={boom.y}
          deg={boom.deg}
          spreadDeg={50}
          particleCount={80}
        />
      )}
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
