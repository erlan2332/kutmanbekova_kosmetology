import React from "react";
import AppointmentScheduler from "./components/info/info";
import ButtonComponent from "./components/carousel_button/buttons";
import Section from "./components/section1/section1";
import CustomCard from "./components/custom_card/custom_card";
import SocialMedia from "./components/social_media/social_media";
import EndPage from "./components/end_page/end_page";
import Learn_2 from "./components/Learn/Learn_1";
import CannotFood from "./components/cannot/cannot_food";

const App = () => {
  return (
    <div>
        <Section />
        <CustomCard />
        <AppointmentScheduler />
        <Learn_2 />
        <ButtonComponent />
        <CannotFood />
        <SocialMedia />
        <EndPage />
    </div>
  )
}

export default App