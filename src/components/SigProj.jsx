import React from "react";
import SigProjCarousel from "./SigProjCarousel";

const SigProj = ({ categoryImage, title, details, videoUrl, images }) => {
  return (
    <div className="bg-white shadow-[0px_0px_4px_1px_#e2e8f0] rounded-lg p-4 sm:p-6 mb-5 w-full max-w-6xl mx-auto">
      {/* Category and Title */}
      <div className="flex items-center mb-4">
        {/* Image for Category */}
        <div className="mr-4 flex-shrink-0">
          {categoryImage ? (
            <img
              src={categoryImage}
              alt="Category"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-xs sm:text-sm">No Image</span>
            </div>
          )}
        </div>
        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-dinnext font-black text-gray-800">
          {title}
        </h2>
      </div>

      {/* Project Details */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
        {details}
      </p>

      {/* Video Section (Optional) */}
      {videoUrl && (
        <div className="mb-6">
          <video controls className="w-full h-auto rounded-lg">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Carousel for Images (if any) */}
      {images && images.length > 0 && (
        <div className="w-full">
          <SigProjCarousel images={images} />
        </div>
      )}
    </div>
  );
};

export default SigProj;
