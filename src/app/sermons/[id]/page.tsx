import { notFound } from 'next/navigation';
import { sermons } from '@/lib/data';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Calendar, Mic, Tag, Link as LinkIcon } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return sermons.map((sermon) => ({
    id: sermon.id,
  }));
}

export default function SermonDetailPage({ params }: Props) {
  const sermon = sermons.find((s) => s.id === params.id);

  if (!sermon) {
    notFound();
  }

  const sermonImage = placeholderImages.find((img) => img.id === sermon.imageId);

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-xl">
              <div className="aspect-video bg-black">
                {sermon.videoUrl && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={sermon.videoUrl}
                    title={sermon.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <CardHeader className="p-6">
                <Badge className="w-fit bg-accent text-accent-foreground mb-2">{sermon.series}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-primary">{sermon.title}</h1>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex items-center space-x-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2"><Mic className="h-4 w-4 text-primary"/><span>{sermon.speaker}</span></div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary"/><span>{sermon.date}</span></div>
                </div>
                
                <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><Book className="text-accent" /> Sermon Notes</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                    <p>{sermon.notes}</p>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4 flex items-center gap-2"><LinkIcon className="text-accent" /> Full Transcript</h2>
                <div className="prose max-w-none dark:prose-invert text-muted-foreground">
                  <p>{sermon.fullText}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1 space-y-8">
            <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle>Scripture References</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        {sermon.scriptures.map(scripture => (
                            <li key={scripture} className="text-lg text-primary hover:text-accent transition-colors">
                                <a href={`https://www.bible.com/search/bible?q=${scripture}`} target="_blank" rel="noopener noreferrer">
                                    {scripture}
                                </a>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            {sermonImage && (
                <Card className="shadow-xl overflow-hidden">
                    <div className="relative h-64 w-full">
                        <Image
                        src={sermonImage.imageUrl}
                        alt={sermon.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={sermonImage.imageHint}
                        />
                    </div>
                </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
