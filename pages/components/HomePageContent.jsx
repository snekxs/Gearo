import { useEffect, useState } from "react";

export default function HomePageContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  /* return (
    <div className="homepage">
      {data.map((user) => (
        <div className="users" key={user.id}>
          {user.name}
          {user.mouse}
          {user.mosuepad}
        </div>
      ))}
    </div>
  ); */
}
