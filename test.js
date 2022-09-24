
const { TodoistApi } =  require('@doist/todoist-api-typescript');

const api = new TodoistApi("ACCESS_TOKEN")

let id = "6192953832"; 

api.updateTask(id, {content: "data"}).catch(error => console.log(error))
