export interface Model {
  id: string
  modelName: string
  modelType: string
  description: string
  createdOn: string
  lastTrainedOn: string
  status: "Active" | "Inactive"
}

export interface CreateModelForm {
  modelName: string
  modelType: string
  llm: string
  modelDescription: string
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  children: React.ReactNode
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[]
  label?: string
}
