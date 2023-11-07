// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import dummy from "components"
// import{ Button} from "components";
import {Template,updateState,useEffect} from 'components'

const Home=()=>{
  return(
  <div>
    {/* <Button  style={{width:"200px",height:"300px",background:"black"}}onClick={()=>console.log("button")}>Clic</Button> */}
    <Template/>
    <updateState/>
    <useEffect/>
  </div>
  )
}

// dummy();
export default Home
