import type { Episode } from '@/lib/index';

export const episodes: Episode[] = [
  {
    id: 'inside-the-pressure-01-weight',
    title: 'Weight',
    number: 1,
    description:
      'Mycah, a Jamaican high-school student, moves through an ordinary school day under extraordinary pressure. Academic demands, financial strain, and emotional numbness slowly build until one violent encounter on his way home changes everything.',
    publishDate: '2026-03-28',
    pages: [
      {
        id: 'episode-01-cover',
        imageUrl: '/comics/episode-01/page-01.png',
        narrative:
          'Episode cover for “Weight.” The opening image frames Mycah as a student already carrying far more than he can say out loud.',
        order: 1,
      },
      {
        id: 'episode-01-page-1',
        imageUrl: '/comics/episode-01/page-02.png',
        narrative:
          'Page 1 follows Mycah through the morning and school day, where money worries and academic pressure shape his inner monologue long before anything visibly goes wrong.',
        order: 2,
      },
      {
        id: 'episode-01-page-2',
        imageUrl: '/comics/episode-01/page-03.png',
        narrative:
          'Page 2 shifts from routine to panic when Mycah is caught near a street shoot-out on his way home.',
        order: 3,
      },
      {
        id: 'episode-01-page-3',
        imageUrl: '/comics/episode-01/page-04.png',
        narrative:
          'Page 3 shows the dangerous turn that follows. This moment is written as a warning sign, not a solution. Later episodes would explore the consequences and the need for real support.',
        order: 4,
      },
    ],
  },
];

export function getEpisodeById(id: string): Episode | undefined {
  return episodes.find((episode) => episode.id === id);
}
