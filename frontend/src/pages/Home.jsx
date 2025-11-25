import React from 'react';
import HeroSection from '../components/home/HeroSection';
import MissionVision from '../components/home/MissionVision';
import ActivitiesGrid from '../components/home/ActivitiesGrid';
import LeadershipCarousel from '../components/home/LeadershipCarousel';
import EventsTeaser from '../components/home/EventsTeaser';
import StatsCounter from '../components/home/StatsCounter';

const Home = () => {
    return (
        <div className="home-page">
            <HeroSection />
            <MissionVision />
            <ActivitiesGrid />
            <LeadershipCarousel />
            <EventsTeaser />
            <StatsCounter />
        </div>
    );
};

export default Home;
