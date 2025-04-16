
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import InternshipCard from "@/components/InternshipCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const featuredInternships = [
  {
    title: "Software Development Intern",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Full-time",
    duration: "3 months",
    stipend: "₹15,000/month",
  },
  {
    title: "Marketing Intern",
    company: "Digital Marketing Pro",
    location: "Mumbai",
    type: "Part-time",
    duration: "6 months",
    stipend: "₹10,000/month",
  },
  {
    title: "Data Science Intern",
    company: "Analytics Hub",
    location: "Bangalore",
    type: "Full-time",
    duration: "4 months",
    stipend: "₹20,000/month",
  },
];

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find Your Perfect Internship
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect with leading companies and kickstart your career
            </p>
            <div className="space-x-4">
              <Button
                onClick={() => navigate("/register")}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started
              </Button>
              <Button
                onClick={() => navigate("/internships")}
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Browse Internships
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Internships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Featured Internships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInternships.map((internship, index) => (
              <InternshipCard
                key={index}
                {...internship}
                onApply={() => navigate("/login")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose InternConnect?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Companies</h3>
              <p className="text-gray-600">
                All companies are thoroughly vetted to ensure quality opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Apply</h3>
              <p className="text-gray-600">
                Apply to multiple internships with just a few clicks
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-lg p-6 mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your applications in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
