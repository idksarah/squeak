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
              topShit="do i need to use lapse to track my time?"
              bottomBitch={`yes. you must log at least 5 hours on <a href="https://lapse.hackclub.com" target="_blank">lapse</a> to receive your mouse parts. if you have issues, report them at <a href="https://github.com/hackclub/lapse" target="_blank">github.com/hackclub/lapse</a> or message @ascpixi on slack.`}
            />

            <IYapathon topShit="how will i get this printed?" bottomBitch={
              `find someone willing to print at <a href ="https://printlegion.hackclub.com/" target="_blank">printing legion</a> or ask in <a href="https://hackclub.slack.com/archives/C083P4FJM46" target="_blank">#printing-legion</a> on slack.`
            }
            />

            <IYapathon topShit="what's the grant?" bottomBitch={
              `you'll receive a $25 grant that covers the mouse kit + printing legion shipping cost. the grant is automatically applied when you submit your project.`
            }
            />

            <IYapathon topShit="how do i use the grant?" bottomBitch={
              `submit your project at <a href="https://forms.hackclub.com/squeak-v3" target="_blank">the form</a>. after review, the $25 grant will be sent out via <a href="https://hcb.hackclub.com" target="_blank">HCB</a> for the mouse kit and printing shipping.`
            }
            />

            <IYapathon topShit="do you like cheese?" bottomBitch="always."/>
            
            <IYapathon topShit="i have more questions!" bottomBitch={`dm @jenin on slack :)`
            }/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
