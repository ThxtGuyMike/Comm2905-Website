import { Phone, Mail, Globe, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { MentalHealthResource } from "@/lib/index";

export function ResourceCard({ resource }: { resource: MentalHealthResource }) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="text-xl">{resource.name}</CardTitle>
        <CardDescription className="text-base">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {resource.phone && (
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent flex-shrink-0" />
              <a
                href={`tel:${resource.phone}`}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {resource.phone}
              </a>
            </div>
          )}
          {resource.email && (
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent flex-shrink-0" />
              <a
                href={`mailto:${resource.email}`}
                className="text-foreground hover:text-accent transition-colors break-all"
              >
                {resource.email}
              </a>
            </div>
          )}
          {resource.website && (
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-accent flex-shrink-0" />
              <a
                href={resource.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors break-all"
              >
                Visit Website
              </a>
            </div>
          )}
          {resource.availability && (
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              <span className="text-muted-foreground">
                {resource.availability}
              </span>
            </div>
          )}
        </div>
        {resource.phone && (
          <Button
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href={`tel:${resource.phone}`}>Call Now</a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
