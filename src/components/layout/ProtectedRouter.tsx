import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { StorageKeys } from "../../core/constants/base.const";
import { homePath } from "../../core/util/pathBuilder.util";

export default function ProtectedRouter({ children }: PropsWithChildren<unknown>) {
  const navigate = useNavigate();


  const isLoggedIn_ = localStorage.getItem(StorageKeys.EMAIL);

  useEffect(() => {
    if (!isLoggedIn_) {
      navigate(homePath());
    }
  }, [isLoggedIn_, navigate]);

  return <>{children}</>;
}