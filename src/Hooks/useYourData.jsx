import { useEffect, useState } from "react";

const useYourData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(true);

  useEffect(() => {
    fetch("/appData.json")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((e) => setErr(e))
      .finally(setLoading(false));
  }, []);

  return [data, loading, err];
};

export { useYourData };
