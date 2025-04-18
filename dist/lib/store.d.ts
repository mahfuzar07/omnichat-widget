type WidgetToggleState = {
    widgetOpen: boolean;
    toggleWidget: () => void;
    openWidget: () => void;
    closeWidget: () => void;
};
export declare const useWidgetToggleStore: import('zustand').UseBoundStore<import('zustand').StoreApi<WidgetToggleState>>;
export declare const getWitget: () => boolean;
type PageType = 'home' | 'article' | 'conversation' | 'contact' | null;
type PageState = {
    selectedPage: PageType;
    setSelectedPage: (page: PageType) => void;
};
export declare const usePageStore: import('zustand').UseBoundStore<import('zustand').StoreApi<PageState>>;
export type Message = {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp?: Date;
    files?: File[];
};
export interface ChatState {
    widgetTitle: string;
    primaryColor: string;
    position: 'bottom-right' | 'bottom-left';
    height: string;
    width: string;
    messages: Message[];
    apiEndpoint: string;
    setWidgetTitle: (title: string) => void;
    setPrimaryColor: (color: string) => void;
    setPosition: (position: 'bottom-right' | 'bottom-left') => void;
    setDimensions: (height: string, width: string) => void;
    addMessage: (message: Message) => void;
    clearMessages: () => void;
    setApiEndpoint: (endpoint: string) => void;
}
export declare const useWidgetConfigStore: import('zustand').UseBoundStore<import('zustand').StoreApi<ChatState>>;
export {};
