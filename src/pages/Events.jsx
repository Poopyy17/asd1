import React from "react";
import { Helmet } from "react-helmet-async";
import EventCard from "../components/EventCard";
import rclp2021 from "../assets/Events/2021.png";
import rclp2022 from "../assets/Events/2022.png";
import rclp2023 from "../assets/Events/2023.png";
import rclp2024 from "../assets/Events/2024.png";

const eventData = [
  {
    imageSrc: rclp2024,
    date: "2024-07-22",
    title: "RCLP Handover and Induction 2024",
    url: "https://www.facebook.com/watch/?mibextid=WC7FNe&v=2578946692284297&rdid=4k3IOgPCLjmkX3FO",
  },
  {
    imageSrc: rclp2023,
    date: "2023-07-22",
    title: "RCLP Handover and Induction 2023",
    url: "https://www.youtube.com/watch?v=Q_OAE_PdqRM",
  },
  {
    imageSrc: rclp2022,
    date: "2022-07-22",
    title: "RCLP Handover and Induction 2022",
    url: "https://www.facebook.com/watch/?v=725428765422332",
  },
  {
    imageSrc: rclp2021,
    date: "2021-07-22",
    title: "RCLP Handover and Induction 2021",
    url: "https://www.youtube.com/watch?v=eVfTVtMnHFI&t=53s",
  },
];

// Sort events by date in descending order
const sortedEvents = eventData.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const Events = () => {
  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>

      {/* Header */}
      <div className="flex flex-col w-full bg-[#0A1428] py-8 px-4 text-center">
        <h1 className="font-dinnext font-black text-[#FFFFFF] text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 italic">
          CLUB EVENTS
        </h1>
      </div>

      {/* Content */}
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {sortedEvents.map((event, index) => (
            <EventCard
              key={index}
              imageSrc={event.imageSrc}
              date={event.date}
              title={event.title}
              url={event.url}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
