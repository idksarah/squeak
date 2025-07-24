import './../App.css'
import Topbar from '../components/Topbar'

import tut_0 from './../assets/shell/tut_0.png';
import tut_1 from './../assets/shell/tut_1.png';
import tut_2 from './../assets/shell/tut_2.png';
import tut_3 from './../assets/shell/tut_3.png';
import tut_4 from './../assets/shell/tut_4.png';
import tut_5 from './../assets/shell/tut_5.png';
import tut_6 from './../assets/shell/tut_6.png';
import tut_8 from './../assets/shell/tut_8.png';
import tut_9 from './../assets/shell/tut_9.png';
import tut_10 from './../assets/shell/tut_10.png';
import tut_11 from './../assets/shell/tut_11.png';
import tut_13 from './../assets/shell/tut_13.png';
import tut_14 from './../assets/shell/tut_14.png';
import tut_16 from './../assets/shell/tut_16.png';
import tut_17 from './../assets/shell/tut_17.png';
import tut_18 from './../assets/shell/tut_18.png';
import tut_19 from './../assets/shell/tut_19.png';
import tut_20 from './../assets/shell/tut_20.png';
import tut_22 from './../assets/shell/tut_22.png';
import tut_23 from './../assets/shell/tut_23.png';
import tut_24 from './../assets/shell/tut_24.png';
import tut_25 from './../assets/shell/tut_25.png';
import tut_27 from './../assets/shell/tut_27.png';
import tut_28 from './../assets/shell/tut_28.png';
// import tut_32 from './../assets/shell/tut_32.png';
// import tut_33 from './../assets/shell/tut_33.png';
import tut_34 from './../assets/shell/tut_34.png';
import tut_35 from './../assets/shell/tut_35.png';
import tut_36 from './../assets/shell/tut_36.png';
import tut_37 from './../assets/shell/tut_37.png';
import tut_38 from './../assets/shell/tut_38.png';
import tut_39 from './../assets/shell/tut_39.png';
import tut_40 from './../assets/shell/tut_40.png';
import tut_41 from './../assets/shell/tut_41.png';
import tut_42 from './../assets/shell/tut_42.png';
import tut_43 from './../assets/shell/tut_43.png';
import tut_44 from './../assets/shell/tut_44.png';
import tut_45 from './../assets/shell/tut_45.png';
// import tut_46 from './../assets/shell/tut_46.png';
import tut_47 from './../assets/shell/tut_47.png';
import tut_48 from './../assets/shell/tut_48.png';
import tut_49 from './../assets/shell/tut_49.png';
import tut_50 from './../assets/shell/tut_50.png';
import tut_51 from './../assets/shell/tut_51.png';
import tut_52 from './../assets/shell/tut_52.png';

function Design() {
    // function removeHidden(event:any){
    //     const dot = event.currentTarget.querySelector(".dotHor");
    //     dot?.classList.remove("hidden");
    // }
    // function addHidden(event:any){
    //     const dot = event.currentTarget.querySelector(".dotHor");
    //     dot?.classList.add("hidden");
    // }
    // function showP1() {
    //   const part1 = document.querySelector('.part1');
    //   const part2 = document.querySelector('.part2');
    //   if (part1 && part2) {
    //     part1.classList.remove('hidden');
    //     part2.classList.add('hidden');
    //   }
    // }
    // function showP2() {
    //   const part1 = document.querySelector('.part1');
    //   const part2 = document.querySelector('.part2');
    //   if (part1 && part2) {
    //     part2.classList.remove('hidden');
    //     part1.classList.add('hidden');
    //   }
    // }

  return (
    <>
    <div className="backdrop">
      <Topbar/>
      <div className="mainDesign">
        <div className="designHeader">
          <p className='h2 '>design your case</p>
        </div>
        <div className="designContent">
          <div>
            <p>
              <a href="https://cad.onshape.com/documents/dc873a91dab732fb6d2334be/w/241c2014482818f7feb51fe4/e/4e6e0c7fa5f4e2a286b91a54" target="_blank" rel="noopener noreferrer">
                duplicate this document
              </a>! it contains the official design files for the bambu mouse kit{' '}
            </p>
            <p>make sure to set the document units to mm!</p>
            <p>when you open up your design, it should look like this</p>
            <img src={tut_0} alt="tut_0" className="tutImg" />
            {/* <p>
              you can design your mouse to utilize the blue section (named 'mid') but i won't for this tutorial. right click
              on the blue section and this menu should appear.
            </p>
            <img src={tut_33} alt="tut_33" className="tutImg"/>
            <p>click hide. now it should be gone and your project should look like this!</p> */}
            {/* <img src={tut_32} alt="tut_32" className="tutImg1"/> */}
            <p>
              flip to the bottom of your base and start a new sketch. make it look how you want your base to look. something like this!
            </p>
            <p>
              make sure that your section turns dark gray. this means that you created a closed shape and we can perform 3d
              operations using that section!
            </p>
            <img src={tut_1} alt="tut_1" className="tutImg"/>
            <p>(i forgot to include the blue section in the next few screenshots. just pretend that it's there lol)</p>
            <p>finish your sketch, then select the extrude tool.</p>
            <img src={tut_2} alt="tut_2" className="tutImg"/>
            <p>your case should look like this now:</p>
            <img src={tut_4} alt="tut_4" className="tutImg"/>
            <p>select the top of your extrude</p>
            <img src={tut_3} alt="tut_3" className="tutImg"/>
            <p>extrude using add mode by ~25 mm. this is ~ how tall you want the top of your mouse to be</p>
            <img src={tut_5} alt="tut_5" className="tutImg"/>
            <p>select the inner area of your extrude</p>
            <img src={tut_6} alt="tut_6" className="tutImg"/>
            <p>extrude using add mode inwards by the same height you extruded outwards. this is just the inside of your mouse</p>
            <img src={tut_8} alt="tut_8" className="tutImg"/>
            <p>using the view cube, make sure that you view your mouse from the left or right side by clicking on the corresponding face of the cube</p>
            <img src={tut_34} alt="tut_34" className="tutImg1"/>
            <p>start a new sketch on the right plane. draw the horizontal profile you want your mouse to have</p>
            <img src={tut_9} alt="tut_9" className="tutImg"/>
            <p>
              using the extrude tool on add mode, click on your sketch and remove (extrude using the remove mode) the sections
              you don't want
            </p>
            <img src={tut_10} alt="tut_10" className="tutImg"/>
            <p>
              click on the dropdown menu next to the view cube. hover over shaded with edges (which is our current mode), then
              select translucent.
            </p>
            <img src={tut_37} alt="tut_37" className="tutImg"/>
            <p> your mouse should look something like this now.</p>
            <img src={tut_39} alt="tut_39" className="tutImg1"/>
            <p>but it's a bit noisy.</p>
            <p>on the left bar, there should be a list of parts (named pcb, screw, wheel, etc.). we're going to hide all of them except for mid, screw4, screw5, wheel, pcb, and base</p>
            <p>hover over a part and an eye icon will appear. click on the eye to hide the part.</p>
            <img src={tut_41} alt="tut_41" className="tutImg1"/>
            <p>your mouse should look like this now</p>
            <img src={tut_40} alt="tut_40" className="tutImg"/>
            <p>make sure that there is always at least a 2mm gap between the edge of the blue block and your outline!</p>
            <p>use the view cube to go back to the 'shaded with edges' mode</p>
            <p>head to the bottom of your mouse. </p>
            <p>hide the mid and base</p>
            <p>using the shell tool, click on the bottom of your mouse.</p>
            <img src={tut_11} alt="tut_11" className="tutImg"/>
            <p>your mouse should look something like this now</p>
            <img src={tut_35} alt="tut_35" className="tutImg"/>
            <p>
              if you have this extra ring inside like i do, just click on its bottom face and remove (extrude using the remove
              mode) by 2mm.
            </p>
            <img src={tut_16} alt="tut_16" className="tutImg"/>
            <p>
              click on the top face of the view cube to view your mouse from the top plane. create a new sketch on the top
              plane.</p>
              <p> create a rectangle around your wheel and place a 1.5mm gap on each side horizontally, 3mm on the top, and
              6mm on the bottom.
            </p>
            <img src={tut_13} alt="tut_13" className="tutImg"/>
            <p>
              finish your sketch. select it. remove. make sure that there is a through hole.
            </p>
            <img src={tut_14} alt="tut_14" className="tutImg"/>
            <p>
              using the plane tool in plane point mode, click on a
              point in the center of the wheel and the right plane. this will create a new right plane in the middle of the
              mouse wheel
            </p>
            <img src={tut_17} alt="tut_17" className="tutImg"/>
            <p>start a new sketch on your newly created plane. view your mouse from the side (left or right).</p>
            <img src={tut_36} alt="tut_36" className="tutImg1"/>
            <p>set your view as transparent</p>
            <img src={tut_38} alt="tut_38" className="tutImg1"/>
            <p>in a new sketch, draw a wedge that can press down on the buttons when clicked</p>
            <img src={tut_18} alt="tut_18" className="tutImg1"/>
            <p>finish your sketch. click on the new face and extrude using the add mode symmetrically by ~44mm. ensure that your wedges cover the buttons.</p>
            <img src={tut_19} alt="tut_19" className="tutImg"/>
            <p>click on the same face and remove (extrude using the remove mode) symemetrically by ~ 26mm.</p>
            <img src={tut_20} alt="tut_20" className="tutImg"/>
            <p> ensure that your wedges are within this yellow area</p>
            <img src={tut_47} alt="tut_47" className="tutImg"/>
            <p>if you flip to the bottom of your mouse, it should look like this now</p>
            <img src={tut_22} alt="tut_22" className="tutImg"/>
            <p>
              start a new sketch on the top face of your mouse. draw the shape you want your clickers to be in. make sure that
              they don't fully slice the mouse.
            </p>
            <img src={tut_23} alt="tut_23" className="tutImg"/>
            <p>select your sketch and remove so that you form a through hole</p>
            <img src={tut_24} alt="tut_24" className="tutImg"/>
            <p>go to the bottom of your mouse. select the area around the base of the case. extrude by 2mm</p>
            <img src={tut_27} alt="tut_27" className="tutImg"/>
            <p>if you hide the base of your case, your mouse should look like this now</p>
            <img src={tut_25} alt="tut_25" className="tutImg"/>
            <p>fillet these edges by 0.5mm</p>
            <img src={tut_28} alt="tut_28" className="tutImg"/>
          </div>  
              <p>go to the side view and set your view mode to transparent.</p>
            <img src={tut_48} className="tutImg"/>
            <p>start a new sketch supporting the top of the base like this.</p>
            <img src={tut_49} className="tutImg"/>
            <p>extrude your new section by ~40mm. enough to cover the screw holes</p>
            <img src={tut_50} className="tutImg"/>
            <p>finish your extrude. go to the bottom of your mouse and start a new sketch on the face of that block and use the screw holes.</p>
            <img src={tut_51} className="tutImg"/>
            <p>remove by 2mm</p>
            <img src={tut_52} className="tutImg"/>
          <p>last step is to add a space where we can grab our base after inserting it into our case. </p>
          <p>go to the bottom of your mouse</p>
            <img src={tut_42} alt="tut_42" className="tutImg"/>
            <p>set the view mode to transparent</p>
            <img src={tut_43} alt="tut_43" className="tutImg"/>
            <p>create a new sketch on the bottom face. draw a rectangle using the two corners of the base</p>
            <img src={tut_44} alt="tut_44" className="tutImg"/>
            <p>go back to the shaded with edges mode. extrude your new rectangle by 2mm.</p>
            <img src={tut_45} alt="tut_45" className="tutImg"/>
            
          <div>
            <p>yippeee!!! thanks so much for getting through the tut :D</p>
            <p>before submitting,, look over your design for any possible issues (eg intersecting parts, parts not connected, impossible overhangs, etc).</p>
              <p>@idksarah in <a href={"https://hackclub.slack.com/archives/C094458MVMX"}>#squeak</a> on slack if you've got any questions!!</p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Design