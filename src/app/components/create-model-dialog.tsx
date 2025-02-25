"use client"

import type { CreateModelForm } from "@/types"
import { useState } from "react"
import { Button } from "./base/button"
import { Input } from "./base/input"
import { Select } from "./base/select"
import { Modal } from "./modal"

interface CreateModelDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateModelDialog({ isOpen, onClose }: CreateModelDialogProps) {
  const [formData, setFormData] = useState<CreateModelForm>({
    modelName: "",
    modelType: "",
    llm: "",
    modelDescription: "",
  })

  const handleSubmit = () => {
    console.log("Form Data:", formData)
    onClose()
  }

  const modelTypes = [
    { value: "extraction", label: "Extraction" },
    { value: "classification", label: "Classification" },
    { value: "generation", label: "Generation" },
  ]

  const llmOptions = [
    { value: "gpt-4", label: "GPT-4" },
    { value: "gpt-3.5", label: "GPT-3.5" },
    { value: "claude", label: "Claude" },
  ]

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create new model">
      <div className="space-y-4">
        <Input
          placeholder="Model Name"
          value={formData.modelName}
          onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
        />
        <Select
          options={modelTypes}
          value={formData.modelType}
          onChange={(e) => setFormData({ ...formData, modelType: e.target.value })}
        />
        <Select
          options={llmOptions}
          value={formData.llm}
          onChange={(e) => setFormData({ ...formData, llm: e.target.value })}
        />
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          placeholder="Model Description"
          value={formData.modelDescription}
          onChange={(e) => setFormData({ ...formData, modelDescription: e.target.value })}
          rows={4}
        />
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </div>
      </div>
    </Modal>
  )
}

