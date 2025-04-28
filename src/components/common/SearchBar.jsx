import React from 'react'
import { FiUsers } from 'react-icons/fi';
import { GrFlag } from 'react-icons/gr';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { LuSend } from 'react-icons/lu';

const SearchBar = () => {
    return (
        <>
            <div className='w-full max-w-7xl mx-auto mb-5 text-black dark:text-white'>
                <div className="flex flex-col md:flex-row items-end justify-center gap-4 p-4 w-full bg-white rounded-lg shadow-md">
                    <fieldset className="fieldset flex-1 w-full">
                        <legend className="fieldset-legend font-kaushan text-black text-base sm:text-lg font-semibold pt-0 pb-1">Destination</legend>
                        <label className="input w-full">
                            <LuSend />
                            <input type="text" className="grow" placeholder="Where to go?" />
                        </label>
                    </fieldset>
                    <fieldset className="fieldset flex-1 w-full">
                        <legend className="fieldset-legend font-kaushan text-black text-base sm:text-lg font-semibold pt-0 pb-1">Type</legend>
                        <label className="input w-full">
                            <GrFlag />
                            <select defaultValue="Activity Type" className="select h-7 py-0 outline-none w-full border-0 bg-transparent shadow-none focus:shadow-none focus:outline-none">
                                <option disabled={true} className="dark:bg-[#111111] dark:text-white">Activity Type</option>
                                <option className="dark:bg-[#111111] dark:text-white">City Tour</option>
                                <option className="dark:bg-[#111111] dark:text-white">Beach</option>
                                <option className="dark:bg-[#111111] dark:text-white">Adventure</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset className="fieldset flex-1 w-full">
                        <legend className="fieldset-legend font-kaushan text-black text-base sm:text-lg font-semibold pt-0 pb-1">When</legend>
                        <label className="input w-full">
                            <HiOutlineCalendarDateRange />
                            <input type="date" className="flex-1" placeholder="Date" />
                        </label>
                    </fieldset>
                    <fieldset className="fieldset flex-1 w-full">
                        <legend className="fieldset-legend font-kaushan text-black text-base sm:text-lg font-semibold pt-0 pb-1">Guests</legend>
                        <label className="input w-full">
                            <FiUsers />
                            <input type="number" className="grow" placeholder="0" />
                        </label>
                    </fieldset>
                    <button className="bg-[#f8d448] w-full md:w-auto text-black rounded-md px-4 py-2 hover:bg-[#f8d448cc] transition duration-300 mb-1">Search</button>
                </div>
            </div>
        </>
    )
}

export default SearchBar;