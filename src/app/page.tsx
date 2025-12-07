import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  Church,
  Clock,
  HeartHandshake,
  Mail,
  Music,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { placeholderImages } from '@/lib/placeholder-images';
import { sermons, events, ministries } from '@/lib/data.tsx';

export default function Home() {
  const heroImage = placeholderImages.find((img) => img.id === 'hero-community');
  const recentSermon = sermons[0];
  const sermonImage = placeholderImages.find((img) => img.id === recentSermon.imageId);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[60vh] md:h-[80vh]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Welcome to Our Church Family
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl">
              A place of hope, faith, and community. Join us to worship and grow together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/sermons">Watch a Sermon</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
                <Link href="/contact">Plan Your Visit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section id="services" className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Join Us for Worship</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We gather together to celebrate, learn, and support one another. We would love for you to join us.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Sunday Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <Clock className="mx-auto h-12 w-12 text-primary mb-4" />
                  <p className="text-lg font-semibold">10:00 AM - 12:00 PM</p>
                  <p className="text-muted-foreground">In-person & Online</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Midweek Bible Study</CardTitle>
                </CardHeader>
                <CardContent>
                  <Clock className="mx-auto h-12 w-12 text-primary mb-4" />
                  <p className="text-lg font-semibold">Wednesdays at 7:00 PM</p>
                  <p className="text-muted-foreground">Online via Zoom</p>
                </CardContent>
              </Card>
              <Card className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-accent">Youth Fellowship</CardTitle>
                </CardHeader>
                <CardContent>
                  <Clock className="mx-auto h-12 w-12 text-primary mb-4" />
                  <p className="text-lg font-semibold">Fridays at 6:30 PM</p>
                  <p className="text-muted-foreground">Church Hall</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Ministries */}
        <section id="ministries" className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Ministries</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Serving God and our community through various dedicated groups. Find where you belong.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {ministries.map((ministry) => (
                <Card key={ministry.name} className="flex flex-col items-center text-center p-6 shadow-lg hover:translate-y-[-5px] transition-transform duration-300">
                  {ministry.icon}
                  <h3 className="mt-4 text-xl font-bold">{ministry.name}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{ministry.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events & Recent Sermon */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Upcoming Events</h2>
              <div className="space-y-8">
                {events.slice(0, 3).map((event) => {
                  const eventImage = placeholderImages.find((img) => img.id === event.imageId);
                  return (
                    <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                      {eventImage && (
                         <div className="md:w-1/3 h-48 md:h-auto relative">
                         <Image
                           src={eventImage.imageUrl}
                           alt={event.title}
                           fill
                           className="object-cover"
                           data-ai-hint={eventImage.imageHint}
                         />
                       </div>
                      )}
                      <div className="p-6 flex flex-col justify-between md:w-2/3">
                        <div>
                          <Badge variant="secondary" className="mb-2">{event.type}</Badge>
                          <h3 className="text-xl font-bold">{event.title}</h3>
                          <p className="text-muted-foreground mt-1 flex items-center gap-2"><Calendar className="h-4 w-4"/> {event.date}</p>
                          <p className="text-muted-foreground mt-1 flex items-center gap-2"><Clock className="h-4 w-4"/> {event.time}</p>
                        </div>
                        <Button asChild variant="link" className="self-start px-0 mt-4">
                          <Link href="/events">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                      </div>
                    </Card>
                  )
                })}
              </div>
              <Button asChild className="mt-8">
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">From the Pulpit</h2>
              <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                {sermonImage && (
                  <div className="h-56 relative">
                  <Image
                    src={sermonImage.imageUrl}
                    alt={recentSermon.title}
                    fill
                    className="object-cover"
                    data-ai-hint={sermonImage.imageHint}
                  />
                  </div>
                )}
                <CardContent className="p-6">
                  <Badge className="bg-accent text-accent-foreground">{recentSermon.series}</Badge>
                  <h3 className="mt-4 text-xl font-bold">{recentSermon.title}</h3>
                  <p className="text-muted-foreground mt-2">by {recentSermon.speaker}</p>
                  <p className="text-muted-foreground text-sm">{recentSermon.date}</p>
                  <Button asChild className="mt-6 w-full">
                    <Link href={`/sermons/${recentSermon.id}`}>Watch Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action - Giving & Prayer */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Get Involved</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Your support, through giving and prayer, helps us spread the message of love and hope.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/giving">Give Online</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
                        <Link href="/contact">Request Prayer</Link>
                    </Button>
                </div>
            </div>
        </section>

      </main>
    </div>
  );
}
