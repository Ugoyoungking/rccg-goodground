'use server';
/**
 * @fileOverview Generates summaries and excerpts of sermons using AI.
 *
 * - generateSermonSummary - A function that generates a summary of a sermon.
 * - SermonSummaryInput - The input type for the generateSermonSummary function.
 * - SermonSummaryOutput - The return type for the generateSermonSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SermonSummaryInputSchema = z.object({
  sermonText: z.string().describe('The text content of the sermon.'),
});
export type SermonSummaryInput = z.infer<typeof SermonSummaryInputSchema>;

const SermonSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the sermon.'),
  excerpt: z.string().describe('A short excerpt highlighting a key point from the sermon.'),
});
export type SermonSummaryOutput = z.infer<typeof SermonSummaryOutputSchema>;

export async function generateSermonSummary(input: SermonSummaryInput): Promise<SermonSummaryOutput> {
  return sermonSummaryFlow(input);
}

const sermonSummaryPrompt = ai.definePrompt({
  name: 'sermonSummaryPrompt',
  input: {schema: SermonSummaryInputSchema},
  output: {schema: SermonSummaryOutputSchema},
  prompt: `You are an AI assistant that summarizes sermons. Please provide a concise summary and a key excerpt from the following sermon text:\n\n{{{sermonText}}}`,
});

const sermonSummaryFlow = ai.defineFlow(
  {
    name: 'sermonSummaryFlow',
    inputSchema: SermonSummaryInputSchema,
    outputSchema: SermonSummaryOutputSchema,
  },
  async input => {
    const {output} = await sermonSummaryPrompt(input);
    return output!;
  }
);
