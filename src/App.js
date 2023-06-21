import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import data from './FakeData.json'
import Home from './screens/Home';
import Post from './screens/Post';
import About from './screens/About';
import Posts from './screens/Posts';
import NoMatch from './screens/NoMatch';


// NavLink: a component for setting the URL and providing
// navigation between components in our app
// without triggering a page refresh
// We can even style in the NavLink itself


// Route: a component that connects a certain path in the URL 
// with the relevant component to render at the location.


export default function App() {
  return (
    <div className="App">
      <div className='links'>
        {/* 'NavLink' links your pages. */}
        <nav>
          <NavLink to={"/"} >Home</NavLink>
          <NavLink to={"/about"} >About</NavLink>
          <NavLink to={"posts"} >Posts</NavLink>

        </nav>
      </div>


      {/* // 'Routes' renders your pages. */}
      <Routes>
      // 'Route' in singular form is a self-closing tag.
        <Route path='/' element={<Home /> } /> 
        <Route path='about' element={<About /> } />

        <Route path='/posts' element={<Posts posts={data} /> } /> 

        <Route path='posts/:post_id' element={<Post {...data} />} />

        <Route path='*' element={ <NoMatch /> } />

      </Routes>

    </div>
  );
}


