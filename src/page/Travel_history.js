import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

function TravelHistory() {
    const data = [
        { Location: 'Location 1', Description: 'Description 1' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        { Location: 'Location 2', Description: 'Description 2' },
        // Add more travel history data as needed
    ];

    const backgroundImage = {
        backgroundImage: `url(/forest1.jpg)`,
        backgroundSize: 'cover',
    };

    return (
        <div>
            <div className='border min-h-screen w-auto' style={backgroundImage}>
                <div className='min-h-screen p-4'>
                    <h1 className='text-4xl font-bold mb-8'>Travel History</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                        {data.map((item, index) => (
                            <Card key={index} className="w-full  sm:w-80 md:w-96">
                                <CardHeader floated={false} color="blue-gray" className="relative h-56">
                                    <img
                                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                                        alt="card-image"
                                        className="w-full h-full object-cover"
                                    />
                                </CardHeader>
                                <CardBody>
                                    <Typography variant="h5" color="blue-gray" className="mb-2">
                                        {item.Location}
                                    </Typography>
                                    <Typography>
                                        {item.Description}
                                    </Typography>
                                </CardBody>
                                <CardFooter className="pt-0">
                                    <Button>Read More</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelHistory;
