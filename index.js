function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    string = string.toUpperCase();
    return console.log(string);
}

function logWhisper(string) {
    string = string.toLowerCase();
    return console.log(string);
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}