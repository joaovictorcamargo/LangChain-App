import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { createClient } from '@supabase/supabase-js'
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'

const sbApiKey = process.env.SUPABASE_API_KEY
const sbUrl = process.env.SUPABASE_URL_LC_CHATBOT
const openAIApiKey = process.env.OPENAI_API_KEY

// Initialize Supabase client
const client = createClient(sbUrl, sbApiKey)

// Initialize document processing
async function initializeDocuments() {
    try {
        const result = await fetch('scrimba-info.txt')
        const text = await result.text()
        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 50,
            separators: ['\n\n', '\n', ' ', ''] // default setting
        })
        
        const output = await splitter.createDocuments([text])
        
        await SupabaseVectorStore.fromDocuments(
            output,
            new OpenAIEmbeddings({ openAIApiKey }),
            {
               client,
               tableName: 'documents',
            }
        )
        
    } catch (err) {
        console.log(err)
    }
}

// Initialize chat functionality
document.addEventListener('submit', (e) => {
    e.preventDefault()
    progressConversation()
})

async function progressConversation() {
    const userInput = document.getElementById('user-input')
    const chatbotConversation = document.getElementById('chatbot-conversation-container')
    const question = userInput.value
    userInput.value = ''

    // add human message
    const newHumanSpeechBubble = document.createElement('div')
    newHumanSpeechBubble.classList.add('speech', 'speech-human')
    chatbotConversation.appendChild(newHumanSpeechBubble)
    newHumanSpeechBubble.textContent = question
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight

    // add AI message
    const newAiSpeechBubble = document.createElement('div')
    newAiSpeechBubble.classList.add('speech', 'speech-ai')
    chatbotConversation.appendChild(newAiSpeechBubble)
    newAiSpeechBubble.textContent = "AI response placeholder" // TODO: Implement actual AI response
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight
}

// Initialize the document processing when the page loads
initializeDocuments()
