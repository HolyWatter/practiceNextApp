import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-red-100">
      <p className="text-blue-100">
        My first Next-App with TypeScript and Tailwind Css
      </p>
      <p>컴파일과 번들링이 자동으로 된다. (webpack과 babel)</p>
      <p>자동 리프레쉬 기능으로 수정하면 화면에 바로 반영</p>
      <p>서버사이드 렌더링 지원</p>
      <p>스태틱파일 지원</p>
    </div>
  );
}
