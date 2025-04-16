'use client';

import type React from 'react';
import { BsFillSendFill, BsEmojiSmile } from 'react-icons/bs';
import { useState, useRef, useEffect } from 'react';

type ChatInputProps = {
	onSendMessage: (message: string) => void;
	isLoading: boolean;
};

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
	const [message, setMessage] = useState('');
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (message.trim() && !isLoading) {
			onSendMessage(message);
			setMessage('');
		}
	};

	// Fix the handleKeyDown function to properly send messages on Enter key press
	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			if (message.trim() && !isLoading) {
				onSendMessage(message);
				setMessage('');
			}
		}
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`;
		}
	}, [message]);

	return (
		<form onSubmit={handleSubmit} className="pt-1 px-2 backdrop-blur-md bg-white/10">
			<div className="border border-slate-100 shadow relative flex items-center bg-white">
				<textarea
					ref={textareaRef}
					onKeyDown={handleKeyDown}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type your message..."
					rows={1}
					className="w-full pr-16 bg-transparent resize-none overflow-y-auto hide-scrollbar max-h-[100px] px-3 py-2.5 text-sm text-black focus:outline-none"
					disabled={isLoading}
				/>

				<div className="absolute right-2 inset-y-0 h-full flex items-center gap-2.5">
					<button type="submit" className="flex items-center justify-center  hover:text-slate-700 text-slate-300">
						<BsEmojiSmile className="text-xl" />
					</button>
					<button
						type="submit"
						disabled={isLoading || !message.trim()}
						className="flex items-center justify-center text-slate-700 hover:text-black disabled:text-slate-300"
					>
						<BsFillSendFill className="text-xl" />
					</button>
				</div>
			</div>
		</form>
	);
};

export default ChatInput;
