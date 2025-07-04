import styles from 'routes/elte/Elte.module.scss';

import 'animate.css';

export default function Elte() {
  return (
    <>
      <div className="content animate__animated animate__fadeIn">
        <p>
          This is the list of some of my courses held in Webprogramming,
          Server-side Webprogramming and Client-side Webprogramming.
        </p>
        <p>
          I also included some useful stuff where you can learn handy concepts.
        </p>
        <p>
          You will need an{' '}
          <span className={styles.strong}>active ELTE Microsoft account</span>{' '}
          to watch the videos and access the files located on OneDrive.
        </p>
        <p>The files are hosted on OneDrive or on my personal GitHub.</p>
        <h4>General useful stuff</h4>
        <div className={styles.section}>
          <ul>
            <li>
              <span>Grid and flexbox game: </span>
              <a
                href="https://codingfantasy.com/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} link`}>
                codingfantasy.com
              </a>
            </li>
            <li>
              <span>
                Modern javascript tutorial from beginner to advanced:{' '}
              </span>
              <a
                href="https://javascript.info/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} link`}>
                javascript.info
              </a>
              <ul>
                <li>
                  <span>Article about Shadow DOM: </span>
                  <a
                    href="https://javascript.info/shadow-dom"
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.link} link`}>
                    javascript.info/shadow-dom
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <h4>Useful files for courses</h4>
        <div className={styles.section}>
          <p className={styles.subheading}>
            Access the full list{' '}
            <a
              href="https://ikelte-my.sharepoint.com/:f:/g/personal/ak3g4s_inf_elte_hu/EnuXFuIMLjVBsm5PsFaysWIBwsrWaLCiF8KqHR5wNijx6A?e=xogUPD"
              target="_blank"
              rel="noreferrer"
              className={`${styles.link} link`}>
              here
            </a>
            , or download them individually:
          </p>
          <ul>
            <li>
              <a
                href="https://ikelte-my.sharepoint.com/:u:/g/personal/ak3g4s_inf_elte_hu/EQtzI8Q5xO1LnPeyhsx8GcQBE0_AI3tZv4txr5sa1gEOig?e=KNhI6t"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} link`}>
                storage.php
              </a>
            </li>
          </ul>
        </div>
        <h4>Webprogramming 22/23-1</h4>
        <div className={styles.section}>
          <p>
            Access all of the files{' '}
            <a
              href="https://ikelte-my.sharepoint.com/:f:/g/personal/ak3g4s_inf_elte_hu/Eipc0ZsZCfhIrtMcSZYeN5kBpwFJmmmN-NeXsp6doLCqBw?e=P8vZF9"
              target="_blank"
              rel="noreferrer"
              className={`${styles.link} link`}>
              here
            </a>{' '}
            (OneDrive).
          </p>
        </div>
        <h4>Server-Side Webprogramming 21/22-2</h4>
        <div className={styles.section}>
          <a
            href="https://ikelte-my.sharepoint.com/:f:/g/personal/ak3g4s_inf_elte_hu/EjyWyT5ZoZZMr2l7e3UmUq4BHYNpfEKXBjHWh8rv_7gL0w?e=DhDV3t"
            target="_blank"
            rel="noreferrer"
            className={`${styles.link} link`}>
            Videos (OneDrive)
          </a>
          <a
            href="https://github.com/vegh-barnabas/szerveroldali-webprog"
            target="_blank"
            rel="noreferrer"
            className={`${styles.link} link`}>
            Files (GitHub)
          </a>
        </div>
        <h4>Client-Side Webprogramming 21/22-2</h4>
        <div className={styles.section}>
          <a
            href="https://ikelte-my.sharepoint.com/:f:/g/personal/ak3g4s_inf_elte_hu/Es0QPzMlRNFCmr-ykJGtUCUBsxriRkBa_rbAz-h2SbugGw?e=4HFs02"
            target="_blank"
            rel="noreferrer"
            className={`${styles.link} link`}>
            Videos (OneDrive)
          </a>
          <a
            href="https://github.com/vegh-barnabas/kliensoldali-webprog"
            target="_blank"
            rel="noreferrer"
            className={`${styles.link} link`}>
            Files (GitHub)
          </a>
        </div>
        <h4>Client-Side Webprogramming 24/25-2</h4>
        <div className={styles.section}>
          <a
            href="https://github.com/vegh-barnabas/kliens-24-25-2"
            target="_blank"
            rel="noreferrer"
            className={`${styles.link} link`}>
            Files (GitHub)
          </a>
        </div>
      </div>
    </>
  );
}
