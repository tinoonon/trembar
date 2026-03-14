'use server';
/**
 * @fileOverview An AI agent to generate engaging, rustic-elegant, and Minas Gerais-themed descriptions
 * for new menu items or promotional event announcements for the Trem Bar website.
 *
 * - generateAdminContent - A function that handles the content generation process.
 * - GenerateAdminContentInput - The input type for the generateAdminContent function.
 * - GenerateAdminContentOutput - The return type for the generateAdminContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAdminContentInputSchema = z.object({
  contentType: z
    .enum(['menu_item', 'event_announcement'])
    .describe('The type of content to generate (menu item or event announcement).'),
  name: z.string().describe('The name of the menu item or event.'),
  details:
    z.string().describe('Key details about the menu item or event, e.g., ingredients, type of music, special features.'),
  keywords: z.array(z.string()).optional().describe('Optional keywords to guide the generation.'),
});
export type GenerateAdminContentInput = z.infer<
  typeof GenerateAdminContentInputSchema
>;

const GenerateAdminContentOutputSchema = z.object({
  description: z.string().describe('The generated engaging description.'),
});
export type GenerateAdminContentOutput = z.infer<
  typeof GenerateAdminContentOutputSchema
>;

export async function generateAdminContent(
  input: GenerateAdminContentInput
): Promise<GenerateAdminContentOutput> {
  return generateAdminContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAdminContentPrompt',
  input: {schema: GenerateAdminContentInputSchema},
  output: {schema: GenerateAdminContentOutputSchema},
  prompt: `You are an expert copywriter for a rustic-elegant restaurant named Trem Bar Gastronomia, specializing in authentic Minas Gerais cuisine, craft beers, and unique drinks. Your task is to generate engaging, evocative, and on-brand descriptions.

The description should capture the essence of Minas Gerais, with a rustic yet elegant tone, suitable for a refined gastronomic experience. Incorporate elements of train stations, aged wood, and rich flavors.

Generate a description for a {{{contentType}}} with the following details:

Name: {{{name}}}
Details: {{{details}}}
{{#if keywords}}
Keywords: {{#each keywords}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
{{/if}}

Keep the description concise but captivating, aiming for 2-3 paragraphs. Focus on sensory details and highlight what makes this offering special and unique to Trem Bar Gastronomia.`,
});

const generateAdminContentFlow = ai.defineFlow(
  {
    name: 'generateAdminContentFlow',
    inputSchema: GenerateAdminContentInputSchema,
    outputSchema: GenerateAdminContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
