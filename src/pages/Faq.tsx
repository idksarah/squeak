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
            <IYapathon topShit="do i need to use hackatime to track my time?" bottomBitch="yes. you must log at least 4 hours on the onshape wakatime extension to receive your mouse parts."/>
            <IYapathon topShit="how will i get this printed?" bottomBitch="find someone willing to print (#printing-legion or check the site). we'll provide a $5 shipping grant!"/>
            <IYapathon topShit="what da mouse named?" bottomBitch="dore"/>
            <IYapathon topShit="i have more questions!" bottomBitch="ask in #squeak"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq

