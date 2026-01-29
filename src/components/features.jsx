import React from "react";

import {
  LuZap,
  LuCoffee,
  LuWifi,
  LuUsers,
  LuShield,
  LuClock,
} from "react-icons/lu";

const wifiIcon = <LuWifi className="text-blue-600 " size={30} />;
const coffeeIcon = <LuCoffee className="text-blue-600 " size={30} />;
const usersIcon = <LuUsers className="text-blue-600 " size={30} />;
const shieldIcon = <LuShield className="text-blue-600 " size={30} />;
const clockIcon = <LuClock className="text-blue-600 " size={30} />;
const zapIcon = <LuZap className="text-blue-600 " size={30} />;

const features = [
  {
    icon: wifiIcon,
    title: "High-Speed Internet",
    description:
      "Lightning-fast fiber optic internet with backup connections to keep you online.",
  },
  {
    icon: coffeeIcon,
    title: "Premium Amenities",
    description:
      "Complimentary coffee, tea, and snacks to fuel your productivity throughout the day.",
  },
  {
    icon: usersIcon,
    title: "Networking Events",
    description:
      "Regular community events to connect with fellow members and grow your network.",
  },
  {
    icon: shieldIcon,
    title: "24/7 Security",
    description:
      "Round-the-clock security and secure access control for your peace of mind.",
  },
  {
    icon: clockIcon,
    title: "Flexible Access",
    description:
      "24/7 access to your workspace whenever inspiration strikes, day or night.",
  },
  {
    icon: zapIcon,
    title: "Power Backup",
    description:
      "Uninterrupted power supply with backup generators to keep you working.",
  },
];

const Features = () => {
  return (
    <div className="px-6  bg-gray-50 pt-24 mb-4">
      <div className="text-center flex flex-col gap-4">
        <h2 className="text-5xl font-semibold">
          Everything You Need to Succeed
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Our co-working spaces are equipped with all the amenities and services
          you need to do your best work.
        </p>
      </div>
      <div className="grid grid-cols-3 justify-between gap-8 pb-20 pt-14">
        {/* <div
          id="card"
          className="flex flex-col bg-white rounded-xl py-8 px-8 gap-3 shadow-sm"
        >
          <div className="px-3 py-3 bg-blue-100 rounded-lg w-fit">
            <MdWifi className="text-blue-600 " size={30} />
          </div>
          <p className="font-medium text-xl">High-Speed Internet</p>
          <p className="text-gray-600">
            Lightning-fast fiber optic internet with backup connections to keep
            you online.
          </p>
        </div> */}
        {features.map((features, index) => (
          <div
            key={index}
            id="card"
            className="flex flex-col bg-white rounded-xl py-8 px-8 gap-3 shadow-sm"
          >
            <div className="px-3 py-3 bg-blue-100 rounded-lg w-fit">
              {features.icon}
            </div>
            <p className="font-medium text-xl">{features.title}</p>
            <p className="text-gray-600">{features.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
