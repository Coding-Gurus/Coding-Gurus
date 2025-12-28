import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "web",
      icon: "💻",
      title: "Web Development",
      description:
        "Build robust, scalable web applications that power your business",
      offerings: [
        "Company websites & landing pages",
        "Admin dashboards & control panels",
        "Portals & SaaS platforms",
        "E-commerce solutions",
        "Progressive Web Apps (PWA)",
      ],
      tech: "React, Next.js, Django, Firebase, PostgreSQL, MongoDB",
    },
    {
      id: "ai",
      icon: "🤖",
      title: "AI / ML Solutions",
      description:
        "Intelligent systems that learn, adapt, and drive real business value",
      offerings: [
        "Document verification & processing",
        "Fraud detection systems",
        "Recommendation engines",
        "Data analytics dashboards",
        "Natural Language Processing (NLP)",
        "Computer Vision applications",
      ],
      tech: "Python, Scikit-Learn, TensorFlow, PyTorch, NLP, Deep Learning",
    },
    {
      id: "blockchain",
      icon: "⛓️",
      title: "Blockchain Development",
      description:
        "Secure, transparent, and immutable solutions for critical data",
      offerings: [
        "Land record management systems",
        "Smart contracts development",
        "Immutable ledger systems",
        "Audit trail solutions",
        "Supply chain tracking",
        "Digital identity verification",
      ],
      tech: "Blockchain, Smart Contracts, Web3, Django APIs, Redis",
    },
    {
      id: "govtech",
      icon: "🏛️",
      title: "Government & Enterprise Solutions",
      description:
        "Mission-critical systems for public sector and large organizations",
      offerings: [
        "Smart City platforms",
        "Citizen engagement systems",
        "Workflow automation",
        "GIS & map-based systems",
        "Data management platforms",
        "Compliance & reporting tools",
      ],
      tech: "Enterprise Architecture, Secure APIs, Cloud Infrastructure, GIS",
    },
    {
      id: "mvp",
      icon: "🚀",
      title: "Hackathon / MVP Builds",
      description:
        "Rapid development for startups and proof-of-concept projects",
      offerings: [
        "24–72 hour MVPs",
        "Pitch-ready demos",
        "Prototype → production roadmap",
        "Technical feasibility studies",
        "Investor presentation materials",
      ],
      tech: "Agile Stack Selection, Rapid Prototyping, Cloud Deployment",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-500/20 rounded-lg animate-shape-rotate"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-in-left">
              Services That Transform Ideas Into Reality
            </h1>
            <p className="text-xl text-zinc-400 animate-slide-in-right">
              From concept to deployment, we deliver end-to-end technology
              solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="grid md:grid-cols-2 gap-12 items-start animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="perspective">
                  <div className="card-3d glass rounded-2xl p-8 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500">
                    <h2 className="text-3xl font-bold text-zinc-100 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-zinc-400 mb-6">
                      {service.description}
                    </p>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6 backdrop-blur-sm">
                      <div className="text-sm font-semibold text-blue-400 mb-2">
                        Tech Stack:
                      </div>
                      <div className="text-sm text-zinc-300">
                        {service.tech}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="perspective">
                  <div className="glass rounded-xl p-8 border border-zinc-800">
                    <h3 className="text-xl font-bold mb-6 text-zinc-100">
                      What We Deliver:
                    </h3>
                    <ul className="space-y-3">
                      {service.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-blue-400 mt-1 flex-shrink-0">
                            ✓
                          </span>
                          <span className="text-zinc-300">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div className="glass rounded-3xl p-16 text-center border border-zinc-800 relative backdrop-blur-xl overflow-hidden shine">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 to-purple-950/50"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 text-zinc-100">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss your project requirements and build
                  something extraordinary together
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-500"
                >
                  Get Started
                  <svg
                    className="w-5 h-5"
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

export const metadata = {
  title: "Services | Coding Gurus",
  description:
    "Professional web development, AI/ML solutions, blockchain systems, and GovTech platforms.",
};
