import Illustration from "../components/Illustration";
import Button from "../components/Button";
import React from "react";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Animation from "../components/Animation";


const texts = ["You don’t need to reprint anything, when your details change.", "People don’t need to download anything, to see your info.", "You look organized and professional, every time."]

const tences = [
        'You meet someone at an event.',
        'You share your card. Maybe your number.',
        'You get home and forget their name.',
        'It’s not just you.',
        'Paper cards go missing.',
        'Names get mixed up.',
        'Leads disappear.',
        'In a country where everyone is building something,',
        'we need better ways to stay connected.',
        'Konva is here to help.',
    ]


function page() {
  return (
    <div >
      <div className="py-18 border flex flex-col h-screen justify-evenly md:space-y-16 ">
        {/* title */}
        <div className="flex items-center justify-center">
          <h1 className="text-2xl  font-bold">Konva</h1>
        </div>
        {/* description */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold">
            <span className="block">Some people you</span>
            <span className="block">meet should never</span>
            <span className="block">be forgotten</span>
          </h1>
        <div className="flex-col flex items-center mb-12 justify-center space-y-4 mx-4">
          <p className="text-base md:text-lg  text-center">
            Konva helps you stay in touch after the handshake.
            <br className="hidden md:block" />
            Share your contact in seconds. No printing. No stress.
          </p>
          <Button />
          <p className="text-base md:text-lg md:mt-6 text-center">
            Be among the first to try Konva before it launches.
          </p>
        </div>
      </div>
      {/* animation */}
      <Animation texts={tences} bgColor={"black"} textColor={"#FFFFFF"} />
      {/* illustration */}
      <div className="mt-8 md:mt-12">
        <Illustration />
      </div>
      {/* sub headline */}
      <div className="md:my-16 my-8 flex-col space-y-6 mx-4  items-center justify-center flex ">
        <Animation texts={texts} bgColor={"transparent"} textColor={"black"} />
      </div>
      {/* faq */}
      <Faq />
      {/* closing tag */}
      <div className="flex-col flex items-center justify-center mt-8 md:mt-12 space-y-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-center font-bold">
          <span className="block">Your next job. Your next client.</span>
          <span className="block">Your next big thing.</span>
          <span className="block">It could start with a tap.</span>
        </h1>
        <p className="text-base font-semibold md:text-lg mt-4 md:mt-6 text-center px-4">
          If you meet people, Konva helps you keep them.
        </p>
        <Button />
        <p className="text-base font-semibold md:text-lg mt-4 md:mt-6 text-center">
          We’ll let you in early.
        </p>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default page;
