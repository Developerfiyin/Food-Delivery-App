import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/userContext.jsx'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  
  <Provider>

<UserContext>
      <App />
    </UserContext>

  </Provider>
    
    
    
)
