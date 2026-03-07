import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface Project {
    id: bigint;
    title: string;
    featured: boolean;
    role: Role;
    year: bigint;
    logline?: string;
}
export enum Role {
    Directed = "Directed",
    Produced = "Produced",
    Assisted = "Assisted"
}
export interface backendInterface {
    addProject(title: string, role: Role, year: bigint, logline: string | null, featured: boolean): Promise<void>;
    deleteProject(id: bigint): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactFormSubmission>>;
    getAllProjects(): Promise<Array<Project>>;
    getFeaturedProjects(): Promise<Array<Project>>;
    getProjectsByYear(year: bigint): Promise<Array<Project>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    updateProject(id: bigint, title: string, role: Role, year: bigint, logline: string | null, featured: boolean): Promise<void>;
}
