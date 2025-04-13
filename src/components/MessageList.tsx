import type { Message } from './ChatWidget';

type MessageListProps = {
	messages: Message[];
	primaryColor: string;
};

const MessageList = ({ messages, primaryColor }: MessageListProps) => {
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

	const botMessageStyle = {
		backgroundColor: `${primaryColor}15`, // Using hex with opacity
		borderColor: primaryColor,
	};

	return (
		<div className="space-y-3">
			{messages.map((message) => (
				<div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
					<div
						className={`max-w-[80%] rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-gray-200 text-gray-800' : 'border-l-2 text-gray-800'}`}
						style={message.sender === 'bot' ? botMessageStyle : {}}
					>
						<div className="text-sm">{message.content}</div>
						{message.timestamp && <div className="text-xs text-gray-500 mt-1 text-right">{formatTime(message.timestamp)}</div>}
					</div>
				</div>
			))}
		</div>
	);
};

export default MessageList;
