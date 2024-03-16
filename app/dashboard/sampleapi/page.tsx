import { InventoryList } from "@/app/lib/definition";
import { useEffect, useState } from "react";

export default async function Home() {
  try {
    const url = `http://localhost:3000/api/blogs`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const json = await response.json();

    if (!json || !json.results) {
      throw new Error("Invalid JSON data");
    }

    const dataResponse = json.results;

    return (
      <div>
        {dataResponse.map((inventory: InventoryList) => (
          <div key={inventory.id}>
            <p>This is {inventory.mac_address}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data. Please try again later.</div>;
  }
}
