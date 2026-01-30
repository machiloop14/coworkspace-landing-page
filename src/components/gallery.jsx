import React from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2OTU2OTUwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Professional workspace desks",
  },
  {
    url: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3Njk1ODYyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Modern meeting rooms",
  },
  {
    url: "https://images.unsplash.com/photo-1715538580608-2cc19aae612e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBhbWVuaXRpZXMlMjBjb2ZmZWV8ZW58MXx8fHwxNzY5NTg2Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Premium coffee and amenities",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center flex flex-col gap-4 mb-16">
          <p className="text-5xl font-semibold">Explore Our Spaces</p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a look at our beautifully designed workspaces and amenities.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={images[1].url}
              alt={images[1].alt}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] rounded-xl overflow-hidden">
            <img
              src={images[2].url}
              alt={images[2].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
