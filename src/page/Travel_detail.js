import React from 'react'
import { useState,useEffect } from 'react';

function Travel_detail() {

    const travel_de = [{
        pathUploadd: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8255980112745!2d101.06633987541291!3d13.11023241182304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c607b74d2b3d%3A0xd5538bf7d4809dec!2z4Lin4Lix4LiU4LmA4LiC4Liy4LiV4Liw4LmB4Lia4LiB!5e0!3m2!1sth!2sth!4v1699031454004!5m2!1sth!2sth" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
        Locate: 'เขาพระตะแบก',
        Address: 'วัดเขาตะแบก 4369+3HV ทางหลวงหมายเลข 331 ตำบล หนองขาม อำเภอศรีราชา ชลบุรี 20110',
        describe: 'ดีย์',
    }];

    const [pathUpload, setPathUpload] = useState(travel_de[0].pathUploadd);
    
    useEffect(() => {
        console.log(pathUpload);
    }, [pathUpload]);



    const backgroundImage = {
        backgroundImage: `url(/city.jpg)`, // แทนตำแหน่งของรูปภาพที่ต้องการใช้
        backgroundSize: 'cover',
        // ขนาดของภาพ
        // คุณสามารถเพิ่ม style อื่น ๆ ที่ต้องการเพิ่มในภาพพื้นหลังได้ตามต้องการ
    };
    return (
        <div>
            <div style={backgroundImage} className=' flex items-center justify-center min-h-screen min-w-screen' >
                {travel_de.map((item, index) => (
                    <div className='rounded-lg justify-center  opacity-75 bg-black p-5'>
                        <h1 className='font-bold text-white text-5xl text-center mb-6'>JOURNAL DETAIL</h1>
                        {/* location preview */}
                        <div
                            style={{ width: "400px", height: "300px" }}
                            className=' bg-slate-100  border rounded-xl   border-black '>
                            {pathUpload !== "N/A" && (
                                <div dangerouslySetInnerHTML={{ __html: pathUpload }} />
                            )}
                        </div>
                        <div className="w-full ">
                            <label className="  text-white font-semibold block my-3 text-md">Embed Map</label>
                            <input
                               onChange={(event) => {
                                setPathUpload(event.target.value)
                            }}
                                className="w-full bg-gray-100 placeholder-black px-4 py-2 rounded-lg focus:outline-none"
                                type="text"
                                name="pathUpload"
                                placeholder="Link your map"
                                value={pathUpload}
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-white font-semibold block my-3 text-md">Location Name</label>
                            <input
                                className="w-full bg-gray-100 placeholder-black px-4 py-2 rounded-lg focus:outline-none"
                                type="text"
                                name="locationName"
                                placeholder={item.Locate}
                                value={item.Locate}
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-white font-semibold block my-3 text-md">Address</label>
                            <input
                                className="w-full bg-gray-100 placeholder-black px-4 py-2 rounded-lg focus:outline-none"
                                type="text"
                                name="address"
                                placeholder={item.Address}
                                value={item.Address}
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-white font-semibold block my-3 text-md">Description</label>
                            <textarea
                                className="w-full h-40 bg-gray-100 placeholder-black px-4 py-2 rounded-lg focus:outline-none"
                                name="description"
                                placeholder={item.describe}
                                value={item.describe}
                            ></textarea>
                        </div>
                    </div>))}
            </div>
        </div>
    )
}

export default Travel_detail