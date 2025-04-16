
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Check, Clock } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
                  <div className="flex items-center">
                    <FileText className="mr-4 text-blue-600" />
                    <span>Software Developer Intern - TechCorp</span>
                  </div>
                  <span className="text-green-600 flex items-center">
                    <Check className="mr-2" size={20} />
                    Applied
                  </span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
                  <div className="flex items-center">
                    <FileText className="mr-4 text-blue-600" />
                    <span>Marketing Intern - Digital Pros</span>
                  </div>
                  <span className="text-yellow-600 flex items-center">
                    <Clock className="mr-2" size={20} />
                    Pending
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile & Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h3 className="text-lg font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 mb-4">Computer Science Student</p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2" /> Update Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
