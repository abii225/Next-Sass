"use client";

import variable from "./styles/variable.module.scss";
import responsive from "./styles/responsive.module.scss";
import { CiDark } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa6";
import { useEffect, useState } from "react";
/**
 *
 * lets learn scss in next.js , sass uses node-sass,so we need to install it
 *
 *
 */
export default function Home() {
  const [data, setData] = useState([]);
  const [dark, setDark] = useState(false);
  const fetchData = async () => {
    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
      let data = await res.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main
      style={{ backgroundColor: dark ? responsive.dark : responsive.light }}
    >
      <div>
        <h1
          style={{
            color: dark ? responsive.light : responsive.dark,
            textAlign: "center",
          }}
        >
          Welcome to Sass Learning
        </h1>
        <button
          className={variable.button}
          style={{
            backgroundColor: dark ? variable.secondary : variable.primary,
          }}
          onClick={() => setDark((prev) => !prev)}
        >
          {" "}
          {dark ? <CiDark /> : <FaRegLightbulb />}
        </button>
      </div>
      {/*  */}
      <div className={responsive.container}>
        {data.length &&
          data.map((ele) => {
            2;
            return (
              <div className={responsive.nested} key={ele.id}>
                <div className={responsive.nested.img}>
                  <img src={ele.url} alt={ele.id} />
                </div>

                <h1>{ele.title}</h1>
              </div>
            );
          })}
      </div>
    </main>
  );
}
