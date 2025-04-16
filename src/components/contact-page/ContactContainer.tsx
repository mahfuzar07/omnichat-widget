'use client';

import { useState, useRef, useEffect } from 'react';
import { MdEmail, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { usePageStore, useWidgetConfigStore, useWidgetToggleStore } from '../../lib/store';
import { animate, stagger } from 'motion';

interface AgentProfile {
	id: number;
	imageUrl: string;
}

export default function ContactContainer() {
	const setSelectedPage = usePageStore((state) => state.setSelectedPage);
	const { primaryColor } = useWidgetConfigStore();

	const agents: AgentProfile[] = [
		{ id: 1, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 2, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 3, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
	];

	// Form states
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// Form submit handler
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			// Simulate async request
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// You can replace this with actual API call
			console.log({ name, email, subject, message });

			alert('Message sent successfully!');
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
		} catch (error) {
			console.error('Failed to send message:', error);
			alert('Something went wrong.');
		} finally {
			setIsLoading(false);
		}
	};

	const widgetOpen = useWidgetToggleStore((state) => state.widgetOpen);
	const headerAnimateRef = useRef<HTMLDivElement>(null);
	const avatarRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const formRef = useRef<HTMLDivElement>(null);
	const formButtonRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (widgetOpen && headerAnimateRef.current && avatarRef.current && titleRef.current) {
			animate(
				[headerAnimateRef.current, avatarRef.current, titleRef.current],
				{ opacity: [0, 1], transform: ['translateX(80px)', 'translateX(0px)'] },
				{ duration: 0.5, delay: stagger(0.15) }
			);
		}
		if (widgetOpen && formRef.current && formButtonRef.current) {
			animate(
				[formRef.current, formButtonRef.current],
				{ opacity: [0, 1], transform: ['translateY(80px)', 'translateY(0px)'] },
				{ duration: 0.5, delay: stagger(0.1) }
			);
		}
	}, [widgetOpen]);

	return (
		<>
			<div className="text-white flex px-3 gap-5 items-center py-3 relative" style={{ backgroundColor: primaryColor }}>
				<div
					ref={headerAnimateRef}
					className="text-white cursor-pointer  hover:bg-white/20 p-1 rounded flex items-center justify-center hover:text-gray-200 transition-colors "
					aria-label="contact"
					onClick={() => setSelectedPage(null)}
				>
					<MdOutlineKeyboardBackspace className="text-xl" />
				</div>
				<div className="relative flex items-center gap-3">
					<div ref={avatarRef} className="flex -space-x-2 justify-center">
						{agents.map((agent) => (
							<div key={agent.id} className="w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden">
								<img src={agent.imageUrl} alt={`Agent ${agent.id}`} className="w-full h-full object-cover" />
							</div>
						))}
					</div>
					<h3 ref={titleRef} className="font-medium text-md">
						How can we help?
					</h3>
				</div>
			</div>

			<div ref={formRef} className="flex-1 overflow-y-auto px-4 py-2 bg-transparent space-y-5 z-10 relative">
				<form onSubmit={handleSubmit} className="py-4 space-y-3 rounded-md shadow-sm max-w-lg mx-auto text-sm">
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Your name"
						className="w-full  border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm"
						disabled={isLoading}
						required
					/>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Your email address"
						className="w-full border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600"
						disabled={isLoading}
						required
					/>
					<input
						type="text"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						placeholder="Subject"
						className="w-full border bg-white border-gray-300 rounded px-3 py-2 focus:outline-none text-black placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600"
						disabled={isLoading}
					/>
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Your message..."
						className="w-full bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none text-black min-h-[100px] placeholder:text-slate-400 placeholder:font-thin placeholder:text-sm focus:ring-1 focus:ring-gray-600"
						disabled={isLoading}
						required
					/>

					<div ref={formButtonRef}>
						<button
							type="submit"
							className="w-full flex items-center justify-center space-x-2 bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors text-sm disabled:opacity-50"
							disabled={isLoading || !name || !email || !message}
						>
							<MdEmail />
							<span>{isLoading ? 'Sending...' : 'Send Email'}</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
}
