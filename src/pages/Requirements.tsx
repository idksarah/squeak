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
          <Yapathon topShit="1. spend at least three hours designing your mouse" bottomBitch="install the onshape wakatime extension"/>
          <Yapathon topShit="2. be unique" bottomBitch="cannot be a direct copy of the tutorial or bambu case"/>
          <Yapathon topShit='3. have your project files on github' bottomBitch=""/>
        </div>
      </div>
    </>
  )
}

export default Requirements

