import AdminHeader from "@/components/AdminHeader";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { supabase } from "@/components/helpers/Supabase";

export default function SiteSettings() {
  const [checked, setChecked] = useState(true);
  const [logged, setLogged] = useState();
  const [log, setLog] = useState();

  useEffect(() => {
    const logged = sessionStorage.getItem("logged");
    if (logged) {
      setLog(true);
    }
  });
  const handleChange = async () => {
    setChecked(!checked);
    if (checked === true) {
      await supabase
        .from("maintenance")
        .update({ maintenance: "true" })
        .eq("maintenance", "false");
    } else {
      await supabase
        .from("maintenance")
        .update({ maintenance: "false" })
        .eq("maintenance", "true");
    }
  };

  const textChange = () => {
    if (checked === true) {
      return "On";
    } else {
      return "Off";
    }
  };
  useEffect(() => {
    fetch("api/config")
      .then((response) => response.json())
      .then((data) => {
        const mode = data[0].maintenance;
        if (mode === true) {
          setChecked(!true);
        } else {
          setChecked(!false);
        }
      });
  }, []);
  if (log) {
    return (
      <>
        <AdminHeader />
        <div className="toggleMaintenance">
          <div>Turn {textChange()} Maintenance Mode</div>
          <Switch checked={!checked} onChange={handleChange} defaultChecked />
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
