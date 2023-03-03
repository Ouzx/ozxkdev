import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const useAccessToken = (): [
  string | undefined,
  React.Dispatch<React.SetStateAction<string | undefined>>
] => {
  const [token, setToken] = useState<string>();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setToken(session?.user?.accessToken);
    }
  }, [session]);

  return [token, setToken];
};

export default useAccessToken;
