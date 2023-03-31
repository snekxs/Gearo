import Header from "@/components/Header";
import {
  CompassCalibrationSharp,
  DataSaverOff,
  ErrorRounded,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ColorThief from "colorthief";
import { useState, createRef, useRef } from "react";
import supabase from "@/components/helpers/Supabase";

export default function UserPage({ users }) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [imageData, setImageData] = useState(null);
  const userCardRef = useRef(null);

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

  if (error) {
    return <h1>User not found</h1>;
  } else {
    return (
      <div>
        <Header />
        {users?.map((user) => (
          <div className="UserCard" key={user.id} ref={userCardRef}>
            <img src={user.image_url} />
            <h1>{user.name}</h1>
            <h1 className="UserCreated">{createdDays(user.created_at)}</h1>
            {status(user.online)}
          </div>
        ))}
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { name } = context.query;
  console.log(name);
  try {
    await supabase
      .from("users")
      .select("*")
      .eq("name", name)
      .then((response) => {
        const users = response.users;
        return { props: { users } };
      });

    if (error) throw error;
  } catch (error) {
    return { props: { error: true } };
  }
}
