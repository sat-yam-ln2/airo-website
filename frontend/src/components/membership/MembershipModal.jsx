import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import TerminalWindow from '../common/TerminalWindow';
import ProgressBar from './ProgressBar';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import api from '../../utils/api';
import '../../styles/globals.css';

const MembershipModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const methods = useForm();
    const { handleSubmit } = methods;

    if (!isOpen) return null;

    const onSubmit = async (data) => {
        try {
            await api.post('members/members/', data);
            alert('Application Submitted Successfully!');
            onClose();
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Failed to submit application. Please try again.');
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000
        }}>
            <div style={{ width: '90%', maxWidth: '600px' }}>
                <TerminalWindow title="MEMBERSHIP_APPLICATION.exe">
                    <ProgressBar currentStep={step} totalSteps={3} />

                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {step === 1 && <FormStep1 />}
                            {step === 2 && <FormStep2 />}
                            {step === 3 && <FormStep3 />}

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'var(--spacing-xl)' }}>
                                {step > 1 && (
                                    <button type="button" onClick={prevStep} style={{ color: 'var(--console-gray)' }}>
                                        &lt; PREV
                                    </button>
                                )}
                                {step < 3 ? (
                                    <button type="button" onClick={nextStep} style={{
                                        background: 'var(--logo-teal)',
                                        color: 'black',
                                        padding: '8px 24px',
                                        fontWeight: 'bold',
                                        marginLeft: 'auto'
                                    }}>
                                        NEXT &gt;
                                    </button>
                                ) : (
                                    <button type="submit" style={{
                                        background: 'var(--electric-lime)',
                                        color: 'black',
                                        padding: '8px 24px',
                                        fontWeight: 'bold',
                                        marginLeft: 'auto'
                                    }}>
                                        SUBMIT_APPLICATION
                                    </button>
                                )}
                            </div>
                        </form>
                    </FormProvider>
                </TerminalWindow>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    color: 'white',
                    fontSize: '2rem'
                }}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default MembershipModal;
