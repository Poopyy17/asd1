import React from "react";
import { formatDistanceToNow } from "date-fns";

const EventCard = ({ imageSrc, date, title, url }) => {
  // Calculate the relative time
  const relativeDate = formatDistanceToNow(new Date(date), { addSuffix: true });

  return (
    <a
      href={url}
      className="flex flex-col items-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Image Thumbnail */}
      <div className="relative w-full max-w-xs">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Date */}
      <p className="mt-3 text-gray-600 text-sm w-full text-left">
        <span className="font-bold text-orange-500">EVENT UPDATES</span> |{" "}
        {relativeDate}
      </p>

      {/* Title */}
      <h3 className="mt-2 text-xl font-semibold text-gray-800 w-full text-left">
        {title}
      </h3>
    </a>
  );
};

export default EventCard;
