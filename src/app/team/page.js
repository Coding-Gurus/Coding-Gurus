"use client";

export default function Team() {
  const founder = {
    name: "Darshan Khapekar",
    role: "Founder & CEO",
    image: "/darshan.png",
    bio: "Visionary leader driving innovation in tech solutions",
    achievements: [
      "7x Hackathon Winner",
      "3+ Years Teaching Experience",
      "SIH 2024 & 2025 Winner",
    ],
  };

  const coFounders = [
    {
      name: "Shravani Rasam",
      role: "Co-Founder & CTO",
      image: "/shravani.png",
      bio: "Tech architect building scalable solutions",
      achievements: [
        "6x Hackathon Winner",
        "Full-Stack Development Expert",
        "AI/ML Specialist",
      ],
    },
    {
      name: "Pranav Pol",
      role: "Co-Founder & COO",
      image: null,
      bio: "Operations mastermind ensuring flawless execution",
      achievements: [
        "4x Hackathon Winner",
        "Project Management Pro",
        "Client Relations Expert",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden relative">
      {/* Animated Background with Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Geometric Shapes */}
        <div
          className="absolute top-40 right-40 w-32 h-32 border-2 border-blue-500/20 rounded-lg animate-shape-rotate"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute bottom-40 left-40 w-24 h-24 border-2 border-purple-500/20 animate-shape-move"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>

        {/* Dot Pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
      </div>

      {/* Hero Section - Compact */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-4 animate-bounce-in">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-bold tracking-wide backdrop-blur-sm neon-glow">
                <svg
                  className="w-4 h-4 animate-pulse"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Meet The Dream Team
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight animate-slide-in-left">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovation Driven
              </span>
              <br />
              <span className="text-zinc-100">By Excellence</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Team Triangle Layout - Compact */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          {/* Founder - Top Center */}
          <div className="max-w-xl mx-auto mb-20 animate-bounce-in">
            <div className="group perspective">
              <div className="card-3d glass rounded-3xl p-8 border-2 border-blue-500/30 hover:border-blue-400 transition-all duration-700 relative overflow-hidden shine">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10">
                  {/* Image */}
                  <div className="relative mb-6">
                    <div className="w-56 h-56 mx-auto rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1.5 animate-glow group-hover:scale-110 transition-transform duration-700">
                      <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div
                          className="w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 absolute inset-0 items-center justify-center"
                          style={{ display: founder.image ? "none" : "flex" }}
                        >
                          <svg
                            className="w-24 h-24 text-zinc-700"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/* Crown Icon */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-pulse">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/50">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-2 text-zinc-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                      {founder.name}
                    </h2>
                    <p className="text-lg text-blue-400 font-semibold mb-3">
                      {founder.role}
                    </p>

                    {/* Achievements - Compact */}
                    <div className="mt-6 pt-6 border-t border-zinc-800">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {founder.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-zinc-300 font-medium"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-blue-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Co-Founders - Bottom Triangle */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {coFounders.map((member, index) => (
              <div
                key={index}
                className="group perspective animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="card-3d glass rounded-2xl p-7 border border-zinc-800 hover:border-purple-500/50 transition-all duration-700 h-full relative overflow-hidden shine">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="relative z-10">
                    {/* Image */}
                    <div className="relative mb-5">
                      <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 group-hover:scale-110 transition-transform duration-500 neon-glow">
                        <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div
                            className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 absolute inset-0 items-center justify-center"
                            style={{ display: member.image ? "none" : "flex" }}
                          >
                            <svg
                              className="w-20 h-20 text-zinc-700"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2 text-zinc-100 group-hover:text-purple-400 transition-colors">
                        {member.name}
                      </h2>
                      <p className="text-base text-purple-400 font-semibold mb-4">
                        {member.role}
                      </p>

                      {/* Achievements - Compact Tags */}
                      <div className="mt-5 pt-5 border-t border-zinc-800">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-purple-500/20 border border-purple-500/30 rounded-full text-zinc-400"
                            >
                              <svg
                                className="w-3 h-3 text-purple-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats - Compact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="glass rounded-2xl p-8 border border-zinc-800 shine max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="animate-bounce-in">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  3
                </div>
                <div className="text-zinc-500 text-sm font-medium">
                  Founders
                </div>
              </div>
              <div
                className="animate-bounce-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  10+
                </div>
                <div className="text-zinc-500 text-sm font-medium">
                  Projects
                </div>
              </div>
              <div
                className="animate-bounce-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  3+
                </div>
                <div className="text-zinc-500 text-sm font-medium">
                  Hackathons
                </div>
              </div>
              <div
                className="animate-bounce-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-1">
                  100%
                </div>
                <div className="text-zinc-500 text-sm font-medium">
                  Dedication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-6">
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
            <div className="glass rounded-2xl p-10 text-center border border-zinc-800 relative backdrop-blur-xl overflow-hidden shine">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 to-purple-950/30"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-100 animate-slide-up">
                  Ready to Collaborate?
                </h2>
                <p
                  className="text-lg text-zinc-400 mb-8 animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  Let&apos;s build something extraordinary together
                </p>
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 animate-bounce-in neon-glow"
                  style={{ animationDelay: "0.2s" }}
                >
                  Get In Touch
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
