import { title } from "framer-motion/client";
import { useForm } from "react-hook-form";

export const AddTask=()=>{
    const {
        register,
        handleSubmit,
        formState:{errors},
        reset
    }=useForm()

    const onSubmit=(data)=>{
        console.log("Data: ",data)
        reset()

    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="">Title: </label>
            <input {...register("title",{required:"add task title"})} />
            {errors.title && <p>{errors.title.message}</p>}
            <br></br>
            <br></br>

            <label htmlFor="">Discription: </label>
            <textarea {...register("discription",{required:"add task discription"})} />
            {errors.discription && <p>{errors.discription.message}</p>}
            <br/>

            <button type="submit">Add Task</button>

        </form>
    )
}