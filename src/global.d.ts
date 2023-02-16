declare interface Metadata {
    icons: {
        [key: string]: string
    },
    socials: {
        [key: string]: string
    }
    projects: {
        name: string,
        thumbnail: string,
        icons: string[],
        link: string,
        repository: string,
    }[],
}

declare interface Window {
    observer: IntersectionObserver | undefined,
    metadata: Metadata | undefined,
}
