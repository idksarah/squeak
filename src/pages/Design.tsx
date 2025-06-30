import './../App.css'
import Topbar from '../components/Topbar'

import step2 from '../assets/tut_2.png';
import step5 from '../assets/tut_5.png';
import step6 from '../assets/tut_6.png';
import step9 from '../assets/tut_9.png';
import step10 from '../assets/tut_10.png';
import step11 from '../assets/tut_11.png';
import step12 from '../assets/tut_12.png';
import step14 from '../assets/tut_14.png';
import step16 from '../assets/tut_16.png';
import step17 from '../assets/tut_17.png';
import step18 from '../assets/tut_18.png';
import step19 from '../assets/tut_19.png';
import step20 from '../assets/tut_20.png'
import step21 from '../assets/tut_21.png'
import step225 from '../assets/tut_22.5.png';
import step22 from '../assets/tut_22.png';
import step23 from '../assets/tut_23.png';
import step24 from '../assets/tut_24.png';
import step27 from '../assets/tut_27.png';
import step28 from '../assets/tut_28.png';
import step29 from '../assets/tut_29.png';
import step295 from '../assets/tut_29.5.png';
import step30 from '../assets/tut_30.png';
import step31 from '../assets/tut_31.png';
import step32 from '../assets/tut_32.png';
import step34 from '../assets/tut_34.png';
import step35 from '../assets/tut_35.png';
import step36 from '../assets/tut_36.png';
import step37 from '../assets/tut_37.png';


function Design() {
  // const designP1 = useQuery 
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
          <p className='h2'>design your case</p>
          <div className="designOptions">
            <div className="designP1 hor pointer" onMouseEnter={removeHidden} onMouseLeave={addHidden} onClick={showP1}>
              <div className="dotHor hidden"></div>
              <p >part 1: design the base</p>
            </div>
            <div className='designP2 hor pointer' onMouseEnter={removeHidden} onMouseLeave={addHidden} onClick={showP2}>
              <div className="dotHor hidden"></div>
              <p className="">part 2: design the top</p>
            </div>
          </div>
        </div>
        <div className="designContent">
          <div className="part1">
            <p>let's create the base of your case!</p>
            <div>
              <p>1. set up the onshape wakatime extension.</p>
              <ul>
                <li><a href="https://chromewebstore.google.com/detail/onshape-wakatime/kieglbolocchhhcblnhaiodbpgkjcecg" target="_blank">download the extension</a></li>
                <li>grab your api key from <a href="https://waka.hackclub.com/summary?interval=month" target="_blank">hackatime v1</a> by clicking your user icon and "Show API Key".</li>
              </ul>
            </div>
            <div>
              <p>2. take a look at the mouse we're basing our design on: <a href="https://cad.onshape.com/documents/eedf52ffde47e82ad65cd0c5/w/7f19c612d00a065ddedee508/e/daa3fc3a2b07412fa74b98df" target="_blank">view mouse</a></p>
            </div>

            <div>
              <p>3. make a new onshape document (<a href="https://cad.onshape.com/documents" target="_blank">Open Onshape</a>).</p>
              <div className='hor'>
  <ul>  
                <li>name your part assembly tab "base".</li>
                <li>set your document units to mm.</li>
                <li>make a rectangle and fillet its edges by 5mm.</li>
                <li>draw construction lines down the horizontal and vertical midpoints.</li>
                <li>dimension the main rectangle to be <b>60.42mm x 110.645mm</b>.</li>
                <li>make 2 <b>center rectangles</b> (not corner rectangles) and fillet them by 1mm.</li>
                <li>rectangle 1: <b>7.787 x 13.477mm</b>. position it <b>61.411mm</b> from the bottom of the large rectangle and <b>6mm</b> from the center line (closest side).</li>
                <li>rectangle 2: <b>8.485 x 4.216mm</b>. center it <b>14.787mm</b> from the center of rectangle 1 and <b>3.347mm</b> from the center of rectangle 2.</li>
                <li>finish the sketch and extrude by <b>1.1mm</b>.</li>
              </ul>
              <img className="tutImg" src={step2}></img>
              <img className='tutImg' src={step5}></img>
              </div>
              
            </div>
            <div>
              <p>4. make a new sketch using the extrude as the face.</p>
              <div className='hor'>
                <ul>
                  <li>use the "use" tool to trace the entire area.</li>
                  <li>create 2 construction lines down the midpoint of both rectangles.</li>
                  <li>create a new point at their intersection.</li>
                  <li>create 2 center rectangles around the center of both earlier rectangles (total 4 new rectangles).</li>
                  <li>copy the diagram.</li>
                  <li>measurements if hard to read: <b>1.359, 0.76, 16, 0.25</b>.</li>
                  <li>finish the sketch and set it as visible.</li>
                  <li>extrude by <b>1.5mm</b>.</li>
                  <li>extrude the walls by <b>2.8mm</b>.</li>
                  <li>extrude the other by <b>2.5mm</b>.</li>
                  <li>now you have your sensor and on/off switch walls.</li>
                </ul>
              <img className='tutImg' src={step6}></img>
              </div>
            </div>

            <div>
              <p>5. download the files from <code>onshape_imports/</code> in this <a href="https://github.com/idksarah/squeak">repo</a></p>
            </div>

            <div>
                <p>6. create a new assembly using the tab manager at the bottom.</p>
              <div className="hor">
                <ul>
                  <li>insert your sensor.</li>
                  <li>insert the base into the assembly.</li>
                  <li>add a fastened mate to the bottom of your sensor, placing the mate in the center.</li>
                  <li>you may need to rotate the part to orient it correctly.</li>
                </ul>
                <img className="tutImg1" src={step9}></img>
                <img className="tutImg1" src={step10}></img>
              </div>
            </div>

            <div>
              <p>7. import the pcb file in Onshape.</p>
              <div className="hor">
                <ul>
                  <li>insert the pcb into your assembly.</li>
                  <li>fasten the bottom of your pcb to the center of the circle on the sensor.</li>
                </ul>
                <img className='tutImg1' src={step11}></img>
                <img className="tutImg1" src={step12}></img>
              </div>
            </div>

            <div>
              <p>8. create the battery holder.</p>
              <div className="hor">
                <ul>
                  <li>right-click the base and edit it in-context.</li>
                  <li>use the case and pcb lines as reference.</li>
                  <li>make L-shaped rectangles around the corners of the pcb.</li>
                  <li>outer outlines: <b>1.5mm</b> away from the pcb.</li>
                  <li>inner outlines: <b>1mm</b> away from the pcb.</li>
                  <li>finish the sketch.</li>
                  <li>extrude the inner area by <b>1.2mm</b> and the outer area by <b>2mm</b>.</li>
                  <li>adjust offsets so the new parts touch the board correctly.</li>
                  <li>ensure you're using the <b>add</b> operation with only one part.</li>
                </ul>
                <img className="tutImg" src={step14}></img>
                <img className="tutImg" src={step16}></img>
              </div>
            </div>

            <div>
              <p>9. make a new sketch using the base. copy this sketch.</p>
              <div className="hor">
                <ul>
                  <li>measurements if hard to read:</li>
                  <li><b>3.817, 2.805, 2.526, 1.359, 3.95, 32.227, 52.521, 14.8, 22.75, 47.227</b>.</li>
                </ul>
                  <img className="tutImg" src={step18}></img>
                  <img className="tutImg" src={step17}></img>
              </div>
            </div>

            <div>
              <p>10. extrude the tall sections by <b>7mm</b> and the short sections by <b>3.5mm</b>.</p>
            </div>

            <div>
              <p>11. start a sketch on the horizontal face of the tall section.</p>
              <div className="hor">
                <ul>
                  <li>make the sketch as shown in the diagram.</li>
                  <li>finish the sketch.</li>
                  <li>extrude the sketch by <b>25mm</b> with an offset of <b>10mm</b>.</li>
                </ul>
                <img className="tutImg1" src={step19}></img>
                <img className="tutImg1" src={step20}></img>
              </div>
            </div>

            <div>
              <p>12. make a new sketch on the bottom of the base.</p>
              <div className="hor">
                <ul>
                  <li>use the walls from the top of the battery holder as reference.</li>
                  <li>extrude the bottom with the <b>remove</b> operation.</li>
                  <li>extrude sections by <b>2.6mm</b>.</li>
                  <li>create a triangular divot where the battery case can slide out.</li>
                </ul>
                <div>
                  <img className="tutImg1" src={step21}></img>
                  <img className="tutImg1" src={step225}></img>
                  <img className="tutImg1" src={step22}></img>
                  <img className="tutImg1" src={step23}></img>
                  <img className="tutImg1" src={step24}></img>
                </div>
              </div>
            </div>

            <div>
              <p>13. import the wheel. insert it into the assembly and fasten it.</p>
              <img className="tutImg1" src={step295}></img>
            </div>
          </div>
          <div className="part2 hidden">
            <p>let's create the top of your case!</p>
            <div>
              <div>
  <p>1. create the back</p>
  <div className='hor'>
    <ul>
      <li>create a new part.</li>
      <li>create a new sketch and create a rectangle that is <b>50.462 x 51</b>.</li>
      <li>extrude by <b>25</b>.</li>
      <li>insert into the assembly.</li>
      <li>fasten its center edge to the base's center edge.</li>
      <li>create a new sketch on the side with a curve.</li>
      <li>extrude with the <b>remove</b> operation.</li>
    </ul>
    <img className="tutImg1" src={step27}></img>
    <img className="tutImg1" src={step28}></img>
  </div>

  <p>2. on the front edge:</p>
  <div className='hor'>
    <ul>
      <li>create a new rectangle.</li>
      <li>draw a perpendicular construction line from the midpoint of the top of the larger rectangle to the midpoint of the bottom of the larger rectangle.</li>
      <li>in your smaller rectangle, create a new point at the midpoint.</li>
      <li>make sure that it is <b>coincident</b> with your construction line.</li>
      <li>dimension your rectangle to be <b>52.45 x 18</b>.</li>
      <li>extrude with the <b>remove</b> operation by <b>28.9</b>.</li>
    </ul>
    <div>
      <img className="tutImg1" src={step29}></img>
      <img className="tutImg1" src={step30}></img>
      <img className="tutImg1" src={step31}></img>

    </div>

  </div>

  <p>3.</p>
  <div className='hor'>
    <ul>
      <li>create a new sketch using the <b>back wall</b> as its face.</li>
      <li>using the walls of the battery holder, make sure that these walls are at least <b>1mm away</b>.</li>
      <li>extrude by <b>10.6mm</b>.</li>
    </ul>
  </div>

  <p>4.</p>
  <ul>
    <li>select the bottom.</li>
    <li>use the base and top edges.</li>
    <li>extrude using the <b>remove</b> operation.</li>
  </ul>

  <p>5. on the front of the case:</p>
  <div className='hor'>
    <ul>
      <li>create a new sketch using the front of the case as the plane.</li>
      <li>use the edges of the case.</li>
      <li>draw a rectangle.</li>
      <li>extrude by <b>59.65</b>.</li>
      <li>create a new sketch on the side.</li>
      <li>draw what you would like to be the side profile of your mouse.</li>
      <li>extrude using the <b>remove</b> operation.</li>
    </ul>
      <img className="tutImg1" src={step32}></img>
  </div>

  <p>6. on the top face:</p>
  <ul>
    <li>create a new sketch using the top face.</li>
    <li>use the sides of the wheels.</li>
    <li>make a sketch like this. <b>i recommend using the mirror tool.</b></li>
    <li>finish your sketch.</li>
    <li>extrude using the <b>remove</b> operation.</li>
    <li>create a new sketch on the inside.</li>
    <li>make it look like this. make sure that the lines are parallel to the edges.</li>
    <li>extrude using the <b>remove</b> operation <b>52.45</b>.</li>
  </ul>
  <img className="tutImg1" src={step34}></img>
  <img className="tutImg1" src={step35}></img>

  <p>7. buttons:</p>
  <div className='hor'>
    <ul>
      <li>create a new sketch.</li>
      <li>use the edge of the button.</li>
      <li>create a rectangle (ish shape) and make it <b>40 x 1.5</b>.</li>
      <li>extrude by <b>18.2</b>.</li>
      <li>finish your extrude.</li>
      <li>create a new extrude using the same area with a depth of <b>18.2</b> and an offset of <b>42.3</b>.</li>
    </ul>
    <img className="tutImg1" src={step36}></img>
    
  </div>

  <p>8.</p>
  <div className='hor'>
    <ul>
      <li>fillet your edges.</li>
      <li>your mouse should look like this!</li>
    </ul>
    <img className="tutImg1" src={step37}></img>
  </div>
</div>

            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Design
