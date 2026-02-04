const testimonials = [
  {
    name: "Justice Ozaveshe",
    role: "Founder, TechStart Inc.",
    content:
      "This co-working space has been instrumental in growing my startup. The community is incredibly supportive and the amenities are top-notch.",
    avatar: "JO",
  },
  {
    name: "Owen Joseph",
    role: "Freelance Designer",
    content:
      "I've tried many co-working spaces, but this one stands out. The atmosphere is perfect for creativity and the facilities are always well-maintained.",
    avatar: "OJ",
  },
  {
    name: "Abigail Pamilerin",
    role: "Remote Marketing Manager",
    content:
      "The flexible access and professional environment have made my remote work experience so much better. Highly recommend!",
    avatar: "AP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What Our Members Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of satisfied professionals who call our space their
            workspace home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
