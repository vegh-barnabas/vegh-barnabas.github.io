import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <div className="content">
        <h1>Welcome to my page!</h1>
        <p>
          Here you can access my personal resources as well as the lectures for
          the current year.
        </p>
        <p>
          Also if I tinker with some stuff, and I find it cool, I put it here.
        </p>
        <p>
          If you come across any errors, please reach out to me in the email
          address provided on the <Link to={'/contact'}>Contact</Link> page.
        </p>
      </div>
    </>
  );
}

export default Homepage;
