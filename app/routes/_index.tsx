import { useTranslation } from "react-i18next";


export let handle = {
  i18n: "common",
};

export default function Index() {
  const { i18n, t } = useTranslation('common');

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <div>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("pt")}>Portuguese</button>
        <button onClick={() => changeLanguage("fr")}>French</button>
        <button onClick={() => changeLanguage("es")}>Spanish</button>
      </div>
      <h1>Welcome</h1>
      <p>Greeting from Common: {t("greeting")}</p>
    </div>
  );
}