import { Link } from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus, getAvatarUrl } from '../../store/user/selectors';

export default function UserBlock(): JSX.Element {
  const dispatch = useAppDispatch();
  const avatarUrl = useAppSelector(getAvatarUrl);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const handleAvatarClick = () => dispatch(redirectToRoute(AppRoute.MyList));

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar" onClick={handleAvatarClick}>
            <img src={avatarUrl} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <Link
            className="user-block__link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
            to='/'
          >
            Sign out
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(redirectToRoute(AppRoute.SignIn));
          }}
          to='/'
        >
          Sign in
        </Link>
      </li>
    </ul>
  );
}
