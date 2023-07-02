import React, { PropsWithChildren } from "react";
import Sidebar from "../sidebar/Sidebar";
import { useRouter } from "next/router";
import { Paths } from "@/types/display/paths";

const MainLayout = ({ children }: PropsWithChildren) => {
  const router = useRouter()

  return (
    <main>
      <div className="flex">
        <div>
          {router.pathname !== Paths.Login ? <Sidebar /> : null}
        </div>
        <div className="w-full p-10">
          {children}
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
