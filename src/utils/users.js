const users = []

//add users
const addUser = ({id, username, room}) => {

    //clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate data
    if(!username || !room) {
        return{
            error: 'Username and room are required'
        }
    }

    //Check for existing user
    const existingUser = users.find(user => {
        return user.room === room && user.username === username
    })
    if (existingUser) {
        return {
            error: 'Username already exist'
        }
    }

    const user = {id, username, room}
    users.push(user)
    return {user}
}

//Remove user

const removeUser =  id => {
    const index = users.findIndex(user => user.id === id)
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

//Get User
const getUser = id => {
    const index = users.findIndex(user => user.id === id)
    if(index === -1){
        return undefined
    }
    return users[index]
}

//Get users in a room
const getUsersInRoom = room => {
    //room = room.trim().toLowerCase
    return users.filter((user) => user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}