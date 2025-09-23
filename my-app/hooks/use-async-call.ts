import { useState } from "react";

export function useAsyncCall() {
  const [isLoading, setLoading] = useState<boolean>(false);

  const execute = async <T>(callback: () => Promise<T>) => {
    setLoading(true);
    try {
      await callback();
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, execute };
}
