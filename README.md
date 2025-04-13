# React Chat Widget

A customizable React chat widget that can be easily embedded into any React application, including Next.js projects.

## Installation

\`\`\`bash
npm install react-chat-widget
\`\`\`

## Usage in Regular React Apps

\`\`\`jsx
import { ChatWidget } from 'react-chat-widget';
import 'react-chat-widget/styles'; // Import styles

function App() {
  return (
    <div>
      <h1>My Application</h1>
      <ChatWidget
        apiEndpoint="/api/chat"
        widgetTitle="Customer Support"
        primaryColor="#0ea5e9"
        initialMessages={[
          { id: "1", content: "Hello! How can I help you today?", sender: "bot" }
        ]}
      />
    </div>
  );
}
\`\`\`

## Usage in Next.js

### Option 1: Client Component

\`\`\`jsx
"use client";

import { ChatWidget } from 'react-chat-widget';
import 'react-chat-widget/styles';

export default function MyPage() {
  return (
    <div>
      <h1>My Next.js Page</h1>
      <ChatWidget
        apiEndpoint="/api/chat"
        widgetTitle="Customer Support"
      />
    </div>
  );
}
\`\`\`

### Option 2: Dynamic Import

\`\`\`jsx
import dynamic from 'next/dynamic';

// Dynamically import the chat widget with SSR disabled
const ChatWidget = dynamic(
  () => import('react-chat-widget').then((mod) => mod.ChatWidget),
  { ssr: false }
);

export default function MyPage() {
  return (
    <div>
      <h1>My Next.js Page</h1>
      <ChatWidget
        apiEndpoint="/api/chat"
        widgetTitle="Customer Support"
      />
    </div>
  );
}
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialMessages` | `Message[]` | `[]` | Initial messages to display |
| `apiEndpoint` | `string` | `/api/chat` | API endpoint for sending/receiving messages |
| `widgetTitle` | `string` | `Chat Support` | Title displayed in the header |
| `primaryColor` | `string` | `#4f46e5` | Main color for the widget |
| `position` | `'bottom-right'` \| `'bottom-left'` | `'bottom-right'` | Position of the widget |
| `height` | `string` | `'500px'` | Height of the chat window |
| `width` | `string` | `'350px'` | Width of the chat window |

## Message Type

\`\`\`typescript
type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp?: Date;
};
\`\`\`

## Backend Integration

To make the chat widget fully functional, implement an API endpoint that accepts POST requests with a message and returns a response:

\`\`\`javascript
// Example Express.js endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;

  // Process the message and generate a response
  const response = {
    message: `You said: "${message}". This is a response from the server.`
  };

  res.json(response);
});
\`\`\`

## License

MIT
