import './../App.css'
import Topbar from '../components/Topbar'

import base from '../assets/base.png';
import top from '../assets/top.png';

import tut_1 from '../assets/tut_1.png';
import tut_2 from '../assets/tut_2.png';
import tut_3 from '../assets/tut_3.png';
import tut_4 from '../assets/tut_4.png';
import tut_5 from '../assets/tut_5.png';
import tut_6 from '../assets/tut_6.png';
import tut_75 from '../assets/tut_7.5.png';
import tut_8 from '../assets/tut_8.png';
import tut_9 from '../assets/tut_9.png';
import tut_10 from '../assets/tut_10.png';
import tut_11 from '../assets/tut_11.png';
import tut_12 from '../assets/tut_12.png';
import tut_125 from '../assets/tut_12.5.png';
import tut_13 from '../assets/tut_13.png';
import tut_14 from '../assets/tut_14.png';
import tut_15 from '../assets/tut_15.png';
import tut_16 from '../assets/tut_16.png';
import tut_17 from '../assets/tut_17.png';
import tut_18 from '../assets/tut_18.png';
import tut_19 from '../assets/tut_19.png';
import tut_21 from '../assets/tut_21.png';
import tut_22 from '../assets/tut_22.png';
import tut_23 from '../assets/tut_23.png';
import tut_24 from '../assets/tut_24.png';
import tut_25 from '../assets/tut_25.png';
import tut_26 from '../assets/tut_26.png';
import tut_27 from '../assets/tut_27.png';
import tut_28 from '../assets/tut_28.png';
import tut_29 from '../assets/tut_29.png';
import tut_30 from '../assets/tut_30.png';
import tut_31 from '../assets/tut_31.png';
import tut_32 from '../assets/tut_32.png';
import tut_33 from '../assets/tut_33.png';
import tut_34 from '../assets/tut_34.png';
import tut_35 from '../assets/tut_35.png';
import tut_36 from '../assets/tut_36.png';
import tut_37 from '../assets/tut_37.png';
import tut_38 from '../assets/tut_38.png';
import tut_39 from '../assets/tut_39.png';
import tut_40 from '../assets/tut_40.png';
import tut_41 from '../assets/tut_41.png';
import tut_42 from '../assets/tut_42.png';
import tut_43 from '../assets/tut_43.png';
import tut_44 from '../assets/tut_44.png';
import tut_45 from '../assets/tut_45.png';


function Design() {
    function removeHidden(event:any){
        const dot = event.currentTarget.querySelector(".dotHor");
        dot?.classList.remove("hidden");
    }
    function addHidden(event:any){
        const dot = event.currentTarget.querySelector(".dotHor");
        dot?.classList.add("hidden");
    }
    function showP1() {
      const part1 = document.querySelector('.part1');
      const part2 = document.querySelector('.part2');
      if (part1 && part2) {
        part1.classList.remove('hidden');
        part2.classList.add('hidden');
      }
    }
    function showP2() {
      const part1 = document.querySelector('.part1');
      const part2 = document.querySelector('.part2');
      if (part1 && part2) {
        part2.classList.remove('hidden');
        part1.classList.add('hidden');
      }
    }

  return (
    <>
    <div className="backdrop">
      <Topbar/>
      <div className="mainDesign">
        <div className="designHeader">
          <p className='h2 '>design your case</p>
          <div className="designOptions">
            <div className="designP1 hor pointer" onMouseEnter={removeHidden} onMouseLeave={addHidden} onClick={showP1}>
              <div className="dotHor hidden"></div>
              <p className="green">part 1: design the base</p>
            </div>
            <div className='designP2 hor pointer' onMouseEnter={removeHidden} onMouseLeave={addHidden} onClick={showP2}>
              <div className="dotHor hidden"></div>
              <p className="green">part 2: design the top</p>
            </div>
          </div>
        </div>
        <div className="designContent">
  <p>
    if you're confused, feel free to reference my{' '}
    <a href="https://cad.onshape.com/documents/6f605beaa2eeee446b12f67b/w/d1628f56d3fb9ea702c14ede/e/6a3834916e84bd1643e5fd46" target="_blank" rel="noopener noreferrer">cad</a> or ask any questions in #squeak :3
  </p>
  <p>the only parts of this guide i highly highly suggest following are steps 1-4 of part 1, since they relate to the fit of the inner components. the rest is aesthetic.</p>
  <hr />

  <div className="part1">
    <p>let's create the base of your case!</p>
    <img src={base} className='tutImg'></img>
    <hr></hr>

    <div>
      <p>1. onshape wakatime extension:</p>
      <ul>
        <li>
          <a href="https://chromewebstore.google.com/detail/onshape-wakatime/kieglbolocchhhcblnhaiodbpgkjcecg" target="_blank" rel="noopener noreferrer">
            download the extension
          </a>
        </li>
        <li>
          grab your api key from{' '}
          <a href="https://waka.hackclub.com/summary?interval=month" target="_blank" rel="noopener noreferrer">
            hackatime v1
          </a>{' '}
          by clicking your user icon and "Show API Key".
        </li>
      </ul>
    </div>

    <div>
      <p>2. sensor and switch holes:</p>
        
      <p>make a new <a href="https://cad.onshape.com/documents" target="_blank" rel="noopener noreferrer">onshape document</a>. set your document units to mm.</p>
      <ul>
        <li>name your part assembly tab "base".</li>
        <li>make a new sketch on the "top" plane. copy fig 1.</li>
        <li>select the extrude tool. select all faces excluding the two rectangular holes you made. extrude by 1.1 mm</li>
      </ul>
      <p>measurements (these can be rounded a little lol):</p>
      <p>fig. 1: 25.259mm, 60.462mm, R1.671, 130 degrees, 35mm, 110.645mm, R6</p>
      <p>fig. 2: 4.216mm, R1.038mm, 8.485mm, 3.347mm, R3.7mm, 13.477mm, 5mm, R3.891, 7.781</p>
      <p>fig. 3: 44.515mm, 54.672mm</p>
    <div className="hor wrap">
        <img src={tut_1} className='tutImg'></img>
        <img src={tut_2} className='tutImg'></img>
        <img src={tut_3} className='tutImg'></img>
      </div>
    </div>

    <div>
      <p>3. sensor and switch walls:</p>
      <p>measurements: </p>
      <p>fig. 1: 1.359mm, 16mm, .75mm, .25mm, 12.1</p>
      <p>fig. 2: 2.732mm, 12.1</p>
      <p> extrude the edges by 2.8mm. extrude the inside of the horizontal rectangle by .75mm</p>
    <div className="hor wrap">
        <img src={tut_4} className='tutImg'></img>
        <img src={tut_5} className='tutImg'></img>
        <img src={tut_35} className='tutImg'></img>
      </div>
    </div>

    <div>
      <p>now we have to import parts. start a new assembly. import the sensor, pcb, and wheel from <a href="https://github.com/idksarah/squeak/tree/main/onshape_imports" target="_blank" rel="noopener noreferrer">here</a>. insert them. </p>
      <p>you may need to rotate the sensor, pcb, and wheel 180 degrees so that they align with the rest of the assembly. fasten the center of the bottom of the sensor to the center of the top of the vertical rectangle. fasten the center of the bottom of the pcb to the center of the circle on the center.</p>
      <p> yipppee!! now, right click on your base and edit in context.</p>
      <div className="hor wrap">
        <img src={tut_22} className="tutImg1"></img>
        <img src={tut_21} className="tutImg1"></img>
        <img src={tut_23} className="tutImg1"></img>
        <img src={tut_24} className="tutImg1"></img>
        <img src={tut_25} className="tutImg1"></img>
      </div>
    </div>

    <div>
      <p> measurements: </p>
      <p>22.259mm, 1.5mm, 60.462mm, 1.5mm., 2mm, R5.</p>
      <p>fig. use the pcb and draw an L shape on the corners and front of your pcb. the farthest edge should be 1.5mm away from the pcb. the closest edge should be 0.5mm away from the pcb</p>
      <div className="hor">
        <img src={tut_6} className="tutImg"></img>
        <img src={tut_43} className="tutImg"></img>
      </div>
    </div>
      <p> extrude the outer areas by 1.5mm. extrude the pcb walls by 6.6mm</p>
        <img src={tut_44} className="tutImg"></img>
    <div>
      <p>4. battery holder: </p>
      <p>make this L shape. its placement doesn't really matter, but keep it close to your pcb (ie &lt; 0.5mm distance) since the wires are short. draw fig. 2 at the top and bottom of your L. i recommend using the mirror tool for this. (draw one side and then mirror it.) </p>
      <p>extrude the long parts by 3.15. extrude the c-shaped sections by 7mm.</p>
    <div className="hor wrap">
        <img src={tut_8} className="tutImg"></img>
        <img src={tut_9} className="tutImg1"></img>
        <img src={tut_36} className="tutImg"></img>
        <img src={tut_37} className="tutImg"></img>
      </div>
       <p>remove the rest.</p>
        <img src={tut_11} className="tutImg"></img>
    </div>

    <div>
      <p>view from the back side. start a new sketch using the edge of the battery holder as its face. </p>
    <div className="hor">
        <img src={tut_14} className="tutImg"></img>
      </div>
        <p>extrude by 25mm with a 15mm offset.</p>
        <img src={tut_45} className="tutImg"></img>
    </div>

    <div>
      <p>5. battery tab: </p>
      <p>start a new sketch in the empty space. make a small arc. extrude the rest by 2mm.</p>
      <div className="hor" style={{flexWrap: 'wrap'}}>
        <img src={tut_75} className="tutImg"></img>
        <img src={tut_15} className="tutImg"></img>
      </div>
      <p> start a new sketch on the top of your new part. flip to the top of your mouse and use these sections. remove by 1.2mm</p>
      <div className="hor wrap">
        <img src={tut_38} className="tutImg"></img>
        <img src={tut_39} className="tutImg"></img>
      </div>
    </div>

    <div>
      <p>your base should look like this now:</p>
      <img src={tut_10} className='tutImg'></img>
    </div>

    <div>
      <p>6. walls: </p>
      <p>measurements: 40mm, R3</p>      
        <img src={tut_12} className="tutImg"/>
      <p>fillet the top by 1mm</p>
      <div className="hor wrap">
        <img src={tut_125} className="tutImg"></img>
      </div>
    </div>

    <div>
      <p>view from the right side. draw what you would like your base's side profile to be. remove the extra.</p>
      <div className="hor">
        <img src={tut_13} className="tutImg"></img>
      </div>
    </div>

    <div>
      <p>7. screw hole: </p>
      <p>start a new sketch on the bottom of your mouse.</p>
      <p>measurements: bottom diameter = 4.2mm, inner diameter = 1.85mm</p>
      <p>remove outer circle by 1.2mm. remove inner circle all the way.</p>
      <div className="hor wrap">
        <img src={tut_16} className="tutImg"></img>
        <img src={tut_40} className="tutImg"></img>
      </div>
    </div>

    <div>
      <p>yayayay!!! base of ur mouse done. halfway there soldier!</p>
    </div>
  </div>

  <div className="part2 hidden">
    <p>let's create the top of your case!</p>
    <img src={top} className='tutImg'></img>
    <hr></hr>
    <p>quick note: this is where most of your mouese customization (idk the word lol) happens! feel free to adjust any of the measurements to fit your design, or go off guide and do your own thing :3</p>
    <div>
      <p>1. back: </p>
      <p> make a new part studio. make a new sketch on the "front" plane (perpendicular to what you've previously been working on). this is gonna be the curvy top part of your mouse. make a new sketch on the "front" plane. draw a line for the side profile of your mouse. use the sweep operation.</p>
    <div className="hor wrap">
      <img src={tut_17} className='tutImg1'></img>
      <img src={tut_18} className='tutImg1'></img>
      <img src={tut_19} className='tutImg1'></img>
    </div>
    </div>

    <div>
      <p>extend the back of your mouse by 10mm.</p>
    </div>

    <div>
      <p>start a new sketch on the horizontal face of your sweep (the back). draw a horizontal line. remove anything below the horizontal line. start a new sketch on the top plane. use the bottom of your current walls. i extruded by 9mm, but just make sure the walls are touching.</p>
      <div className="hor">
        <img src={tut_32} className='tutImg1'></img>
        <img src={tut_41} className='tutImg1'></img>
      </div>
    </div>

    <div>
      <p>2. clickers:</p>
      <p> start a new sketch on the "right" plane. make it look however you want your clickers to look. </p><p><span className='italic'> ok now look! you can connect your clickers to the back by simply attaching them in this step or adding an extension to connect them to the back later on. i did the 2nd option (which was honestly unnecessary), but i recommend the 1st method. if you're doing the 1st method, skip steps with ** in front of them</span></p>
      <div className="hor">
        <img src={tut_26} className='tutImg1'></img>
      </div>
    </div>


    <div>
      <p>open up your mouse assembly and insert the top of the case. right click and edit in context. in your clicker sketch, use the button. </p>
      <p> make sure that your clicker is in contact with the button and has space to move down. </p>
      <p>extrude using your clicker sketch. make sure that it doesn't touch the wheel. i extruded by 22mm with an offset of 4.5mm.</p>
      <p> <span className='italic'>if your clicker doesn't touch the wheel mounts, skip the next 2 steps</span></p>
      <p>on the other side of your clicker, use the wheel mount. create space around it so that the clicker will be able to move downwards. i removed 8mm in this shape, but just make sure that your clicker will not touch the wheel mount. </p>
      <div className="hor">
        <img src={tut_27} className='tutImg1'></img>
      </div>
    </div>

    <div>
      <p>start a new sketch on its inner face. again, using the wheel mount, create a sketch around it so that the clicker will be able to click. i used a circle in this case. i removed 8mm in this shape, but just make sure that your clicker will not touch the wheel mount.</p>
      <div className="hor">
        <img src={tut_28} className='tutImg1'></img>
      </div>
    </div>

    <div>
      <p><span className='italic'>next step is unnecessary if you are a. okay with the gap between the two clickers or b. do not have the gap</span></p> 
      <p>on the side of your right OR left clicker, draw a sketch where you want to extend your clicker (into the inner gap). make sure it is NOT touching the wheel. i extruded by 6.7mm.</p>
      <div className="hor">
        <img src={tut_30} className='tutImg1'></img>
      </div>
    </div>

    <div>
      <p>** on the backs of the clickers, use their outline and then draw a rectangle you want to extend into the back. this connects the clickers with the back. i extruded by 41.9mm, but just make sure they're connecting to the back.</p>
      <div className="hor">
        <img src={tut_31} className='tutImg1'></img>
      </div>
    </div>

    <div>
      <p>3. (optional) fillet your edges:</p><p>i did 2mm. depends on your design. this improves print quality.</p>
      <div className="hor">
      </div>
    </div>

    <div>
      <p>4. screw holes: </p><p>start a new sketch on the top face. draw a rectangle in the back. make sure that it doesn't intersect the battery holder (check in the assembly). i extruded by 7mm. start a new sketch on its face. use its shape and draw a line down around the middle. make sure that it doesn't intersect with the battery holder. i extruded by 19mm.</p>
      <div className="hor">
        <img src={tut_33} className='tutImg1'></img>
        <img src={tut_34} className='tutImg1'></img>
      </div>
    </div>

    <div>
      <p>start a new sketch on the bottom but leave it blank. go back to your assembly and edit in context. edit your sketch and use the inner screw hole. remove 8mm.</p>
      <div className="hor">
        <img src={tut_42} className='tutImg1'></img>
      </div>
    </div>

    <div>
      <p>yippeee!!! thanks so much for getting through the tut :D</p>
      <p>before submitting,, look over your design for any possible issues (eg intersecting parts, parts not connected, impossible overhangs, etc). @idksarah on slack if you've got any questions!!</p>
    </div>
  </div>
</div>

  
</div>

      </div>

    </>
  )
}

export default Design