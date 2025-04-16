import { MdEmail } from 'react-icons/md';
import { usePageStore } from '../../lib/store';

export default function ContactCard() {
	const setSelectedPage = usePageStore((state) => state.setSelectedPage);
	return (
		<div className="p-4 bg-white rounded-xl shadow-md  border border-slate-100">
			<h2 className="text-lg font-semibold mb-2 text-slate-700">Send us an email</h2>
			<p className="text-sm text-gray-500 mb-4">If you're in a hurry, send us a message and we will get back to you asap</p>

			<button
				className="w-full flex items-center justify-center space-x-2 bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm"
				onClick={() => setSelectedPage('contact')}
			>
				<MdEmail />
				<span>Send Email</span>
			</button>
		</div>
	);
}
