import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ministries } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function MinistriesPage() {
    const heroImage = placeholderImages.find(img => img.id === 'ministries-hero');

    return (
        <div className="bg-background">
             {/* Hero Section */}
             <section className="relative h-[50vh] bg-primary/20">
                {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} fill objectFit="cover" className="opacity-20" data-ai-hint={heroImage.imageHint} />}
                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-primary">Our Ministries</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl">
                        Serving God and our community through various dedicated groups. Find where you belong.
                    </p>
                </div>
            </section>

            {/* Ministries Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {ministries.map((ministry) => {
                            const ministryImage = placeholderImages.find(img => img.id === ministry.imageId);
                            return (
                                <Card key={ministry.name} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                    {ministryImage && (
                                        <div className="relative h-48 w-full">
                                            <Image src={ministryImage.imageUrl} alt={ministry.name} fill objectFit="cover" data-ai-hint={ministryImage.imageHint} />
                                        </div>
                                    )}
                                    <CardHeader className="flex-row items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg mt-1">{ministry.icon}</div>
                                        <div>
                                            <CardTitle>{ministry.name}</CardTitle>
                                            <CardDescription className="mt-2 text-sm line-clamp-3">{ministry.description}</CardDescription>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="flex-grow"></CardContent>
                                    <div className="p-4 pt-0">
                                        <Button asChild className="w-full" variant="secondary">
                                            <Link href={`/ministries/${ministry.slug}`}>
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            {/* Call to Action */}
            <section className="bg-primary text-primary-foreground py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Find Your Place to Serve</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Ready to use your gifts to make a difference? We have a place for you. Explore our ministries and get involved today.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Get Involved</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
