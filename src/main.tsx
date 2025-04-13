import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// Export the ChatWidget component for use in other projects
export { default as ChatWidget } from './components/ChatWidget';
export type { Message } from './components/ChatWidget';
