import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import Navbar from './componenets/Navbar';
import Experiance from './componenets/Experiance';
import Experiance2 from './componenets/Experiance2';
import ExperianceEvent from './componenets/ExperianceEvent';
import BestExp from './componenets/BestExp';
import PrevEvent from './componenets/PrevEvent';
import Footer from './componenets/Footer';

function App() {
  return (
   <>
   {/* <Navbar/> */}
   <Homepage/>
   <Experiance/>
   <Experiance2/>
   <ExperianceEvent/>
   <BestExp/>
   <PrevEvent/>
   <Footer/>
   </>
  );
}

export default App;
