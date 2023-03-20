import { useState, useEffect } from "react";

export default function UserGrid() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className="users-grid">
        {users
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((user) => (
            <div className="users-card" key={user.id}>
              <img
                src={user.image_url}
                alt={user.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg";
                }}
              />
              <h2>{user.name}</h2>
              <p>Mouse: {user.mouse}</p>
              <p>Mousepad: {user.mousepad}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
