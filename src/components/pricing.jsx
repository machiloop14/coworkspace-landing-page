import { LuCheck } from "react-icons/lu";

const plans = [
  {
    name: "Day Pass",
    price: "2k",
    period: "per day",
    description: "Perfect for occasional visits",
    features: [
      "Access to hot desks",
      "High-speed WiFi",
      "Coffee & tea included",
      "Access during business hours",
      "Community events",
    ],
    highlighted: false,
  },
  {
    name: "Flex Desk",
    price: "45k",
    period: "per month",
    description: "For flexible professionals",
    features: [
      "Unlimited hot desk access",
      "24/7 facility access",
      "High-speed WiFi",
      "Coffee, tea & snacks",
      "Meeting room credits (5hrs)",
      "Priority booking",
      "Community events",
      "Mail handling",
    ],
    highlighted: true,
  },
  {
    name: "Private Office",
    price: "90k",
    period: "per month",
    description: "Your own dedicated space",
    features: [
      "Private lockable office",
      "24/7 facility access",
      "High-speed WiFi",
      "Coffee, tea & snacks",
      "Meeting room credits (20hrs)",
      "Priority booking",
      "Community events",
      "Mail handling",
      "Personalized nameplate",
      "Storage locker",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Flexible Plans for Every Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include access to
            our premium amenities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-blue-600 text-white shadow-xl scale-105 md:scale-110"
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <h3 className="text-2xl mb-2">{plan.name}</h3>
              <p
                className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-5xl">N{plan.price}</span>
                <span
                  className={`ml-2 ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}
                >
                  {plan.period}
                </span>
              </div>
              <button
                className={`w-full py-4 px-6 rounded-lg mb-8 transition-colors ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Get Started
              </button>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <LuCheck
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-blue-200" : "text-blue-600"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-blue-50" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
