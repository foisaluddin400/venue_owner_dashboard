import React from "react";
import { Navigate } from "../../Navigate";
import { FiEye, FiDownload } from "react-icons/fi";
import QRCode from "react-qr-code"; // optional if you want dynamic QR
import { Link } from "react-router-dom";
import StripeIco from "../../components/icon/StripeIco";
import EditIcon from "../../components/icon/EditIcon";

const ManageProfile = () => {
  const venue = {
    name: "Midnight Lounge",
    owner: "Daniel Roberts",
    email: "daniel@midnightlounge.com",
    contact: "+1 (512) 555-0199",
    location: "Austin, Texas, USA",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto">
      <Navigate title="Manage Profile" />
      <div className="flex items-center gap-4">
        <img
          src={"https://i.pravatar.cc/150?img=1"}
          alt="Venue Logo"
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>
      {/* Venue Details */}
      <div className="mt-6 border text-white border-[#2A2448] rounded-xl  space-y-3">
        <div className="border-b italic border-[#2A2448] p-3">
          <h1>My Information </h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400 italic">Full Name</p>
            <p>{venue.name}</p>
          </div>
         
          <div>
            <p className="text-gray-400 italic">Email Address</p>
            <p>{venue.email}</p>
          </div>
          <div>
            <p className="text-gray-400 italic">Contact Number</p>
            <p>{venue.contact}</p>
          </div>
        
        </div>
      </div>

         <div className="mt-6 border border-[#2A2448] rounded-xl ">
        <div className="border-b border-[#2A2448] text-white italic p-3">
          <h1>Connected Account </h1>
        </div>
        <div className="p-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-[#822CE71A] border border-[#822CE7] p-4 rounded-xl">
              <StripeIco></StripeIco>
            </div>
            <div>
              <p className=" text-[#635BFF] text-[24px] font-bold ">
                Stipe
              </p>
              <p className="text-white text-sm">
              4242 4242 4242 4242
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="bg-[#822CE71A] p-3 rounded-lg hover:bg-[#3A2B5C]">
              <EditIcon className="text-[#822CE7]" />
            </button>
       
          </div>
        </div>
      </div>

      {/* Update Details Button */}
      <div className="flex gap-4  mt-6">
        <Link to={"/dashboard/updateProfile"}>
          <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
            Update Details
          </button>
        </Link>
        <Link to={"/dashboard/updatePassword"}>
          <button className="bg-gradient-to-tr w-[185px] from-[#DC3545] to-[#FE4C5D] text-white shadow-md px-3 py-2 rounded-full">
            Update Password
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageProfile;
