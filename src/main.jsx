import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const slider = React.createElement (
//   'a',
//   {href: "http://google.com", target: '_blank'},
//   'CLick Google Link',
// )

// const gallary = React.createElement (
//   'img',
//   {src: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=", width: '300'},
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  // slider
  // gallary
)