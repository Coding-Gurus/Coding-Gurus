import Link from "next/link";

export default function Industries() {
  const industries = [
    {
      title: "Government & Public Sector",
      description: "Transforming public service delivery with technology",
      solutions: [
        "Smart City platforms",
        "Citizen engagement portals",
        "E-governance solutions",
        "Data management systems",
        "GIS-based applications",
        "Workflow automation",
      ],
      examples: "Land records, grievance management, service delivery tracking",
    },
    {
      title: "Startups",
      description: "Rapid development from idea to market-ready product",
      solutions: [
        "MVP development",
        "Product prototypes",
        "Scalable architecture",
        "Cloud deployment",
        "Mobile-first applications",
        "Analytics dashboards",
      ],
      examples: "SaaS platforms, marketplaces, on-demand services",
    },
    {
      title: "MSMEs",
      description: "Digitizing operations for small and medium enterprises",
      solutions: [
        "Business automation",
        "Inventory management",
        "CRM systems",
        "E-commerce platforms",
        "Accounting integration",
        "Customer portals",
      ],
      examples: "Supply chain, order management, client tracking",
    },
    {
      title: "Education & EdTech",
      description: "Innovative learning solutions for modern education",
      solutions: [
        "Learning management systems",
        "Student portals",
        "Assessment platforms",
        "Virtual classrooms",
        "Content management",
        "Progress tracking",
      ],
      examples: "Online courses, exam systems, skill development",
    },
    {
      icon: "🏗️",
      title: "Real Estate & Infrastructure",
      description: "Technology for construction and property management",
      solutions: [
        "Project management tools",
        "Field worker coordination",
        "Property listings platforms",
        "Document management",
        "Progress tracking",
        "Compliance monitoring",
      ],
      examples: "Site management, property portals, contractor coordination",
    },
    {
      icon: "💼",
      title: "Professional Services",
      description: "Digital solutions for consulting and service firms",
      solutions: [
        "Client management systems",
        "Project tracking",
        "Billing & invoicing",
        "Document collaboration",
        "Time tracking",
        "Reporting dashboards",
      ],
      examples: "Legal tech, consulting platforms, agency tools",
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
                Industries We Serve
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-in-left">
              Industries We Serve
            </h1>
            <p className="text-xl text-zinc-400 animate-slide-in-right">
              Tailored technology solutions across sectors, from government to
              startups.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="card-3d glass rounded-xl p-8 border border-zinc-800 hover:border-blue-500/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h2 className="text-2xl font-bold mb-3 text-zinc-100">
                  {industry.title}
                </h2>
                <p className="text-zinc-400 mb-6">{industry.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-zinc-300 mb-3">
                    What We Build:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.solutions.map((solution, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 text-xs mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span className="text-sm text-zinc-400">
                          {solution}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-xs font-semibold text-blue-400 mb-1">
                    Examples:
                  </div>
                  <div className="text-sm text-zinc-300">
                    {industry.examples}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Expertise */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="glass rounded-3xl p-16 border border-zinc-800 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-zinc-100">
                Cross-Industry Expertise
              </h2>
              <p className="text-lg text-zinc-400 mb-12">
                Our experience spans multiple sectors, enabling us to bring best
                practices and innovative approaches to your industry.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <div className="text-zinc-200 font-semibold mb-1">
                    Industries Served
                  </div>
                  <div className="text-sm text-zinc-500">
                    Diverse sector experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    20+
                  </div>
                  <div className="text-zinc-200 font-semibold mb-1">
                    Projects Delivered
                  </div>
                  <div className="text-sm text-zinc-500">
                    Across all sectors
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-zinc-200 font-semibold mb-1">
                    Client Satisfaction
                  </div>
                  <div className="text-sm text-zinc-500">Quality assurance</div>
                </div>
              </div>
            </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-100">
                  Ready to Transform Your Industry?
                </h2>
                <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                  Let&apos;s discuss how our solutions can address your specific
                  industry challenges.
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
  title: "Industries | Coding Gurus",
  description:
    "Technology solutions for government, startups, MSMEs, education, real estate, and professional services.",
};
