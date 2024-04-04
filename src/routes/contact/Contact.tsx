import { BsChatLeftDotsFill, BsGithub, BsLinkedin } from 'react-icons/bs';

import 'animate.css';

import styles from 'routes/contact/Contact.module.scss';

export default function Contact() {
  return (
    <>
      <div className="content animate__animated animate__fadeIn">
        <div className={styles.contactList}>
          <div>
            <BsLinkedin /> LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/vegh-barnabas"
              target="_blank"
              rel="noreferrer"
              className="link">
              vegh-barnabas
            </a>
          </div>
          <div>
            <BsGithub /> Github:{' '}
            <a
              href="https://github.com/vegh-barnabas"
              target="_blank"
              rel="noreferrer"
              className="link">
              vegh-barnabas
            </a>
          </div>
          <div>
            <BsChatLeftDotsFill /> Email: vbarni 11 kukac gmail pont com
          </div>
        </div>
      </div>
    </>
  );
}
