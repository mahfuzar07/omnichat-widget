'use client';

import { IoLogoWechat } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { usePageStore, useWidgetConfigStore, useWidgetToggleStore } from '../lib/store';
import { MdClose } from 'react-icons/md';
import HomeContainer from './main-page/HomeContainer';
import ContactContainer from './contact-page/ContactContainer';
import ArticlesContainer from './articles-page/ArticlesContainer';
import ChatContainer from './conversation-page/ChatContainer';
import { AnimatePresence, motion } from 'motion/react';

export type Message = {
	id: string;
	content: string;
	sender: 'user' | 'bot';
	timestamp?: Date;
};

export interface ChatConfigProps {
	apiEndpoint?: string;
	widgetTitle?: string;
	primaryColor?: string;
	position?: 'bottom-right' | 'bottom-left';
	height?: string;
	width?: string;
	initialMessages?: Message[];
}
const OmniChatWidget = ({ apiEndpoint, widgetTitle, primaryColor, position, height, width, initialMessages = [] }: ChatConfigProps) => {
	const { setWidgetTitle, setPrimaryColor, setPosition, setDimensions, setApiEndpoint, addMessage, clearMessages } = useWidgetConfigStore();

	const [initialized, setInitialized] = useState(false);

	// Initialize store with props on first render
	useEffect(() => {
		if (!initialized && typeof window !== 'undefined') {
			if (widgetTitle) setWidgetTitle(widgetTitle);
			if (primaryColor) setPrimaryColor(primaryColor);
			if (position) setPosition(position);
			if (height && width) setDimensions(height, width);
			if (apiEndpoint) setApiEndpoint(apiEndpoint);

			clearMessages();

			// Add initial messages
			if (initialMessages && initialMessages.length > 0) {
				initialMessages.forEach((message) => {
					addMessage(message);
				});
			}

			setInitialized(true);
		}
	}, [
		initialized,
		widgetTitle,
		primaryColor,
		position,
		height,
		width,
		apiEndpoint,
		initialMessages,
		setWidgetTitle,
		setPrimaryColor,
		setPosition,
		setDimensions,
		setApiEndpoint,
		addMessage,
		clearMessages,
	]);

	const widgetOpen = useWidgetToggleStore((state) => state.widgetOpen);
	const toggleWidget = useWidgetToggleStore((state) => state.toggleWidget);
	const selectedPage = usePageStore((state) => state.selectedPage);
	const currentPosition = useWidgetConfigStore((state) => state.position);
	const currentHeight = useWidgetConfigStore((state) => state.height);
	const currentWidth = useWidgetConfigStore((state) => state.width);
	const currentColor = useWidgetConfigStore((state) => state.primaryColor);

	if (typeof window === 'undefined') {
		return null;
	}

	return (
		<>
			<div className={`fixed ${currentPosition === 'bottom-right' ? 'right-3' : 'left-3'} bottom-3 z-[10000]`}>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={toggleWidget}
					className="rounded-full p-3 text-white shadow-lg"
					style={{ backgroundColor: currentColor }}
					aria-label="Open chat"
				>
					{widgetOpen ? <MdClose className="text-xl" /> : <IoLogoWechat className="text-3xl" />}
				</motion.button>
			</div>
			<AnimatePresence initial={false}></AnimatePresence>
			{widgetOpen ? (
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{
						duration: 0.4,
					}}
					className={`bg-slate-100 z-[9999] fixed  bottom-[40px] rounded shadow-md flex flex-col overflow-hidden w-full md:w-auto pb-8 ${
						currentPosition === 'bottom-right' ? 'md:right-5 right-1' : 'md:left-5 left-1'
					}`}
					style={{ height: currentHeight, width: currentWidth, backgroundImage: `url('../bg.svg')`, backgroundPosition: 'top', objectFit: 'cover' }}
				>
					{selectedPage == null && <HomeContainer />}
					{selectedPage == 'article' && <ArticlesContainer />}
					{selectedPage == 'conversation' && <ChatContainer />}
					{selectedPage == 'contact' && <ContactContainer />}

					{/* footer section  */}
					<div className="p-2 absolute bottom-0 inset-x-0 w-full text-xs text-center bg-transparent ">
						<p className="px-5 rounded-full w-max mx-auto text-slate-400">Powered by Update Tech</p>
					</div>
				</motion.div>
			) : null}
		</>
	);
};

export default OmniChatWidget;
