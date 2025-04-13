'use client';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Only run this code in the browser
if (typeof window !== 'undefined') {
	const rootElement = document.getElementById('root');
	if (rootElement) {
		ReactDOM.createRoot(rootElement).render(
			<React.StrictMode>
				<App />
			</React.StrictMode>
		);
	}
}

// Export the ChatWidget component for use in other projects
export { default as ChatWidget } from './components/ChatWidget';
export type { Message } from './components/ChatWidget';
