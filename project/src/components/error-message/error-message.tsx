import {useAppSelector} from '../../hooks';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const {error} = useAppSelector((state) => state);

  return (error)
    ? <div className='sign-in__error-message'>{error}</div>
    : null;

}

export default ErrorMessage;

