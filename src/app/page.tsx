"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./components/base/button";
import { Input } from "./components/base/input";
import { CreateModelDialog } from "./components/create-model-dialog";
import { DataTable } from "./components/data-table";
import { Sidebar } from "./components/sidebar";
import { generateDummyData } from "@/data";
import { CreateModelForm } from "@/types";

export default function Page() {
  const [isCreateModelOpen, setIsCreateModelOpen] = useState(false);
  const [models, setModels] = useState<CreateModelForm[]>([])

  const data = generateDummyData();

  useEffect(() => {
    const savedModels = JSON.parse(localStorage.getItem("models") || "[]")
    setModels(savedModels)
  }, [])
  
  const handleModelSave = (newModel: CreateModelForm) => {
    const updatedModels = [...models, newModel]
    setModels(updatedModels)
    localStorage.setItem("models", JSON.stringify(updatedModels))
  }

  return (
    <div className="hidden md:block text-black">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="text-lg text-gray-500">AI/ML Model Builder</div>
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <svg
                className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <Input className="pl-8" placeholder="Search" />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <div className="relative h-8 w-8">
                <Image
                  src="/images/avatar.jpg"
                  alt="Avatar"
                  className="rounded-full"
                  fill
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex">
        <Sidebar className="border-r" />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Model Library</h2>
            <div className="flex items-center space-x-2">
              <Button onClick={() => setIsCreateModelOpen(true)}>
                Create New Model
              </Button>
            </div>
          </div>
          <DataTable data={data} />
        </div>
      </div>
      <CreateModelDialog
        isOpen={isCreateModelOpen}
        onClose={() => setIsCreateModelOpen(false)}
        onModelSave={handleModelSave}
      />
    </div>
  );
}
