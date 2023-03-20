import AdminHeader from "@/components/AdminHeader";
import ProductGrid from "@/components/ProductGrid";
import { useState } from "react";
import { useEffect } from "react";

export default function Products() {
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
        <ProductGrid />
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
