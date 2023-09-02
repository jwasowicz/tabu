import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources: {
    gb: {
      translation: {
        "Play with friends": "Play with friends",
        Sounds: "Sounds",
        "Notifications enabled": "Notifications enabled",
        "Cards language": "Cards language",
        "Application language": "Application language",
        "Send feedback": "Send feedback",
        "Rate eTABU": "Rate eTABU",
        Settings: "Settings",
        "Skip Limit": "Skip Limit",
        "Round Time": "Round Time",
        Limit: "Limit",
        Rounds: "Rounds",
        Points: "Points",
        None: "None",
        Play: "Play",
        Round: "Round",
        "Guessing Team": "Guessing Team:",
        Red: "Red",
        Blue: "Blue",
        "Finish game": "Finish game",
        Rules: "Rules",
        "Report this word": "Report this word",
        "Exit to menu": "Exit to menu",
        "Exit Game": "Exit Game",
        "Click the button to finish game with the current score": "Click the button to finish game with the current score",
        Yes: "Yes",
        No: "No",
        Draw: "Draw",
        "wins": "wins",
        "Total time": "Total time",
        "Best time per card": "Best time per card",
        "Efficiency": "Efficiency",
        "Game over": "Game over",
        "Rematch": "Rematch"


      },
    },
    pl: {
      translation: {
        "Play with friends": "Graj z przyjaciółmi",
        Sounds: "Dźwięki",
        "Notifications enabled": "Powiadomienia",
        "Cards language": "Język kart",
        "Application language": "Język aplikacji",
        "Send feedback": "Wyślij opinię",
        "Rate eTABU": "Oceń eTABU",
        Settings: "Ustawienia",
        "Round Time": "Czas rundy",
        "Skip Limit": "Limit pominięć",
        Limit: "Limit",
        Rounds: "Rundy",
        Points: "Punkty",
        None: "Brak",
        Play: "Graj",
        Round: "Runda",
        "Guessing Team": "Odgaduje drużyna:",
        Red: "Czerwoni",
        Blue: "Niebiescy",
        "Finish game": "Zakończ grę",
        Rules: "Zasady",
        "Report this word": "Zgłoś to słowo",
        "Exit to menu": "Wyjdź do menu",
        "Exit Game": "Zakończ grę",
        "Click the button to finish game with the current score": "Kliknij, aby zakończyć grę z aktualnym wynikiem",
        Yes: "Tak",
        No: "Nie",
        Draw: "Remis",
        "wins": "wygrywają",
        "Total time": "Czas ogółem",
        "Best time per card": "Najlepszy czas hasła",
        "Efficiency": "Skuteczność",
        "Game over": "Koniec gry",
        "Rematch": "Zagraj ponownie"

      },
    },
  },

  interpolation: { escapeValue: false },
});

export default i18n;
