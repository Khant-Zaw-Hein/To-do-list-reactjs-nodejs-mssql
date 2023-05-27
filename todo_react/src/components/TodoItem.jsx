import React, { useState } from 'react';
import { GetAllTodoList, DeleteTodoById, EditTodoById } from '../todoAPI';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const TodoItem = ({ item, setItemList }) => {
    // console.log(item);

    const { ID, Description, isChecked } = item;
    const [description, setDescription] = useState(Description);
    const [isEditing, setIsEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(isChecked);

    // const handleDelete = async () => {
    //     try {
    //         const responseCode = await DeleteTodoById(ID);
    //         console.log("responseCode", responseCode);
    //         if (responseCode === 200) {
    //             console.log(`todo item ${ID} deleted`);
    //             const todoList = await GetAllTodoList();
    //             setItemList(todoList);
    //         } else {
    //             throw new Error(`failed to remove item ${ID}`);
    //         }
    //     } catch (err) {
    //         console.log("error in deleteTodoById", err);
    //     }
    // };
    const handleDelete = async () => {
        try {
            const responseCode = await DeleteTodoById(ID);
            console.log("responseCode", responseCode);
            if (responseCode === 200) {
                console.log(`todo item ${ID} deleted`);
                const todoList = await GetAllTodoList();
                setItemList(todoList);
            } else {
                throw new Error(`failed to remove item ${ID}`);
            }
        } catch (err) {
            console.log("error in deleteTodoById", err);
        }
    };

    const handleEdit = () => {
        console.log('handleEdit, ID:', ID, description);
        setIsEditing(true);
    };

    const handleEditCancel = () => setIsEditing(false);
    const handleSubmit = async () => {
        setIsEditing(false);
        try {
            const responseCode = await EditTodoById(ID, description);
            console.log("res code: ", responseCode);
            if (responseCode === 200) {
                console.log(`todo item ${ID} updated`);
                const todoList = await GetAllTodoList();
                setItemList(todoList);
            } else {
                throw new Error(`failed to update item ${ID}`);
            }
        } catch (err) {
            console.log("error in submitting the todoEdit", err);
        }
    };

    const handleTodoChange = (event) => {
        setDescription(event.target.value);
    };

    const handleCheckboxStatusToggle = () => { 
        setIsCompleted(!isCompleted)
        // update database
        
    }

    const label = { inputProps: { 'aria-label': 'todo checkbox' } };

    return (
        <Box sx={{ flexGrow: 1 }} key={ID}>
            <Grid 
                display="flex"
                alignItems="center"
                container spacing={{xs:8, sm:8, md:8}}>
                <Grid item xs={1}>
                    <Checkbox {...label} checked={isCompleted} onClick={handleCheckboxStatusToggle}/>
                </Grid>

                <Grid item xs={3} md={3}>
                    {isEditing ? (
                        <TextField variant="outlined" defaultValue={description} />
                        // <input type="text" value={description} onChange={handleTodoChange} />
                    ) : (
                        
                        <span style={ isCompleted ? { textDecoration: "line-through" }: {}}>{description}</span>

                    )}
                </Grid>
                <Grid item xs={2}>
                    {isEditing ? (
                        <div>
                            <Button variant="contained" onClick={handleSubmit}>Submit</Button>{" "}
                            <Button variant="contained" onClick={handleEditCancel}>Cancel</Button>
                        </div>
                    ) : (
                        <Button variant="contained" onClick={handleEdit}>Edit</Button>
                    )}
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleDelete}>Delete</Button>
                </Grid>
            </Grid>
        </Box>
    );
};
export default TodoItem;