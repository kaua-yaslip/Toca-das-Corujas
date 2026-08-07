import { settings } from "@/settings/settings";
import styles from "./TitlePage.module.scss";

const { siteName } = settings;

export default function TitlePage({
  title,
  bgImage,
}: {
  title: string;
  bgImage?: string;
}) {
  const titleLength = title.length < 20;
  const style: React.CSSProperties = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }
    : {};

  return (
    <div className={styles.titlePage} style={style}>
      <div className={styles.overlay} />
      {titleLength ? (
        <h1>
          {title}
          <span style={{ position: "absolute", opacity: 0, left: 0 }}>
            {" "}
            - {siteName}
          </span>
        </h1>
      ) : (
        <h1>{title}</h1>
      )}
    </div>
  );
}
