"use client"

import type { Model } from "@/types"
import { useState } from "react"
import { Button } from "./base/button"
import { Input } from "./base/input"

interface DataTableProps {
  data: Model[]
}

export function DataTable({ data: initialData }: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Model
    direction: "asc" | "desc"
  } | null>(null)

  const itemsPerPage = 10

  // Sorting
  const sortedData = [...initialData].sort((a, b) => {
    if (!sortConfig) return 0
    const { key, direction } = sortConfig
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1
    return 0
  })

  // Filtering
  const filteredData = sortedData.filter((item) => item.modelName.toLowerCase().includes(searchTerm.toLowerCase()))

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (key: keyof Model) => {
    setSortConfig((current) => ({
      key,
      direction: current?.key === key && current.direction === "asc" ? "desc" : "asc",
    }))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search by Name, ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-sm font-medium text-gray-500 cursor-pointer"
                onClick={() => handleSort("modelName")}
              >
                Model Name {sortConfig?.key === "modelName" && (sortConfig.direction === "asc" ? "↑" : "↓")}
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Model Type</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Description</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Created On</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Last Trained On</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{item.modelName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.modelType}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.description}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.createdOn}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{item.lastTrainedOn}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <button className="text-gray-400 hover:text-gray-500">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} results
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(Math.max(0, currentPage - 3), Math.min(totalPages, currentPage + 2))
            .map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "primary" : "outline"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          <Button
            variant="outline"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

