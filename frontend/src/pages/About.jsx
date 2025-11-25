import React from 'react';
import ClubStory from '../components/about/ClubStory';
import ObjectivesList from '../components/about/ObjectivesList';
import MentorsSection from '../components/about/MentorsSection';
import LeadershipCarousel from '../components/home/LeadershipCarousel'; // Reusing for now

const About = () => {
    return (
        <div className="about-page">
            <div style={{
                height: '40vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--terminal-black)',
                borderBottom: '1px solid var(--terminal-gray)'
            }}>
                <h1 className="font-mono" style={{ color: 'var(--electric-lime)' }}>&gt; ABOUT_US <span className="animate-blink">_</span></h1>
            </div>
            <ClubStory />
            <ObjectivesList />
            <LeadershipCarousel />
            <MentorsSection />
        </div>
    );
};

export default About;
