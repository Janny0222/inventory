import { useState, useEffect } from "react";
import { tableName } from "@/app/lib/company";
import { lusitana } from "@/app/ui/fonts";
import GPCInventoryTable from "@/app/ui/inventory/gpctable";
import LSIInventoryTable from "@/app/ui/inventory/lsitable";

interface DropdownProps {
    onCompanyChange: (value: string) => void,
    name: (value: string) => any
}

export default function Dropdown({onCompanyChange, name}: DropdownProps){
    const [sample, setSample] = useState<string>("");
    const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const values = event.target.value
    onCompanyChange(values);
    name(values);
    // window.location.href = `/dashboard/inventory/${values}`;
   }
   
    return (
       
        <select onChange={handleCompanyChange}>
            <option value="">Select</option>
            {tableName.map(company => (
                
            <option key={company.name} value={company.name}>{company.name}</option>
            
            ))}
        </select>
          
    )
}