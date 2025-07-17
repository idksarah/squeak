import './../App.css'
import Topbar from '../components/Topbar'
import IYapathon from '../components/IYapathon'

function Faq() {
  return (
    <>
      <div className="backdrop">
        <Topbar/>
        <div className="faqContent">
          <p className="h1">faq</p>
          <div className="">
            <IYapathon topShit="does this have any prerequisites?" bottomBitch="no. plus, onshape has extensive documentation and a good community, so this is an approachable project for someone who hasn't tried cad before"/>
            <IYapathon topShit="do i need to use hackatime to track my time?" bottomBitch="yes. you must log at least 3 hours on the onshape wakatime extension to receive your mouse parts."/>
            <IYapathon topShit='how can i make my mouse unique?' bottomBitch='lots of ways! eg, include pocketing, make it ergonomic, or use  a completely different shape. search up mice and get inspo!'></IYapathon>
            <IYapathon topShit="how will i get this printed?" bottomBitch="find someone willing to print (#printing-legion or check the site). we'll provide a $5 shipping grant!"/>
            {/* <IYapathon topShit="can i import parts to onshape?" bottomBitch='yes, but not parts of the case. eg, you cannot import the bottom or top part of your case, but you can import the pcb, sensor, switch, etc.'/> */}
            <IYapathon topShit="when does this end?" bottomBitch="11:59 pm est 7/13/2025 "/>
            <IYapathon topShit="what da mouse named?" bottomBitch="dore"/>
            <IYapathon topShit="i have more questions!" bottomBitch="ask in #squeak"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq

