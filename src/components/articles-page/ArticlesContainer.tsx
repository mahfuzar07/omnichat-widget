import ConversionCard from '../card/ConversionCard';
import ArticalsCard from '../card/ArticlesCard';
import ContactCard from '../card/ContactCard';
import { useWidgetConfigStore } from '../../lib/store';

export default function ArticlesContainer() {
	const { widgetTitle, primaryColor } = useWidgetConfigStore();
	return (
		<>
			<div className="text-white flex items-center h-60" style={{ backgroundColor: primaryColor }}>
				<div className="h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]">
					<h3 className="font-bold text-3xl mb-2">{widgetTitle}</h3>
					<p className="font-medium text-white/80">Ask us anything, or share your valuable feedback with us.</p>
				</div>

				{/* <button
					onClick={toggleWidget}
					className="text-white absolute right-2 top-2 bg-white/10 p-2 rounded-full flex items-center justify-center hover:text-gray-200 transition-colors "
					aria-label="Close chat"
				>
					i
				</button> */}
			</div>

			<div className="flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12">
				<ConversionCard />
				<ArticalsCard />
				<ContactCard />
			</div>
		</>
	);
}
