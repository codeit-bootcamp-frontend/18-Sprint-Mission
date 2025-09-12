const { useState } = require("react");

export function useAsyncCall() {
  const [isLoading, setLoading] = useState(false);

  const execute = async (callback) => {
    setLoading(true);
    try {
      const result = await callback();
      return result;
    } finally {
      setLoading(false);
    }
  };

  return [isLoading, execute];
}
