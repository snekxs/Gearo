import { StatusPage, StatusPageConfig } from "react-healthy";
import AdminHeader from "@/components/AdminHeader";
import { useState, useEffect } from "react";
const statusPageConfig = {
  apis: [
    {
      name: "User API",
      endpoint: "/api/users",
    },
    {
      name: "Product API",
      endpoint: "/api/products",
    },
  ],
};

export default function ServerStatus() {
  const [log, setLog] = useState();

  useEffect(() => {
    const logged = sessionStorage.getItem("logged");
    if (logged) {
      setLog(true);
    }
  });
  if (log) {
    return (
      <>
        <AdminHeader />
        <div className="status">
          <StatusPage config={statusPageConfig} />
        </div>
      </>
    );
  } else {
    return (
      <div className="unauthorized">
        <h1>Unauthorized.</h1>
      </div>
    );
  }
}
