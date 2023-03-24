import AdminHeader from "@/components/AdminHeader";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import UserGrid from "@/components/UserGrid";

export default function Users() {
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
        <UserGrid />
      </>
    );
  } else {
    return (
      <div className="unauthorized">
        <Link href={"/admin"}>
          <h1>Unauthorized.</h1>
        </Link>
      </div>
    );
  }
}
