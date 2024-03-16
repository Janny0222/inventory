
import { lusitana } from "@/app/ui/fonts";
import InventoryTable from "@/app/ui/inventory/gpctable";
import { useState } from "react";
import GPCInventoryTable from "@/app/ui/inventory/gpctable";
import GPCInventoryTableTest from "@/app/ui/inventory/testfetch";

export default function GPCInventory(){
    const sample = "gpc_inventory"
    
    return (
        
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}> GPC Inventory</h1>
            {/* <GPCInventoryTable /> */}
            <GPCInventoryTableTest />
        </div>
        
    )
}