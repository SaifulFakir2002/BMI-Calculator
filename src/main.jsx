import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*

let height = document.getElementById('height');
 let weight = document.getElementById('weight'); 
 let button = document.getElementById('button'); 
 let score = document.getElementById('score'); 
 let result = document.querySelector('.result'); 
 button.addEventListener('click', function (){ 
let newHeight = parseFloat(height.value); 
let newWeight = parseFloat(weight.value); 
newHeight = newHeight / 100; 
let sqrHeight = newHeight * newHeight; 
let bmi = newWeight / sqrHeight; 
score.textContent = bmi.toFixed(2); 
result.style.display = 'block'; 
if (score.textContent < 18.6)
{ score.style.background = '#f1c40f'; 
score.style.color = 'red'; } 
else if (score.textContent < 24.9)
{ score.style.background = '#2ecc71'; 
score.style.color = '#ecf0f1'; } 
else { score.style.background = '#e74c3c';
score.style.color = 'yellow'; } });
let form = document.getElementById('form'); 
form.addEventListener('submit', function (e)
{ e.preventDefault(); });
 */