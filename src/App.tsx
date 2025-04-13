import ChatWidget from './components/ChatWidget';
import './App.css';

function App() {
	// This is just a demo container to showcase the widget
	return (
		<div className="p-8 max-w-4xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">Chat Widget Demo</h1>
			<p className="mb-6">This is a demonstration of the chat widget that can be embedded in any project.</p>

			<div className="border border-gray-200 rounded-lg p-4">
				<ChatWidget
					initialMessages={[{ id: '1', content: 'Hello! How can I help you today?', sender: 'bot' }]}
					apiEndpoint="/api/chat"
					widgetTitle="Support Chat"
					primaryColor="#4f46e5"
				/>
			</div>
		</div>
	);
}

export default App;
