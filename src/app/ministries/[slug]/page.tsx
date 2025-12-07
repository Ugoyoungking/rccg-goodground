import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ministries } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
    params: { slug: string };
};

export async function generateStaticParams() {
    return ministries.map((ministry) => ({
        slug: ministry.slug,
    }));
}

export default function MinistryDetailPage({ params }: Props) {
    const ministry = ministries.find((m) => m.slug === params.slug);

    if (!ministry) {
        notFound();
    }

    const ministryImage = placeholderImages.find(img => img.id === ministry.imageId);
    
    // Dummy data for ministry details
    const leader = "John Smith";
    const meetingTime = "Every 2nd Saturday, 10:00 AM";
    const location = "Fellowship Hall";

    return (
        <div className="bg-secondary">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="mb-8">
                    <Button asChild variant="outline">
                        <Link href="/ministries">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Ministries
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <Card className="shadow-xl">
                            <CardHeader>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary/10 p-4 rounded-full">{ministry.icon}</div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-primary">{ministry.name}</h1>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
                                {ministryImage && (
                                    <Image src={ministryImage.imageUrl} alt={ministry.name} fill objectFit="cover" data-ai-hint={ministryImage.imageHint} />
                                )}
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Our Purpose</h2>
                                <p className="text-lg text-muted-foreground mb-8">{ministry.description} We aim to foster a strong community through various activities and spiritual growth opportunities.</p>

                                <h2 className="text-2xl font-bold mb-4">What to Expect</h2>
                                <div className="prose prose-lg max-w-none dark:prose-invert text-muted-foreground">
                                    <p>Our gatherings are a time of fellowship, study, and prayer. Whether it's a deep dive into scripture, a service project in the community, or simply sharing a meal together, you'll find a welcoming and supportive group of people. We encourage open discussion and aim to build each other up in faith and life. All are welcome, regardless of where you are on your spiritual journey.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle>Ministry Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground">
                                <div className="flex items-center gap-3">
                                    <User className="h-5 w-5 text-primary" />
                                    <div><span className="font-semibold text-foreground">Leader:</span> {leader}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-5 w-5 text-primary" />
                                    <div><span className="font-semibold text-foreground">When:</span> {meetingTime}</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <div><span className="font-semibold text-foreground">Where:</span> {location}</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl bg-primary text-primary-foreground text-center p-8">
                           <CardTitle className="text-2xl text-white">Get Involved!</CardTitle>
                           <p className="mt-4 mb-6 text-primary-foreground/80">Ready to join us? We'd love to have you. Click below to get in touch with the ministry leader.</p>
                           <Button variant="secondary" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                               <Link href="/contact">Contact Us</Link>
                           </Button>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
