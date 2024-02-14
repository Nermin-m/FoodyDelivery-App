
import type { AppProps } from "next/app";
import "../styles/globals.css";
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router";
import azMessages from '../translations/az.json'
import ruMessages from '../translations/ru.json'
import enMessages from '../translations/en.json'
export default function App({ Component, pageProps }: AppProps) {
  const router=useRouter();
  const {locale}=router;
  const messages={az:azMessages,ru:ruMessages,en:enMessages};
  return(
      <IntlProvider locale={locale!} messages={messages[locale!]}>
        <Component {...pageProps} />
      </IntlProvider>
  )
}
