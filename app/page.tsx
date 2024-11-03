import styles from "./page.module.css";
import Header from "./home/components/page_A";
import Page_B from "./home/components/page_B";
import Page_C from "./home/components/page_C";
import Page_D from "./home/components/page_D";
import Page_E from "./home/components/Page_E";
import Page_F from "./home/components/page_F";
import Page_H from "./home/components/page_H";
import Page_G from "./home/components/page_G";
import Page_I from "./home/components/page_I";
import Page_J from "./home/components/page_J";
import Page_K from "./home/components/page_K";
import Page_L from "./home/components/page_L";
import Page_M from "./home/components/page_M";
import Page_N from "./home/components/page_N";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Page_B />
      <Page_C />
      <Page_D />
      <Page_E />
      <Page_F />
      <Page_H />
      <Page_G />
      <Page_I />
      <Page_J />
      <Page_K />
      <Page_L />
      <Page_M />
      <Page_N />
    </div>
  );
}
