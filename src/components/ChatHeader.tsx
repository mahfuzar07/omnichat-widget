'use client';

type ChatHeaderProps = {
	title: string;
	onClose: () => void;
	primaryColor: string;
};

const ChatHeader = ({ title, onClose, primaryColor }: ChatHeaderProps) => {
	const headerStyle = {
		backgroundColor: primaryColor,
	};

	return (
		<div className="px-4 py-3 text-white flex justify-between items-center" style={headerStyle}>
			<h3 className="font-medium">{title}</h3>
			<button onClick={onClose} className="text-white hover:text-gray-200 transition-colors" aria-label="Close chat">
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
					className="lucide lucide-x"
				>
					<path d="M18 6 6 18" />
					<path d="m6 6 12 12" />
				</svg>
			</button>
		</div>
	);
};

export default ChatHeader;
