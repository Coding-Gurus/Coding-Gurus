import Link from "next/link";

export default function Pricing() {
  const models = [
    {
      title: "Fixed-Price Projects",
      icon: "💰",
      description:
        "Ideal for projects with well-defined scope and requirements",
      bestFor: [
        "Clear project specifications",
        "Fixed timeline & budget",
        "Single deliverable focus",
        "Simple to medium complexity",
      ],
      benefits: [
        "Predictable costs",
        "Clear milestones",
        "No surprises",
        "Budget certainty",
      ],
    },
    {
      title: "Milestone-Based Billing",
      icon: "🎯",
      description: "Pay as we deliver — perfect for larger, phased projects",
      bestFor: [
        "Multi-phase projects",
        "Complex applications",
        "Long-term development",
        "Iterative delivery",
      ],
      benefits: [
        "Payment tied to delivery",
        "Flexible scope adjustments",
        "Risk mitigation",
        "Quality checkpoints",
      ],
    },
    {
      title: "MVP & PoC Builds",
      icon: "🚀",
      description:
        "Rapid prototyping for startups and proof-of-concept validation",
      bestFor: [
        "Startup MVPs",
        "Product validation",
        "Investor demos",
        "Market testing",
      ],
      benefits: [
        "Fast turnaround (2-4 weeks)",
        "Cost-effective",
        "Quick market entry",
        "Validated learning",
      ],
    },
    {
      title: "Long-Term Collaboration",
      icon: "🤝",
      description: "Dedicated team for ongoing development and maintenance",
      bestFor: [
        "Continuous development",
        "Product evolution",
        "Ongoing support",
        "Multiple projects",
      ],
      benefits: [
        "Dedicated resources",
        "Deep product knowledge",
        "Priority support",
        "Flexible scaling",
      ],
    },
  ];

  const pricingFactors = [
    {
      factor: "Project Complexity",
      description:
        "Simple websites cost less than complex enterprise systems with AI/ML integration",
    },
    {
      factor: "Technology Stack",
      description:
        "Standard tech stacks vs. specialized technologies (blockchain, advanced AI)",
    },
    {
      factor: "Timeline",
      description:
        "Urgent projects may require additional resources and premium pricing",
    },
    {
      factor: "Team Size",
      description:
        "Small teams for simple projects vs. full teams for enterprise solutions",
    },
    {
      factor: "Maintenance & Support",
      description: "Ongoing support, updates, and feature additions",
    },
    {
      factor: "Integration Requirements",
      description: "Third-party APIs, legacy systems, or custom integrations",
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
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-purple-500/20 animate-shape-move"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
                Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-in-left">
              Flexible Pricing Models
            </h1>
            <p className="text-xl text-zinc-400 animate-slide-in-right">
              Choose the engagement model that best fits your project needs and
              budget.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {models.map((model, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{model.icon}</div>
                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  {model.title}
                </h2>
                <p className="text-gray-600 mb-6">{model.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">
                    Best For:
                  </h3>
                  <ul className="space-y-2">
                    {model.bestFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-sm font-bold text-blue-900 mb-2">
                    Key Benefits:
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {model.benefits.map((benefit, i) => (
                      <div key={i} className="text-sm text-blue-700">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Influences Pricing?
            </h2>
            <div className="space-y-4">
              {pricingFactors.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {item.factor}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Pricing Ranges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Indicative Project Ranges
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-blue-200">
                  <div>
                    <div className="font-bold text-gray-900">
                      Landing Page / Simple Website
                    </div>
                    <div className="text-sm text-gray-600">1-2 weeks</div>
                  </div>
                  <div className="text-blue-600 font-bold">
                    Contact for Quote
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-blue-200">
                  <div>
                    <div className="font-bold text-gray-900">
                      Web Application / Dashboard
                    </div>
                    <div className="text-sm text-gray-600">4-8 weeks</div>
                  </div>
                  <div className="text-blue-600 font-bold">
                    Contact for Quote
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-blue-200">
                  <div>
                    <div className="font-bold text-gray-900">
                      AI/ML Solution
                    </div>
                    <div className="text-sm text-gray-600">6-12 weeks</div>
                  </div>
                  <div className="text-blue-600 font-bold">
                    Contact for Quote
                  </div>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-blue-200">
                  <div>
                    <div className="font-bold text-gray-900">
                      Enterprise / GovTech Platform
                    </div>
                    <div className="text-sm text-gray-600">12-20 weeks</div>
                  </div>
                  <div className="text-blue-600 font-bold">
                    Contact for Quote
                  </div>
                </div>
                <div className="flex justify-between items-center py-4">
                  <div>
                    <div className="font-bold text-gray-900">
                      MVP / Prototype
                    </div>
                    <div className="text-sm text-gray-600">2-4 weeks</div>
                  </div>
                  <div className="text-blue-600 font-bold">
                    Contact for Quote
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              * Exact pricing depends on specific requirements, features, and
              complexity
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Discuss Your Project Requirements
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a detailed proposal tailored to your needs — no obligations,
            just honest advice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "Pricing | Coding Gurus",
  description:
    "Flexible engagement models: fixed-price, milestone-based, MVP builds, and long-term collaboration.",
};
