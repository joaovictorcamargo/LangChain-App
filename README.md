# LangChain-App

A chatbot application that uses LangChain, Supabase Vector Store, and OpenAI to provide intelligent responses based on document context.

## Features

- Document-based question answering using vector embeddings
- Intelligent chat responses using OpenAI's ChatGPT
- Vector similarity search powered by Supabase pgvector
- Standalone question processing for improved response accuracy

## Technologies Used

- LangChain for AI/ML operations
- Supabase Vector Store for document embeddings
- OpenAI for embeddings and chat completions
- PostgreSQL with pgvector extension
- JavaScript/HTML/CSS for the frontend

## Prerequisites

Before you begin, ensure you have:
- Node.js installed
- A Supabase account and project
- An OpenAI API key

## Setup

1. Clone the repository:
```bash
git clone https://github.com/joaovictorcamargo/LangChain-App.git
cd LangChain-App
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your API keys:
```env
SUPABASE_API_KEY=your_supabase_api_key
SUPABASE_URL=your_supabase_project_url
OPENAI_API_KEY=your_openai_api_key
```

4. Set up the Supabase database:
- Enable the pgvector extension
- Create the necessary tables using the SQL in `match_documents.sql`

## Usage

1. Start the application:
```bash
npm start
```

2. Open `index.html` in your browser

3. Start chatting! The application will:
- Convert your questions into standalone format
- Search for relevant context in the document store
- Generate accurate responses using ChatGPT

## Project Structure

- `index.js`: Main application logic and LangChain integration
- `index.html`: Frontend interface
- `index.css`: Styling
- `match_documents.sql`: Database schema and functions
- `.env`: Environment variables (not tracked in git)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
