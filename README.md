# LangChain Question Converter

A web application built with LangChain.js that converts user questions into standalone questions using OpenAI's language model. This project demonstrates the integration of LangChain with a web interface for natural language processing.

## Features

- Converts context-dependent questions into standalone questions
- Interactive chat interface
- Real-time conversation display
- Integration with OpenAI's language models
- Supabase integration for data persistence

## Technical Stack

- **Frontend**: HTML, JavaScript
- **Backend Libraries**:
  - LangChain.js (v0.0.151)
  - Supabase (v2.33.2)
- **AI Integration**: OpenAI ChatGPT

## Prerequisites

Before running this application, you need:

1. Node.js installed on your system
2. An OpenAI API key
3. A Supabase project and credentials (if using database features)

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

3. Configure environment variables:
Create a `.env` file in the root directory and add:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## Usage

The application provides a chat interface where users can:
1. Enter questions in any context
2. Receive standalone versions of their questions
3. View the conversation history in a chat-like interface

Example:
- User input: "What about its performance?"
- Converted output: "What is the performance of the system?"

## Project Structure

- `index.js`: Main application file containing the LangChain implementation and chat interface logic
- `package.json`: Project dependencies and configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.
