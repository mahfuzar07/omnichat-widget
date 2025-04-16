'use client';
import { animate, stagger } from 'motion';
import { useEffect, useRef } from 'react';
import ConversionCard from '../card/ConversionCard';
import ArticlesCard from '../card/ArticlesCard';
import ContactCard from '../card/ContactCard';
import { useWidgetConfigStore, useWidgetToggleStore } from '../../lib/store';

export default function HomeContainer() {
	const { widgetTitle, primaryColor } = useWidgetConfigStore();
	const widgetOpen = useWidgetToggleStore((state) => state.widgetOpen);
	
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (widgetOpen) {
			animate(
				[titleRef.current, subtitleRef.current, containerRef.current],
				{ opacity: [0, 1], transform: ['translateY(30px)', 'translateY(0px)'] },
				{ duration: 0.5, delay: stagger(0.5) }
			);
		}
	}, [widgetOpen]);

	return (
		<>
			<div className="text-white flex items-center h-60" style={{ backgroundColor: primaryColor }}>
				<div className="h-36 relative !z-[20] px-5 py-2 max-w-sm mr-[45px]">
					<h1 ref={titleRef} className="font-bold text-3xl mb-2 opacity-0">
						{widgetTitle}
					</h1>
					<h6 ref={subtitleRef} className="font-medium text-white/80 opacity-0">
						Ask us anything, or share your valuable feedback with us.
					</h6>
				</div>
			</div>

			<div ref={containerRef} className="flex-1 overflow-y-auto px-4 py-1 bg-transparent space-y-5 z-10 relative -mt-12">
				<ConversionCard />
				<ArticlesCard />
				<ContactCard />
			</div>
		</>
	);
}
