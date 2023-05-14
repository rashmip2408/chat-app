import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

const clientId = '208251575148-k9aj1duekcror525nc5qn9go1iiblvct.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
