import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className='main'>
        <MainContent />
      </main>
    </div>
  );
}

export default App;
