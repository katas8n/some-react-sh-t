export interface ITaskTypes {
    id: number;
    title: string,
    description: string; // My description
    hasEditMode?: boolean;
    setEditMode?: () => void
    onEditHandler?: (id: number, value: string) => void
    onDeleteTaskHandler?: (id: number) => void
}