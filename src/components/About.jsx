import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import '../App.css';
import FleetwoodLogo from '../images/Fleetwood160x160.jpg';
import TruckMountain from '../images/TruckMountain_small.jpg';

const About = () => {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <div className="about-container">
            <div className="hero-section">
                <img src={TruckMountain} alt="Truck in the mountains" className="hero-image" />
                <div className="hero-content">
                    <img src={FleetwoodLogo} alt="Jones Logistics" className="company-logo" />
                    <h1 className="hero-title">Welcome to Jones Logistics</h1>
                    <p className="hero-subtitle">
                        As an agency operating under Priority 1, Inc., we bring over 50 years of combined experience 
                        in freight logistics across the United States. Our team consistently delivers reliable, 
                        efficient solutions for all your transportation needs.
                    </p>
                </div>
            </div>
            
            <div className="services-container">
                <h1>Our Services</h1>
                <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="services-tabs"
                fill
            >
                <Tab eventKey="experience" title="Experience">
                    <div className="service-content">
                        <h2>Industry Experience</h2>
                        <div className="service-details">
                            <p>
                                Our team brings over 50 years of combined experience in freight logistics throughout the United States. 
                                As a Top 25 Priority 1 Inc Agency for 4 years running, we've established ourselves as a preferred 
                                provider for several Colorado Breweries and maintain excellent relationships with clients across various industries.
                            </p>
                        </div>
                    </div>
                </Tab>

                <Tab eventKey="projects" title="Special Projects">
                    <div className="service-content">
                        <h2>Special Projects</h2>
                        <div className="service-details">
                            <p>
                                We specialize in handling complex logistics projects, including the relocation of Flying Dog Brewery 
                                from Colorado to Maryland, high-rise construction project deliveries throughout the United States, 
                                and heavy haul equipment moves to Fairbanks, Alaska. Our expertise in coordinating specialized 
                                freight ensures successful project completion.
                            </p>
                        </div>
                    </div>
                </Tab>

                <Tab eventKey="services" title="Services">
                    <div className="service-content">
                        <h2>Comprehensive Freight Solutions</h2>
                        <div className="service-details">
                            <p>
                                We handle all types of freight including less than truckload, flatbed, van, refrigerated, and 
                                expedited shipments. Leveraging Priority 1 Inc's advanced technology platform, we provide 
                                cost-effective solutions with real-time tracking and superior customer service. Our commitment 
                                to quality and reliability makes us your ideal logistics partner.
                            </p>
                        </div>
                    </div>
                </Tab>

                <Tab eventKey="warehousing" title="Warehousing">
                    <div className="service-content">
                        <h2>Warehouse Partner Services</h2>
                        <div className="service-details">
                            <p>
                                We offer flexible warehousing solutions to accommodate your needs, from temporary storage 
                                during project delays to long-term inventory management. Our experience includes handling 
                                specialized cargo such as solar panels and brewery equipment, providing full inventory 
                                receiving and strategic delivery scheduling to optimize your supply chain.
                            </p>
                        </div>
                    </div>
                </Tab>
            </Tabs>
            </div>
        </div>
    );
};

export default About;
