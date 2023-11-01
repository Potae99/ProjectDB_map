import React, { useState } from 'react';

function Travel_upload() {
    const [path_upload, setPath_upload] = useState("N/A");
    console.log(path_upload);

    const handleInputChange = (event) => {
        setPath_upload(event.target.value);
    };

    return (
        <div className='flex bg-white min-h-screen '>
            
            <div className=' justify-center ml-3 mr-3'>
                <h1 className=' font-bold text-5xl text-center'>Jornal from</h1>
                {/* location preview */}
                <div
                    style={{ width: "400px", height: "300px" }}
                    className=' bg-slate-100 border ml-8 border-black '>
                    {path_upload !== "N/A" && (
                        <div dangerouslySetInnerHTML={{ __html: path_upload }} />
                    )}
                </div>
                <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md" >ฝังแผนที่</label>
                    <input
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                        type="text"
                        name="path_upload"
                        placeholder="Link your map"
                    />
                </div>
                <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md" >ชื่อสถานที่</label>
                    <input
                        className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                        type="text"
                        name="lacation_name"
                        placeholder="Location name"
                    />
                </div>
                <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md" >ที่อยู่</label>
                    <input
                        className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                        type="text"
                        name="address"
                        placeholder="Address"
                    />
                </div>
                <div>
                    <label className="text-gray-800 font-semibold block my-3 text-md" >คำบรรยาย</label>
                    <input
                        className="w-full bg-gray-100 px-40 py-20 rounded-lg focus:outline-none"
                        type="text"
                        name="Description"
                        placeholder="Description"
                    />
                </div>
            </div>

        </div>
    );
}

export default Travel_upload;
