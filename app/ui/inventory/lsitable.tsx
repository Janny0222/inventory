'use client'
import { fetchLSIInventoryList } from "@/app/lib/data"
import { tableName } from "@/app/lib/company";
import { useEffect } from "react";
import { useState } from "react";
import { InventoryList } from "@/app/lib/definition";


export default  function LSInventoryTable (){
  const [inventories, setInventories] = useState<InventoryList[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLSIInventoryList();
      setInventories(data);
    }
    fetchData();
  }, [])
    return (
    <div className="flow-root mt-6">
      <div className="inline-block min-w-full align-middle">
        <div className="p-2 rounded-lg bg-gray-50 md:pt-0">
          <div className="md:hidden">
            {inventories?.map((inventory) => (
              <div
                key={inventory.id}
                className="w-full p-4 mb-2 bg-white rounded-md"
              >
                <div className="flex items-center justify-between pb-4 border-b">
                  <div>
                    <div className="flex items-center mb-2">
                      <p>{inventory.pc_name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{inventory.mac_address}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {inventory.computer_type}
                    </p>
                    <p>{inventory.specs}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        <table className=" min-w-full text-gray-900 md:table">
            <thead className="text-sm font-normal text-left rounded-lg">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  PC Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Mac Address
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Computer Type
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Specs
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Supplier
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date Purchased
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {inventories.map((inventory) => (
                <tr
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <p>{inventory?.pc_name}</p>
                    </div>
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {inventory.mac_address}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {inventory.computer_type}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {inventory.specs}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {inventory.supplier}
                  </td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {inventory.date_purchased}
                  </td>
                  <td className="py-3 pl-6 pr-3 whitespace-nowrap">
                    <div className="flex justify-end gap-3">

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>     
    )
}