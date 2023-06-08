import './App.css';
import Header from './components/Header/header';
import Title from './components/Title/title';
import Maincard from './components/Maincard/maincard';
import MainText from './components/MainText/maintext';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Title/>
        <Maincard/>
        <MainText/>
        <Footer/>
    </div>
  );
}

export default App;
