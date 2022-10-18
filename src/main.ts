// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
import { formatNumberToString } from './utils'
import { TIPS, student } from './const'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

export const abc = [1, 2, 3]

const std1: student = {
  age: 20,
  name: 'TinssonTai'
}

const testFunc = () => {
  console.log(TIPS)
  console.log(std1)
  console.log(...abc.map(n => formatNumberToString(n)))
}

testFunc()

