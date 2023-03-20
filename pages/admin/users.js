import AdminHeader from "@/components/AdminHeader";
import { useEffect } from "react";
import { useState } from "react";
import UserGrid from "@/components/UserGrid";

export default function Users() {
  return (
    <>
      <AdminHeader />
      <UserGrid />
    </>
  );
}
