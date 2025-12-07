import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { sermons as sermonData } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

type Sermon = typeof sermonData[0];

interface SermonCardProps {
  sermon: Sermon;
}

export function SermonCard({ sermon }: SermonCardProps) {
  const sermonImage = placeholderImages.find((img) => img.id === sermon.imageId);

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <Link href={`/sermons/${sermon.id}`} className="block">
        <div className="relative h-56 w-full">
          {sermonImage ? (
            <Image
              src={sermonImage.imageUrl}
              alt={sermon.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={sermonImage.imageHint}
            />
          ) : (
            <div className="w-full h-full bg-secondary" />
          )}
          <div className="absolute top-2 left-2">
            <Badge className="bg-accent text-accent-foreground">{sermon.series}</Badge>
          </div>
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl">
          <Link href={`/sermons/${sermon.id}`} className="hover:text-primary transition-colors">
            {sermon.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">by {sermon.speaker}</p>
        <p className="text-sm text-muted-foreground">{sermon.date}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="secondary" className="w-full">
          <Link href={`/sermons/${sermon.id}`}>
            Watch or Read <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
