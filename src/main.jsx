import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp'
import { GifExpertApp } from './GiftExpertApp'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp value={150}/>
    <GifExpertApp />
   </React.StrictMode>
)
