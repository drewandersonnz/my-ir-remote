function getRemote(remote) {
    switch (remote) {
        case 'yamaha-rx-v863': return require('./remote.yamaha.rx-v863.js'); break;
    };
}

module.exports = {
    getRemote: getRemote,
};
