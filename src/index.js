import React from 'react';
import ReactDOM from 'react-dom/client';
import {Rutas} from './routes/Rutas';
import { Context } from './components/Admin/Anchetas/Context/Context';

// Importacion de hojas de estilos css
import './assets/css/bootstrap.min.css'
import './assets/css/jquery-ui.css'
import './assets/css/magnific-popup.css'
import './assets/css/style.css'
import './assets/fonts/icomoon/style.css'
import './assets/css/image.css'
import './assets/css/scroll.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context>
        <Rutas/> 
    </Context>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
