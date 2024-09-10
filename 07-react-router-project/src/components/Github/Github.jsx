import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/DhavitG")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  const data = useLoaderData();

  return (
    <div className="text-center bg-gray-600 m-4 text-white">
      Github repos: {data.public_repos}
      <img src={data.avatar_url} width={200} />
    </div>
  );
}

export default Github;

// to fetch data directly inside Route tag
export const githubInfoLoader = async function () {
  const res = await fetch("https://api.github.com/users/DhavitG");
  return res.json();
};
