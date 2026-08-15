/*
  ================================================================
  THIS IS THE MAIN FILE YOU EDIT
  ================================================================

  EASY RULES:
  1. Change only the words between quotation marks.
  2. Keep every comma, bracket and quotation mark.
  3. Put photos in images/, videos in videos/, and audio in audio/.
  4. Then write the matching path here, for example:
       photos: ["images/month-5.jpg"]
  5. Leave a media path as "" to keep its beautiful placeholder.

  You do NOT need React, npm, a terminal, or any installation.
*/

window.BABY_STORY = {
  /* ---------- BASIC DETAILS ---------- */
  babyDisplayName: "Baby Boy",
  babyFullName: "Mohammed Arsh Luqman Mazood",
  babyNickname: "Little Buddy",
  babyHasArrived: false,
  familyCountry: "Sri Lanka",
  sisterCountry: "USA",

  /* Choose "dark" or "light" for a visitor's first view. */
  defaultTheme: "dark",

  openingTitleFirstLine: "Waiting for You,",
  openingTitleSecondLine: "Baby boy",
  openingMessage:
    "While you were growing inside her, we were loving you from miles away.",
  comingSoonText: "Coming late August / early September 2026",

  /* ---------- WEBSITE PHOTOGRAPHS ---------- */
  /* Keep the hero image, or replace it with your own wide photograph. */
  heroImage: "images/hero-watercolor.webp",
  familySong: "audio/backgroundsong.mp3",

  /* Optional section backgrounds. Leave "" to use the built-in design. */
  storyBackgroundImage: "",
  pregnancyBackgroundImage: "",
  letterBackgroundImage: "images/background.avif",
  galleryBackgroundImage: "images/watercolor.avif",
  surpriseBackgroundImage: "images/background.avif",

  /* ---------- THE DAY WE FOUND OUT ---------- */
  foundOutStory:
    "One little message arrived—and suddenly our family conversations were full of due dates, tiny clothes, name ideas, and happy disbelief.",
  foundOutQuote:
    "You were smaller than a grain of rice, and somehow you had already made our whole family excited.",
  firstUltrasoundPhoto: "images/firstscan.jpeg",
  firstFamilyMessagePhoto: "images/firstmsg.jpeg",

  /* ---------- PREGNANCY JOURNEY ---------- */
  pregnancyMonths: [
    {
      number: "01",
      label: "Month One",
      title: "A tiny secret began",
      baby: "Smaller than a poppy seed",
      memory:
        "We did not know you yet, but the world had already started making room for you.",
      note: "චූටි ඔයා ආව කියලා දැනගත්ත දවසේ අම්මයි තාත්තයි.",
      photos: [
        "images/firstday.jpeg",
        "images/test.jpeg"
      ],
      video: ""
    },
    {
      number: "02",
      label: "Month Two",
      title: "The first hello",
      baby: "A heartbeat, quick and brave",
      memory:
        "You were smaller than a grain of rice, and somehow you had already made our whole family excited.",
      note: "ඔයාගේ පලවෙනි photo එකයි අම්මයි.",
      photos:[
        "images/firstscan.jpeg",
        "images/2months.jpeg"
      ],
      video: ""
    },
    {
      number: "03",
      label: "Month Three",
      title: "Our little dream felt real",
      baby: "Tiny fingers were forming",
      memory:
        "Every update crossed the miles like a small parcel of joy, opened again and again.",
      note: "ඔයා චූටිම චූටි උනත් ඔයා වෙනුවෙන් හැමදේම එයාල ලෑස්ති කරන්න පටන්ගත්ත.",
      photos: ["images/3months.jpeg",
               "images/3months2.jpeg"],
      video: ""
    },
    {
      number: "04",
      label: "Month Four",
      title: "A little boy",
      baby: "The sweetest surprise revealed",
      memory:
        "The day we learned you were our little boy, the future suddenly had a thousand shades of blue.",
      note: "ඔයා චූටි පුතෙක් කියලා දැනගත්තම එයාල හරියට සතුටු උනා.",
      photos:["images/4months.jpeg",
               "images/gender.jpeg"],
      video: ""
    },
    {
      number: "05",
      label: "Month Five",
      title: "Growing quietly",
      baby: "Learning to stretch and move",
      memory: "We began imagining the person you might become—and all the stories we would one day tell you.",
      note: "අම්මගේ බණ්ඩිය ඇතුලේ ඔයා ටික ටික ලොකු උනා.",
      photos:  ["images/5months3.jpeg",
               "images/couple.jpeg"],
      video: ""
    },
    {
      number: "06",
      label: "Month Six",
      title: "Kicks across the miles",
      baby: "Recognising familiar voices",
      memory:
        "We could not feel your kicks, so Mama described every one—and we treasured each retelling.",
      note: "අම්මා ඔයාගේ චූටි කකුල් පාරවල් ගණන් කරන්න පටන්ගනිද්දි තාත්තා ඔයා ගැන හරිම ආදරෙන් බලාපොරොත්තු තියන් හිටිය.",
      photos: ["images/6months.jpeg",
               "images/5months.jpeg"],
      video: ""
    },
    {
      number: "07",
      label: "Month Seven",
      title: "The waiting grew sweeter",
      baby: "Opening and closing his eyes",
      memory:
        "Your little corner was taking shape, and ours was filling with messages we could not wait to give you.",
      note: "ඔයා කොයි වගේ වෙයිද කියලා හිතලා ඉවසන්න ම බැරුව එයාල ඔයා මේ වගේ වෙන්නැති කියලා photo හදලා බැලුව.",
      photos: ["images/predicting7.jpeg",
               "images/prepare.jpeg"],
      video: ""
    },
    {
      number: "08",
      label: "Month Eight",
      title: "Nearly in our world",
      baby: "Listening, dreaming, growing",
      memory:
        "Every phone call began with the same question: is today the day we get to meet you?",
      note: "පොඩි පොඩි අමාරුකම් මැද්දේම තනියෙන්ම අම්මයි තාත්තයි ඔයා එනකන් ආසාවෙන් බලන් හිටිය.",
      photos: ["images/8months.jpeg",
               "images/8months2.jpeg"],
      video: ""
    },
    {
      number: "09",
      label: "Month Nine",
      title: "Any day now",
      baby: "Ready for his first hello",
      memory:
        "The whole family is holding its breath, loving you before we have even seen your face.",
      note: "අද එයි හෙට එයි කියලා දවස් ගණන් කර කර එයාලා නොයිවසිල්ලෙන් හිටියා.",
      photos: ["images/9months.jpeg","images/9months2.jpeg"],
      video: ""
    },
    {
      number: "♥",
      label: "Hello Baby",
      title: "A chapter waiting to be written",
      baby: "Coming soon",
      memory:
        "When you arrive, this page will open—with your name, first photograph, and the story of your first day.",
      note: "චූටි බණ්ඩි පුතා 🤍.",
      photos:[ "images/baby.jpeg","images/fmeet.jpeg"],
      video: ""
    }
  ],

  /* ---------- LOVING FROM FAR AWAY ---------- */
  distanceStory:
    "Every photograph she sent became family news. Every video call became a small visit. We watched the months pass through a screen, but not one moment passed without love.",
  distanceQuote:
    "Distance was a place on the map. It was never a place in our hearts.",
  videoCallPhoto: "images/groupcall.jpeg",
  pregnancyUpdatePhoto: "images/couple.jpeg",


  /* ---------- TWO LETTERS FROM TWO SISTERS ---------- */

letterSection: {
  kicker: "Two letters across the miles",
  title: "From your two aunties",
  introduction:
    "Two sisters, two letters, and more love than one page could ever hold."
},

letters: [
  {
    preview: "From your Loku Punchi",

    salutation: "අක්කේ,",

    message:
      "ඔයා ළඟින් හිටිය නම් කොච්චර හොඳද කියලා හැමවෙලේම හිතෙනවා.බබාට බඩු ගන්න යන්න ,කැමති කෑම ,විකාර කෑම ජාති හදලා දෙන්න ,බබා ගැන කියව කියව ඉන්න ,බබා පයින් ගහනව බලන්න ,ඔයා එක්ක clinic යන්න, කාමරේ ලස්සන කරන්න...තව බබා ලොකු ඉපදුනාම එයාව බලාගන්න...වෙන කොයි බබෙක්වත් වගේ නෙවෙයි මගේම වගේ ඇති තරම් වඩාගෙන ඉන්නයි  හුරතල් කරන්නයි තිබ්බනේ.ඒ උනාට එහෙම බැරි උනත් කමක්නැහැ ඉතින් මෙහෙම උන එකෙන් අගේ වැඩි වෙලා වගේනේ. ඔයා ඔහේ ඉඳන් කවුරුත් නැතුව කොහොම හරි හැමදේම කරගන්න එක ගැන මට හරිම ආඩම්බරයි. මම ගොඩක් වෙලාවට ඔයා ගැන හිතලා ආඩම්බර වෙනවා.ජීවිතේ ඔයාට මොන මොන දේ දුන්නත් නොදුන්නත් ඔයා කොහොම හරි ඔහොම හොඳින් ඉන්න එක ගැන .හැබැයි ඉක්මණටම ඔයා මෙහෙට හරි අපි එහෙට හරි ඇවිත් ආයේ අපි හැමෝටම එකට ඉන්න තියෙනවා නම් තමයි මට සතුටුම. ඔයාට අන්තිමට හොඳ මහත්තයෙක් ලැබුන එක ගැනත් මට සතුටුයි . ඔයා අපිට හොඳ අක්කා කෙනෙක් උනා වගේම ඊටත් වඩා හොඳ අම්මා කෙනෙක් වෙයි කියලා මට විශ්වාසයි.ඔයාගේ බබාව ලස්සනට හදන්න ,අපි හැමෝටම ආඩම්බර වෙන්න පුළුවන් විදිහට .ඉතින් ඔයාටයි ,මස්සිනාටයි අපේ පවුලේ චණ්ඩි පුතාටයි ලස්සනම ලස්සන, සැපවත් ,ආදරණීය ,සාර්ථක අනාගතයක් ලැබෙන්න කියල මං ප්‍රාර්ථනා කරනවා💗අපි හැමෝම ඔයාට ,ඔයාලට ආදරෙයි 💗අපි හැමවෙලේම ඔයාලා ගැන හිතනවා .කවද ඔයාට කවුරු හිටියත් නැතත් අපි අනිවාර්යෙන් හැමදාටම ඉන්නවා .පරිස්සමින් ඉන්න 🤍අපේ චූටි බබාව පරිස්සමින් බලාගන්න. ඉක්මණටම ඔයාල තුන් දෙනාවම දකින්න ලැබෙන්න කියලා මං ප්‍රාර්ථනා කරනවා!!!",

    closing: "ආදරෙන්,",

    from:
      "ඔයාගේ පණ්ඩිත, බුද්ධිමත්, ලස්සන නංගි 😌",

    relationship:
      "(බබාගේ ලොකු පුංචා)",

    photo: ""
  },

  {
  preview: "From your Chooti Punchi",
  salutation: "Ayeshi daaaathaaaa🤍",
  message: "Happyyy to be an auntie officially....!!!! ඉතින්.... මොනවද කියන්නේ... මෙහෙමයි ඉතින්.. මං ඉතින් ඔයාල කියන විදිහට බොරුවට ඇඬුවට ඔයා යන වෙලාවේ ඇඬුවේ නෑනේ. ඒත් ඇත්තටම කිව්වොත් ඊටපස්සේ පච්චිවත් දාල ගෙදර ඇවිත් නිදාගෙන උදේ නැගිටිද්දී ගෙදර හරිම පාළු විදිහට දැනුනේ... තාමත්... You are having a new life there... And Pachchi... She's also making her own life... But me?.. මේ ගෙදර ඉද්දි මට‍ ඉස්සර දවස් මතක් වෙද්දී ඒ කාලෙයි මේ කාලෙයි compare වෙද්දී දැනෙන හැඟීම කාටවත් දැනෙන්නේ නෑනේ... මට‍ ඔයාට දුක හිතවන්න ඕනේ නෑ... ඒත් දැනෙන ඇත්තම දේ කිව්වොත් හොඳයි කියලා හිතුනා... කොහොමහරි.... Miss youu sooooo much... Anyway.... ඔයා සතුටින් ඉන්නවා දකිද්දී හරිම සතුටුයි... මං ඔයාට එච්චර close නැතුව ඇති... ඒත් ඔයාලගේ photos එහෙම බලද්දී මට‍ සතුටුයි... Really happy for youu. හැමදාම සතුටින් ඉන්න... And Congratulationss for being a mom!!!! (අනේ මට‍ මෙහෙම ඒවා ලියන්න තේරෙන්නේ නෑ) කොහොමහරි.... Collect memories... Capture the 'first time' moments... I'm sure... You'll be a good mom to little babyyyy. අන්තිමට‍..... (ඔය පොඩි එකාටත් අර මට‍ දවසක් ගැහුවා වගේ කනේ පාරවල් ගහන්න එපා) වෙච්ච වැරදි අඩුපාඩුවලට, තරහ ගිය වෙලාවට කියපු හිත රිදුන දේවල්වලට Sorry... මට‍ මතක නැති උනත්, පොඩි කාලේ මාව බලාගත්තට Thank youu (Thank you කිව්වට කමක් නැත්තම්). ආදරෙයි.....🤍",
  closing: "From...",
  from: "අවුරුදු 12ක්‌ බාල පොඩි එකී...",
  relationship: "(බබාගේ චූටි පුංචා)",
  photo: "images/younger-sister.jpg"
}
],

  /* ---------- FAMILY PREDICTIONS ---------- */
  predictionQuestions: [
    {
      question: "Who will he look like?",
      options: ["Mama", "Dad", "A little of both"]
    },
    {
      question: "Who will spoil him the most?",
      options: ["Grandma", "Grandpa", "Dad", "Loku puncha", "Chooty punchi"]
    },
    {
      question: "What will his personality be?",
      options: [
        "Quiet little angel",
        "Little troublemaker",
        "Family comedian",
        "Tiny adventurer"
      ]
    },
    {
  question: "What will his first word be?",
  options: [
    "Mama",
    "Dada",
    "Puncha",
    "Something unexpected"
  ]
},
{
  question: "What kind of sleeper will he be?",
  options: [
    "Little sleep champion",
    "Tiny night owl",
    "Early morning baby",
    "No sleep for anyone"
  ]
},
{
  question: "What will make him laugh the most?",
  options: [
    "Mama's funny faces",
    "Dad's silly voices",
    "Grandma and Grandpa",
    "His two punchass"
  ]
},
{
  question: "What will his favourite thing be?",
  options: [
    "Animals",
    "Music",
    "Cars and vehicles",
    "Books and drawing"
  ]
},

{
  question: "Who will he call when he wants something?",
  options: [
    "Mama",
    "Dad",
    "Grandma",
    "His favourite auntie"
  ]
}
  ],

  /* ---------- NAME REVEAL ---------- */
  nameMeaning:
    "The meaning of his name that Mama and Dad choose.",

  /* ---------- BIRTH DETAILS ---------- */
  birth: {
    dateAndTime: "[Date and time]",
    weight: "[Birth weight]",
    length: "[Length]",
    hospital: "[Hospital]",
    firstPhoto: "images/baby.jpeg",
    firstVideo: "", // Example: "videos/baby-first-video.mp4"
    story:
      "Add the story of his first day here—the message that announced his arrival, the first photograph everyone waited for, and how Mama felt when she finally held him."
  },

  /* ---------- BABY GALLERY ---------- */
  gallery: [
    { caption: "Your first yawn", photo: "images/yawn.jpeg", date: "" },
    { caption: "Tiny toes", photo: "images/tinytoes.jpeg", date: "" },
    { caption: "Mama's favourite picture", photo: "images/mamasf.jpeg", date: "" },
    { caption: "Your first little smile", photo: "images/fsmile.jpeg", date: "" },
    { caption: "The photo that made Grandma cry", photo: "images/gcry.jpeg", date: "" },
    { caption: "The first time Auntie saw you", photo: "images/firstlook.jpeg", date: "" }
  ],

  /* ---------- GRANDPA'S TWO VOICE MESSAGES ---------- */
  voices: [
    {
      name: "Grandpa",
      relationship: "Grandpa is so proud to have you, little one.",
      initials: "GP",
      audio: [
        "audio/dadvoice1.ogg",
        "audio/dadvoice2.ogg"
      ]
    }
  ],

  /* ---------- OUR FIRST HELLO ---------- */
  firstHello: {
    date: "[Date]",
    photo: "images/fmeet.jpeg",
    video: "", // Example: "videos/first-hello.mp4"
    memory:
      "Add the happy chaos, who cried first, and the little detail everyone remembers from that call."
  },

  /* ---------- SURPRISE FOR MAMA ---------- */
  surpriseVideo: "videos/surprise.mp4",
  surpriseFinalMessage: "No distance could make us miss this moment.",

  /* ---------- FUTURE MILESTONES ---------- */
  milestones: [
    { title: "Pregnancy", date: "2026", completed: true, photo: "", memory: "" },
    { title: "Birth", date: "Coming soon", completed: false, photo: "", memory: "" },
    { title: "First Smile", date: "A memory to come", completed: false, photo: "", memory: "" },
    { title: "First Laugh", date: "A memory to come", completed: false, photo: "", memory: "" },
    { title: "First Tooth", date: "A memory to come", completed: false, photo: "", memory: "" },
    { title: "First Word", date: "A memory to come", completed: false, photo: "", memory: "" },
    { title: "First Steps", date: "A memory to come", completed: false, photo: "", memory: "" },
    { title: "First Birthday", date: "A memory to come", completed: false, photo: "", memory: "" },
    { title: "First Visit to Sri Lanka", date: "One day", completed: false, photo: "", memory: "" },
    { title: "The Day We Finally Met", date: "The page we dream about", completed: false, photo: "", memory: "" }
  ]
};
