import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/lib/fontawesome/css/fontawesome.css"

// import fontawesome
import "../src/lib/fontawesome/css/brands.css"
import "../src/lib/fontawesome/css/solid.css"
// import bootrap
import "../src/lib/bootstrap/css/bootstrap.min.css"
// import carousel
import "../src/lib/owlcarousel/assets/owl.carousel.min.css"
import "../src/lib/owlcarousel/assets/owl.theme.default.min.css"
import "./assets/css/style.css"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
