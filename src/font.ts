import { Roboto } from 'next/font/google';

// Configure the Roboto font with specific weights and styles
export const roboto = Roboto({
  subsets: ['latin'], // Include only the required subsets for the project
  weight: ['400', '500', '700'], // Specify the weights you want to include
  style: ['normal', 'italic'], // Optionally include styles (normal, italic)
  display: 'swap', //optional: Set font-display to swap for better performence 
});


