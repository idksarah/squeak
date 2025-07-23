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
            <IYapathon
              topShit="do i need to use hackatime to track my time?"
              bottomBitch={`yes. you must log at least 3 hours on the <a href="https://chromewebstore.google.com/detail/onshape-wakatime/kieglbolocchhhcblnhaiodbpgkjcecg" target="_blank">onshape wakatime extension</a> to receive your mouse parts.`}
            />

            <IYapathon topShit="how will i get this printed?" bottomBitch={
              `find someone willing to print (<a href ="https://printlegion.hackclub.com/">printing legion</a> or <a href="https://hackclub.slack.com/archives/C083P4FJM46">#printing-legion</a> on slack. we'll provide a $5 shipping grant!`
            }
            />
            <IYapathon topShit="what da mouse named?" bottomBitch="dore"/>
            <IYapathon topShit="i have more questions!" bottomBitch={`ask in <a href="https://hackclub.slack.com/archives/C094458MVMX">#squeak</a>`
            }/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq

