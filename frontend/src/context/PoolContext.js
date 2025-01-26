import React, { createContext, useContext } from 'react';
import { useParams } from 'react-router-dom';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
    const { pollId } = useParams();


    console.log('PollProvider rendered');
    console.log('Poll ID from useParams:', pollId);

    return (
        <PollContext.Provider value={{ pollId }}>
            {children}
        </PollContext.Provider>
    );
};

export const usePoll = () => {
    return useContext(PollContext);
};
