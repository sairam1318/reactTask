import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import { DeleteTopic } from "./DeleteTopic";

export function SyllabusForm(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  const [topic, setTopic] = useState();
  const [learningObjectieve, setLearningObjectieve] = useState([]);

  const handleFormControlChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "title") {
      setTitle((preTitle) => value);
    } else if (name === "desc") {
      setDesc((preDesc) => value);
    }
    
  };

  const handleChange = (e) => {
    setTopic(e.target.value);

  }
  const handleSaveForm = (event) => {
    props.formSaved({ ...props, ...{ title: title, desc: desc, topics: learningObjectieve } });
  };
  const handleAdd = (e) => {
    setLearningObjectieve((oldlearningObjectieve) => {
      return [...oldlearningObjectieve, topic];
    });
    setTopic("");
  }
  const handleDeleteTopics = (id) => {
    // setLearningObjectieve((oldlearningObjectieves) => {
    //   return oldlearningObjectieves.filter((learningObjectieve, index) => {
    //     return index !== id;
    //   })
    // })
    const newLearningObjectieve = learningObjectieve.filter((Lo, index) => {
      return index !== id
    });
    setLearningObjectieve(newLearningObjectieve);
    
  }

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={handleFormControlChange}
        />
        <Form.Text type="text" className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="desc"
          placeholder="Enter Desc"
          value={desc}
          onChange={handleFormControlChange}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="topics"
          placeholder="Enter learning objecieve"
          onChange={handleChange}
          value = {topic}
        />
        <Form.Text className="text-muted"></Form.Text>
        
      </Form.Group>
      <Button variant="primary" onClick={(e, index)=>{handleAdd(e, index)}}>
        Add
      </Button>
      <div>
         {learningObjectieve.map((learn, index) => {
           return <>
           <li>{learn}
           <DeleteTopic id= {index} handleDelete={handleDeleteTopics}/>
           </li>
           </>
         })}
      </div>
      <Button variant="primary" onClick={handleSaveForm}>
        Save
      </Button>
    </Form>
  );
}
