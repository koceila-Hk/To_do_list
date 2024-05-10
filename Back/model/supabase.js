
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klndatptwxaqnzxzyfsr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsbmRhdHB0d3hhcW56eHp5ZnNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQxMjM0NjIsImV4cCI6MjAyOTY5OTQ2Mn0.aadCCItKJo0loZdLLMiTMoALOuYq1peV6RraySRwPic'
const supabase = createClient(supabaseUrl, supabaseKey)



//////////////// Add user 
async function add_user(info) {
    try {
        let { data, error } = await supabase
        .from('users')
        .insert(info)
        .select();

        return { data, error };
    } catch (error) {
        return { error: error.message };
    }
}

///////////////  Add task
async function addTask(userID,task) {
    try {
        let { data, error } = await supabase
        .from('todolist')
        .insert([
            {id_user: userID,task:task}
        ])

        return { data, error };
    } catch (error) {
        return { error: error.message };
    }
}

/////////////// Add status
// async function addStatus(task,status,name) {
//     try {
//         // let { data, error } = await supabase
//         // .from('todolist')
//         // .insert([
//         //     {id_user: userID,status: status}
//         // ])
//         let {data:name,error:errorName} = await supabase
//         .from('users')
//         .select('id')
//         .eq('username', name)

//         const id_user= name[0].id;

//         const { data, error } = await supabase
//         .from('todolist')
//         .update({ status: status })
//         .eq('task', task)
//         .eq('id_user', id_user[0].id)
//         .select()
//         console.log(task);

//         return { data, error };
//     } catch (error) {
//         return { error: error.message };
//     }
// }

/////////////// GetName

async function getUsername(username) {
    try {
        let {data,error} = await supabase
        .from('users')
        .select('id')
        .eq('username', username)

        // console.log('donnée: ', data);
        return ({data,error});
    } catch (error) {
        return { error: error.message};
    }
}


// async function getUser(user){
// let { data: todolist, error } = await supabase
// .from('todolist')
// .select('*')
// .eq('id_user',user)
// return todolist;
// }


async function addStatus(taskStatus, name) {
    try {
        const { data: userData, error: nameError } = await supabase
            .from('users')
            .select('id')
            .eq('username', name);

        if (!userData || userData.length === 0) {
            return { error: 'Utilisateur non trouvé.' };
        }

        const userId = userData[0].id;

        ////////// Make sure the task exists before updating the status
        const { data: taskData, error: taskError } = await supabase
            .from('todolist')
            .select('id')
            .eq('id_user', userId);

        if (!taskData || taskData.length === 0) {
            return { error: 'Aucune tâche trouvée pour cet utilisateur.' };
        }

        ///////// Update status
        const taskId = taskData[0].id;

        const { data, error } = await supabase
            .from('todolist')
            .update({ status: taskStatus })
            .eq('id', taskId);

        return { data, error };
    } catch (error) {
        return { error: error.message };
    }
}

export {add_user, addTask, addStatus, getUsername };
