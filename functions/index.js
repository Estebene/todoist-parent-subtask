const functions = require("firebase-functions");
const { TodoistApi } =  require('@doist/todoist-api-typescript');

const api = new TodoistApi(`${process.env.ACCESS_TOKEN}`)

exports.events = functions.https.onRequest(async (request, response) => {
    let data = request.body
    let id = data.event_data.id

    if (data.event_data.parent_id) {
        parent_data = await api.getTask(data.event_data.parent_id)
        await api.updateTask(id, {content: `${parent_data.content} - ${data.event_data.content}`})
    }

    response.send("Completed");
});
