import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({onAdd ,onCancel}){

    const modal = useRef();
    const title = useRef();
    const Description =useRef();
    const dueDate =useRef();

    function handleSave(){
       
        const enteredTitle =title.current.value;
        const enteredDescription =Description.current.value;
        const enteredDueDate = dueDate.current.value;

  if(enteredTitle.trim()==='' || enteredDescription.trim()===''|| enteredDueDate.trim()===''){
    console.log("we are here")
 modal.current.open();
 return;
  }

     
        onAdd({
            title:enteredTitle,
            Description:enteredDescription,
            dueDate:enteredDueDate
        })

    }
    return(
        <>
        <Modal ref={modal} buttonCaption="Okay">
            <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
            <p className='text-stone-600 mb-4'>Oops ,,loooks like you entered a wrong value</p>
            <p className='text-stone-600 mb-4'>Please fill Right info</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4 ">
                <li><button onClick={handleSave} className="text-stone-800 hover:text-stone-950">Save</button></li>
                <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onCancel}>Cancel</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={Description} label="Description" textarea/>
                <Input type="date" ref={dueDate} label="Due Date" />

            </div>
        </div>
        </>
    )
}