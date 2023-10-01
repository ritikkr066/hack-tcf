import React from "react";
import Evnt from "./Evnt";

const ExperianceEvent = () => {
  return (
    <>
      <div className="bg-purple-950 sm:px-16 px-8">
        <div className="py-6 text-4xl font-semibold text-white px-4">
          Experience The Events
        </div>
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 px-2">
          <Evnt
            name="Exciting Fest Highlights Await"
            disp="Join us for a thrilling celebration of Technology and culture at Corona and
Melange, the Annuual fest of NIT Patna. Experience a wide range of events,
workshops, performances, and more."
          />

          <Evnt
            name="Exciting Fest Highlights Await"
            disp="Join us for a thrilling celebration of Technology and culture at Corona and
Melange, the Annuual fest of NIT Patna. Experience a wide range of events,
workshops, performances, and more."
          />

          <Evnt
            name="Exciting Fest Highlights Await"
            disp="Join us for a thrilling celebration of Technology and culture at Corona and
Melange, the Annuual fest of NIT Patna. Experience a wide range of events,
workshops, performances, and more."
          />
        </div>
      </div>
    </>
  );
};

export default ExperianceEvent;
