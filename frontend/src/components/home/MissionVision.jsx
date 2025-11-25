import React from 'react';
import TerminalWindow from '../common/TerminalWindow';
import '../../styles/globals.css';

const MissionVision = () => {
    return (
        <section style={{ padding: 'var(--spacing-xxl) var(--spacing-lg)', background: 'var(--terminal-black)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>

                <TerminalWindow title="MISSION_STATEMENT.txt">
                    <div className="font-mono" style={{ color: 'var(--bright-white)' }}>
                        <span style={{ color: 'var(--logo-blue)' }}>&gt; MISSION:</span><br />
                        <br />
                        To foster a collaborative environment where students can explore, innovate, and excel in the fields of Artificial Intelligence, Robotics, and IoT. We aim to bridge the gap between theoretical knowledge and practical application through hands-on projects and peer learning.
                    </div>
                </TerminalWindow>

                <TerminalWindow title="VISION_2025.txt">
                    <div className="font-mono" style={{ color: 'var(--bright-white)' }}>
                        <span style={{ color: 'var(--logo-red)' }}>&gt; VISION:</span><br />
                        <br />
                        To become a leading student-led innovation hub that empowers the next generation of tech leaders to solve real-world problems using cutting-edge technologies. We envision a community where creativity meets code.
                    </div>
                </TerminalWindow>

            </div>
        </section>
    );
};

export default MissionVision;
