import { useEffect, useState } from "react";

export const useFetch = url => {
  const [payload, setPayload] = useState({ data: null, loading: true });

  useEffect(() => {
    setPayload(payload => ({ data: payload.data, loading: true }));

    fetch(url)
      .then(x => x.text())
      .then(y => setPayload({ data: y, loading: false }));
  }, [url]);

  return payload;
};
