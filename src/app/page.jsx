import Navbar from "@/components/Navbar/Navbar";
import styles from "./homepage.module.css";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Pagination from "@/components/Pagination/Pagination";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <CardList />
      <Pagination />
    </div>
  );
}
