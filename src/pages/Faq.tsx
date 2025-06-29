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
          <div className="is this free?">
            <Yapathon topShit="i don't care" bottomBitch="fuck"/>
            <Yapathon topShit="will hack club cover shipping?" bottomBitch="yes"/>
            <Yapathon topShit="how long does this run?" bottomBitch="yes"/>
            <Yapathon topShit="will hack club cover shipping?" bottomBitch="yes"/>
            <Yapathon topShit="will hack club cover shipping?" bottomBitch="yes"/>
            <Yapathon topShit="will hack club cover shipping?" bottomBitch="yes"/>
            <Yapathon topShit="will hack club cover shipping?" bottomBitch="yes"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq

