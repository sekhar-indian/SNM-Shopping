import Post from './components/Post.jsx';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Catagiri from './components/Catagiri.jsx';
import Footer from './components/Footerin.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Catagiri/>
      {/* <Post name="sekhar" /> */}
      <Footer/>
    </div>
    
  )
}
export default App
