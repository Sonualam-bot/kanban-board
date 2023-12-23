import { createContext, useEffect, useState } from "react";

export const KanbanContext = createContext();

export const KanbanContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  //   const [uniqueStatus, setUniqueStatus] = useState([]);

  const fetchData = async () => {
    try {
      const url =
        "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! ${response.sattus}`);
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      throw new Error(`${error}`);
    }
  };

  const extractStatus = data?.tickets?.reduce(
    (acc, curr) => {
      if (acc.includes(curr.status)) {
        return acc;
      } else {
        return [...acc, curr.status];
      }
    },
    ["Done", "Cancelled"]
  );

  useEffect(() => {
    fetchData();
  }, []);

  const value = {
    data,
    extractStatus,
  };

  return (
    <KanbanContext.Provider value={value}>{children}</KanbanContext.Provider>
  );
};
