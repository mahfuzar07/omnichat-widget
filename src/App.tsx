'use client';

import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
	return (
		<>
			<ChatWidget
				initialMessages={[{ id: '1', content: 'Hello! How can I help you today?', sender: 'bot' }]}
				apiEndpoint="/api/chat"
				widgetTitle="Support Chat"
				primaryColor="#4f46e5"
			/>
		</>
	);
}

export default App;
