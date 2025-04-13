'use client';

import type React from 'react';

import { useState } from 'react';

type ChatInputProps = {
	onSendMessage: (message: string) => void;
	isLoading: boolean;
	primaryColor: string;
};

const ChatInput = ({ onSendMessage, isLoading, primaryColor }: ChatInputProps) => {
	const [message, setMessage] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (message.trim() && !isLoading) {
			onSendMessage(message);
			setMessage('');
		}
	};

	const buttonStyle = {
		backgroundColor: primaryColor,
	};

	return (
		<form onSubmit={handleSubmit} className="border-t border-gray-200 px-1 py-2 bg-white">
			<div className="flex items-center">
				<input
					type="text"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type your message..."
					className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2 focus:outline-none bg-white text-black"
					disabled={isLoading}
				/>
				<button
					type="submit"
					className="px-4 h-[42px] text-white rounded-r-xl disabled:opacity-50 flex items-center justify-center "
					style={buttonStyle}
					disabled={isLoading || !message.trim()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-send"
					>
						<path d="m22 2-7 20-4-9-9-4Z" />
						<path d="M22 2 11 13" />
					</svg>
				</button>
			</div>
		</form>
	);
};

export default ChatInput;
