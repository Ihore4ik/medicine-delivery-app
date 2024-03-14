export const getDBData = async () => {
  const res = await fetch("http://localhost:3000/api/v1/drugs");
  const data = res.json();
  return data;
};
