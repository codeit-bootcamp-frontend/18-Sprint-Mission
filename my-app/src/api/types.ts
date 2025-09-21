export interface ItemData {
  isCompleted: boolean;
  imageUrl?: string;
  memo?: string;
  name: string;
  tenantId?: string;
  id: number;
}

export interface ListProps {
  items: ItemData[];
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export interface EditorProps {
  onCreate: (name: string) => void;
}

export interface ChecklistProps {
  id: number;
  name: string;
  isCompleted: boolean;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}
