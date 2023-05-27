import React, { useState } from 'react';
import { GetAllTodoList, DeleteTodoById, EditTodoById } from '../todoAPI'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';

const TodoItem = ({ item, setItemList }) => {
    const { ID, Description } = item;
    const [description, setDescription] = useState(Description)
    const [isEditing, setIsEditing] = useState(false)

    const handleDelete = async () => {
        //  console.log('handleDelete, ID:', ID)

        try {
            const responseCode = await DeleteTodoById(ID);
            console.log("responseCode", responseCode);
            if (responseCode === 200) {
                console.log(`todo item ${ID} deleted`)
                const todoList = await GetAllTodoList()
                setItemList(todoList)
            } else {
                throw new Error(`failed to remove item ${ID}`);
            }

        } catch (err) {
            console.log("error in deleteTodoById", err)
        }

    };

    const handleEdit = () => {
        console.log('handleEdit, ID:', ID, description)
        setIsEditing(true)
    }

    const handleEditCancel = () => setIsEditing(false)
    const handleSubmit = async () => {
        setIsEditing(false)
        // submit to backened
        try {
            const responseCode = await EditTodoById(ID, description);
            console.log("res code: ", responseCode)
            if (responseCode === 200) {
                console.log(`todo item ${ID} updated`)
                const todoList = await GetAllTodoList()
                setItemList(todoList)
                // console.log('submitting to backend', ID, description)

            } else {
                throw new Error(`failed to update item ${ID}`);
            }
        } catch (err) {
            console.log("error in submitting the todoEdit", err);
        }


    }

    const handleTodoChange = (event) => {
        // console.log('todoChange', event.target.value)
        setDescription(event.target.value)
    }
    const label = { inputProps: { 'aria-label': 'todo checkbox' } };
    return <Box sx={{ flexGrow: 1 }} key={ID} >
        <Grid container spacing={8}>
            <Grid item xs={1}>
            <Checkbox {...label} />
            </Grid>

            <Grid item xs={3}>
                {
                    isEditing ?
                        <input type="text" value={description} onChange={handleTodoChange} />
                        :
                        <span>{description}</span>
                }
            </Grid>
            <Grid item xs={2}>
                {
                    isEditing ?
                        <div>
                            <button onClick={handleSubmit} >Submit</button> {" "}
                            <button onClick={handleEditCancel} >Cancel</button>
                        </div>
                        : <button onClick={handleEdit} >Edit</button>
                }

            </Grid>
            <Grid item xs={2}><button onClick={() => handleDelete(ID)}>Delete</button></Grid>
        </Grid>
    </Box>
}

export default TodoItem