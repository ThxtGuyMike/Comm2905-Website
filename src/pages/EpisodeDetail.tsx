import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Hash, Download } from 'lucide-react';
import { getEpisodeById, episodes } from '@/data/episodes';
import { ComicReader } from '@/components/ComicReader';
import { ROUTE_PATHS, formatDate, getEpisodeRoute } from '@/lib/index';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function EpisodeDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to={ROUTE_PATHS.EPISODES} replace />;
  }

  const episode = getEpisodeById(id);

  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Episode Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The episode you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to={ROUTE_PATHS.EPISODES}>Browse All Episodes</Link>
          </Button>
        </Card>
      </div>
    );
  }

  const currentIndex = episodes.findIndex((item) => item.id === episode.id);
  const previousEpisode = currentIndex > 0 ? episodes[currentIndex - 1] : null;
  const nextEpisode = currentIndex < episodes.length - 1 ? episodes[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto max-w-5xl px-4 py-10 sm:py-12"
      >
        <div className="mb-8">
          <Link
            to={ROUTE_PATHS.EPISODES}
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Episodes
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-lg px-4 py-1">
              <Hash className="w-4 h-4 mr-1" />
              Episode {episode.number}
            </Badge>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(episode.publishDate)}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{episode.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {episode.description}
              </p>
            </div>

            <Button asChild variant="outline" className="w-full md:w-auto">
              <a
                href="/Inside_The_Pressure_Episode1_Weight_72064fdad8a54954b94db71b23819a94.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Open original PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <ComicReader pages={episode.pages} />
        </div>

        <Card className="p-8 mb-8 bg-accent/10 border-accent/20">
          <h2 className="text-2xl font-semibold mb-4">About This Episode</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            “Weight” introduces Mycah at a point where academic stress, money worries, and emotional exhaustion have already begun shaping how he sees himself. The ending is intended to signal risk, vulnerability, and the false appeal of escape, not a healthy solution.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Key Themes:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Academic pressure and burnout</li>
                <li>Financial instability at home</li>
                <li>Exposure to community violence</li>
                <li>Risky coping responses to distress</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                If you or someone you know is struggling with mental health challenges, help is available.
              </p>
              <Button asChild variant="default">
                <Link to={ROUTE_PATHS.RESOURCES}>Find Support Resources</Link>
              </Button>
            </div>
          </div>
        </Card>

        <div className="flex justify-between items-center gap-4">
          <Button variant="outline" disabled={!previousEpisode} asChild={!!previousEpisode} className="flex-1">
            {previousEpisode ? (
              <Link to={getEpisodeRoute(previousEpisode.id)}>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous Episode
              </Link>
            ) : (
              <span>
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous Episode
              </span>
            )}
          </Button>

          <Button variant="outline" disabled={!nextEpisode} asChild={!!nextEpisode} className="flex-1">
            {nextEpisode ? (
              <Link to={getEpisodeRoute(nextEpisode.id)}>
                Next Episode
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            ) : (
              <span>
                Next Episode
                <ChevronRight className="w-4 h-4 ml-2" />
              </span>
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
