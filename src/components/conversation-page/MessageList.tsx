'use client';
import type { Message } from '../../lib/store';
import { FaRegFileAlt, FaRegFileAudio, FaDownload } from 'react-icons/fa';

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

	const handleDownload = (file: File) => {
		const url = URL.createObjectURL(file);
		const a = document.createElement('a');
		a.href = url;
		a.download = file.name;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	const renderFile = (file: File) => {
		if (file.type.startsWith('image/')) {
			return (
				<div className="mt-2 relative group">
					<img src={URL.createObjectURL(file)} alt={file.name} className="max-w-[200px] max-h-[200px] object-cover rounded-lg shadow-md" />
					<button
						onClick={() => handleDownload(file)}
						className="absolute bottom-2 right-2 bg-black/50 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
						title="Download"
					>
						<FaDownload className="text-sm" />
					</button>
				</div>
			);
		} else if (file.type.startsWith('audio/')) {
			return (
				<div className="mt-2 flex items-center gap-2 bg-gray-100 p-2 rounded-lg group">
					<FaRegFileAudio className="text-xl text-gray-600" />
					<span className="text-sm text-gray-700 flex-1">{file.name}</span>
					<button
						onClick={() => handleDownload(file)}
						className="text-gray-600 hover:text-gray-800 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
						title="Download"
					>
						<FaDownload className="text-sm" />
					</button>
				</div>
			);
		} else {
			return (
				<div className="mt-2 flex items-center gap-2 bg-gray-100 p-2 rounded-lg group">
					<FaRegFileAlt className="text-xl text-gray-600" />
					<span className="text-sm text-gray-700 flex-1">{file.name}</span>
					<button
						onClick={() => handleDownload(file)}
						className="text-gray-600 hover:text-gray-800 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
						title="Download"
					>
						<FaDownload className="text-sm" />
					</button>
				</div>
			);
		}
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
						{message.content && <div className="text-sm break-words whitespace-pre-wrap">{message.content}</div>}
						{message.files && message.files.length > 0 && (
							<div className="space-y-2">
								{message.files.map((file, index) => (
									<div key={index}>{renderFile(file)}</div>
								))}
							</div>
						)}
						{message.timestamp && <div className="text-[10px] text-gray-500 text-right">{formatTime(message.timestamp)}</div>}
					</div>
				</div>
			))}
		</div>
	);
};

export default MessageList;
