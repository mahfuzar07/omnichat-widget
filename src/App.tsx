'use client';
import './App.css';
import OmniChatWidget from './components/OmniChatWidget';

function App() {
	return (
		<>
			<OmniChatWidget
				initialMessages={[
					{ id: '1', content: 'Hi there! You can begin by asking your question below. Someone will be with you shortly.', sender: 'bot' },
				]}
				apiEndpoint="/api/chat"
				widgetTitle="Hi there 👋"
				primaryColor="#4f46e5"
			/>
		</>
	);
}

export default App;
