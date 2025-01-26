import React, { createContext, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPoll, submitVote } from '../services/pollService';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
    const { pollId } = useParams();
    const navigate = useNavigate();
    const [poll, setPoll] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const loadPoll = async () => {
            if (!pollId) return;
            try {
                const pollData = await fetchPoll(pollId);
                setPoll(pollData);
            } catch (error) {
                console.error('Error loading poll:', error);
            }
        };
        loadPoll();
    }, [pollId]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleSubmitVote = async () => {
        if (!selectedOption) {
            alert('Please select an option before submitting!');
            return;
        }
        setIsSubmitting(true);
        try {
            const pollData = await submitVote(pollId, selectedOption);
            setPoll(pollData);
            alert('Vote submitted successfully!');
            navigate(`/results/${pollId}`);
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
