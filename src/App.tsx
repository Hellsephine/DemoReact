import './App.css';
import Header from './components/Header/header';
import Maincard from './components/Maincard/maincard';
import Title from './components/Title/title';
import Footer from './components/Footer/Footer';
import MainText from './components/MainText/maintext';
import DivUI from './components/UiTemplate/DivUI';


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
