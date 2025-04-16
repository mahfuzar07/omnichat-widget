export type Message = {
    id: string;
    content: string;
    sender: 'user' | 'bot';
    timestamp?: Date;
};
export interface ChatConfigProps {
    apiEndpoint?: string;
    widgetTitle?: string;
    primaryColor?: string;
    position?: 'bottom-right' | 'bottom-left';
    height?: string;
    width?: string;
    initialMessages?: Message[];
}
declare const OmniChatWidget: ({ apiEndpoint, widgetTitle, primaryColor, position, height, width, initialMessages }: ChatConfigProps) => import("react/jsx-runtime").JSX.Element | null;
export default OmniChatWidget;
