import { IoIosSend } from 'react-icons/io';
import { usePageStore } from '../../lib/store';

interface AgentProfile {
	id: number;
	imageUrl: string;
}

export default function ConversionCard() {
	const setSelectedPage = usePageStore((state) => state.setSelectedPage);
	const agents: AgentProfile[] = [
		{ id: 1, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 2, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 3, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 4, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
		{ id: 5, imageUrl: 'https://cdn.pixabay.com/photo/2022/02/25/23/22/woman-7034972_640.png' },
	];

	return (
		<div className="p-4 bg-white rounded-xl shadow-md text-center border border-slate-100">
			<h2 className="text-lg font-semibold mb-2 text-slate-700">Start a new conversation</h2>
			<p className="text-sm text-gray-500 mb-4">Our agents typically reply in a few minutes.</p>

			<div className="flex -space-x-2 mb-4 justify-center">
				{agents.map((agent) => (
					<div key={agent.id} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
						<img src={agent.imageUrl} alt={`Agent ${agent.id}`} className="w-full h-full object-cover" />
					</div>
				))}
			</div>

			<button
				className="w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm"
				onClick={() => setSelectedPage('conversation')}
			>
				<IoIosSend />
				<span>Send us a message</span>
			</button>
		</div>
	);
}
