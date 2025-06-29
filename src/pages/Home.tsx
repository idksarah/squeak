import assembly from './../assets/assembly.png'
import { useNavigate } from 'react-router-dom'
import './../App.css'
import Topbar from '../components/Topbar'

function Home() {
    const navigate = useNavigate();
    
    function goDesign(){
        navigate("/design");
    }

  return (
    <div id="home">
    <div className="backdrop">
      <Topbar></Topbar>
      <div className="main">
        <img src={assembly} id="assembly"></img>
        <div>
          <div className="column">
            <p className="h1">squeak!</p>
            <p className="i subheading">a hack club you ship we ship (ysws)</p>
          </div>
          <div className="column">
            <p className="h2">what's this?</p>
            <p>squeak is a ysws running from date to date where you can design your own mouse case and receive the physical case and parts (provided by bambu's mouse kit)</p>
          </div>
        </div>
        <div className="column">
          <p className="h2">how do i get started?</p>
          <p className="bg1 grow">join <span className="link">#squeak</span> on the <span className="link">hack club slack</span></p>
          <p className="bg1 grow">check out the <span className="link" onClick={goDesign}>design overview</span></p>
        </div>
      </div>
    </div>
      <div className="footer">
        <div className="innerFooter">
          <p>made with love by @idksarah</p>
        </div>
      </div>
    </div>
  )
}

export default Home
