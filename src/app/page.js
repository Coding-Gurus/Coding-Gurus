import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Animated Background with More 3D Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-purple-950/40 to-indigo-950/40"></div>

          {/* Floating Orbs - More Dynamic */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-40 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Geometric Shapes - More 3D Elements */}
          <div className="absolute top-32 right-20 w-40 h-40 border-2 border-blue-500/20 rounded-xl animate-shape-rotate"></div>
          <div
            className="absolute bottom-32 left-20 w-32 h-32 border-2 border-purple-500/20 animate-shape-move"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-lg animate-pulse"></div>
          <div
            className="absolute top-1/2 right-1/3 w-20 h-20 border-2 border-cyan-500/20 rounded-full animate-shape-rotate"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 animate-shape-move"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Floating Particles */}
          <div className="absolute top-20 right-1/4 w-3 h-3 bg-blue-400/40 rounded-full animate-float"></div>
          <div
            className="absolute top-40 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 right-1/3 w-4 h-4 bg-pink-400/40 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/2 w-2 h-2 bg-cyan-400/40 rounded-full animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Dot Pattern */}
          <div className="absolute inset-0 dot-pattern opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
                SIH 2024 & 2025 Winners | Mumbai Hacks 2025 Winners
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-slide-in-left">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                We Build Scalable Tech Solutions
              </span>
              <br />
              <span className="text-zinc-100">That Actually Work</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-zinc-400 max-w-3xl mx-auto animate-slide-in-right">
              Hackathon-winning developers delivering real-world web, AI &
              blockchain solutions with proven track record.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get a Free Consultation
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              <Link
                href="/projects"
                className="group glass border border-zinc-700 text-zinc-200 px-10 py-5 rounded-xl font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  View Our Work
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <svg
            className="w-6 h-6 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100">
              What We Build
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Cutting-edge solutions powered by modern technology stacks
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Applications",
                desc: "Scalable platforms built with modern tech",
                gradient: "from-blue-500 to-cyan-500",
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
              },
              {
                title: "AI / ML Solutions",
                desc: "Intelligent systems that learn and adapt",
                gradient: "from-purple-500 to-pink-500",
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
              },
              {
                title: "Blockchain Systems",
                desc: "Secure, immutable digital solutions",
                gradient: "from-orange-500 to-red-500",
                icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
              },
              {
                title: "GovTech & Smart City",
                desc: "Solutions for public sector innovation",
                gradient: "from-green-500 to-emerald-500",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
              {
                title: "Mobile-First Platforms",
                desc: "Responsive apps for all devices",
                gradient: "from-indigo-500 to-blue-500",
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
              },
              {
                title: "MVP Development",
                desc: "Rapid prototyping for startups",
                gradient: "from-violet-500 to-purple-500",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="perspective animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="card-3d glass rounded-2xl p-8 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden h-full">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} animate-pulse`}
                  ></div>
                  <div
                    className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float`}
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <div className="w-full h-full rounded-xl bg-zinc-900 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={service.icon}
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                  <div
                    className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Coding Gurus */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent"></div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100">
              Why Choose Coding Gurus
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Proven excellence with industry recognition
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "SIH 2024 & 2025 Winners",
                desc: "Proven excellence in national competitions",
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              },
              {
                title: "Mumbai Hacks 2025 Winners",
                desc: "Top talent recognized by industry",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
              },
              {
                title: "Proven Delivery",
                desc: "Meeting tight deadlines consistently",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Industry-Ready",
                desc: "Architecture built for scale",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
              },
            ].map((reason, i) => (
              <div
                key={i}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="group perspective mb-6">
                  <div
                    className="card-3d glass w-24 h-24 rounded-2xl flex items-center justify-center mx-auto border border-zinc-800 relative overflow-hidden animate-float"
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    <svg
                      className="w-12 h-12 text-blue-400 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={reason.icon}
                      />
                    </svg>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-zinc-100">
                  {reason.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          ></div>
          {/* Geometric Shapes */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-500/20 rounded-lg animate-shape-rotate"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-purple-500/20 animate-shape-move"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="glass rounded-3xl p-16 border border-zinc-800 relative overflow-hidden backdrop-blur-xl shine">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="mb-8 animate-bounce-in">
                <span className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wide animate-pulse">
                  Trusted Globally
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-in-left">
                Trusted by Innovators & Organizations
              </h2>
              <p className="text-xl text-zinc-400 mb-16 animate-slide-in-right">
                From government projects to startup MVPs, we deliver solutions
                that make an impact.
              </p>
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    value: "10+",
                    label: "Projects Delivered",
                    gradient: "from-blue-400 to-cyan-400",
                  },
                  {
                    value: "3+",
                    label: "Hackathon Wins",
                    gradient: "from-purple-400 to-pink-400",
                  },
                  {
                    value: "100%",
                    label: "Client Satisfaction",
                    gradient: "from-pink-400 to-orange-400",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="animate-bounce-in group"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div
                      className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-zinc-400 text-lg font-medium">
                      {stat.label}
                    </div>
                    <div
                      className={`h-1 w-20 mx-auto mt-4 bg-gradient-to-r ${stat.gradient} rounded-full animate-pulse`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="glass rounded-3xl p-16 text-center border border-zinc-800 relative backdrop-blur-xl overflow-hidden shine neon-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-purple-950/50"></div>
              {/* Animated Particles */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-float"></div>
              <div
                className="absolute top-20 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-10 left-20 w-5 h-5 bg-pink-400/30 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-float"
                style={{ animationDelay: "1.5s" }}
              ></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-up">
                  Ready to Build Something Amazing?
                </h2>
                <p
                  className="text-xl text-zinc-400 mb-10 animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  Let&apos;s discuss your project requirements and turn your
                  ideas into reality.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 animate-bounce-in neon-glow"
                  style={{ animationDelay: "0.2s" }}
                >
                  Get Started Today
                  <svg
                    className="w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all"
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
