declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId?: string | Date,
      config?: {
        page_title?: string;
        page_location?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        non_interaction?: boolean;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

export {};