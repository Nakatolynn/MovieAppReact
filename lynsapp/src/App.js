import { useEffect } from 'react'; 
import  React from 'react'; 
import './App.css';
//import searchicon from './search.svg';
//
//consuming the database API

const API_URL ='http://www.omdbapi.com?apikey=f3132bb';
// const Application= ()=>{

  
// return(<Application/>);
// }

// const Person = (props) => {
//   return(
//     <>
//     <h1>{props.name}</h1>
//     <h2>{props.LastName}</h2>
//     <h2>{props.Gender}</h2>
//     </>
//   )
// };
const App =() =>{
  const searchMovies= async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }
useEffect(()=>{
searchMovies('Sanyu');
},[]);
return(
  <div className="app"> 
  <h1>UgandaZaabuMovies</h1>
  <div className="search">
    <input placeholder="search for KinaUgmovies"/>
  </div>
  </div>
  
);
 //const [counter,setCounter] = useState(0);
//   return (
//     <div className='App'>
//       {/* //Rendering person or calling person in JSX*/}
//  <Person name={'Lynn'} LastName={'Nakato'} Gender={'22'}/> 
//  <Person name={'Letty'} LastName={'Babirye'} Gender={'22'}/> 
//  <Person name={'Timothy'} LastName={'Wamoto'} Gender={'25'}/> 
//  <Person name={'Jose'} LastName={'okello'} Gender={'26'}/> 
//  <button>--</button>
//  <h1>00</h1>
//  <button>++</button>
//     </div>
//   );
}



export default App;
