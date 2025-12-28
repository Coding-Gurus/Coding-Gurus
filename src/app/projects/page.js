import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "DigiKshetra",
      category: "Blockchain & GovTech",
      problem:
        "Land record management in India is plagued by fraud, manual processes, and lack of transparency. Property disputes and document forgery cost billions annually.",
      solution:
        "Built a blockchain-based land record management system with automated document verification, immutable audit trails, and citizen-facing portal for transparent property transactions.",
      impact: [
        "Eliminated manual verification processes",
        "Reduced fraud through blockchain immutability",
        "Enabled instant property verification",
        "Streamlined government workflows",
      ],
      tech: [
        "Blockchain",
        "Smart Contracts",
        "Django",
        "React",
        "Redis",
        "PostgreSQL",
      ],
      recognition: "SIH 2024 Winner",
    },
    {
      title: "Automated Document Validation System",
      category: "AI / ML",
      problem:
        "Government agencies process thousands of documents daily, requiring significant manual effort for verification and validation, leading to delays and errors.",
      solution:
        "Developed an AI-powered document processing system with OCR, automated validation, fraud detection algorithms, and real-time verification against government databases.",
      impact: [
        "90% reduction in processing time",
        "95% accuracy in document verification",
        "Automated fraud detection",
        "Reduced operational costs by 60%",
      ],
      tech: ["Python", "TensorFlow", "OCR", "NLP", "FastAPI", "MongoDB"],
      recognition: "DRDO-style Implementation",
    },
    {
      title: "Construction Field Management Platform",
      category: "Web Application",
      problem:
        "Construction projects suffer from poor coordination between field workers, supervisors, and management, leading to delays and miscommunication.",
      solution:
        "Created a mobile-first platform enabling real-time task assignment, progress tracking, photo documentation, and automated reporting for construction sites.",
      impact: [
        "40% improvement in project completion time",
        "Real-time visibility into site operations",
        "Reduced communication gaps",
        "Digital audit trail for compliance",
      ],
      tech: ["Next.js", "Firebase", "PWA", "Tailwind CSS", "Cloud Functions"],
      recognition: "Client Project - Construction Industry",
    },
    {
      title: "Smart City Citizen Engagement Portal",
      category: "GovTech",
      problem:
        "Cities lack efficient channels for citizen feedback, grievance redressal, and public service delivery tracking.",
      solution:
        "Built a comprehensive citizen portal with grievance management, service request tracking, real-time notifications, and analytics dashboard for administrators.",
      impact: [
        "10,000+ citizens registered",
        "85% grievance resolution rate",
        "Improved citizen satisfaction",
        "Data-driven policy decisions",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "GIS", "SMS Gateway"],
      recognition: "SIH 2025 Finalist",
    },
    {
      title: "AI-Powered Recommendation Engine",
      category: "AI / ML",
      problem:
        "E-commerce platforms struggle to provide personalized experiences, leading to poor conversion rates and customer retention.",
      solution:
        "Implemented a machine learning recommendation system analyzing user behavior, purchase history, and preferences to deliver personalized product suggestions.",
      impact: [
        "35% increase in conversion rates",
        "2x improvement in customer engagement",
        "Reduced cart abandonment",
        "Higher average order value",
      ],
      tech: [
        "Python",
        "Scikit-Learn",
        "Collaborative Filtering",
        "Django",
        "Redis",
      ],
      recognition: "Mumbai Hacks 2025 Winner",
    },
    {
      title: "Real-Time Analytics Dashboard",
      category: "Data Visualization",
      problem:
        "Businesses need instant insights from complex data streams but lack tools for real-time visualization and decision-making.",
      solution:
        "Developed a customizable analytics dashboard with live data streaming, interactive visualizations, and automated alerting for key metrics.",
      impact: [
        "Real-time business intelligence",
        "Faster decision-making",
        "Automated anomaly detection",
        "Custom KPI tracking",
      ],
      tech: ["React", "D3.js", "WebSocket", "Python", "InfluxDB"],
      recognition: "Enterprise Client Project",
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
          <div className="max-w-3xl">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold tracking-wide backdrop-blur-sm">
                Our Work
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 animate-slide-in-left">
              Projects That Made an Impact
            </h1>
            <p className="text-xl text-zinc-400 animate-slide-in-right">
              Real-world solutions solving complex problems across government,
              enterprise, and startup ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-3d glass border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold border border-blue-500/30">
                        {project.category}
                      </span>
                      {project.recognition && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold border border-yellow-500/30">
                          🏆 {project.recognition}
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-100 mb-2">
                      {project.title}
                    </h2>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-100 mb-2">
                          Problem Statement
                        </h3>
                        <p className="text-zinc-400">{project.problem}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-100 mb-2">
                          Our Solution
                        </h3>
                        <p className="text-zinc-400">{project.solution}</p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-100 mb-3">
                          Impact & Results
                        </h3>
                        <ul className="space-y-2">
                          {project.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-green-400 mt-1 flex-shrink-0">
                                ✓
                              </span>
                              <span className="text-zinc-400">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-100 mb-3">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded text-sm border border-blue-500/30"
                            >
                              {tech}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Build the Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with proven
            technology and expertise.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: "Projects | Coding Gurus",
  description:
    "Explore our portfolio of impactful projects across blockchain, AI/ML, web development, and GovTech.",
};
