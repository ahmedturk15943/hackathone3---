import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/assets/Chef 1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/assets/Card 2.png" },
  { name: "M. Mohammad", role: "Chef", image: "/assets/Card 3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/assets/Card 4.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/assets/Card 5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/assets/Card 6.png" },
  { name: "Motin Molladst", role: "Chef", image: "/assets/Card 7.png" },
  { name: "William Rumi", role: "Chef", image: "/assets/Card 8.png" },
  { name: "Kets William Roy", role: "Chef", image: "/assets/Card 9.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/assets/Card 10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/assets/Card 11.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/assets/Card 12.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600"
                : "border-4 border-transparent hover:border-purple-600"
            }`}
          >
            {/* Image */}
            <div className="flex-1">
              <Image
                src={chef.image} 
                alt={chef.name}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
