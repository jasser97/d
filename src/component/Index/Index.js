import React from "react";
import NavApp from "../nav-app/NavApp";
import CarouselImg from "../carousel/CarouselImg";
import Apropos from "../A propos/Apropos";
import EventsButtons from "../event-proche/EventsButtons";
import Createur from "../createur/Createur";
import Newslater from "../Newslater/Newlater";
import Footer from "../footer/Footer";
import BackTop from "../Back-to-top/BackTop";

const Index = () => {
  return (
    <div>
      <NavApp />
      <CarouselImg />
      <Apropos />
      <EventsButtons />
      <Createur />
      <Newslater />
      <Footer />
      <BackTop />
    </div>
  );
};

export default Index;
