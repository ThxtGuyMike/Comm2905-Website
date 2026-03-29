import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { episodes } from '@/data/episodes';
import { EpisodeCard } from '@/components/EpisodeCard';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Calendar, Hash } from 'lucide-react';

type SortOption = 'date-desc' | 'date-asc' | 'number-asc' | 'number-desc';

export default function Episodes() {
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');

  const sortedEpisodes = useMemo(() => {
    const sorted = [...episodes];
    switch (sortBy) {
      case 'date-desc':
        return sorted.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
      case 'date-asc':
        return sorted.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
      case 'number-asc':
        return sorted.sort((a, b) => a.number - b.number);
      case 'number-desc':
        return sorted.sort((a, b) => b.number - a.number);
      default:
        return sorted;
    }
  }, [sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 35,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Episodes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow the journey through mental health challenges faced by Jamaican youth. Each episode explores real struggles with empathy, authenticity, and hope.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-3 justify-center"
        >
          <Button
            variant={sortBy === 'date-desc' ? 'default' : 'outline'}
            onClick={() => setSortBy('date-desc')}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Newest First
          </Button>
          <Button
            variant={sortBy === 'date-asc' ? 'default' : 'outline'}
            onClick={() => setSortBy('date-asc')}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Oldest First
          </Button>
          <Button
            variant={sortBy === 'number-asc' ? 'default' : 'outline'}
            onClick={() => setSortBy('number-asc')}
            className="gap-2"
          >
            <Hash className="w-4 h-4" />
            Episode 1-N
          </Button>
          <Button
            variant={sortBy === 'number-desc' ? 'default' : 'outline'}
            onClick={() => setSortBy('number-desc')}
            className="gap-2"
          >
            <Hash className="w-4 h-4" />
            Episode N-1
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sortedEpisodes.map((episode) => (
            <motion.div key={episode.id} variants={itemVariants}>
              <EpisodeCard episode={episode} />
            </motion.div>
          ))}
        </motion.div>

        {sortedEpisodes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No episodes available yet. Check back soon!
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
