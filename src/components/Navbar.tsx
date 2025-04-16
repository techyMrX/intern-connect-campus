
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">InternConnect</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/internships")}
              className="text-gray-600 hover:text-gray-900"
            >
              Browse Internships
            </Button>
            <Button
              variant="ghost" 
              onClick={() => navigate("/about")}
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
