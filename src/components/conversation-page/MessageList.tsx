'use client';
import type { Message } from '../../lib/store';

type MessageListProps = {
	messages: Message[];
};

const MessageList = ({ messages }: MessageListProps) => {
	if (messages.length === 0) {
		return <div className="flex justify-center items-center h-full text-gray-500">Start a conversation...</div>;
	}

	const formatTime = (date?: Date) => {
		if (!date) return '';
		return new Intl.DateTimeFormat('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		}).format(date);
	};

	return (
		<div className="space-y-3 w-full">
			{messages.map((message) => (
				<div key={message.id} className={`flex  ${message.sender === 'user' ? 'justify-end' : 'justify-start items-end gap-2'}`}>
					{message.sender === 'bot' && (
						<div className="flex items-center justify-center w-[35px] h-[35px] bg-white/20 shadow-xl rounded-full">
							<img src="./bot.png" alt="avatar" className="w-full h-full object-cover" />
						</div>
					)}
					<div
						className={`max-w-[80%] rounded px-2 py-1 shadow ${message.sender === 'user' ? 'bg-blue-100 text-gray-800' : 'bg-white text-gray-900'}`}
					>
						<div className="text-sm">{message.content}</div>
						{message.timestamp && <div className="text-[10px] text-gray-500 text-right">{formatTime(message.timestamp)}</div>}
					</div>
				</div>
			))}
		</div>
	);
};

export default MessageList;
