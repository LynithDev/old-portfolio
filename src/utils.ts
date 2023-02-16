export const getMetadata = async (): Promise<Metadata> => new Promise(async (resolve, reject) => {
    if (window.metadata) {
        resolve(window.metadata);
        return;
    }

    try {
        window.metadata = await (await fetch('https://raw.githubusercontent.com/LynithDev/meta-data/master/projects.json')).json();
        resolve(window.metadata);
    } catch (e) {
        reject(e);
    }
});
