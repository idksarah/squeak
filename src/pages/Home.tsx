import assembly from './../assets/assembly.png'
import stepOne from './../assets/1.png'
import bambu from './../assets/bambu.png'
import { Navigate, useNavigate } from 'react-router-dom'
import './../App.css'

function Home() {
    const navigate = useNavigate();

    function goOverview(){
        navigate("/overview");
    }
  return (
    <>
    <div className="content">
      <div className="intro">
        <p className="st1 color2">squeak!</p>
        <img src={assembly} className="assembly"/>
        <div className="horCon">
          <div className="accentBorder1">
            <p className="st3">design a case</p>
            <img src={stepOne} className=" stepImg"></img>
          </div>
          <div className="accentBorder1">
            <p className="st3">find a printer</p>
          </div>
          <div className="accentBorder1"> 
            <p className="st3">receive your mouse!</p>
            <img src={bambu} className="stepImg"></img>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="section">
          <p className="st3 header">what is this?</p>
          <p><span className="bold">squeak</span> is a <span className="bold">you ship, we ship (ysws)</span> where you can design your own mouse case and <span className="bold">receive the physical case and parts</span> (provided by bambu's mouse kit)</p>
        </div>
        <div className="accentBorder1 section">
          <p className="st3 header ">getting started</p>
          <ol>
            <li><p>join <span className="cursor accentBg1">#squeak</span> on slack</p></li>
            <li><p>check out the <span className="cursor accentBg1" onClick={goOverview}>design overview</span></p></li>
          </ol>
        </div>
        <div className="section requirements">
          <p className="st3 header">requirements</p>
          <ol>
            <li>set up <span>onshape's hackatime extension PUT A LINK HERE</span></li>
            <li>spend 3 hours designing a bottom and top case in onshape</li>
            <li>find someone in <span>#printing-legion</span>who can print your design</li>
          </ol>
        </div>
        <div className="section faq">
          <p className="st3 header">faq</p>
        </div>
      </div>
      
    </div>
    <div className="footer">
        <hr className="hr"></hr>
      <p>made with love by @idksarah</p>
    </div>
      
      
    </>
  )
}

export default Home
