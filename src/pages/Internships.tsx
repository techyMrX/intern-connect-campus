
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import InternshipCard from "@/components/InternshipCard";
import { Search, Filter } from "lucide-react";

const sampleInternships = [
  {
    title: "Frontend Developer Intern",
    company: "Tech Innovations",
    location: "Remote",
    type: "Full-time",
    duration: "3 months",
    stipend: "₹20,000/month",
  },
  {
    title: "Data Science Intern",
    company: "Analytics Hub",
    location: "Bangalore",
    type: "Part-time",
    duration: "6 months",
    stipend: "₹15,000/month",
  },
  {
    title: "UI/UX Design Intern",
    company: "Creative Solutions",
    location: "Mumbai",
    type: "Full-time",
    duration: "4 months",
    stipend: "₹18,000/month",
  },
];

export default function Internships() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInternships, setFilteredInternships] = useState(sampleInternships);

  const handleSearch = () => {
    const filtered = sampleInternships.filter(internship => 
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInternships(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Find Your Perfect Internship</h1>
        
        <div className="flex mb-8 space-x-4">
          <div className="relative flex-grow">
            <Input 
              type="text" 
              placeholder="Search internships by title or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <Button variant="outline" className="flex items-center">
            <Filter className="mr-2" size={20} />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship, index) => (
            <InternshipCard 
              key={index} 
              {...internship}
              onApply={() => alert("Please login to apply")}
            />
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No internships found matching your search.
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
