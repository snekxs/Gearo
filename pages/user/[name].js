import Header from "@/components/Header";
import { ErrorRounded } from "@mui/icons-material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import ColorThief from "colorthief";
import { useState, createRef, useRef } from "react";
import { supabase } from "@/components/helpers/Supabase";

export default function UserPage(name) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [imageData, setImageData] = useState(null);
  const imgRef = useRef();

  useEffect(() => {
    async function fetchData() {
      await supabase
        .from("users")
        .select("*")
        .eq("name", name.name)
        .then((response) => {
          setData(response.data);
        });
    }
    fetchData();
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
