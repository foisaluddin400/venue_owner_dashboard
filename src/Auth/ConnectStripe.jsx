import React from "react";
import { FiShield, FiLink } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import DollarIco from "../components/icon/DollarIco";
import SecurityIco from "../components/icon/SecurityIco";
import SetUpIco from "../components/icon/SetUpIco";
import { Link } from "react-router-dom";

const ConnectStripe = () => {
  return (
    <div className="flex font-nunito justify-center items-center min-h-screen px-4 bg-[#0F0B1A]">
      <div className="w-full max-w-lg p-6 lg:p-8 border border-[#2A2448] rounded-2xl bg-[#1A1333]">

        {/* Top Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-700 text-white text-xl font-semibold">
            <DollarIco></DollarIco>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl font-semibold text-white italic">
          Connect Stripe
        </h2>

        <p className="text-center text-gray-400 text-sm mt-2 mb-6">
          Connect your Stripe account to receive customer product payments securely.
        </p>

        {/* Feature Box */}
        <div className="border border-[#2A2448] rounded-xl p-4 mb-5 bg-[#161126]">
          {/* Secure Payments */}
          <div className="flex gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#822CE7]">
              <SecurityIco></SecurityIco>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Secure Payments</p>
              <p className="text-gray-400 text-xs">
                Receive payments directly to your bank account through Stripe’s secure processing system.
              </p>
            </div>
          </div>

          {/* Fast Setup */}
          <div className="flex gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-[#822CE7] ">
              <SetUpIco></SetUpIco>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Fast Setup</p>
              <p className="text-gray-400 text-xs">
                Connect your Stripe account in just a few clicks.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#822CE71A] border border-[#2A2448] rounded-xl p-4 mb-6">
          <p className="text-white text-sm font-semibold mb-2">
            About Payments & Platform Charges
          </p>

          <div className="flex items-start text-gray-300 text-xs">
            <BsDot className="mt-1 text-lg" />
            <p>Product payments go through Stripe (5% platform fee per transaction).</p>
          </div>

          <div className="flex items-start text-gray-300 text-xs mt-1">
            <BsDot className="mt-1 text-lg" />
            <p>Shift payments are handled directly between Venue owner and bartender.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
         <Link to={'/'}>
          <button className="flex-1 py-2 rounded-full border border-[#822CE7] text-purple-400 hover:bg-purple-600 hover:text-white transition">
            Connect Stripe Account
          </button></Link>

          <button
            disabled
            className="flex-1 py-2 rounded-full bg-purple-900 text-gray-400 cursor-not-allowed"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectStripe;