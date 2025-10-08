const getFromDb = () => {
  const data = JSON.parse(localStorage.getItem("installedApp")) || [];
  return data;
};

const addToDb = (value) => {
  const data = getFromDb();
  const matchedData = data.find((app) => app.id === value.id);
  if (matchedData) return;

  const updatedData = [...data, value];
  localStorage.setItem("installedApp", JSON.stringify(updatedData));
};

const removeFromDb = (value) => {
  const data = getFromDb();
  const updatedData = data.filter((app) => app.id !== value.id);

  localStorage.setItem("installedApp", JSON.stringify(updatedData));
  return updatedData;
};

export { getFromDb, addToDb, removeFromDb };
