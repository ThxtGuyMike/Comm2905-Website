import { useEffect, useMemo, useState } from 'react';

interface FeedbackSectionProps {
  episodeId: string;
  episodeTitle: string;
}

const moods = [
  { value: 'seen', label: 'I felt seen' },
  { value: 'heavy', label: 'It felt heavy' },
  { value: 'reflective', label: 'It made me reflect' },
  { value: 'more', label: 'I want more episodes' },
];

export function FeedbackSection({ episodeId, episodeTitle }: FeedbackSectionProps) {
  const storageKey = useMemo(() => `inside-pressure-feedback-${episodeId}`, [episodeId]);
  const [name, setName] = useState('');
  const [feeling, setFeeling] = useState('seen');
  const [message, setMessage] = useState('');
  const [topic, setTopic] = useState('');
  const [savedCount, setSavedCount] = useState(0);
  const [status, setStatus] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return;
      const parsed = JSON.parse(saved);
      setSavedCount(Array.isArray(parsed) ? parsed.length : 0);
    } catch {
      setSavedCount(0);
    }
  }, [storageKey]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus('Please add a short response before submitting.');
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
      setSavedCount(next.length);
      setName('');
      setFeeling('seen');
      setMessage('');
      setTopic('');
      setStatus('Thanks — your feedback was saved on this device for the demo.');
    } catch {
      setStatus('Could not save feedback right now.');
    }
  };

  return (
    <section className="mb-10 rounded-2xl border border-green-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <p className="mb-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          Reader Feedback
        </p>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Share your response to {episodeTitle}</h2>
        <p className="mt-3 text-muted-foreground">
          This section is included so readers can respond to the episode, reflect on its themes, and suggest future topics.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Saved responses on this device: <strong>{savedCount}</strong>
        </p>
      </div>

      <form onSubmit={submit} className="grid gap-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium">
            Name (optional)
            <input
              className="rounded-lg border border-border bg-background px-3 py-2"
              placeholder="Anonymous reader"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="grid gap-2 text-sm font-medium">
            Future topic suggestion
            <input
              className="rounded-lg border border-border bg-background px-3 py-2"
              placeholder="Exam stress, grief, social pressure..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </label>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">How did this episode feel to you?</p>
          <div className="flex flex-wrap gap-2">
            {moods.map((mood) => (
              <button
                key={mood.value}
                type="button"
                onClick={() => setFeeling(mood.value)}
                className={`rounded-full border px-4 py-2 text-sm ${
                  feeling === mood.value
                    ? 'border-green-600 bg-green-600 text-white'
                    : 'border-border bg-background text-foreground'
                }`}
              >
                {mood.label}
              </button>
            ))}
          </div>
        </div>

        <label className="grid gap-2 text-sm font-medium">
          Your feedback
          <textarea
            className="min-h-36 rounded-lg border border-border bg-background px-3 py-3"
            placeholder="What stood out to you in Mycah's story?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Demo note: submissions are stored locally in your browser for this class project.
          </p>
          <button
            type="submit"
            className="rounded-lg bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-700"
          >
            Submit feedback
          </button>
        </div>

        {status ? (
          <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            {status}
          </div>
        ) : null}
      </form>
    </section>
  );
}
