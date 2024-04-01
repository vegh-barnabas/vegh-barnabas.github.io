import { BsChatLeftDotsFill, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Contact() {
  return (
    <>
      <div className="content animate__animated animate__fadeIn">
        <p>
          <BsLinkedin /> LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/vegh-barnabas"
            target="_blank"
            rel="noreferrer">
            vegh-barnabas
          </a>
        </p>
        <p>
          <BsGithub /> Github:{' '}
          <a
            href="https://github.com/vegh-barnabas"
            target="_blank"
            rel="noreferrer">
            vegh-barnabas
          </a>
          <p>
            <BsChatLeftDotsFill /> Email: vbarni 11 (qkac) gmail (d.ot) com
          </p>
        </p>
      </div>
    </>
  );
}
