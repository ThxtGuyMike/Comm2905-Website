
import { useEffect, useMemo, useState } from 'react';
import { MessageSquareHeart, Send, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';

interface FeedbackSectionProps {
  episodeId: string;
  episodeTitle: string;
}

const moods = [
  { value: 'seen', label: 'I felt seen' },
  { value: 'concerned', label: 'It felt heavy' },
  { value: 'hopeful', label: 'It made me reflect' },
  { value: 'curious', label: 'I want more episodes' },
];

export function FeedbackSection({ episodeId, episodeTitle }: FeedbackSectionProps) {
  const storageKey = useMemo(() => `inside-pressure-feedback-${episodeId}`, [episodeId]);
  const { toast } = useToast();

  const [name, setName] = useState('');
  const [feeling, setFeeling] = useState('seen');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('');
  const [feedbackCount, setFeedbackCount] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as Array<unknown>;
        setFeedbackCount(Array.isArray(parsed) ? parsed.length : 0);
      }
    } catch {
      setFeedbackCount(0);
    }
  }, [storageKey]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message.trim()) {
      toast({
        title: 'Add a short response first',
        description: 'Share how the episode landed for you before submitting.',
      });
      return;
    }

    const entry = {
      name: name.trim() || 'Anonymous Reader',
      feeling,
      message: message.trim(),
      topic: topic.trim(),
      createdAt: new Date().toISOString(),
    };

    try {
      const saved = localStorage.getItem(storageKey);
      const parsed = saved ? JSON.parse(saved) : [];
      const next = Array.isArray(parsed) ? [entry, ...parsed] : [entry];
      localStorage.setItem(storageKey, JSON.stringify(next));
      setFeedbackCount(next.length);
      setName('');
      setFeeling('seen');
      setMessage('');
      setTopic('');
      toast({
        title: 'Feedback saved',
        description: 'Thanks for responding to this episode. Your response was saved on this device.',
      });
    } catch {
      toast({
        title: 'Could not save feedback',
        description: 'Try again in a moment.',
      });
    }
  };

  return (
    <Card className="p-6 sm:p-8 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            <MessageSquareHeart className="h-4 w-4" />
            Reader feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Share your response to {episodeTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">
            This section gives readers a way to respond to the themes, suggest future topics, and reflect on how the story connects to student life. It is included as part of the publication’s feedback mechanism.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" />
          <span>{feedbackCount} response{feedbackCount === 1 ? '' : 's'} saved on this device</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="reader-name">Name (optional)</Label>
            <Input
              id="reader-name"
              placeholder="Anonymous reader"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="future-topic">Future topic suggestion</Label>
            <Input
              id="future-topic"
              placeholder="Exam stress, grief, social media pressure..."
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-3">
          <Label>How did this episode feel to you?</Label>
          <div className="flex flex-wrap gap-3">
            {moods.map((mood) => (
              <button
                type="button"
                key={mood.value}
                onClick={() => setFeeling(mood.value)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  feeling === mood.value
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background hover:border-primary/40 hover:bg-primary/5'
                }`}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="episode-feedback">Your feedback</Label>
          <Textarea
            id="episode-feedback"
            placeholder="What stood out to you in Mycah’s story? What should future episodes explore?"
            className="min-h-36 resize-y"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <p className="text-sm text-muted-foreground">
            Responses are stored locally in your browser for this demo site. For a public launch, this section could connect to Google Forms, email, or a hosted database.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Anonymous-friendly</Badge>
            <Badge variant="secondary">Student-centred</Badge>
            <Badge variant="secondary">Topic suggestions welcome</Badge>
          </div>

          <Button type="submit" className="sm:min-w-44">
            <Send className="mr-2 h-4 w-4" />
            Submit feedback
          </Button>
        </div>
      </form>
    </Card>
  );
}
