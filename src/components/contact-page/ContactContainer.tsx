'use client';

import { useState } from 'react';
import { MdEmail, MdOutlineKeyboardBackspace } from 'react-icons/md';
import { usePageStore, useWidgetConfigStore } from '../../lib/store';

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
		{ id: 4, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 5, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
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

	return (
		<>
			<div className="text-white flex items-center py-3 relative" style={{ backgroundColor: primaryColor }}>
				<div className="relative px-5 py-2 max-w-sm mx-auto text-center">
					<div className="flex -space-x-2 mb-2 justify-center">
						{agents.map((agent) => (
							<div key={agent.id} className="w-11 h-11 rounded-full bg-white border-2 border-white overflow-hidden">
								<img src={agent.imageUrl} alt={`Agent ${agent.id}`} className="w-full h-full object-cover" />
							</div>
						))}
					</div>
					<h3 className="font-medium text-lg">How can we help?</h3>
					<p className="text-white/80 text-sm">We usually respond in a few hours.</p>
				</div>
				<button
					className="text-white absolute left-2 top-3 bg-white/20 p-2 rounded-full flex items-center justify-center hover:text-gray-200 transition-colors "
					aria-label="contact"
					onClick={() => setSelectedPage(null)}
				>
					<MdOutlineKeyboardBackspace className="text-lg" />
				</button>
			</div>

			<div className="flex-1 overflow-y-auto px-4 py-2 bg-transparent space-y-5 z-10 relative">
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

					<button
						type="submit"
						className="w-full flex items-center justify-center space-x-2 bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors text-sm disabled:opacity-50"
						disabled={isLoading || !name || !email || !message}
					>
						<MdEmail />
						<span>{isLoading ? 'Sending...' : 'Send Email'}</span>
					</button>
				</form>
			</div>
		</>
	);
}
