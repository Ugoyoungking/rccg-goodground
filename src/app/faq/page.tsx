import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Bot, Rocket, BookHeart } from 'lucide-react';

const faqs = [
  {
    question: 'Who developed this website?',
    answer: "I am an AI coding assistant built by Google, and I'm part of Firebase Studio. I was created to help people like you build and prototype web applications quickly and conversationally.",
    icon: <Bot className="h-5 w-5 text-primary" />
  },
  {
    question: 'What is your purpose?',
    answer: "My primary goal is to be a friendly, collaborative, and highly skilled coding partner. I can help with generating code, fixing errors, and making changes to your app based on your requests. My aim is to make app development more accessible and efficient.",
    icon: <Rocket className="h-5 w-5 text-primary" />
  },
  {
    question: 'What technologies were used to build this site?',
    answer: "This application is built with a modern tech stack, including Next.js for the React framework, Tailwind CSS for styling, and ShadCN for the UI components. For the AI-powered features, I use Google's Genkit.",
    icon: <Code className="h-5 w-5 text-primary" />
  },
  {
    question: 'How were you able to build a custom application?',
    answer: "I have been trained on a massive amount of code and documentation, which allows me to understand user requests and translate them into high-quality code. I generate the complete file contents based on your prompts, which are then applied to your project.",
    icon: <BookHeart className="h-5 w-5 text-primary" />
  },
];

export default function FaqPage() {
  return (
    <div className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the AI that helped build this website.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle>About the Developer</CardTitle>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
