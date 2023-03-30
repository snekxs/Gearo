import Header from "@/components/Header";
import { ErrorRounded } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ColorThief from "colorthief";
import { useState, createRef, useRef } from "react";

export default function UserPage(name) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [imageData, setImageData] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    fetch(`/api/user/${name.name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        // Handle the error appropriately (e.g. show an error message to the user)
      });
  }, []);

  if (error) {
    return <h1>User not found</h1>;
  } else {
    return (
      <div>
        <Header />
        {data?.map((user) => (
          <div className="UserCard" key={user.id}>
            <img src={user.image_url} />
            <h1>{user.name}</h1>
            <h1>Created Yesterday</h1>
            <div className="userStatus">
              <h1>Online</h1>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { name } = context.query;

  return { props: { name } };
}
