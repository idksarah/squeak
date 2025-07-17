import './../App.css'
import Topbar from '../components/Topbar'


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
            {/* <div className="designP1 hor pointer" onMouseEnter={removeHidden} onMouseLeave={addHidden} onClick={showP1}>
              <div className="dotHor hidden"></div>
              <p className="green">part 1: design the base</p>
            </div> */}
            {/* <div className='designP2 hor pointer' onMouseEnter={removeHidden} onMouseLeave={addHidden} onClick={showP2}>
              <div className="dotHor hidden"></div>
              <p className="green">part 2: design the top</p>
            </div> */}
          </div>
        </div>
        <div className="designContent">
  <p>
    if you're confused, feel free to reference my{' '}
    <a href="https://cad.onshape.com/documents/6f605beaa2eeee446b12f67b/w/d1628f56d3fb9ea702c14ede/e/6a3834916e84bd1643e5fd46" target="_blank" rel="noopener noreferrer">cad</a> or ask any questions in #squeak :3
  </p>
  
    <div>
      <p>yippeee!!! thanks so much for getting through the tut :D</p>
      <p>before submitting,, look over your design for any possible issues (eg intersecting parts, parts not connected, impossible overhangs, etc). @idksarah on slack if you've got any questions!!</p>
    </div>
</div>

  
</div>

      </div>

    </>
  )
}

export default Design