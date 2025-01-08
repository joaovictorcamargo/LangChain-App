import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

// Basic JavaScript initialization
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Application initialized');
    
    try {
        const result = await fetch('scrimba-info.txt');
        const text = await result.text();
    } catch (err) {
        console.log(err);
    }
});
