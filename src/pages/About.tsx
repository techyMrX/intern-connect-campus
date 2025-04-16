
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About InternConnect</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to bridging the gap between talented students and innovative companies, 
            creating meaningful internship opportunities that launch careers.
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Users className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-600">
              Empower students to find their dream internships and help companies discover exceptional talent.
            </p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Target className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              Create a seamless, transparent platform that transforms how students and employers connect.
            </p>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Award className="mx-auto mb-4 text-blue-600" size={48} />
            <h2 className="text-xl font-semibold mb-2">Our Values</h2>
            <p className="text-gray-600">
              Integrity, Innovation, Opportunity, and Continuous Learning.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}
