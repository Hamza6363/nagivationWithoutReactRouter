import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Service from './pages/Service/Service';
import Contact from './pages/Contact/Contact';

const HomePage = () =>{
  if(window.location.pathname === "/"){
    return <Home />
  }
}
const AboutPage = () =>{
  if(window.location.pathname === "/about"){
    return <About />
  }
}
const ServicePage = () =>{
  if(window.location.pathname === "/service"){
    return <Service />
  }
}
const ContactPage = () =>{
  const submittedData = (e) =>{
    console.log(e);
  } 
  if(window.location.pathname === "/contact"){
    return <Contact formSubmitData={submittedData} />
  }
}

function App() {
  return (
    <div className="App">
      {HomePage()}
      {AboutPage()}
      {ServicePage()}
      {ContactPage()}
    </div>
  );
}

export default App;
