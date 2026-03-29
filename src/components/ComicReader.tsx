import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { ComicPage } from '@/lib/index';

interface ComicReaderProps {
  pages: ComicPage[];
}

export function ComicReader({ pages }: ComicReaderProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      pageRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top <= viewportHeight * 0.45 && rect.bottom >= viewportHeight * 0.45) {
          setCurrentPage(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage = (pageIndex: number) => {
    const targetRef = pageRefs.current[pageIndex];
    if (targetRef) {
      const stickyOffset = 110;
      const top = window.scrollY + targetRef.getBoundingClientRect().top - stickyOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="sticky top-16 z-40 mb-6 rounded-2xl border border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-sm">
        <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-muted-foreground">
            Reader view · Page {currentPage + 1} of {pages.length}
          </span>
          <Progress value={scrollProgress} className="h-2 flex-1 sm:max-w-md" />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => currentPage > 0 && scrollToPage(currentPage - 1)}
              disabled={currentPage === 0}
            >
              <ChevronUp className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => currentPage < pages.length - 1 && scrollToPage(currentPage + 1)}
              disabled={currentPage === pages.length - 1}
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {pages.map((page, index) => (
          <motion.div
            key={page.id}
            ref={(el) => {
              pageRefs.current[index] = el;
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mx-auto w-full max-w-5xl"
          >
            <figure className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-xl ring-1 ring-black/5 dark:ring-white/5">
              <div className="bg-black/90 p-2 sm:p-4">
                <img
                  src={page.imageUrl}
                  alt={`Episode page ${page.order}`}
                  className="mx-auto h-auto w-full rounded-xl object-contain"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>

              {page.narrative && (
                <figcaption className="border-t border-border bg-muted/35 px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:px-5">
                  {page.narrative}
                </figcaption>
              )}
            </figure>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {scrollProgress > 20 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full shadow-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
