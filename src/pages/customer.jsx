import React from 'react';
import customersData from '../data/customer.json';
import theBangkokImage from '../assets/images/thebangkok.jpg';
import centricImage from '../assets/images/centrictiwanon.jpg';
import chamberImage from '../assets/images/chambersratchada.jpg';
import supalaiImage from '../assets/images/supalaicasariwa.jpg';
import ideoImage from '../assets/images/ideosathorn.jpg';
import primeImage from '../assets/images/primesukumvit11.jpg';
import villaImage from '../assets/images/villaasoke.jpg';
import montalaImage from '../assets/images/supalaimontala.jpg';

export default function Customer() {
    const images = {
        thebangkok: theBangkokImage,
        centric: centricImage,
        chamber: chamberImage,
        supalai: supalaiImage,
        ideo: ideoImage,
        prime: primeImage,
        villa: villaImage,
        montala: montalaImage,
    };

    return (
        <div className="bg-dark flex items-center justify-center h-screen px-8 py-4">
            <div>
                <div className="font-bold text-center">
                    <h1 className="badge badge-neutral badge-lg text-lg text-gray-300">Our customer</h1>
                    <h1 className="text-xl text-gray-900 pt-2">ลูกค้าของเรา</h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8 pt-6 text-gray-900 font-semibold">
                    <div className="relative flex overflow-hidden py-5 group">
                        <div className="animate-marquee flex flex-nowrap gap-10 items-center hover:[animation-play-state:paused]">
                            {customersData.customers.map((customer, index) => (
                                <div key={index} className="card bg-teal-50 w-60 shadow-xl">
                                    <figure>
                                        {customer.image ? (
                                            <img
                                                src={images[customer.image] || ''}
                                                height={200}
                                                width={200}
                                                alt={customer.name}
                                            />
                                        ) : (
                                            <div>No Image Available</div>
                                        )}
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-center text-gray-900">{customer.name}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
