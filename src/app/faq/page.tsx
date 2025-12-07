import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { User, Rocket, Code, Heart } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: 'Who developed this website?',
    answer: "This website was built by Ugochukwu, a passionate and God-fearing Web Developer and Graphic Designer dedicated to crafting modern, responsive, and user-focused digital experiences.",
    icon: <User className="h-5 w-5 text-primary" />
  },
  {
    question: 'What is his mission?',
    answer: "He takes pride in transforming creative ideas into functional, visually appealing, and high-performing websites that don't just look great — they make an impact. Every project he builds reflects his commitment to excellence, creativity, and faith-driven purpose.",
    icon: <Rocket className="h-5 w-5 text-primary" />
  },
  {
    question: 'What technologies does he use?',
    answer: "His journey began with HTML and CSS, and over time, he's mastered technologies like JavaScript, React, and Node.js. This specific application is built with a modern tech stack, including Next.js for the React framework, Tailwind CSS for styling, and ShadCN for the UI components.",
    icon: <Code className="h-5 w-5 text-primary" />
  },
  {
    question: 'What drives him?',
    answer: "Every project he builds reflects his commitment to excellence, creativity, and a faith-driven purpose.",
    icon: <Heart className="h-5 w-5 text-primary" />
  },
];

export default function FaqPage() {
  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 flex flex-col items-center">
            <Image 
                src="https://images.unsplash.com/photo-1621624666561-84d00107001dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtYW4lMjBzbWlsaW5nfGVufDB8fHx8MTc2NTA0NDMyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ugochukwu"
                width={150}
                height={150}
                className="rounded-full mb-4 border-4 border-primary"
                data-ai-hint="man smiling"
            />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">About the Developer</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the developer who brought this website to life.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>Ugochukwu - Web Developer & Designer</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index}>
                  <AccordionTrigger className="text-lg text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      {faq.icon}
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pl-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="https://ugoyoungking.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                  View My Portfolio
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
