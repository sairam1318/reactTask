import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const LearningObjectieve = () => {
    const topic = [{LearningObjectieve: ""}]
    const [topics, setTopics] = useState(topic);
    const handleAdd = (e) => {
        const { name, value } = e.target;
        if(name === "LearningObjectieve"){
            setTopics((preTitle) => value);
        }
        
    }
    return (
    <>
    <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          name="learningObjectieve"
          placeholder="Enter learning objectieve"
        />
        <Form.Text className="text-muted"></Form.Text>
        
      </Form.Group>
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>
      <div>
          {topics.map(topic => (
              <p>{topic.LearningObjectieve}</p>
          ))}
      </div>
      </>);
}