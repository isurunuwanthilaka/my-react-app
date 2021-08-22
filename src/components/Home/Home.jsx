import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddNewTodoModal from "../AddTodoModal/AddNewTodoModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Button type="submit" onClick={onClickHandler}>
        Add
      </Button>
      {showModal && (
        <AddNewTodoModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </Container>
  );
};

export default Home;
