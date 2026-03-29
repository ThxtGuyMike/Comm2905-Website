import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Episode, formatDate, getEpisodeRoute } from '@/lib/index';

interface EpisodeCardProps {
  episode: Episode;
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const thumbnailUrl = episode.pages[0]?.imageUrl || '';
  const episodeRoute = getEpisodeRoute(episode.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 300, damping: 35 }}
    >
      <Card className="group overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={thumbnailUrl}
            alt={`${episode.title} thumbnail`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1">
              Episode {episode.number}
            </Badge>
          </div>
        </div>

        <CardHeader className="flex-grow">
          <CardTitle className="text-xl font-semibold line-clamp-2">
            {episode.title}
          </CardTitle>
          <CardDescription className="line-clamp-3 text-muted-foreground">
            {episode.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(episode.publishDate)}</span>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            asChild
            className="w-full group/btn transition-all duration-200"
          >
            <Link to={episodeRoute}>
              Read Episode
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
