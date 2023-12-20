import React from "react";
import Navbar from "../components/Navbar";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="section-with-wave px-3">
        <h1 className="font-bold text-2xl mb-5">Pricing</h1>

        <div className="flex flex-wrap gap-3">
          <div className="min-w-96 flex p-6 bg-white border border-gray-200 rounded-lg shadow flex-col justify-between">
            <div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  TIER 1/Basic
                </h5>
              </a>
              <ul className="mb-3 list-disc px-6">
                <li>Mencatat barang masuk</li>
                <li>Mencatat barang keluar</li>
                <li>Mencatat hasil keuntungan</li>
              </ul>
            </div>
            <a
              href="#"
              className="flex items-center max-w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Rp 2.000.000
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-sm flex p-6 bg-white border border-gray-200 rounded-lg shadow flex-col justify-between">
            <div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  TIER 2/Business
                </h5>
              </a>
              <ul className="mb-3 list-disc px-6">
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
              </ul>
            </div>

            <a
              href="#"
              className="flex items-center max-w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Rp 4.000.000
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="max-w-sm flex p-6 bg-white border border-gray-200 rounded-lg shadow flex-col justify-between">
            <div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  TIER 3/Entrepreneur
                </h5>
              </a>
              <ul className="mb-3 list-disc px-6">
                <li>Mencatat barang masuk dan keluar</li>
                <li>Mencatat Keuntungan</li>
                <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                <li>Support 7x24 Jam</li>
                <li>Export data ke Excel</li>
                <li>AI Prediksi penghasilan</li>
              </ul>
            </div>
            <a
              href="#"
              className="flex items-center max-w-fit px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Rp 8.000.000
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
