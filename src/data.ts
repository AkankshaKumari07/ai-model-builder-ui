import type { Model } from "./types"

export const generateDummyData = (): Model[] => {
  const data: Model[] = []
  for (let i = 1; i <= 50; i++) {
    data.push({
      id: `ID-${i.toString().padStart(6, "0")}`,
      modelName: `Blonde Drizzle`,
      modelType: "Extraction",
      description: "Edit Customer ...",
      createdOn: "29/02/2024",
      lastTrainedOn: "29/02/2024",
      status: "Active",
    })
  }
  return data
}

