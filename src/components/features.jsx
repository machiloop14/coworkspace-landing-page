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
    icon: LuZap,
    title: "High-Speed Internet",
    description:
      "Lightning-fast fiber optic internet with backup connections to keep you online.",
  },
  {
    icon: LuCoffee,
    title: "Premium Amenities",
    description:
      "Complimentary coffee, tea, and snacks to fuel your productivity throughout the day.",
  },
  {
    icon: LuWifi,
    title: "Networking Events",
    description:
      "Regular community events to connect with fellow members and grow your network.",
  },
  {
    icon: LuUsers,
    title: "24/7 Security",
    description:
      "Round-the-clock security and secure access control for your peace of mind.",
  },
  {
    icon: LuShield,
    title: "Flexible Access",
    description:
      "24/7 access to your workspace whenever inspiration strikes, day or night.",
  },
  {
    icon: LuClock,
    title: "Power Backup",
    description:
      "Uninterrupted power supply with backup generators to keep you working.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our co-working spaces are equipped with all the amenities and
            services you need to do your best work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
