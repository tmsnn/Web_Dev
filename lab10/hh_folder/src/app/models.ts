export interface Company {
    id: number;
    name: string;
    description: string;
    city: string;
    address: string;
}


export interface Vacancy {
    id : number;
    name: string;
    salary: number;
    description: string;
    company: string;
}
