import './header.styles.scss';
import { Link } from 'react-router-dom';
import {auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// Higher order component HOC
import { connect } from 'react-redux';

// now gets fed currentUser prop from redux
const Header = ({currentUser}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser
        ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signin">SIGN IN</Link>

      }
    </div>
  </div>
);

// allows to access the state - root reducer, then access user reducer, from there - the currentUser value of state
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);
