import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

export function SyllabusForm(props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);

  const handleFormControlChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "title") {
      setTitle((preTitle) => value);
    } else if (name === "desc") {
      setDesc((preDesc) => value);
    }
    
  };
  const [topic, setTopic] = useState();
  const [learningObjectieve, setLearningObjectieve] = useState([]);
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
      <Button variant="primary" onClick={(e)=>{handleAdd(e)}}>
        Add
      </Button>
      <div>
         {learningObjectieve.map(learn => {
           return <li>{learn}</li>
         })}
      </div>
      <Button variant="primary" onClick={handleSaveForm}>
        Save
      </Button>
    </Form>
  );
}
