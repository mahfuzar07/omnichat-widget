'use client';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Only run this code in the browser and after the DOM is loaded
if (typeof window !== 'undefined') {
	// Wait for DOM to be ready
	const renderApp = () => {
		const rootElement = document.getElementById('root');
		if (rootElement) {
			try {
				createRoot(rootElement).render(
					<React.StrictMode>
						<App />
					</React.StrictMode>
				);
			} catch (error) {
				console.error('Error rendering app:', error);
			}
		}
	};

	// Check if document is already loaded
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', renderApp);
	} else {
		renderApp();
	}
}

// Export the ChatWidget component for use in other projects
export { default as OmniChatWidget } from './components/OmniChatWidget';
export { useWidgetConfigStore } from '../src/lib/store.ts';
export type { ChatState, Message } from '../src/lib/store.ts';
