"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/layout/Button";
import { createClient } from "@/lib/supabase/client";

const AdminLogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  return <Button name="Sair" onClick={handleLogout} />;
};

export default AdminLogoutButton;
