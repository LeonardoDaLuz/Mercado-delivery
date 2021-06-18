const enable = true;

function logErrorToFront(resp, error) {
    console.log(error.toString());
    if (enable) {
        resp.status(500).send("INTERNAL SERVER ERROR: \n\n" + error.stack);
    } else {
        resp.status(500).send("Internal server Error...");
    }
}

module.exports = logErrorToFront;