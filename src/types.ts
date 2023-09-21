export enum Priority {
  HIGH,
  MEDIUM,
  LOW
}
export interface Item {
  id: number
  title: string
  created: number
  priority: Priority
  completed: boolean
}
