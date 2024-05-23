(function() {

    io.on('connection', function(socket) {

        console.log('Socket.IO Connection Is Made :');
        console.log('Client connected');
        socket.on("hello new client", function() {
            log("you are now connected");
        });
        socket.emit("check", "you are now connected");
        socket.on('disconnect', () => console.log('Client disconnected'));

        socket.on("contacts-save", function(contacts) {
            log("Received Profile :");
            log(contacts.profile);
            log("Received Contacts :");
            log(contacts.contacts.length);

        });
    });

})()