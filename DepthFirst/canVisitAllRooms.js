var canVisitAllRooms = function(rooms) {
    let visited = new Set();
    helper(rooms, 0, visited);
    return visited.size === rooms.length;
};
var helper = function(rooms, roomNo, visited) {
    visited.add(roomNo);
    const keys = rooms[roomNo];
    for (let i = 0; i < keys.length; i++) {
        if (!visited.has(keys[i])) {
            helper(rooms, keys[i], visited);
        }
    }
}