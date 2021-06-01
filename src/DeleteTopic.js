import {Button } from "react-bootstrap";
export const DeleteTopic = (props) => {
    return (
        <>
         <Button variant="danger" onClick={()=>props.handleDelete(props.id)}>x</Button>
        </>
    );
}