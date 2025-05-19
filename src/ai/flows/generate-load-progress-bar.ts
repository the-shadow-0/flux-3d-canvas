// src/ai/flows/generate-load-progress-bar.ts
'use server';

/**
 * @fileOverview Generates a real-time GSAP-powered progress bar for model loading using generative AI.
 *
 * - generateLoadProgressBar - A function that generates the progress bar.
 * - GenerateLoadProgressBarInput - The input type for the generateLoadProgressBar function.
 * - GenerateLoadProgressBarOutput - The return type for the generateLoadProgressBar function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLoadProgressBarInputSchema = z.object({
  modelName: z.string().describe('The name of the 3D model being loaded.'),
  loadPercentage: z.number().min(0).max(100).describe('The current percentage of the model loaded (0-100).'),
});

export type GenerateLoadProgressBarInput = z.infer<typeof GenerateLoadProgressBarInputSchema>;

const GenerateLoadProgressBarOutputSchema = z.object({
  progressBarDescription: z.string().describe('A real-time GSAP-powered progress bar description that visually enhances the loading experience and accurately reflects the completion status.'),
});

export type GenerateLoadProgressBarOutput = z.infer<typeof GenerateLoadProgressBarOutputSchema>;

export async function generateLoadProgressBar(input: GenerateLoadProgressBarInput): Promise<GenerateLoadProgressBarOutput> {
  return generateLoadProgressBarFlow(input);
}

const generateLoadProgressBarPrompt = ai.definePrompt({
  name: 'generateLoadProgressBarPrompt',
  input: {schema: GenerateLoadProgressBarInputSchema},
  output: {schema: GenerateLoadProgressBarOutputSchema},
  prompt: `You are an AI assistant that generates dynamic and visually appealing progress bar descriptions for 3D model loading.

  The user is loading a 3D model named {{{modelName}}}. The current loading percentage is {{{loadPercentage}}}%.

  Create a short, creative, and engaging description for a GSAP-powered progress bar that reflects the current loading state.
  Focus on enhancing the user experience and providing a clear indication of the loading progress.
  The progress bar description should be suitable for display in a glassmorphic UI overlay with neon glow effects.
  The description should be 1-2 sentences long.

  Example output for model "SpaceShip" at 25%:
  { "progressBarDescription": "Charging hyperdrive... 25% complete. Preparing for interstellar jump!" }

  Example output for model "Cityscape" at 75%:
  { "progressBarDescription": "Constructing the metropolis... 75% of skyscrapers are now in place!" }

  Current loading status:
  Model Name: {{{modelName}}}
  Load Percentage: {{{loadPercentage}}}%
  `,
});

const generateLoadProgressBarFlow = ai.defineFlow(
  {
    name: 'generateLoadProgressBarFlow',
    inputSchema: GenerateLoadProgressBarInputSchema,
    outputSchema: GenerateLoadProgressBarOutputSchema,
  },
  async input => {
    const {output} = await generateLoadProgressBarPrompt(input);
    return output!;
  }
);
