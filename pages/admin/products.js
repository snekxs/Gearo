import AdminHeader from "@/components/AdminHeader";
import ProductGrid from "@/components/ProductGrid";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export default function Products() {
  const [log, setLog] = useState();
  const router = useRouter();
  useEffect(() => {
    const logged = sessionStorage.getItem("logged");
    if (logged) {
      setLog(true);
    }
  }, []);

  if (log) {
    return (
      <>
        <AdminHeader />
        <ProductGrid />
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
