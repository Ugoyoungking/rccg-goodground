'use server';
/**
 * @fileOverview AI-powered tool that automatically generates summaries and excerpts for uploaded sermons.
 *
 * - generateAiSermonSummary - A function that generates a summary and excerpt of a sermon using AI.
 * - AiSermonSummaryInput - The input type for the generateAiSermonSummary function.
 * - AiSermonSummaryOutput - The return type for the generateAiSermonSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiSermonSummaryInputSchema = z.object({
  sermonText: z.string().describe('The text content of the sermon.'),
});
export type AiSermonSummaryInput = z.infer<typeof AiSermonSummaryInputSchema>;

const AiSermonSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the sermon.'),
  excerpt: z.string().describe('A short excerpt highlighting a key point from the sermon.'),
});
export type AiSermonSummaryOutput = z.infer<typeof AiSermonSummaryOutputSchema>;

export async function generateAiSermonSummary(input: AiSermonSummaryInput): Promise<AiSermonSummaryOutput> {
  return aiSermonSummaryFlow(input);
}

const aiSermonSummaryPrompt = ai.definePrompt({
  name: 'aiSermonSummaryPrompt',
  input: {schema: AiSermonSummaryInputSchema},
  output: {schema: AiSermonSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes sermons. Please provide a concise summary and a key excerpt from the following sermon text:\n\n{{{sermonText}}}`, 
});

const aiSermonSummaryFlow = ai.defineFlow(
  {
    name: 'aiSermonSummaryFlow',
    inputSchema: AiSermonSummaryInputSchema,
    outputSchema: AiSermonSummaryOutputSchema,
  },
  async input => {
    const {output} = await aiSermonSummaryPrompt(input);
    return output!;
  }
);
