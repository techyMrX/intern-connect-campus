
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, FileText, Users } from "lucide-react";

export default function EmployerDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <h1 className="text-3xl font-bold mb-8">Employer Dashboard</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Post New Internship</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="default">
                <Plus className="mr-2" /> Create Internship Listing
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Internships</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
                  <div className="flex items-center">
                    <FileText className="mr-4 text-blue-600" />
                    <span>Software Development Intern</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="mr-2" />
                    <span>3 Applicants</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded">
                  <div className="flex items-center">
                    <FileText className="mr-4 text-blue-600" />
                    <span>Marketing Internship</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="mr-2" />
                    <span>5 Applicants</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
