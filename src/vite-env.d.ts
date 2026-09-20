interface ImportMetaEnv {
    VITE_NEWS_API_KEY: string;
    VITE_NEWS_API_URL: string;
    VITE_LOGO_API_URL: string;
    VITE_LOGO_PUBLISHABLE_API_KEY: string;
    VITE_SOURCES_ENDPOINT_PATH: string;
    VITE_TOP_HEADLINES_ENDPOINT_PATH: string;
    VITE_PRIME_UI_LICENSE_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}