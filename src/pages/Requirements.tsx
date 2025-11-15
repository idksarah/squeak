import './../App.css'
import Topbar from '../components/Topbar'
import Yapathon from '../components/Yapathon'

function Requirements() {
  return (
    <>
      <div className="backdrop">
        <Topbar/>
        <div className="requirementsContent">
          <p className="h1">requirements</p>
          <Yapathon topShit="1. spend at least 4 hours designing your mouse" bottomBitch={`use the <a href="https://chromewebstore.google.com/detail/onshape-wakatime/kieglbolocchhhcblnhaiodbpgkjcecg">onshape wakatime extension</a> to track your hours. you can check your hours at <a href="waka.hackclub.com/summary">hackatime v1</a>`}/>
          <Yapathon topShit='2. have your project on github' 
          bottomBitch={`create a repo and upload your project file at <a href="https://github.com">github.com</a>`}/>
          <Yapathon topShit='3. have a printer! (human or machine)' bottomBitch={
              `print your parts yourself OR find someone willing to print (<a href ="https://printlegion.hackclub.com/">printing legion</a> or <a href="https://hackclub.slack.com/archives/C083P4FJM46">#printing-legion</a> on slack. we'll provide a $5 shipping grant!`
            }/>
          <Yapathon topShit='4. you have to be in middle school or high school' bottomBitch="!!"/>
          <Yapathon topShit="5. don't be a direct copy of someone else's design" bottomBitch="please don't submit a literal duplicate of the bambu mouse design, my design, or someone else's :("></Yapathon>
        </div>
      </div>
    </>
  )
}

export default Requirements
