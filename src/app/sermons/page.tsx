import { sermons } from '@/lib/data';
import { SermonCard } from './sermon-card';
import { Input } from '@/components/ui/input';
import { BookOpen } from 'lucide-react';

export default function SermonsPage() {
  // In a real app, you would fetch and filter data based on search params
  const allSermons = sermons;

  return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground p-4 rounded-full mb-4">
            <BookOpen className="h-10 w-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Sermon Archive</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of past sermons. Grow in your faith and understanding of God's Word.
          </p>
        </div>

        <div className="mb-12 max-w-lg mx-auto">
          <Input
            type="search"
            placeholder="Search sermons by title, speaker, or topic..."
            className="w-full text-base"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allSermons.map((sermon) => (
            <SermonCard key={sermon.id} sermon={sermon} />
          ))}
        </div>
      </div>
    </>
  );
}
