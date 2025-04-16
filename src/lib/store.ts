import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type WidgetToggleState = {
	widgetOpen: boolean;
	toggleWidget: () => void;
	openWidget: () => void;
	closeWidget: () => void;
};

export const useWidgetToggleStore = create<WidgetToggleState>((set) => ({
	widgetOpen: false,
	toggleWidget: () => set((state) => ({ widgetOpen: !state.widgetOpen })),
	openWidget: () => set({ widgetOpen: true }),
	closeWidget: () => set({ widgetOpen: false }),
}));

export const getWitget = () => useWidgetToggleStore.getState().widgetOpen;

// for selected page

type PageType = 'home' | 'article' | 'conversation' | 'contact' | null;

type PageState = {
	selectedPage: PageType;
	setSelectedPage: (page: PageType) => void;
};

export const usePageStore = create<PageState>((set) => ({
	selectedPage: null,
	setSelectedPage: (page) => set({ selectedPage: page }),
}));

// widget Config section

// Define the types for our store
export interface Message {
	id: string;
	content: string;
	sender: 'user' | 'bot';
	timestamp?: Date;
}

export interface ChatState {
	// UI Configuration
	widgetTitle: string;
	primaryColor: string;
	position: 'bottom-right' | 'bottom-left';
	height: string;
	width: string;

	// Messages
	messages: Message[];

	// API Configuration
	apiEndpoint: string;

	// Actions
	setWidgetTitle: (title: string) => void;
	setPrimaryColor: (color: string) => void;
	setPosition: (position: 'bottom-right' | 'bottom-left') => void;
	setDimensions: (height: string, width: string) => void;
	addMessage: (message: Message) => void;
	clearMessages: () => void;
	setApiEndpoint: (endpoint: string) => void;
}

export const useWidgetConfigStore = create<ChatState>()(
	persist(
		(set) => ({
			// Default values
			widgetTitle: 'Hi there 👋',
			primaryColor: '#4f46e5',
			position: 'bottom-right',
			height: '90vh',
			width: '385px',
			messages: [],
			apiEndpoint: '/api/chat',

			// Actions to update the state
			setWidgetTitle: (title) => set({ widgetTitle: title }),
			setPrimaryColor: (color) => set({ primaryColor: color }),
			setPosition: (position) => set({ position }),
			setDimensions: (height, width) => set({ height, width }),
			addMessage: (message) =>
				set((state) => ({
					messages: [...state.messages, message],
				})),
			clearMessages: () => set({ messages: [] }),
			setApiEndpoint: (endpoint) => set({ apiEndpoint: endpoint }),
		}),
		{
			name: 'chat-widget-storage',
			partialize: (state) => ({
				messages: state.messages,
			}),
		}
	)
);
