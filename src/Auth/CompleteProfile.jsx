import React, { useState } from "react";

const CompleteProfile = () => {
  const [formValues, setFormValues] = useState({
    venueImage: null,
    venueName: "",
    ownerName: "",
    email: "",
    contact: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Values:", formValues);
    // handle API submission
  };

  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 lg:px-0 bg-[#0F0B1A]">
      <div className="w-full max-w-lg p-8 border  border-[#2A2448] rounded-lg bg-[#822CE71A]">
        <h2 className="text-2xl font-semibold text-white mb-2 italic">Complete Your Venue Profile</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Provide your Venue details so bartenders can view and accept your shift requests.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Upload Venue Image */}
          <div>
            <label className="text-gray-400 block mb-1">Upload Venue Image</label>
            <input
              type="file"
              name="venueImage"
              accept="image/*"
              onChange={handleChange}
              className="w-full text-white border border-[#2A2448] rounded-lg bg-[#1D1733] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#822CE7]"
              required
            />
          </div>

          {/* Venue Name */}
          <div>
            <label className="text-gray-400 block mb-1">Venue Name</label>
            <input
              type="text"
              name="venueName"
              value={formValues.venueName}
              onChange={handleChange}
              placeholder="Enter venue name"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="text-gray-400 block mb-1">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formValues.ownerName}
              onChange={handleChange}
              placeholder="Enter owner name"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-400 block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="text-gray-400 block mb-1">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={formValues.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="text-gray-400 block mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formValues.location}
              onChange={handleChange}
              placeholder="Enter venue location"
              className="w-full px-3 py-2 bg-[#1D1733] border border-[#2A2448] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#822CE7] placeholder-white/70"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-[#822CE7] to-[#BB82FF] py-3 text-white rounded-full shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;