import { GB, PL } from "country-flag-icons/react/3x2";

interface Props {
    interfaceLanguage: string;
    cardsLanguage: string;
}

export const returnLanguages = ({interfaceLanguage, cardsLanguage}: Props) => {
    const returnInterfaceLang = () => {

        switch(interfaceLanguage) {
            case "PL":
                return PL;
            case "GB":
                return GB;
            default:
                return;
        }
      }
    
      const returnCardsLang = () => {
    
        switch(cardsLanguage) {
            case "PL":
                return PL;
            case "GB":
                return GB;
            default:
                return;
        }
      }

      return {returnInterfaceLang, returnCardsLang}
}