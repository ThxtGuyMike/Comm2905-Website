export const ROUTE_PATHS = {
  HOME: '/',
  EPISODES: '/episodes',
  EPISODE_DETAIL: '/episodes/:id',
  ABOUT: '/about',
  RESOURCES: '/resources',
} as const;

export interface ComicPage {
  id: string;
  imageUrl: string;
  narrative?: string;
  order: number;
}

export interface Episode {
  id: string;
  title: string;
  number: number;
  description: string;
  pages: ComicPage[];
  publishDate: string;
}

export interface MentalHealthResource {
  id: string;
  name: string;
  description: string;
  phone?: string;
  email?: string;
  website?: string;
  availability?: string;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getEpisodeRoute(episodeId: string): string {
  return ROUTE_PATHS.EPISODE_DETAIL.replace(':id', episodeId);
}
