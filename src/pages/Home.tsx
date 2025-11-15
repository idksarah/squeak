import assembly from './../assets/assemblyV2.png'
// import flag from "../assets/flag-orpheus-left.png"

import { useNavigate } from 'react-router-dom'
import './../App.css'
import Topbar from '../components/Topbar'
import dore from '../assets/dore.png';
import ssqueak from '../assets/squeak.mp3';

function Home() {
    const navigate = useNavigate();
    const squeak = new Audio(ssqueak);

    const startSqueak = () => {
      squeak.play()
    }
    
    function goDesign(){
        navigate("/design");
    }

  return (
    <div id="home">
      {/* <div>
        <a className="logo" href="https://hackclub.com"></a>
        <img src={flag} className="flag"></img>
      </div> */}
    <div className="backdrop">
      <Topbar></Topbar>
      <div className="main">
        <img src={assembly} id="assembly"></img>
        <div>
          <div className="column">
            <div className="title">
              <p className="h1">squeak!</p>
              <p className="accent">v3</p>
            </div>
            <p className="i subheading">a hack club you ship we ship (ysws)</p>
          </div>
          <div className="column">
            <p className="h2">what's this?</p>
            <p>squeak is a hack club program running from 11/14 to 11/31 11:59 pm est where you can design your own mouse case and receive the physical case and parts (provided by bambu's mouse kit and hack club's printing legion!)</p>
          </div>
        </div>
        <div className="column">
          <p className="h2">how do i get started?</p>
          <p className="bg1 grow">join <a href="https://hackclub.slack.com/archives/C094458MVMX" className="link">#squeak</a> on the <a href="https://join.slack.com/t/hackclub/shared_invite/zt-38r4vt46o-bLqCqTXACfkJ2V8BBkEASw" className="link">hack club slack</a></p>
          <p className="bg1 grow">check out the <span className="link" onClick={goDesign}>design overview</span></p>
        </div>
      </div>
    </div>
      <div className="footer">
        <div className="innerFooter">
          <p>made with &lt;3 by @idksarah</p>
          <p>maintained by @jenin :)</p>
          <img className="dore" src={dore} onClick={startSqueak}></img>
        </div>
      </div>
    </div>
  )
}

export default Home
