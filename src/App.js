import "./assets/images/blocks/style.scss";
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Header />
        <div className='sidebar'>
          <Sidebar />
        </div>
        <main className='main'>
          <Body />
        </main>
      </div>
    </div>
  );
}

export default App;
