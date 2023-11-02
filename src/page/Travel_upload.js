import React, { useState } from 'react';

function Travel_upload() {
    const backgroundImage = {
        backgroundImage: `url(/forest1.jpg)`, // แทนตำแหน่งของรูปภาพที่ต้องการใช้
        backgroundSize: 'cover',
        // ขนาดของภาพ
        // คุณสามารถเพิ่ม style อื่น ๆ ที่ต้องการเพิ่มในภาพพื้นหลังได้ตามต้องการ
    };


    const [pathUpload, setPathUpload] = useState("N/A");
    console.log(pathUpload);

    const handleInputChange = (event) => {
        setPathUpload(event.target.value);
    };
    return (
        <div>
            <div style={backgroundImage} className=' flex items-center justify-center min-h-screen min-w-screen' >
                <div className=' rounded-lg justify-center p-5'>
                    <h1 className='font-bold text-slate-600 text-5xl text-center mb-6'>JOURNAL FORM</h1>
                    {/* location preview */}
                    <div
                        style={{ width: "400px", height: "300px" }}
                        className=' bg-slate-100 opacity-25 border rounded-xl   border-black '>
                        {pathUpload !== "N/A" && (
                            <div dangerouslySetInnerHTML={{ __html: pathUpload }} />
                        )}
                    </div>
                    <div className="w-full ">
                        <label className="  text-white font-semibold block my-3 text-md">Embed Map</label>
                        <input
                            onChange={handleInputChange}
                            className="w-full opacity-25 placeholder-black bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="pathUpload"
                            placeholder="Link your map"
                        />
                    </div>
                    <div className="w-full">
                        <label className=" text-white font-semibold block my-3 text-md">Location Name</label>
                        <input
                            className="w-full bg-gray-100 opacity-25 placeholder-black px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="locationName"
                            placeholder="Location name"
                        />
                    </div>
                    <div className="w-full">
                        <label className=" text-white font-semibold block my-3 text-md">Address</label>
                        <input
                            className="w-full bg-gray-100 opacity-25 placeholder-black px-4 py-2 rounded-lg focus:outline-none"
                            type="text"
                            name="address"
                            placeholder="Address"
                        />
                    </div>
                    <div className="w-full">
                        <label className=" text-white font-semibold block my-3 text-md">Description</label>
                        <textarea
                            className="w-full h-40 bg-gray-100 opacity-25 placeholder-black px-4 py-2 rounded-lg focus:outline-none"
                            name="description"
                            placeholder="Description"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel_upload;

