'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { placeholderImages } from '@/lib/placeholder-images';
import { DollarSign, Gift, Heart, Users } from 'lucide-react';

const givingFormSchema = z.object({
  amount: z.coerce.number().min(1, { message: 'Amount must be at least $1.' }),
  fund: z.enum(['tithe', 'offering', 'missions'], {
    required_error: 'You need to select a fund.',
  }),
  frequency: z.enum(['one-time', 'weekly', 'monthly']),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export default function GivingPage() {
  const { toast } = useToast();
  const givingImage = placeholderImages.find(img => img.id === 'giving-offering');
  const quickAmounts = [25, 50, 100, 250, 500];

  const form = useForm<z.infer<typeof givingFormSchema>>({
    resolver: zodResolver(givingFormSchema),
    defaultValues: {
      amount: 50,
      fund: 'offering',
      frequency: 'one-time',
      name: '',
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof givingFormSchema>) {
    console.log(values);
    toast({
      title: 'Thank You for Your Generosity!',
      description: `Your ${values.frequency} donation of $${values.amount} to ${values.fund} has been processed.`,
    });
    form.reset();
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Give Generously</CardTitle>
                  <CardDescription className="text-lg">
                    "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." - 2 Corinthians 9:7
                  </CardDescription>
                </CardHeader>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fund"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-base font-semibold">1. Choose a Fund</FormLabel>
                          <FormControl>
                            <Tabs defaultValue={field.value} onValueChange={field.onChange} className="w-full">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="tithe"><Heart className="mr-2 h-4 w-4"/>Tithe</TabsTrigger>
                                    <TabsTrigger value="offering"><Gift className="mr-2 h-4 w-4"/>Offering</TabsTrigger>
                                    <TabsTrigger value="missions"><Users className="mr-2 h-4 w-4"/>Missions</TabsTrigger>
                                </TabsList>
                            </Tabs>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-base font-semibold">2. Enter Amount</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                    <Input type="number" placeholder="50.00" className="pl-10 text-lg" {...field} />
                                </div>
                            </FormControl>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 pt-2">
                                {quickAmounts.map(amt => (
                                    <Button key={amt} type="button" variant="outline" onClick={() => form.setValue('amount', amt)}>
                                        ${amt}
                                    </Button>
                                ))}
                            </div>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="frequency"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-base font-semibold">3. Frequency</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col sm:flex-row gap-4"
                                    >
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <RadioGroupItem value="one-time" className="sr-only" />
                                        </FormControl>
                                        <FormLabel className={`flex items-center justify-center p-4 rounded-md border-2 cursor-pointer transition-colors ${field.value === 'one-time' ? 'border-primary bg-secondary' : 'border-border'}`}>
                                            One-Time
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <RadioGroupItem value="weekly" className="sr-only" />
                                        </FormControl>
                                        <FormLabel className={`flex items-center justify-center p-4 rounded-md border-2 cursor-pointer transition-colors ${field.value === 'weekly' ? 'border-primary bg-secondary' : 'border-border'}`}>
                                            Weekly
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <RadioGroupItem value="monthly" className="sr-only" />
                                        </FormControl>
                                        <FormLabel className={`flex items-center justify-center p-4 rounded-md border-2 cursor-pointer transition-colors ${field.value === 'monthly' ? 'border-primary bg-secondary' : 'border-border'}`}>
                                            Monthly
                                        </FormLabel>
                                    </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                           <FormLabel>Full Name</FormLabel>
                           <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                           <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
                           <FormMessage />
                        </FormItem>
                    )} />
                    
                    <Button type="submit" className="w-full text-lg py-6 bg-accent text-accent-foreground hover:bg-accent/90">
                      Give ${form.watch('amount') || 0}
                    </Button>
                  </form>
                </Form>
              </div>
              <div className="hidden lg:block relative">
                {givingImage && <Image src={givingImage.imageUrl} alt={givingImage.description} layout="fill" objectFit="cover" className="rounded-r-lg" data-ai-hint={givingImage.imageHint}/>}
                <div className="absolute inset-0 bg-primary/70 rounded-r-lg"></div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
