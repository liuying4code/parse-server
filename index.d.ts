declare class ParseServer {
    constructor(options?: {
        databaseURI?: string,
        cloud?: string,
        appId?: string,
        masterKey?: string,
        serverURL?: string,
        liveQuery?: {
            classNames?: string[]
        }
    });
}

exports = ParseServer;