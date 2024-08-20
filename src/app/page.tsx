import Visual from "@/components/Visual";
import Comment from "@/components/Comment";
import Contact from "@/components/Contact";
import Date from "@/components/Date";
import Map from "@/components/Map";
import Account from "@/components/Account";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Visual></Visual>
      <Comment></Comment>
      <Contact></Contact>
      <Date></Date>
      <Map></Map>
      <Account></Account>
    </>
  );
}
