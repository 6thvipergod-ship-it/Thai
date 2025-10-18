'use server';

/**
 * @fileOverview Implements an adaptive UX animation orchestration tool.
 *
 * - `adaptiveUxAnimation`: Orchestrates dynamic adjustments to website animations and visual elements based on performance metrics.
 * - `AdaptiveUxAnimationInput`: Defines the input schema for the adaptive UX animation flow.
 * - `AdaptiveUxAnimationOutput`: Defines the output schema for the adaptive UX animation flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptiveUxAnimationInputSchema = z.object({
  heroSectionMetrics: z.object({
    loadingTime: z.number().describe('Loading time of the Hero section in milliseconds.'),
    responsiveness: z.number().describe('Responsiveness score of the Hero section (0-100).'),
    userEngagement: z.number().describe('User engagement score of the Hero section (0-100).'),
  }).describe('Performance metrics for the Hero section.'),
  menuSectionMetrics: z.object({
    loadingTime: z.number().describe('Loading time of the Menu section in milliseconds.'),
    responsiveness: z.number().describe('Responsiveness score of the Menu section (0-100).'),
    userEngagement: z.number().describe('User engagement score of the Menu section (0-100).'),
  }).describe('Performance metrics for the Menu section.'),
  gallerySectionMetrics: z.object({
    loadingTime: z.number().describe('Loading time of the Gallery section in milliseconds.'),
    responsiveness: z.number().describe('Responsiveness score of the Gallery section (0-100).'),
    userEngagement: z.number().describe('User engagement score of the Gallery section (0-100).'),
  }).describe('Performance metrics for the Gallery section.'),
  aboutUsSectionMetrics: z.object({
    loadingTime: z.number().describe('Loading time of the About Us section in milliseconds.'),
    responsiveness: z.number().describe('Responsiveness score of the About Us section (0-100).'),
    userEngagement: z.number().describe('User engagement score of the About Us section (0-100).'),
  }).describe('Performance metrics for the About Us section.'),
  contactUsSectionMetrics: z.object({
    loadingTime: z.number().describe('Loading time of the Contact Us section in milliseconds.'),
    responsiveness: z.number().describe('Responsiveness score of the Contact Us section (0-100).'),
    userEngagement: z.number().describe('User engagement score of the Contact Us section (0-100).'),
  }).describe('Performance metrics for the Contact Us section.'),
}).describe('Input data containing performance metrics for each website section.');

export type AdaptiveUxAnimationInput = z.infer<typeof AdaptiveUxAnimationInputSchema>;

const AdaptiveUxAnimationOutputSchema = z.object({
  heroSectionAdjustments: z.string().describe('Recommended adjustments for the Hero section animations and visual elements.'),
  menuSectionAdjustments: z.string().describe('Recommended adjustments for the Menu section animations and visual elements.'),
  gallerySectionAdjustments: z.string().describe('Recommended adjustments for the Gallery section animations and visual elements.'),
  aboutUsSectionAdjustments: z.string().describe('Recommended adjustments for the About Us section animations and visual elements.'),
  contactUsSectionAdjustments: z.string().describe('Recommended adjustments for the Contact Us section animations and visual elements.'),
}).describe('Output data containing recommended adjustments for each website section.');

export type AdaptiveUxAnimationOutput = z.infer<typeof AdaptiveUxAnimationOutputSchema>;

export async function adaptiveUxAnimation(input: AdaptiveUxAnimationInput): Promise<AdaptiveUxAnimationOutput> {
  return adaptiveUxAnimationFlow(input);
}

const adaptiveUxAnimationPrompt = ai.definePrompt({
  name: 'adaptiveUxAnimationPrompt',
  input: {schema: AdaptiveUxAnimationInputSchema},
  output: {schema: AdaptiveUxAnimationOutputSchema},
  prompt: `You are an expert in website UX and animation optimization. Analyze the performance metrics for each website section (Hero, Menu, Gallery, About Us, Contact Us) and recommend adjustments to animations and visual elements to improve user engagement and overall site performance.

Consider the "leaf animation" UX element as a template for engaging animations.

Hero Section Metrics:
Loading Time: {{{heroSectionMetrics.loadingTime}}}ms
Responsiveness: {{{heroSectionMetrics.responsiveness}}}
User Engagement: {{{heroSectionMetrics.userEngagement}}}

Menu Section Metrics:
Loading Time: {{{menuSectionMetrics.loadingTime}}}ms
Responsiveness: {{{menuSectionMetrics.responsiveness}}}
User Engagement: {{{menuSectionMetrics.userEngagement}}}

Gallery Section Metrics:
Loading Time: {{{gallerySectionMetrics.loadingTime}}}ms
Responsiveness: {{{gallerySectionMetrics.responsiveness}}}
User Engagement: {{{gallerySectionMetrics.userEngagement}}}

About Us Section Metrics:
Loading Time: {{{aboutUsSectionMetrics.loadingTime}}}ms
Responsiveness: {{{aboutUsSectionMetrics.responsiveness}}}
User Engagement: {{{aboutUsSectionMetrics.userEngagement}}}

Contact Us Section Metrics:
Loading Time: {{{contactUsSectionMetrics.loadingTime}}}ms
Responsiveness: {{{contactUsSectionMetrics.responsiveness}}}
User Engagement: {{{contactUsSectionMetrics.userEngagement}}}


Provide specific recommendations for each section, focusing on how to redistribute effects or choose different UX animations to optimize performance.

Output:
Hero Section Adjustments: 
Menu Section Adjustments: 
Gallery Section Adjustments: 
About Us Section Adjustments: 
Contact Us Section Adjustments:
`,
});

const adaptiveUxAnimationFlow = ai.defineFlow(
  {
    name: 'adaptiveUxAnimationFlow',
    inputSchema: AdaptiveUxAnimationInputSchema,
    outputSchema: AdaptiveUxAnimationOutputSchema,
  },
  async input => {
    const {output} = await adaptiveUxAnimationPrompt(input);
    return output!;
  }
);
