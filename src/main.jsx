import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// let newElement = React.createElement('a',{href : 'https://rao-shahbaz.blogspot.com',target : '_blank'}, 'Coninue with Rao WebSite')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
