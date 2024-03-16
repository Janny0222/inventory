"use client"
import { useState } from "react";
import { tableName } from "@/app/lib/company";
import { lusitana } from "@/app/ui/fonts";
import GPCInventoryTable from "@/app/ui/inventory/gpctable";
import LSIInventoryTable from "@/app/ui/inventory/lsitable";
import Dropdown from "./dropdown";

interface DropdownProps {
    onCompanyChange: (value: string) => void;
}

export default function SampleRender() {
    const [sample, setSample] = useState<string>("");
    const [tblName, setTblName] = useState<string>("");
    // const inventories = await fetchGPCInventoryList()
    // console.log(inventories)
    const handleCompanyChange = (value: string) => {
        setSample(value)
    }
    const table = (value: string) => {
        let name = tableName.find(company => company.name === value)?.displayName || sample
        setTblName(name)
    }

     return (
        <div className="w-full">
         <h1 className={`${lusitana.className} text-2xl`}> {tblName} Inventory</h1>
         <div className="flex items-center mt-4">
                 <label className="mr-2">Select Company:</label>
                 <Dropdown onCompanyChange={handleCompanyChange} name={table}/>
             </div>
                 {/* Use curly braces to embed JavaScript expressions */}
                 { sample === "gpc_inventory" && <GPCInventoryTable />}
                 { sample === "lsi_inventory" && <LSIInventoryTable/>}
        </div>
     )
}
