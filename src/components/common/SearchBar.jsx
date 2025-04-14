import React from 'react'
import { FiUsers } from 'react-icons/fi';
import { GrFlag } from 'react-icons/gr';
import { HiOutlineCalendarDateRange } from 'react-icons/hi2';
import { LuSend } from 'react-icons/lu';

const SearchBar = () => {
    return (
        <>
            <div className='w-full sm:w-2/3 md:w-auto mx-auto'>
                <div className="flex flex-wrap md:flex-row items-end justify-center gap-4 p-4 w-full md:w-fit bg-white rounded-lg shadow-md">
                    <fieldset className="fieldset w-full md:w-auto">
                        <legend className="fieldset-legend font-kaushan text-black">What is your name?</legend>
                        <label className="input w-full">
                            <LuSend />
                            <input type="text" className="grow" placeholder="Where to go?" />
                        </label>
                    </fieldset>
                    <fieldset className="fieldset w-full md:w-auto">
                        <legend className="fieldset-legend font-kaushan text-black">What is your name?</legend>
                        <label className="input w-full">
                            <GrFlag />
                            <select defaultValue="Activity Type" className="select w-full ps-0 border-0 bg-transparent shadow-none focus:outline-none">
                                <option>Activity Type</option>
                                <option>City Tour</option>
                                <option>Beach</option>
                                <option>Adventure</option>
                            </select>
                        </label>
                    </fieldset>
                    <fieldset className="fieldset w-full md:w-auto">
                        <legend className="fieldset-legend font-kaushan text-black">What is your name?</legend>
                        <label className="input w-full">
                            <HiOutlineCalendarDateRange />
                            <input type="date" className="grow" placeholder="Date" />
                        </label>
                    </fieldset>
                    <fieldset className="fieldset w-full md:w-auto">
                        <legend className="fieldset-legend font-kaushan text-black">What is your name?</legend>
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