'use client';
import { useState, useRef, useEffect } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { Message, usePageStore, useWidgetConfigStore } from '../../lib/store';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

interface AgentProfile {
	id: number;
	imageUrl: string;
}

const ChatContainer = () => {
	// Get messages from the store
	const { messages: storeMessages, addMessage, apiEndpoint, primaryColor } = useWidgetConfigStore();

	// Initialize with messages from the store
	const [messages, setMessages] = useState(storeMessages || []);
	const [isLoading, setIsLoading] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const setSelectedPage = usePageStore((state) => state.setSelectedPage);

	const agents: AgentProfile[] = [
		{ id: 1, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 2, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 3, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 4, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 5, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
	];

	// Store the API endpoint in a ref
	const apiEndpointRef = useRef(apiEndpoint);

	// Check if we're in a browser environment and set up the component
	useEffect(() => {
		// Only set mounted state to true in browser environment
		if (typeof window !== 'undefined') {
			setIsMounted(true);
			apiEndpointRef.current = apiEndpoint;
			setMessages(storeMessages || []);
		}
	}, [apiEndpoint, storeMessages]);

	// Scroll to bottom when messages change
	useEffect(() => {
		if (containerRef.current && isMounted) {
			containerRef.current.scrollTop = 0;
		}
	}, [messages, isMounted]);

	const handleSendMessage = async (content: string) => {
		if (!content.trim() || !isMounted) return;

		// Add user message
		const userMessage: Message = {
			id: Date.now().toString(),
			content,
			sender: 'user',
			timestamp: new Date(),
		};

		setMessages((prev) => [...prev, userMessage]);
		addMessage(userMessage);
		setIsLoading(true);

		try {
			// Make API call to the backend
			const response = await fetch(apiEndpointRef.current, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: content }),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();

			const botMessage: Message = {
				id: (Date.now() + 1).toString(),
				content: data.message,
				sender: 'bot',
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, botMessage]);
			addMessage(botMessage);
			setIsLoading(false);
		} catch (error) {
			console.error('Error sending message:', error);
			setIsLoading(false);

			// Add error message
			const errorMessage: Message = {
				id: (Date.now() + 1).toString(),
				content: 'Sorry, there was an error processing your message.',
				sender: 'bot',
				timestamp: new Date(),
			};

			setMessages((prev) => [...prev, errorMessage]);
			addMessage(errorMessage);
		}
	};

	// Don't render anything during SSR or before mounting
	if (!isMounted || typeof window === 'undefined') {
		return null;
	}

	return (
		<>
			<div className="text-white flex items-center py-3 relative" style={{ backgroundColor: primaryColor }}>
				<div className="relative px-5 pb-2 max-w-sm mx-auto text-center">
					<h3 className="font-medium text-2xl mb-3">Start a chat</h3>
					<div className="flex -space-x-2 mb-2 justify-center">
						{agents.map((agent) => (
							<div key={agent.id} className="w-11 h-11 rounded-full bg-white border-2 border-white overflow-hidden">
								<img src={agent.imageUrl} alt={`Agent ${agent.id}`} className="w-full h-full object-cover" />
							</div>
						))}
					</div>

					<p className="text-white/80 text-sm">We are here to help! Message us about what you need. Our agents typically reply in a few minutes.</p>
				</div>
				<button
					className="text-white absolute left-2 top-3 bg-white/20 p-2 rounded-full flex items-center justify-center hover:text-gray-200 transition-colors "
					aria-label="contact"
					onClick={() => setSelectedPage(null)}
				>
					<MdOutlineKeyboardBackspace className="text-lg" />
				</button>
			</div>

			<div ref={containerRef} className="message-container smooth-scroll my-1">
				{isLoading && (
					<div className="flex justify-center mt-4">
						<div className="dot-typing"></div>
					</div>
				)}
				<div className="message-list">
					<MessageList messages={messages} />
				</div>
				<div ref={messagesEndRef} />
			</div>

			<ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
		</>
	);
};

export default ChatContainer;
