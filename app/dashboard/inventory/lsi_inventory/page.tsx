
import { lusitana } from "@/app/ui/fonts";
import InventoryTable from "@/app/ui/inventory/lsitable";



export default function LSIInventory(){
    
    return (
        <div className="w-full">
            <h1 className={`${lusitana.className} text-2xl`}> LSI Inventory</h1>
            <InventoryTable />
        </div>
    )
}