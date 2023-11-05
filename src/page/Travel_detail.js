
import React from 'react';
import { useState,useEffect } from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,

} from "@material-tailwind/react";

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

    const [openNav, setOpenNav] = React.useState(false);

    const backgroundImage = {
        backgroundImage: `url(/city.jpg)`, // แทนตำแหน่งของรูปภาพที่ต้องการใช้
        backgroundSize: 'cover',
        // ขนาดของภาพ
        // คุณสามารถเพิ่ม style อื่น ๆ ที่ต้องการเพิ่มในภาพพื้นหลังได้ตามต้องการ
    };

    const gotodetail = (event) => {
        window.location.href = '/travel_detail';
    };

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Account
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Blocks
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Docs
                </a>
            </Typography>
        </ul>
    );
    return (
        <div className="-m-6 min-h-screen w-[calc(100%+48px)] overflow-scroll">
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        Material Tailwind
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="text"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Log In</span>
                            </Button>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Sign in</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
            <div className="mx-auto ">
           
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
        </div>
    );
}

export default Travel_detail;
