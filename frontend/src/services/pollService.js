const BASE_URL = 'http://localhost:4000/api/polls';

export const fetchPoll = async (pollId) => {
    try {
        const response = await fetch(`${BASE_URL}/${pollId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch poll data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching poll:', error);
        throw error;
    }
};

export const submitVote = async (pollId, option) => {
    try {
        const response = await fetch(`${BASE_URL}/${pollId}/vote/${encodeURIComponent(option)}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
            throw new Error('Failed to submit vote');
        }
        return await response.json();
    } catch (error) {
        console.error('Error submitting vote:', error);
        throw error;
    }
};
