import { Link } from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <div>
      <h1>
        404
      </h1>
      <p>
        Page not found
      </p>
      <small>
        <Link to="/">Go to the main page</Link>
      </small>
    </div>
  );
}

export default NotFoundPage;
