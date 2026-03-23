import React from "react";
import { Navigate } from "../../Navigate";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BartenderDetails = () => {
  const bartender = {
    name: "Roberts Junior",
    email: "robert@canaletto.com",
    contact: "+1 (512) 555-0199",
    experience: "2 Years",
    skills: "CustomerService ",
    rating: "4.4 (112)",
    bio: "Experienced bartender with a passion for crafting unique cocktails and delivering excellent customer service.",
  };

  return (
    <div className="p-3 h-[87vh] overflow-auto text-white">
      <Navigate title="Manage Shifts" />

      {/* Profile Image */}
      <div className="flex items-center gap-4">
        <img
          src={"https://i.pravatar.cc/150?img=12"}
          alt="Bartender"
          className="w-20 h-20 object-cover rounded-lg"
        />
      
      </div>

      {/* Details */}
      <div className="mt-6 border border-[#2A2448] rounded-xl">
        <div className="border-b border-[#2A2448] italic p-3">
          <h1>Bartender Details</h1>
        </div>

        <div className="grid p-3 grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400 italic">Name</p>
            <p>{bartender.name}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Email</p>
            <p>{bartender.email}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Contact Phone</p>
            <p>{bartender.contact}</p>
          </div>

          <div>
            <p className="text-gray-400 italic">Experience</p>
            <p>{bartender.experience}</p>
          </div>

          <div>
            <p className="text-gray-400">Primary Bar Skills</p>
                <button className="bg-[#822CE71A] px-2 mt-1 text-[#822CE7] rounded-full ">{bartender.skills}</button>
          
          </div>

          <div>
            <p className="text-gray-400 italic">Overall Rating</p>
            <p className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              {bartender.rating}
            </p>
          </div>

          <div className="col-span-2">
            <p className="text-gray-400 italic">Short Bio</p>
            <p>{bartender.bio}</p>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-6">
        <Link to="/dashboard/ManageShifts/add_request">
          <button className="bg-gradient-to-tr w-[185px] from-[#822CE7] to-[#BB82FF] text-white shadow-md px-3 py-2 rounded-full">
            Send Shift Request
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BartenderDetails;