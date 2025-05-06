import React from "react";

interface TitleSectionProps {
  title: string;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <div className="p-3 px-4 md:px-6 bg-blue-500 rounded-3xl">
      <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold text-white text-center">
        {title}
      </h1>
    </div>
  );
};

export default TitleSection;
