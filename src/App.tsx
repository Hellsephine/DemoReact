import './App.css';
import Header from './Components/Header/header';
import Maincard from './Components/Maincard/maincard';
import Title from './Components/Title/title';
import Footer from './Components/Footer/Footer';
import MainText from './Components/MainText/maintext';
import DivUI from './Components/UiTemplate/DivUI';


function App() {
  return (
    <div className="App">
        <Header/>
        <Title/>
        <Maincard/>
        <MainText/>
        <DivUI/>
        <Footer/>
    </div>
  );
}

export default App;
