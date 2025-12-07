'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const prayerFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
    request: z.string().min(10, { message: 'Prayer request must be at least 10 characters.' }),
    share: z.enum(['public', 'private'], { required_error: 'Please select a sharing option.' }),
});


export default function ContactPage() {
  const { toast } = useToast();
  const prayerImage = placeholderImages.find(img => img.id === 'contact-prayer');

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const prayerForm = useForm<z.infer<typeof prayerFormSchema>>({
    resolver: zodResolver(prayerFormSchema),
    defaultValues: {
        name: '',
        request: '',
        share: 'private',
    },
  });

  function onContactSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });
    contactForm.reset();
  }

  function onPrayerSubmit(values: z.infer<typeof prayerFormSchema>) {
    console.log(values);
    toast({
      title: 'Prayer Request Received',
      description: 'Our prayer team will be lifting you up. You are not alone.',
    });
    prayerForm.reset();
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have a question, a comment, or a prayer need, please don't hesitate to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <Card>
                <CardHeader><CardTitle className="flex items-center gap-3"><MapPin className="text-accent"/> Location</CardTitle></CardHeader>
                <CardContent><p>123 Church Street, Faith City, 12345</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="flex items-center gap-3"><Phone className="text-accent"/> Call Us</CardTitle></CardHeader>
                <CardContent><p>(123) 456-7890</p></CardContent>
            </Card>
            <Card>
                <CardHeader><CardTitle className="flex items-center gap-3"><Mail className="text-accent"/> Email Us</CardTitle></CardHeader>
                <CardContent><p>contact@rccg.org</p></CardContent>
            </Card>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Card className="p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Send a Message</h2>
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                <FormField
                  control={contactForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Question about service times" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </Form>
          </Card>

          <Card className="p-8 shadow-lg flex flex-col">
            <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6">
                {prayerImage && <Image src={prayerImage.imageUrl} alt={prayerImage.description} layout="fill" objectFit="cover" data-ai-hint={prayerImage.imageHint}/>}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-3xl font-bold text-white text-center">Need Prayer?</h2>
                </div>
            </div>
            <Form {...prayerForm}>
              <form onSubmit={prayerForm.handleSubmit(onPrayerSubmit)} className="space-y-6">
              <FormField
                  control={prayerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John D." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={prayerForm.control}
                  name="request"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prayer Request</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Share your prayer request with us..." className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={prayerForm.control}
                  name="share"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>How would you like to share this?</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="private" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Share with prayer team only (Private)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="public" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Share with church community (Public)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Submit Request</Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </>
  );
}
