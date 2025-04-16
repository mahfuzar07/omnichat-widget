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
export interface Message {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp?: Date;
}
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
export declare const useWidgetConfigStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<ChatState>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import('zustand/middleware').PersistOptions<ChatState, unknown>>) => void;
        clearStorage: () => void;
        rehydrate: () => Promise<void> | void;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: ChatState) => void) => () => void;
        onFinishHydration: (fn: (state: ChatState) => void) => () => void;
        getOptions: () => Partial<import('zustand/middleware').PersistOptions<ChatState, unknown>>;
    };
}>;
export {};
