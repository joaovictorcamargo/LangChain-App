import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { createClient } from '@supabase/supabase-js';

// Environment Variables Configuration
const sbApiKey = process.env.SUPABASE_API_KEY;
const sbUrl = process.env.SUPABASE_URL;
const openAIApiKey = process.env.OPENAI_API_KEY;

// Initialize Supabase Client
const supabase = createClient(sbUrl, sbApiKey);

// Basic JavaScript initialization
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Application initialized');
    
    try {
        const result = await fetch('scrimba-info.txt');
        const text = await result.text();

        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            separators: ['\n\n', '\n', ' ', ''], // default setting
            chunkOverlap: 50
        });

        const output = await splitter.createDocuments([text]);
        console.log(output);
    } catch (err) {
        console.log(err);
    }
});
