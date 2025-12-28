import Link from "next/link";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Requirement Discussion",
      description:
        "We start by understanding your business goals, challenges, and technical requirements through detailed discussions.",
      deliverables: [
        "Initial consultation call",
        "Requirements gathering",
        "Project scope definition",
        "Timeline estimation",
      ],
      duration: "1-2 days",
    },
    {
      number: "02",
      title: "Solution & Architecture",
      description:
        "Our team designs a comprehensive solution architecture tailored to your needs, considering scalability and best practices.",
      deliverables: [
        "Technical architecture document",
        "Technology stack selection",
        "Database design",
        "API specifications",
        "Project proposal",
      ],
      duration: "2-3 days",
    },
    {
      number: "03",
      title: "Development & Iterations",
      description:
        "We build your solution in sprints, with regular demos and feedback loops to ensure alignment with your vision.",
      deliverables: [
        "Weekly progress updates",
        "Working prototypes",
        "Regular demo sessions",
        "Code reviews",
        "Sprint deliverables",
      ],
      duration: "Varies by project",
    },
    {
      number: "04",
      title: "Testing & Validation",
      description:
        "Rigorous testing ensures your solution is robust, secure, and meets all functional and performance requirements.",
      deliverables: [
        "Functional testing",
        "Performance testing",
        "Security audits",
        "User acceptance testing",
        "Bug fixes",
      ],
      duration: "1-2 weeks",
    },
    {
      number: "05",
      title: "Deployment & Support",
      description:
        "We handle deployment to production and provide ongoing support to ensure smooth operations and continuous improvement.",
      deliverables: [
        "Production deployment",
        "Documentation",
        "Training sessions",
        "Post-launch support",
        "Maintenance & updates",
      ],
      duration: "Ongoing",
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
                Our Process
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-in-left">
              How We Work
            </h1>
            <p className="text-xl text-zinc-400 animate-slide-in-right">
              A transparent, collaborative process designed for success — from
              concept to launch and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="mb-16 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Number Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-500/30 animate-float"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="card-3d glass border border-zinc-800 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-500">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h2 className="text-2xl font-bold text-zinc-100">
                          {step.title}
                        </h2>
                        <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold border border-blue-500/30">
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-zinc-400 mb-6">{step.description}</p>

                      <div>
                        <h3 className="text-sm font-bold text-zinc-300 mb-3">
                          Deliverables:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="text-blue-400 mt-1 flex-shrink-0">
                                ✓
                              </span>
                              <span className="text-zinc-400">
                                {deliverable}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="ml-10 my-4 h-12 border-l-2 border-dashed border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Our Process Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Clear Communication
              </h3>
              <p className="text-gray-600">
                Regular updates and transparent discussions keep you informed at
                every stage.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Agile Approach
              </h3>
              <p className="text-gray-600">
                Iterative development allows for flexibility and quick
                adaptation to changes.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Quality Focus
              </h3>
              <p className="text-gray-600">
                Rigorous testing and code reviews ensure robust, secure
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's kick off with a free consultation to discuss your
            requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "How We Work | Coding Gurus",
  description:
    "Our transparent 5-step process: from requirements to deployment and ongoing support.",
};
