export interface Article {
    id: string;
    title: string;
    author: string;
    timestamp: string;
    content?: string;
    readMoreLink: string;
    link: string;
}

export interface AccordionItem {
    title: string;
    content: React.ReactNode;
}