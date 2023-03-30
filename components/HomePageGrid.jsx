import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePageGrid({ user }) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className="HomePageGrid">
        {data?.map((user) => (
          <Link href={`/user/${user.name}`} key={user.id}>
            <div className="HomePageCard">
              <img src={user.image_url} />
              <h2>{user.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
