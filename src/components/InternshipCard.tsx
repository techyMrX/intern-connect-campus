
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  onApply: () => void;
}

export default function InternshipCard({
  title,
  company,
  location,
  type,
  duration,
  stipend,
  onApply,
}: InternshipCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <p className="text-gray-600">{company}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{location}</Badge>
            <Badge variant="secondary">{type}</Badge>
            <Badge variant="secondary">{duration}</Badge>
          </div>
          <p className="text-lg font-medium text-gray-900">
            Stipend: {stipend}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onApply} className="w-full bg-blue-600 hover:bg-blue-700">
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
}
