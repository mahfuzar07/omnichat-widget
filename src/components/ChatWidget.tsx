'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

export type Message = {
	id: string;
	content: string;
	sender: 'user' | 'bot';
	timestamp?: Date;
};

type ChatWidgetProps = {
	initialMessages?: Message[];
	apiEndpoint?: string;
	widgetTitle?: string;
	primaryColor?: string;
	position?: 'bottom-right' | 'bottom-left';
	height?: string;
	width?: string;
};

const ChatWidget = ({
	initialMessages = [],
	apiEndpoint = '/api/chat',
	widgetTitle = 'Chat Support',
	primaryColor = '#4f46e5',
	position = 'bottom-right',
	height = '500px',
	width = '350px',
}: ChatWidgetProps) => {
	const [messages, setMessages] = useState<Message[]>(initialMessages);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isMounted, setIsMounted] = useState(false);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	// Store the API endpoint in a ref
	const apiEndpointRef = useRef(apiEndpoint);

	// Check if we're in a browser environment and set up the component
	useEffect(() => {
		// Only set mounted state to true in browser environment
		if (typeof window !== 'undefined') {
			setIsMounted(true);
			apiEndpointRef.current = apiEndpoint;
		}
	}, [apiEndpoint]);

	// Scroll to bottom when messages change
	useEffect(() => {
		if (messagesEndRef.current && isMounted) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
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
		setIsLoading(true);

		try {
			// For demo purposes, we'll simulate a response
			// In a real implementation, you would use apiEndpointRef.current for the API call:
			/*
      const response = await fetch(apiEndpointRef.current, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });
      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      */

			// Demo response
			setTimeout(() => {
				const botMessage: Message = {
					id: (Date.now() + 1).toString(),
					content: `You said: "${content}". This is a simulated response.`,
					sender: 'bot',
					timestamp: new Date(),
				};
				setMessages((prev) => [...prev, botMessage]);
				setIsLoading(false);
			}, 1000);
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
		}
	};

	const toggleChat = () => {
		setIsOpen(!isOpen);
	};

	// Styles for the widget container
	const widgetStyles = {
		position: 'fixed',
		[position === 'bottom-right' ? 'right' : 'left']: '20px',
		bottom: '20px',
		zIndex: 1000,
	} as React.CSSProperties;

	// Styles for the chat button
	const buttonStyles = {
		backgroundColor: primaryColor,
	};

	// Don't render anything during SSR or before mounting
	if (!isMounted || typeof window === 'undefined') {
		return null;
	}

	return (
		<div className="chat-widget-container" style={widgetStyles}>
			{!isOpen ? (
				<button
					onClick={toggleChat}
					className="rounded-full p-4 text-white shadow-lg hover:opacity-90 transition-opacity"
					style={buttonStyles}
					aria-label="Open chat"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-message-circle"
					>
						<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
					</svg>
				</button>
			) : (
				<div className="bg-white rounded-lg shadow-xl flex flex-col overflow-hidden" style={{ height, width }}>
					<ChatHeader title={widgetTitle} onClose={toggleChat} primaryColor={primaryColor} />

					<div className="flex-1 overflow-y-auto p-4 bg-gray-50">
						<MessageList messages={messages} primaryColor={primaryColor} />
						<div ref={messagesEndRef} />

						{isLoading && (
							<div className="flex justify-center my-2">
								<div className="dot-typing"></div>
							</div>
						)}
					</div>

					<ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} primaryColor={primaryColor} />
				</div>
			)}
		</div>
	);
};

export default ChatWidget;
