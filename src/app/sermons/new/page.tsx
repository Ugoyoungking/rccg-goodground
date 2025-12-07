import SermonGenerationForm from "./sermon-generation-form";
import { Bot } from "lucide-react";

export default function NewSermonPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="inline-block bg-primary text-primary-foreground p-4 rounded-full mb-4">
          <Bot className="h-10 w-10" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">AI-Powered Content Tool</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Paste your sermon or blog post text below to automatically generate a concise summary and a key excerpt. This tool helps improve engagement and searchability.
        </p>
      </div>

      <SermonGenerationForm />
      
    </div>
  );
}
