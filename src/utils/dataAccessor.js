const basePath = 'http://localhost:4000/api';

async function _makePostRequest (path, data) {
    const rawResponse = await fetch(`${basePath}${path}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const response = await rawResponse.json();
    return response;
}

async function _makePutRequest (path, data) {
    const rawResponse = await fetch(`${basePath}${path}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const response = await rawResponse.json();
    return response;
}

export default {
    async createGenerator ({
        sequencerType, pipeLineType, sequencerArgs
    }) {
        const data = await _makePostRequest('/v1.0/sequencer', { sequencerType, pipeLineType, sequencerArgs });
        return data;
    },

    async getNextSequence (uuid) {
        const data = await _makePutRequest(`/v1.0/sequencer/${uuid}`);
        return data;
    }
};
