import './../App.css'
import Topbar from '../components/Topbar'
import Yapathon from '../components/Yapathon'

function Faq() {
  return (
    <>
      <div className="backdrop">
        <Topbar/>
        <div className="faqContent">
          <p className="h1">faq</p>
          <div className="">
            <Yapathon topShit="does this have any prerequisites?" bottomBitch="no. additionally, onshape has extensive documentation, so this is an approachable project even for someone who hasn't tried cad before"/>
            <Yapathon topShit="do i need to use hackatime to track my time?" bottomBitch="yes. you must log at least 3 hours on hackatime to receive your mouse parts."/>
            <Yapathon topShit="how will i get this printed?" bottomBitch="find someone willing to print (#printing-legion or check the site)"/>
            <Yapathon topShit="when does this end?" bottomBitch="7/10/2025 "/>
            <Yapathon topShit="will hack club cover shipping?" bottomBitch="yes"/>
            <Yapathon topShit="i have more questions!" bottomBitch="ask in #squeak"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq

