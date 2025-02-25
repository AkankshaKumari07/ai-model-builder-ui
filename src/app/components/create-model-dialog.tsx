"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { CreateModelForm } from "@/types"
import { useState } from "react"

interface CreateModelDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateModelDialog({ open, onOpenChange }: CreateModelDialogProps) {
  const [formData, setFormData] = useState<CreateModelForm>({
    modelName: "",
    modelType: "",
    llm: "",
    modelDescription: "",
  })

  const handleSubmit = () => {
    console.log("Form Data:", formData)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create new model</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Input
              id="modelName"
              placeholder="Model Name"
              value={formData.modelName}
              onChange={(e) => setFormData({ ...formData, modelName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <Select
              value={formData.modelType}
              onValueChange={(value) => setFormData({ ...formData, modelType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Model Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="extraction">Extraction</SelectItem>
                <SelectItem value="classification">Classification</SelectItem>
                <SelectItem value="generation">Generation</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Select value={formData.llm} onValueChange={(value) => setFormData({ ...formData, llm: value })}>
              <SelectTrigger>
                <SelectValue placeholder="LLM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
                <SelectItem value="claude">Claude</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Textarea
              id="modelDescription"
              placeholder="Model Description"
              value={formData.modelDescription}
              onChange={(e) => setFormData({ ...formData, modelDescription: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-[#4F46E5] hover:bg-[#4F46E5]/90" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

