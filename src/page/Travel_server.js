import React from 'react';
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    CardHeader,
    CardBody,
    Rating,
    CardFooter

} from "@material-tailwind/react";

function Travel_server() {

    const [openNav, setOpenNav] = React.useState(false);

    const gotodetail = (event) => {
        window.location.href = '/travel_detail';
    };

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    const data = [
        { Location: 'Location 1', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 2', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 3', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 4', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 5', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 6', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 7', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 8', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 9', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 10', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 11', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 12', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        { Location: 'Location 13', Description: 'Description ', rating: 5, datetime: '01/12/2545' },
        // Add more travel history data as needed
    ];

    const backgroundImage = {
        backgroundImage: `url(/forest1.jpg)`,
        backgroundSize: 'cover',
    };






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
                <div className=' ml-4 min-h-screen w-auto' style={backgroundImage}>
                    <div className=' flex   grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div className=' w-1/2 m-5 bg-brown-700'>
                            <div className=' m-5'>
                                <div className=' bg-white'>ooooo</div>
                                <div className=' bg-white'>ooooo</div>
                                <div className=' bg-white'>ooooo</div>
                                <div className=' bg-white'>ooooo</div>
                            </div>

                        </div>
                        <div className='w-1/2 m-5 bg-deep-orange-500'>
                            <div className=' m-5'>
                                <div className=' bg-white'>ooooo</div>
                                <div className=' bg-white'>ooooo</div>
                                <div className=' bg-white'>ooooo</div>
                                <div className=' bg-white'>ooooo</div>
                            </div>

                        </div>
                    </div>
                    <div className=' w-full bg-blue-gray-700'>
                        <div className=' flex'>
                            <div>
                                <Card className="mt-6 w-96">
                                    <CardHeader floated={false} color="blue-gray" className="relative h-56">
                                        <img
                                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                            alt="card-image"
                                        />
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2">
                                            UI/UX Review Check
                                        </Typography>
                                        <Typography>
                                            The place is close to Barceloneta Beach and bus stop just 2 min by
                                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                            night life in Barcelona.
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="pt-0">
                                        <Button>Read More</Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel_server;
