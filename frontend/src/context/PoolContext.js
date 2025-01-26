import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPoll, submitVote } from '../services/pollService';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
    const { pollId } = useParams();
    const [poll, setPoll] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const loadPoll = async () => {
            if (!pollId) return;
            console.log('Fetching poll data...');
            try {
                const pollData = await fetchPoll(pollId);
                console.log('Fetched Poll Data:', pollData);
                setPoll(pollData);
            } catch (error) {
                console.error('Error loading poll:', error);
            }
        };
        loadPoll();
    }, [pollId]);

    const handleOptionSelect = (option) => {
        console.log('Selected Option:', option);
        setSelectedOption(option);
    };

    const handleSubmitVote = async () => {
        if (!selectedOption) {
            alert('Please select an option before submitting!');
            return;
        }

        setIsSubmitting(true);
        console.log('Submitting vote...');
        try {
            await submitVote(pollId, selectedOption);
            alert('Vote submitted successfully!');
            console.log('Refreshing poll data...');
            const updatedPoll = await fetchPoll(pollId);
            setPoll(updatedPoll);
        } catch (error) {
            alert('Failed to submit vote. Please try again.');
            console.error('Error submitting vote:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PollContext.Provider
            value={{
                poll,
                selectedOption,
                isSubmitting,
                handleOptionSelect,
                handleSubmitVote,
            }}
        >
            {children}
        </PollContext.Provider>
    );
};

export const usePoll = () => {
    return useContext(PollContext);
};
