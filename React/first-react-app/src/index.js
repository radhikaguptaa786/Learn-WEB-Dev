import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const headingstyle={
//   backgroundColor:'red',
//   padding:'20px',
//   border:'10px solid black'
// };
// // const myVar=<h1 style={{backgroundColor:'red'}}className='myClass'>Hello I'm in JSX</h1>;
// const myVar=
// <div>
// <h1 style={headingstyle}className='myClass'>Hello I'm in JSX</h1>;
// <p className='subheading'>Hello</p>
// </div>

// function myClock()
// {
//   // root.render(
//     <div>
//       <p style={{fontSize:'3rem'}}>{new Date().toLocaleTimeString()}</p>;
//      <h1>This will not get updated</h1>
//     </div>
    
//   // );
//   setTimeout(myClock,1000)
// }

// myClock();
// root.render(myVar);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const gridbox={
//   display:'grid',
//   gridTemplateColumns: 'repeat(3,1fr)'
// }

//functional
// function Card(props)
// {
//   const cardstyle={
//     padding:'10px',
//     border:'2px solid black'
//   }
//   return (
//     <div style={cardstyle}>
//      <Avatar image={props.image} name={myname}/>
//       <h1>Radhika Gupta</h1>
//       <p>radhikaguptaa786@gmail.com</p>
//     </div>
//   )
// }

// //class based 
// class Welcome extends React.Component{
//   render(){
//     return <h1>Hello , {this.props.name}</h1>
//   }
// }

// function Avatar(props)
// {
//   return (
//     <img src={props.image} alt={props.image}/>
//   );
// }
// //user defined component Card 
// const myname ="Shraddha"
// root.render(
//   <div style={gridbox}>
//     <Card image="https://via.placeholder.com/200"/>
//     <Card image="https://via.placeholder.com/200"/>
//     <Card image="https://via.placeholder.com/200"/>
//     <Card/>
//     <Welcome name="Radhika Gupta"/>
//     <Welcome name={myname}/>
//     <Avatar/>
//   </div>
// )
