import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const NavigationBarContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return <NavigationBar toggle={toggle} isOpen={isOpen} />;
};

export default NavigationBarContainer;
