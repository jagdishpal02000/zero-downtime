const server = require("./app");

let PORT = process.env.LISTEN_PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = server;

/**
 * Normal Variables camelCase
 * LIBs are all caps
 * constansts are all caps
 * 
 */  