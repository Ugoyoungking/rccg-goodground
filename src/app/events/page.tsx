'use client';

import { useState } from 'react';
import Image from 'next/image';
import { add, format, isSameDay } from 'date-fns';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { events as allEvents } from '@/lib/data';
import { placeholderImages } from '@/lib/placeholder-images';

type ChurchEvent = typeof allEvents[0] & { eventDate: Date };

// Process events to have a Date object
const processedEvents: ChurchEvent[] = allEvents.map(event => ({
  ...event,
  eventDate: new Date(event.date),
}));

export default function EventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDayEvents = date
    ? processedEvents.filter(event => isSameDay(event.eventDate, date))
    : [];
    
  const futureEvents = processedEvents
    .filter(event => event.eventDate >= new Date() && (date ? !isSameDay(event.eventDate, date) : true))
    .sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime())
    .slice(0, 5);
  
  const displayEvents = selectedDayEvents.length > 0 ? selectedDayEvents : futureEvents;
  const heading = selectedDayEvents.length > 0 
    ? `Events for ${format(date!, 'MMMM d, yyyy')}`
    : "Upcoming Events";


  return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Church Events</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay up-to-date with all our upcoming programs, services, and community gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <Card className="lg:col-span-1 flex justify-center items-start p-2 shadow-lg h-min">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="p-0"
              modifiers={{
                events: processedEvents.map(e => e.eventDate)
              }}
              modifiersStyles={{
                events: {
                    color: 'hsl(var(--accent-foreground))',
                    backgroundColor: 'hsl(var(--accent))'
                }
              }}
            />
          </Card>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-primary mb-8">{heading}</h2>
            {displayEvents.length > 0 ? (
              <div className="space-y-8">
                {displayEvents.map((event) => {
                  const eventImage = placeholderImages.find(img => img.id === event.imageId);
                  return (
                    <Card key={event.id} className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative h-48 md:h-full md:col-span-1">
                          {eventImage && (
                            <Image
                              src={eventImage.imageUrl}
                              alt={event.title}
                              layout="fill"
                              objectFit="cover"
                              data-ai-hint={eventImage.imageHint}
                            />
                          )}
                        </div>
                        <div className="md:col-span-2">
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit mb-2">{event.type}</Badge>
                            <CardTitle>{event.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2 text-muted-foreground">
                              <p className="flex items-center gap-2">
                                <CalendarIcon className="h-4 w-4 text-primary" />
                                <span>{format(event.eventDate, 'EEEE, MMMM d, yyyy')}</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>{event.time}</span>
                              </p>
                              <p className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>{event.location}</span>
                              </p>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            ) : (
              <Card className="flex flex-col items-center justify-center p-12 text-center shadow-lg">
                <CalendarIcon className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold">No Events Scheduled</h3>
                <p className="text-muted-foreground mt-2">
                  There are no events scheduled for this day. Check back soon for new events!
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
