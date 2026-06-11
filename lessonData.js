const lesson = {
  title: "Kraina Części Mowy",

  slides: [
    // story - slide 1

    {
      type: "story",
      title: "🏝️ Witaj w Krainie Języka Polskiego",
      help: "Kliknij Dalej, aby rozpocząć podróż.",
      image: "assets/images/slide1.png",
      uaMeaning: `
            Сьогодні ми почнемо подорож Країною Польської Мови
            та дізнаємося, що кожне слово має свою важливу роль.
            `,
      text: `
            Witaj w Krainie Języka Polskiego!
            Nazywam się Sowa EduMost 📚.
            Dzisiaj odwiedzimy niezwykłe wyspy i odkryjemy,
            że każde słowo ma swoje ważne zadanie.
            `,
    },
    // story - slide 2
    {
      type: "story",
      title: "😲 Kłótnia słów",
      help: "Przeczytaj uważnie zdanie.",
      image: "assets/images/slide2.png",
      uaMeaning: `
            Слова зі речення почали сперечатися.
            Кожне вважає себе найважливішим.
            `,
      text: `
            Nagle usłyszałam głośną kłótnię.
            Słowa ze zdania:
            „Mały kot goni mysz.”
            zaczęły się spierać.
            Każde twierdziło, że jest najważniejsze.
            `,
    },

    // quiz - slide 3
    {
      type: "quiz",
      title: "❓ Jak myślisz?",
      help: "Nie ma problemu, jeśli nie znasz odpowiedzi.",
      uaMeaning: `
            Спробуй здогадатися самостійно.
            Правильну відповідь ми скоро перевіримо.
            `,
      question: "Czy któreś słowo jest naprawdę najważniejsze?",
      answers: ["Tak", "Nie", "Nie wiem"],
      correct: 1,
    },
    //  story - slide 4
    {
      type: "story",
      title: "🔍 Śledztwo Sowy",
      help: "Pomyśl, co stanie się bez jednego słowa.",
      image: "assets/images/slide3.png",
      uaMeaning: `
            Перевіримо, що станеться,
            якщо прибрати одне слово з речення.
            `,
      text: `
            Postanowiłam przeprowadzić śledztwo.
            Co się stanie,
            jeśli usuniemy jedno słowo ze zdania?
            Czy nadal wszystko będzie jasne?
            `,
    },
    // quiz - slide 5
    {
      type: "quiz",
      title: "🕵️ Sprawdźmy!",
      help: "Przeczytaj oba zdania.",
      uaMeaning: `
            Порівняй два речення та подумай,
            чи все ще зрозуміло, про кого йдеться.
            `,
      question: `
            Co się stanie bez słowa „kot”?
            Mały goni mysz.
            `,
      answers: [
        "Zdanie jest mniej zrozumiałe",
        "Nic się nie zmieni",
        "Zdanie jest lepsze",
      ],

      correct: 0,
    },
    //  story - slide 6
    {
      type: "story",
      title: "💡 Wielkie odkrycie",
      help: "Każde słowo pomaga budować zdanie.",
      image: "assets/images/slide6.png",
      uaMeaning: `
            У реченні немає одного головного слова.
            Усі слова допомагають передати зміст.
            `,
      text: `
            Teraz już wiem!
            Nie ma jednego najważniejszego słowa.
            Każde słowo pomaga tworzyć znaczenie zdania.
            `,
    },
    // quiz - slide 7
    {
      type: "quiz",
      title: "📚 Grupowanie słów",
      help: "Poszukaj podobieństwa.",
      uaMeaning: `
            Подумай, що об'єднує всі ці слова.
            Яку спільну роботу вони виконують?
            `,
      question: `
            Co mają wspólnego wyrazy:
            kot
            rower
            szkoła
            drzewo
            Ola
            `,

      answers: ["Opisują", "Liczą", "Nazywają"],

      correct: 2,
    },
    //  story - slide 8
    {
      type: "story",
      title: "🏝️ Wielkie odkrycie",
      help: "Słowa można podzielić na grupy.",
      image: "assets/images/slide8.png",
      uaMeaning: `
            Слова бувають різними.
            Тому їх об'єднують у групи,
            які називаються частинами мови.
            `,
      text: `
            Słowa nie są takie same.
            Niektóre coś nazywają.
            Inne opisują.
            Jeszcze inne mówią,
            co ktoś robi.
            Tak powstały części mowy.
            `,
    },
    //  map - slide 9
    {
      type: "map",
      title: "🗺️ Mapa Wysp",
      help: "Już niedługo odwiedzimy każdą wyspę.",
      image: "assets/images/slide9.png",
      uaMeaning: `
            Попереду нас чекають острови різних частин мови.
            На кожному ми познайомимося з новими словами.
            `,
      text: `
        Przed nami wiele wysp.
        Każda wyspa skrywa inną część mowy.
        Wkrótce rozpoczniemy naszą podróż.
        `,
    },
    //  info - slide 10
    {
      type: "info",
      title: "🏰 Odmienne części mowy",
      help: "Te słowa potrafią zmieniać swoją formę.",
      image: "assets/images/slide10.png",
      uaMeaning: `
            Деякі слова можуть змінювати свою форму.
            Пізніше ми дізнаємося, як саме це відбувається.
            `,
      content: `
            Niektóre słowa lubią się zmieniać.
            Nazywamy je odmiennymi częściami mowy.
            Należą do nich:
            • rzeczownik
            • czasownik
            • przymiotnik
            • liczebnik
            • zaimek
            `,
    },
    //  info - slide 11
    {
      type: "info",
      title: "🏝️ Nieodmienne części mowy",
      help: "Te słowa pozostają takie same.",
      image: "assets/images/slide11.png",
      uaMeaning: `
            Інші слова не змінюються.
            Вони завжди мають одну форму.
            `,
      content: `
            Są też słowa,
            które nie zmieniają swojej formy.
            Poznamy je później.
            Są to między innymi:
            • przysłówki
            • przyimki
            • spójniki
            `,
    },
    //  summary - slide 12
    {
      type: "summary",
      title: "🏆 Podsumowanie",
      help: "Brawo! Dotarliśmy do końca lekcji.",
      image: "assets/images/slide12.png",
      uaMeaning: `
            Ми дізналися, що слова виконують різні ролі
            та об'єднуються в частини мови.
            `,
      items: [
        "Każde słowo ma swoje zadanie.",
        "Słowa tworzą części mowy.",
        "Niektóre słowa się zmieniają.",
        "Niektóre pozostają takie same.",
        "Wkrótce odwiedzimy Wyspę Rzeczowników 🐱",
      ],
    },
    //  finish - slide 13
    {
    type: "finish",

    title: "🎉 Gratulacje!",

    image: "assets/images/finish.png",

    uaMeaning: `
    Вітаємо!

    Ти завершив свою першу подорож
    Країною Частин Мови.
    `,

    message: `
    Ukończyłeś lekcję
    Kraina Części Mowy.

    Teraz wiesz,
    czym są części mowy.
    `
}
  ],
};
