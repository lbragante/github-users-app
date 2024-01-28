export interface AlertModel {
    title: string;
    description: string;
    context: 'success' | 'info' | 'danger';
}