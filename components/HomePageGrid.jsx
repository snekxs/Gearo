import Link from "next/link";
import { useEffect, useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

export default function HomePageGrid() {
  const [modalsOpen, setModalsOpen] = useState([]);
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setModalsOpen(new Array(data.length).fill(false));
      });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "75%",
    bgcolor: "background.paper",
    borderRadius: 20,
    outline: "none",
    //boxShadow: 24,
  };

  function handleModalOpen(index) {
    setModalsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  }

  function handleModalClose(index) {
    setModalsOpen((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  }

  function createdDays(dateString) {
    const diffTime = Math.abs(new Date() - new Date(dateString));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 0
      ? "Created today"
      : diffDays === 1
      ? "Created yesterday"
      : `Created ${diffDays} days ago`;
  }

  function status(status) {
    if (status) {
      return (
        <div className="userStatus">
          <h1>Online</h1>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="HomePageGrid">
        {data?.map((user, index) => (
          <React.Fragment key={user.id}>
            <div
              className="HomePageCard"
              onClick={() => handleModalOpen(index)}
            >
              <img src={user.image_url} />
              <h2>{user.name}</h2>
            </div>
            <Modal
              open={modalsOpen[index]}
              onClose={() => handleModalClose(index)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="UserCard">
                  <img src={user.image_url} />
                  <h1>{user.name}</h1>
                  <h1 className="UserCreated">
                    {createdDays(user.created_at)}
                  </h1>
                  {status(user.online)}
                </div>
              </Box>
            </Modal>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
