
export interface IProject {
    title       : string;
    website     : string;
    image       ?: string;
    gitHubRepo  : string;
    description : string;
    credentials ?: IProjectCredentials[];
    priority    ?: number;
}

export interface IProjectCredentials {
    user:        string;
    password:    string;
    description: string;
    title:       string;
}