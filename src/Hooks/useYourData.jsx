import { useEffect, useState } from "react";

const useYourData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/appData.json")
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((e) => setErr(e))
      .finally(
        setTimeout(() => {
          setLoading(false);
        }, 200)
      );
  }, []);

  return [data, loading, err];
};

export { useYourData };
