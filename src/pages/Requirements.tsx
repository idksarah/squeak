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
          <Yapathon topShit="1. spend at least four hours designing your mouse" bottomBitch="use the onshape wakatime extension to track your hours. you can check your hours on the hackatime dashboard. if you have any wakatime/hackatime issues, send a message in #squeak"/>
          <Yapathon topShit="2. be unique" bottomBitch="cannot be a direct copy of the tutorial case or bambu case. be creative!!"/>
          <Yapathon topShit='3. have your project on github' bottomBitch="create a repo and upload your project files at github.com"/>
          <Yapathon topShit='4. have a printer! (human or machine)' bottomBitch="you can either print your case or find someone on printing legion to print for you. you'll receive a $10 grant to pay for the shipping label"/>
          <Yapathon topShit='5. be in middle school or high school' bottomBitch="^^"/>
        </div>
      </div>
    </>
  )
}

export default Requirements

