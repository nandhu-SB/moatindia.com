import React ,{useState} from 'react'
import { Navigate,Link } from 'react-router-dom'
import { doSignInWithGoogle,doSignInWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import "./Login.css"
const Login = () => {
    const {userLoggedIn} = useAuth();
    // console.log("UserLoggedIn:", userLoggedIn);  


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isSigningIn,setIsSigningIn] = useState(false);
    const[errorMsg,setErrorMsg] = useState('');

const onSubmit = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
        setIsSigningIn(true);
        setErrorMsg('');

        try {
            await doSignInWithEmailAndPassword(email, password);
        } catch (error) {
            setErrorMsg(error.message);
            setIsSigningIn(false);
        }
    }
};

  const onGoogleSignIn = async (e) => {
    e.preventDefault();

    if (!isSigningIn) {
        setIsSigningIn(true);
        setErrorMsg('');

        try {
            await doSignInWithGoogle();
        } catch (error) {
            setErrorMsg(error.message);
            setIsSigningIn(false);
        }
    }
};

  return (
    <div>
        
  {userLoggedIn && <Navigate to={'/backend'} replace={true} />}

  <main className="login-container">
    <div className="login-card">
      <h3 className="login-title">Glad to see you back boss!</h3>

      <form onSubmit={onSubmit} className="login-form">
        <div>
          <label>Email</label>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errorMsg && <span className="error-msg">{errorMsg}</span>}

        <button type="submit" disabled={isSigningIn} className="login-btn">
          {isSigningIn ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {/* <p className="register-text">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p> */}

      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-text">OR</div>
        <div className="divider-line"></div>
      </div>

      <button
        disabled={isSigningIn}
        onClick={onGoogleSignIn}
        className="google-btn"
      >
        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
      </button>
    </div>
  </main>
</div>

  )
}

export default Login