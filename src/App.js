import './App.css';
import './style.css';
import Validation from './Components/Validation.js';
import srcimg from "./imageInSrc.jpg";
import Video from "./Video/sample.mp4";


function App() {
 
    return (


<div>




<h1 style={{ border: "solid 1px", maxwidth:"100vw" }} className="title red">Taher</h1>

<br/>

<img src={srcimg} alt ='myImage' />

<br/>

<img src="./imageInPublic.jpg" alt="myimage" />

<br/>

<video width="320" height="240" controls autostart autoPlay src={Video} type="video/mp4" /> 

      </div>


    );
  }

export default App;
