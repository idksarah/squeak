import assembly from './../assets/assembly.png'
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
            <p>squeak is a ysws running from 7/3/2025 to 7/10/2025 where you can design your own mouse case and receive the physical case and parts (provided by bambu's mouse kit)</p>
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
          <img className="dore" src={dore} onClick={startSqueak}></img>
        </div>
      </div>
    </div>
  )
}

export default Home
