import "./assets/images/blocks/style.scss";
import { Header } from './components/Header/Header';
import { Body } from './components/Body/body/Body';
import { Sidebar } from './components/Sidebar/Sidebar';
import { PostPage } from "./components/Body/postPage/PostPage";
import { Works } from "./components/Body/works/Works";
import { Profile } from "./components/Body/profile/Profile";
import { Singup } from "./components/Body/singup/Singup";
import { Search } from "./components/Body/search/Search";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='page'>
          <div className='header'>
            <Header />
          </div>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <main className='main'>
            <Route path='/main' render={ ()=> <Body />} />
            <Route path='/postPage' render={ ()=> <PostPage />} />
            <Route path='/works' render={ ()=> <Works />} />
            <Route path='/profile' render={ ()=> <Profile />} />
            <Route path='/singup' render={ ()=> <Singup />} />
            <Route path='/search' render={ ()=> <Search />} />
          </main>
        </div>
      </div>


    </BrowserRouter>
  );
}

export default App;



