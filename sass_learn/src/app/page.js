import Image from "next/image";
import styles from "./page.module.css";
import variable from "./styles/variable.module.scss";
import Navbar from "./components/Navbar";
/**
 *
 * lets learn scss in next.js , sass uses node-sass,so we need to install it
 *
 *
 */
export default function Home() {
  return (
    <main className={variable.primary}>
      <Navbar />
      <h1 style={{ color: variable.primary }}>Hello world</h1>
      <div className={variable.nested}>
        <h1>Hey brother , this is nested</h1>
      </div>
    </main>
  );
}
