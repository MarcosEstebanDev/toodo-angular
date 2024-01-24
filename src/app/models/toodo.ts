export interface ToodoModel {
    id: number;
    title: String;
    completed: boolean;
    editing:boolean;
}
export type FilerType =  'all' | 'active' | 'completed'