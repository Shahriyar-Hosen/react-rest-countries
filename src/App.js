import './App.css';
import Countries from './Components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
// const Countries = () => {
//   const [countries, setCountries] = useState([]);
//     useEffect(() => {
//       fetch("https://restcountries.com/v2/all")
//       .then(res => res.json())
//       .then(data => setCountries(data))
//     },[])
//   return (
//     <div>
//       <h1>Visiting every country in tha world</h1>
//       <p>{countries.length}</p>
//       {
//         countries.map((country) =>  <Country country = {country}></Country>)
//       }
//     </div>
//   )
// }

// const Country = (props) => {
//   console.log(props.country);
//   return (
//     <div>
//       <h2>Name: {props.country.name}</h2>
//       <p>Capital: {props.country.capital}</p>
//     </div>
//   )
// }

export default App;
