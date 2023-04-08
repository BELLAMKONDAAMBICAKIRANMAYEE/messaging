


import {GoogleOAuthProvider} from '@react-oauth/google';

import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider';

function App(){
const clientId='39536903426-5mqcs1r6e9cbvmcctjr2ituo4hctnhnm.apps.googleusercontent.com'

  return(
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}
export default App