import React, { useState } from "react";

function ChangeAddress({ setAdress, setIsOpenModal }) {
  const [newAddress, setNewAdress] = useState("");
  const onClose=()=>{
    setAdress(newAddress);
    setIsOpenModal(false);
  }
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter new address"
          className="border p-2 w-full border-r-amber-400"
          onChange={(e)=>setNewAdress(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
            onClick={() => setIsOpenModal(false)}
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={onClose}
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeAddress;
