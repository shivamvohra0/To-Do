import { useState } from "react";
import { useForm } from "react-hook-form";
import { Showdata } from "./Showdata";

export const AddTask = () => {

    const [Data, addData] = useState([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        addData((prev) => [...prev, data]);

        console.log("Data: ", data);

        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Title: </label>
                <input
                    {...register("title", {
                        required: "Add task title"
                    })}
                />

                {errors.title && (
                    <p>{errors.title.message}</p>
                )}

                <br />
                <br />

                <label>Description: </label>
                <textarea
                    {...register("description", {
                        required: "Add task description"
                    })}
                />

                {errors.description && (
                    <p>{errors.description.message}</p>
                )}

                <br />

                <button type="submit">
                    Add Task
                </button>

            </form>

            <Showdata data={Data} />
        </>
    );
};