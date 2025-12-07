"use client";

import { useFormState, useFormStatus } from "react-dom";
import { handleSermonSubmission, type FormState } from "../actions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Terminal, Quote, BookText, Wand2 } from "lucide-react";
import { useEffect, useRef } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Summary
    </Button>
  );
}

export default function SermonGenerationForm() {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useFormState(handleSermonSubmission, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Sermon Text Input</CardTitle>
          <CardDescription>
            Enter the full text of your sermon below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <Textarea
              name="sermonText"
              placeholder="Paste your sermon text here... The text should be at least 50 characters long."
              className="min-h-[250px] text-base"
              required
            />
            {state?.message && !state.message.startsWith("success") && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
              </Alert>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {(state?.summary || state?.excerpt) && (
        <div className="mt-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Generated Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><BookText className="text-accent" /> Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                        <p>{state.summary}</p>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Quote className="text-accent" /> Key Excerpt</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                        <blockquote className="border-l-4 border-accent pl-4 italic">
                            {state.excerpt}
                        </blockquote>
                    </CardContent>
                </Card>
            </div>
        </div>
      )}
    </div>
  );
}
