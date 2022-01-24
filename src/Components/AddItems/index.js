import React, {useRef, useState} from 'react';
import {
    AlertDialog, AlertDialogOverlay,
    Button,
    Input,
} from "@chakra-ui/react";
import './addItems.css'

const AddItems = (props) => {

    const refToMyToDoListItem = useRef()
    // const cancelRef = useRef()
    const [isOpen, setIsOpen] = useState(true)

    const onClose = () => {
        console.log('isopen :' ,isOpen)
        setIsOpen(false)
        props.todo(false)

    }
    console.log("ISOPEn",isOpen)

    const addItemsHandler = () => {
        console.log("im clicked")
        const itemValue = refToMyToDoListItem.current.value
        props.getValueFromInputBar(itemValue)
        onClose()
        refToMyToDoListItem.current.value =''
    }


    return (
        <AlertDialog
            isOpen={isOpen}
            // leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <div className={"AddItems"}>
                    <h1> ADD TO LIST</h1>
                    <Input
                        placeholder='Add items'
                        size='sm'
                        ref={refToMyToDoListItem}
                    />
                    <Button size='sm' variant='ghost' onClick={addItemsHandler}>add</Button>
                </div>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

export default AddItems;


// const [isOpen, setIsOpen] = React.useState(false)
// const onClose = () => setIsOpen(false)
// const cancelRef = React.useRef()
//
// const [todo, setToDo] = useState(false)
// const [itemValue, setItemValue] = useState('')
// const addItemsHandler = () => {
//     console.log("clicked")
//     setToDo(true)
//     setIsOpen(true)
// }
// const getValueFromInputBar = (e) => {
//     setItemValue(e)
// }
//
// var alert =  <AlertDialog
//     isOpen={isOpen}
//     leastDestructiveRef={cancelRef}
//     onClose={onClose}
// >
//     <AlertDialogOverlay>
//         <AddItems getValueFromInputBar={getValueFromInputBar} close={onClose}/>
//     </AlertDialogOverlay>
// </AlertDialog>