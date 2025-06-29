import './../App.css'
import Topbar from '../components/Topbar'

import assembly from './../assets/assembly.png';

function Design() {
  return (
    <>
    <div className="backdrop">
      <Topbar/>
      <div className="mainDesign">
        <div className="designHeader">
          <p className='h2'>design your case</p>
          <div className="designOptions">
            <p className="designP1">part 1: design the base</p>
            <p className="designP2">part 2: design the top</p>
          </div>
        </div>
        <div className="designContent">
          <div className="hor">

          <p>finish the sketch. set the sketch as visible. extrude that shit by 1.5mm. extrude the walls by 2.8mm. extrude the other by 2.5 cool. now you have your sensor and switch holes. cool shit. rename your part studio base. import the sensor file from onshape_imports/ in this github repo. create a new assembly using the tab manager at the bottom. import base. insert base. insert sensor. add a fastened to the bottom of ur sensor. slap that shit in the center. u might need to rotate it to get it to the correct orientation.
        edit the base shit in context. make a new sketch. use the pcb.make some L shaped rectangles around the corners like this. should be 1. the farther side should be 1.5mm from the pcb. include an inner</p>
      <img className="tutImg" src={assembly}></img>
          </div>
<p>cool shit. rename your part studio base. import the sensor file from onshape_imports/ in this github repo. create a new assembly using the tab manager at the bottom. import base. insert base. insert sensor. add a fastened to the bottom of ur sensor. slap that shit in the center. u might need to rotate it to get it to the correct orientation.
edit the base shit in context. make a new sketch. use the pcb.make some L shaped rectangles around the corners like this. should be 1. the farther side should be 1.5mm from the pcb. include an inner </p>
<p>cool shit. rename your part studio base. import the sensor file from onshape_imports/ in this github repo. create a new assembly using the tab manager at the bottom. import base. insert base. insert sensor. add a fastened to the bottom of ur sensor. slap that shit in the center. u might need to rotate it to get it to the correct orientation.
edit the base shit in context. make a new sketch. use the pcb.make some L shaped rectangles around the corners like this. should be 1. the farther side should be 1.5mm from the pcb. include an inner </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Design


/*
1. set up the onshape wakatime extension
-https://chromewebstore.google.com/detail/onshape-wakatime/kieglbolocchhhcblnhaiodbpgkjcecg
-give it ur api key. u good now
2.look at the mouse. reference this document https://cad.onshape.com/documents/eedf52ffde47e82ad65cd0c5/w/7f19c612d00a065ddedee508/e/daa3fc3a2b07412fa74b98df
im gonna walk u through designing the base. 
3. make a new onshape document. go here https://cad.onshape.com/documents
set ur document units to mm
make a rectangle. sketch fillet its edges by 5mm. draw a center construction line. 60.462x110.645
make 2 new rectangles (shortkey is r. CENTER rectangle, not corner rectangle). sketch fillet them by 1mm.  
for rect 1, should be 61.411mm from the bottom. and its closest edge should be 6mm from the center line. should be 13.477 tall and 7.787 mm wide.
for rect 2, should be 8.485mm x 4.216. center should be 14.787 from center of rect 1. 3.347 from center of rect 2.
finish the sketch by clicking the green check mark. extrude that shit by 1.1

mmake a new sketch using the extrude as the face. use the use tool and click on the entire area. using the construction tool, draw 2 lines down the midpoint of both rectangles. create a new point at their intersection. this gives you the center. using the center rectangle tool (shortcut key r) create 2 rectangles around the center of both. you should have 4 new rectangles. copy the diagram. 
measurements if they are hard to read:
- 1.359
-.76
-16
-.25
finish the sketch. set the sketch as visible. extrude that shit by 1.5mm. extrude the walls by 2.8mm. extrude the other by 2.5 cool. now you have your sensor and switch holes. 
cool shit. rename your part studio base. import the sensor file from onshape_imports/ in this github repo. create a new assembly using the tab manager at the bottom. import base. insert base. insert sensor. add a fastened to the bottom of ur sensor. slap that shit in the center. u might need to rotate it to get it to the correct orientation.
edit the base shit in context. make a new sketch. use the pcb.
make some L shaped rectangles around the corners like this. should be 1. the farther side should be 1.5mm from the pcb. include an inner rectangle that should be 1mm from the pcb. extrude em like this. shorter bit is 1.2mm. taller bit is 2mm. you may need to adjust the offset so that it is touching with the board. make sure that you only have one part and are using add!! otherwise this will print in multiple parts and not work. 
copy this sketch.
tall parts r 7mm. short parts r 3.5mm
start a sketch on the tall bit. extrude 25mm with an offset of 10mm so it looks like this
make a new sketch on the bottom. use your walls from the top. redraw the battery lines. extrude the bottom
remove part of the bottom battery case. create a divot where the battery case can slide out.
import the wheel and fasten it
cool! now u have the bottom part of ur mouse case. let's create the top!
create a new part, rename it top. draw in a random rectangle and extrude. doesn't matter. insert it into ur moues assembly. edit in context. fasten the butts together. like this.. edit that shit in context.
*/