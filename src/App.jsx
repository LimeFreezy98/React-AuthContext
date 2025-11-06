import './App.css';

import { AuthProvider } from './AuthContext';
import LoginControl from './LoginControl';


function App() {
  return (
    <AuthProvider>
  <div className='container mt-5'>
  <h1>Mock AuthContext Example</h1>
  <LoginControl />
</div>
 </AuthProvider>
 );
 
}

export default App;
