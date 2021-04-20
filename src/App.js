import "./assets/images/blocks/style.scss";
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Sidebar } from './components/Sidebar/Sidebar';
import { PostPage } from "./components/Body/PostPage";

function App() {
  return (
    <div className="App">
      <div className='page'>
        <div className='header'>
          <Header />
        </div>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <main className='main'>
          {/* <Body /> */}
          <PostPage />
        </main>
      </div>
    </div>
  );
}

export default App;
