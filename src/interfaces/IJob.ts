export interface IJobDetails {
	order?: number;
	description: string;
}

export interface IJob {
	company: string;
	position: string;
	companyImg: string;
	years: string;
	details?: IJobDetails[];
	order: number;
}