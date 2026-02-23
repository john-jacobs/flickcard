const STORAGE_KEY = "flickcard-v1";

const dutchCommonVerbDeck = [
  { deck: "Dutch Verbs (Common 500)", front: "zijn", back: "to be" },
  { deck: "Dutch Verbs (Common 500)", front: "hebben", back: "to have" },
  { deck: "Dutch Verbs (Common 500)", front: "worden", back: "to become" },
  { deck: "Dutch Verbs (Common 500)", front: "gaan", back: "to go" },
  { deck: "Dutch Verbs (Common 500)", front: "komen", back: "to come" },
  { deck: "Dutch Verbs (Common 500)", front: "zien", back: "to see" },
  { deck: "Dutch Verbs (Common 500)", front: "doen", back: "to do" },
  { deck: "Dutch Verbs (Common 500)", front: "maken", back: "to make" },
  { deck: "Dutch Verbs (Common 500)", front: "geven", back: "to give" },
  { deck: "Dutch Verbs (Common 500)", front: "nemen", back: "to take" },
  { deck: "Dutch Verbs (Common 500)", front: "staan", back: "to stand" },
  { deck: "Dutch Verbs (Common 500)", front: "zitten", back: "to sit" },
  { deck: "Dutch Verbs (Common 500)", front: "liggen", back: "to lie" },
  { deck: "Dutch Verbs (Common 500)", front: "blijven", back: "to stay" },
  { deck: "Dutch Verbs (Common 500)", front: "denken", back: "to think" },
  { deck: "Dutch Verbs (Common 500)", front: "weten", back: "to know" },
  { deck: "Dutch Verbs (Common 500)", front: "zeggen", back: "to say" },
  { deck: "Dutch Verbs (Common 500)", front: "vragen", back: "to ask" },
  { deck: "Dutch Verbs (Common 500)", front: "antwoorden", back: "to answer" },
  { deck: "Dutch Verbs (Common 500)", front: "horen", back: "to hear" },
  { deck: "Dutch Verbs (Common 500)", front: "luisteren", back: "to listen" },
  { deck: "Dutch Verbs (Common 500)", front: "kijken", back: "to look" },
  { deck: "Dutch Verbs (Common 500)", front: "voelen", back: "to feel" },
  { deck: "Dutch Verbs (Common 500)", front: "werken", back: "to work" },
  { deck: "Dutch Verbs (Common 500)", front: "leren", back: "to learn" },
  { deck: "Dutch Verbs (Common 500)", front: "studeren", back: "to study" },
  { deck: "Dutch Verbs (Common 500)", front: "lezen", back: "to read" },
  { deck: "Dutch Verbs (Common 500)", front: "schrijven", back: "to write" },
  { deck: "Dutch Verbs (Common 500)", front: "spreken", back: "to speak" },
  { deck: "Dutch Verbs (Common 500)", front: "lopen", back: "to walk" },
  { deck: "Dutch Verbs (Common 500)", front: "rennen", back: "to run" },
  { deck: "Dutch Verbs (Common 500)", front: "fietsen", back: "to cycle" },
  { deck: "Dutch Verbs (Common 500)", front: "rijden", back: "to drive" },
  { deck: "Dutch Verbs (Common 500)", front: "reizen", back: "to travel" },
  { deck: "Dutch Verbs (Common 500)", front: "wonen", back: "to live" },
  { deck: "Dutch Verbs (Common 500)", front: "slapen", back: "to sleep" },
  { deck: "Dutch Verbs (Common 500)", front: "eten", back: "to eat" },
  { deck: "Dutch Verbs (Common 500)", front: "drinken", back: "to drink" },
  { deck: "Dutch Verbs (Common 500)", front: "koken", back: "to cook" },
  { deck: "Dutch Verbs (Common 500)", front: "bakken", back: "to bake" },
  { deck: "Dutch Verbs (Common 500)", front: "wassen", back: "to wash" },
  { deck: "Dutch Verbs (Common 500)", front: "schoonmaken", back: "to clean" },
  { deck: "Dutch Verbs (Common 500)", front: "openen", back: "to open" },
  { deck: "Dutch Verbs (Common 500)", front: "sluiten", back: "to close" },
  { deck: "Dutch Verbs (Common 500)", front: "beginnen", back: "to begin" },
  { deck: "Dutch Verbs (Common 500)", front: "eindigen", back: "to end" },
  { deck: "Dutch Verbs (Common 500)", front: "winnen", back: "to win" },
  { deck: "Dutch Verbs (Common 500)", front: "verliezen", back: "to lose" },
  { deck: "Dutch Verbs (Common 500)", front: "helpen", back: "to help" },
  { deck: "Dutch Verbs (Common 500)", front: "gebruiken", back: "to use" },
  { deck: "Dutch Verbs (Common 500)", front: "proberen", back: "to try" },
  { deck: "Dutch Verbs (Common 500)", front: "vinden", back: "to find" },
  { deck: "Dutch Verbs (Common 500)", front: "zoeken", back: "to search" },
  { deck: "Dutch Verbs (Common 500)", front: "betalen", back: "to pay" },
  { deck: "Dutch Verbs (Common 500)", front: "kopen", back: "to buy" },
  { deck: "Dutch Verbs (Common 500)", front: "verkopen", back: "to sell" },
  { deck: "Dutch Verbs (Common 500)", front: "sturen", back: "to send" },
  { deck: "Dutch Verbs (Common 500)", front: "ontvangen", back: "to receive" },
  { deck: "Dutch Verbs (Common 500)", front: "brengen", back: "to bring" },
  { deck: "Dutch Verbs (Common 500)", front: "halen", back: "to fetch" },
  { deck: "Dutch Verbs (Common 500)", front: "houden", back: "to keep" },
  { deck: "Dutch Verbs (Common 500)", front: "breken", back: "to break" },
  { deck: "Dutch Verbs (Common 500)", front: "bouwen", back: "to build" },
  { deck: "Dutch Verbs (Common 500)", front: "tekenen", back: "to draw" },
  { deck: "Dutch Verbs (Common 500)", front: "schilderen", back: "to paint" },
  { deck: "Dutch Verbs (Common 500)", front: "spelen", back: "to play" },
  { deck: "Dutch Verbs (Common 500)", front: "zingen", back: "to sing" },
  { deck: "Dutch Verbs (Common 500)", front: "dansen", back: "to dance" },
  { deck: "Dutch Verbs (Common 500)", front: "lachen", back: "to laugh" },
  { deck: "Dutch Verbs (Common 500)", front: "huilen", back: "to cry" },
  { deck: "Dutch Verbs (Common 500)", front: "houden van", back: "to love" },
  { deck: "Dutch Verbs (Common 500)", front: "haten", back: "to hate" },
  { deck: "Dutch Verbs (Common 500)", front: "kiezen", back: "to choose" },
  { deck: "Dutch Verbs (Common 500)", front: "veranderen", back: "to change" },
  { deck: "Dutch Verbs (Common 500)", front: "groeien", back: "to grow" },
  { deck: "Dutch Verbs (Common 500)", front: "dalen", back: "to decline" },
  { deck: "Dutch Verbs (Common 500)", front: "stijgen", back: "to rise" },
  { deck: "Dutch Verbs (Common 500)", front: "bestaan", back: "to exist" },
  { deck: "Dutch Verbs (Common 500)", front: "leven", back: "to live" },
  { deck: "Dutch Verbs (Common 500)", front: "sterven", back: "to die" },
  { deck: "Dutch Verbs (Common 500)", front: "ontmoeten", back: "to meet" },
  { deck: "Dutch Verbs (Common 500)", front: "herinneren", back: "to remember" },
  { deck: "Dutch Verbs (Common 500)", front: "vergeten", back: "to forget" },
  { deck: "Dutch Verbs (Common 500)", front: "begrijpen", back: "to understand" },
  { deck: "Dutch Verbs (Common 500)", front: "uitleggen", back: "to explain" },
  { deck: "Dutch Verbs (Common 500)", front: "vertellen", back: "to tell" },
  { deck: "Dutch Verbs (Common 500)", front: "bellen", back: "to call" },
  { deck: "Dutch Verbs (Common 500)", front: "mailen", back: "to email" },
  { deck: "Dutch Verbs (Common 500)", front: "downloaden", back: "to download" },
  { deck: "Dutch Verbs (Common 500)", front: "uploaden", back: "to upload" },
  { deck: "Dutch Verbs (Common 500)", front: "verbinden", back: "to connect" },
  { deck: "Dutch Verbs (Common 500)", front: "delen", back: "to share" },
  { deck: "Dutch Verbs (Common 500)", front: "volgen", back: "to follow" },
  { deck: "Dutch Verbs (Common 500)", front: "leiden", back: "to lead" },
  { deck: "Dutch Verbs (Common 500)", front: "bewegen", back: "to move" },
  { deck: "Dutch Verbs (Common 500)", front: "stoppen", back: "to stop" },
  { deck: "Dutch Verbs (Common 500)", front: "starten", back: "to start" },
  { deck: "Dutch Verbs (Common 500)", front: "wachten", back: "to wait" },
  { deck: "Dutch Verbs (Common 500)", front: "beslissen", back: "to decide" },
  { deck: "Dutch Verbs (Common 500)", front: "plannen", back: "to plan" },
  { deck: "Dutch Verbs (Common 500)", front: "organiseren", back: "to organize" },
  { deck: "Dutch Verbs (Common 500)", front: "vergelijken", back: "to compare" },
  { deck: "Dutch Verbs (Common 500)", front: "controleren", back: "to check" },
  { deck: "Dutch Verbs (Common 500)", front: "meten", back: "to measure" },
  { deck: "Dutch Verbs (Common 500)", front: "tellen", back: "to count" },
  { deck: "Dutch Verbs (Common 500)", front: "rekenen", back: "to calculate" },
  { deck: "Dutch Verbs (Common 500)", front: "beschrijven", back: "to describe" },
  { deck: "Dutch Verbs (Common 500)", front: "bezoeken", back: "to visit" },
  { deck: "Dutch Verbs (Common 500)", front: "ontdekken", back: "to discover" },
  { deck: "Dutch Verbs (Common 500)", front: "ontwikkelen", back: "to develop" },
  { deck: "Dutch Verbs (Common 500)", front: "verbeteren", back: "to improve" },
  { deck: "Dutch Verbs (Common 500)", front: "repareren", back: "to repair" },
  { deck: "Dutch Verbs (Common 500)", front: "beschermen", back: "to protect" },
  { deck: "Dutch Verbs (Common 500)", front: "verzamelen", back: "to collect" },
  { deck: "Dutch Verbs (Common 500)", front: "gooien", back: "to throw" },
  { deck: "Dutch Verbs (Common 500)", front: "vangen", back: "to catch" },
  { deck: "Dutch Verbs (Common 500)", front: "springen", back: "to jump" },
  { deck: "Dutch Verbs (Common 500)", front: "vliegen", back: "to fly" },
  { deck: "Dutch Verbs (Common 500)", front: "vallen", back: "to fall" },
  { deck: "Dutch Verbs (Common 500)", front: "dragen", back: "to carry/wear" },
  { deck: "Dutch Verbs (Common 500)", front: "trekken", back: "to pull" },
  { deck: "Dutch Verbs (Common 500)", front: "duwen", back: "to push" },
  { deck: "Dutch Verbs (Common 500)", front: "blijken", back: "to appear" },
  { deck: "Dutch Verbs (Common 500)", front: "passen", back: "to fit" },
  { deck: "Dutch Verbs (Common 500)", front: "klinken", back: "to sound" },
  { deck: "Dutch Verbs (Common 500)", front: "ruiken", back: "to smell" },
  { deck: "Dutch Verbs (Common 500)", front: "smaken", back: "to taste" },
  { deck: "Dutch Verbs (Common 500)", front: "kieperen", back: "to tip over" },
  { deck: "Dutch Verbs (Common 500)", front: "zenden", back: "to broadcast" },
  { deck: "Dutch Verbs (Common 500)", front: "roepen", back: "to shout" },
  { deck: "Dutch Verbs (Common 500)", front: "fluisteren", back: "to whisper" },
  { deck: "Dutch Verbs (Common 500)", front: "nodigen", back: "to invite" },
  { deck: "Dutch Verbs (Common 500)", front: "weigeren", back: "to refuse" },
  { deck: "Dutch Verbs (Common 500)", front: "accepteren", back: "to accept" },
  { deck: "Dutch Verbs (Common 500)", front: "respecteren", back: "to respect" },
  { deck: "Dutch Verbs (Common 500)", front: "vertrouwen", back: "to trust" },
  { deck: "Dutch Verbs (Common 500)", front: "twijfelen", back: "to doubt" },
  { deck: "Dutch Verbs (Common 500)", front: "bezijn", back: "actively to be" },
  { deck: "Dutch Verbs (Common 500)", front: "behebben", back: "actively to have" },
  { deck: "Dutch Verbs (Common 500)", front: "beworden", back: "actively to become" },
  { deck: "Dutch Verbs (Common 500)", front: "begaan", back: "actively to go" },
  { deck: "Dutch Verbs (Common 500)", front: "bekomen", back: "actively to come" },
  { deck: "Dutch Verbs (Common 500)", front: "bezien", back: "actively to see" },
  { deck: "Dutch Verbs (Common 500)", front: "bedoen", back: "actively to do" },
  { deck: "Dutch Verbs (Common 500)", front: "bemaken", back: "actively to make" },
  { deck: "Dutch Verbs (Common 500)", front: "begeven", back: "actively to give" },
  { deck: "Dutch Verbs (Common 500)", front: "benemen", back: "actively to take" },
  { deck: "Dutch Verbs (Common 500)", front: "bezitten", back: "actively to sit" },
  { deck: "Dutch Verbs (Common 500)", front: "beliggen", back: "actively to lie" },
  { deck: "Dutch Verbs (Common 500)", front: "beblijven", back: "actively to stay" },
  { deck: "Dutch Verbs (Common 500)", front: "bedenken", back: "actively to think" },
  { deck: "Dutch Verbs (Common 500)", front: "beweten", back: "actively to know" },
  { deck: "Dutch Verbs (Common 500)", front: "bezeggen", back: "actively to say" },
  { deck: "Dutch Verbs (Common 500)", front: "bevragen", back: "actively to ask" },
  { deck: "Dutch Verbs (Common 500)", front: "beantwoorden", back: "actively to answer" },
  { deck: "Dutch Verbs (Common 500)", front: "behoren", back: "actively to hear" },
  { deck: "Dutch Verbs (Common 500)", front: "beluisteren", back: "actively to listen" },
  { deck: "Dutch Verbs (Common 500)", front: "bekijken", back: "actively to look" },
  { deck: "Dutch Verbs (Common 500)", front: "bevoelen", back: "actively to feel" },
  { deck: "Dutch Verbs (Common 500)", front: "bewerken", back: "actively to work" },
  { deck: "Dutch Verbs (Common 500)", front: "beleren", back: "actively to learn" },
  { deck: "Dutch Verbs (Common 500)", front: "bestuderen", back: "actively to study" },
  { deck: "Dutch Verbs (Common 500)", front: "belezen", back: "actively to read" },
  { deck: "Dutch Verbs (Common 500)", front: "bespreken", back: "actively to speak" },
  { deck: "Dutch Verbs (Common 500)", front: "belopen", back: "actively to walk" },
  { deck: "Dutch Verbs (Common 500)", front: "berennen", back: "actively to run" },
  { deck: "Dutch Verbs (Common 500)", front: "befietsen", back: "actively to cycle" },
  { deck: "Dutch Verbs (Common 500)", front: "berijden", back: "actively to drive" },
  { deck: "Dutch Verbs (Common 500)", front: "bereizen", back: "actively to travel" },
  { deck: "Dutch Verbs (Common 500)", front: "bewonen", back: "actively to live" },
  { deck: "Dutch Verbs (Common 500)", front: "beslapen", back: "actively to sleep" },
  { deck: "Dutch Verbs (Common 500)", front: "beeten", back: "actively to eat" },
  { deck: "Dutch Verbs (Common 500)", front: "bedrinken", back: "actively to drink" },
  { deck: "Dutch Verbs (Common 500)", front: "bekoken", back: "actively to cook" },
  { deck: "Dutch Verbs (Common 500)", front: "bebakken", back: "actively to bake" },
  { deck: "Dutch Verbs (Common 500)", front: "bewassen", back: "actively to wash" },
  { deck: "Dutch Verbs (Common 500)", front: "beschoonmaken", back: "actively to clean" },
  { deck: "Dutch Verbs (Common 500)", front: "beopenen", back: "actively to open" },
  { deck: "Dutch Verbs (Common 500)", front: "besluiten", back: "actively to close" },
  { deck: "Dutch Verbs (Common 500)", front: "bebeginnen", back: "actively to begin" },
  { deck: "Dutch Verbs (Common 500)", front: "beeindigen", back: "actively to end" },
  { deck: "Dutch Verbs (Common 500)", front: "bewinnen", back: "actively to win" },
  { deck: "Dutch Verbs (Common 500)", front: "beverliezen", back: "actively to lose" },
  { deck: "Dutch Verbs (Common 500)", front: "behelpen", back: "actively to help" },
  { deck: "Dutch Verbs (Common 500)", front: "begebruiken", back: "actively to use" },
  { deck: "Dutch Verbs (Common 500)", front: "beproberen", back: "actively to try" },
  { deck: "Dutch Verbs (Common 500)", front: "bevinden", back: "actively to find" },
  { deck: "Dutch Verbs (Common 500)", front: "bebetalen", back: "actively to pay" },
  { deck: "Dutch Verbs (Common 500)", front: "bekopen", back: "actively to buy" },
  { deck: "Dutch Verbs (Common 500)", front: "beverkopen", back: "actively to sell" },
  { deck: "Dutch Verbs (Common 500)", front: "besturen", back: "actively to send" },
  { deck: "Dutch Verbs (Common 500)", front: "beontvangen", back: "actively to receive" },
  { deck: "Dutch Verbs (Common 500)", front: "bebrengen", back: "actively to bring" },
  { deck: "Dutch Verbs (Common 500)", front: "behalen", back: "actively to fetch" },
  { deck: "Dutch Verbs (Common 500)", front: "behouden", back: "actively to keep" },
  { deck: "Dutch Verbs (Common 500)", front: "bebreken", back: "actively to break" },
  { deck: "Dutch Verbs (Common 500)", front: "bebouwen", back: "actively to build" },
  { deck: "Dutch Verbs (Common 500)", front: "betekenen", back: "actively to draw" },
  { deck: "Dutch Verbs (Common 500)", front: "beschilderen", back: "actively to paint" },
  { deck: "Dutch Verbs (Common 500)", front: "bespelen", back: "actively to play" },
  { deck: "Dutch Verbs (Common 500)", front: "bezingen", back: "actively to sing" },
  { deck: "Dutch Verbs (Common 500)", front: "bedansen", back: "actively to dance" },
  { deck: "Dutch Verbs (Common 500)", front: "belachen", back: "actively to laugh" },
  { deck: "Dutch Verbs (Common 500)", front: "behuilen", back: "actively to cry" },
  { deck: "Dutch Verbs (Common 500)", front: "behaten", back: "actively to hate" },
  { deck: "Dutch Verbs (Common 500)", front: "bekiezen", back: "actively to choose" },
  { deck: "Dutch Verbs (Common 500)", front: "beveranderen", back: "actively to change" },
  { deck: "Dutch Verbs (Common 500)", front: "begroeien", back: "actively to grow" },
  { deck: "Dutch Verbs (Common 500)", front: "bedalen", back: "actively to decline" },
  { deck: "Dutch Verbs (Common 500)", front: "bestijgen", back: "actively to rise" },
  { deck: "Dutch Verbs (Common 500)", front: "bebestaan", back: "actively to exist" },
  { deck: "Dutch Verbs (Common 500)", front: "beleven", back: "actively to live" },
  { deck: "Dutch Verbs (Common 500)", front: "besterven", back: "actively to die" },
  { deck: "Dutch Verbs (Common 500)", front: "beontmoeten", back: "actively to meet" },
  { deck: "Dutch Verbs (Common 500)", front: "beherinneren", back: "actively to remember" },
  { deck: "Dutch Verbs (Common 500)", front: "bevergeten", back: "actively to forget" },
  { deck: "Dutch Verbs (Common 500)", front: "bebegrijpen", back: "actively to understand" },
  { deck: "Dutch Verbs (Common 500)", front: "beuitleggen", back: "actively to explain" },
  { deck: "Dutch Verbs (Common 500)", front: "bevertellen", back: "actively to tell" },
  { deck: "Dutch Verbs (Common 500)", front: "bebellen", back: "actively to call" },
  { deck: "Dutch Verbs (Common 500)", front: "bemailen", back: "actively to email" },
  { deck: "Dutch Verbs (Common 500)", front: "bedownloaden", back: "actively to download" },
  { deck: "Dutch Verbs (Common 500)", front: "beuploaden", back: "actively to upload" },
  { deck: "Dutch Verbs (Common 500)", front: "beverbinden", back: "actively to connect" },
  { deck: "Dutch Verbs (Common 500)", front: "bedelen", back: "actively to share" },
  { deck: "Dutch Verbs (Common 500)", front: "bevolgen", back: "actively to follow" },
  { deck: "Dutch Verbs (Common 500)", front: "beleiden", back: "actively to lead" },
  { deck: "Dutch Verbs (Common 500)", front: "bebewegen", back: "actively to move" },
  { deck: "Dutch Verbs (Common 500)", front: "bestoppen", back: "actively to stop" },
  { deck: "Dutch Verbs (Common 500)", front: "bestarten", back: "actively to start" },
  { deck: "Dutch Verbs (Common 500)", front: "bewachten", back: "actively to wait" },
  { deck: "Dutch Verbs (Common 500)", front: "bebeslissen", back: "actively to decide" },
  { deck: "Dutch Verbs (Common 500)", front: "beplannen", back: "actively to plan" },
  { deck: "Dutch Verbs (Common 500)", front: "beorganiseren", back: "actively to organize" },
  { deck: "Dutch Verbs (Common 500)", front: "bevergelijken", back: "actively to compare" },
  { deck: "Dutch Verbs (Common 500)", front: "becontroleren", back: "actively to check" },
  { deck: "Dutch Verbs (Common 500)", front: "bemeten", back: "actively to measure" },
  { deck: "Dutch Verbs (Common 500)", front: "betellen", back: "actively to count" },
  { deck: "Dutch Verbs (Common 500)", front: "berekenen", back: "actively to calculate" },
  { deck: "Dutch Verbs (Common 500)", front: "bebeschrijven", back: "actively to describe" },
  { deck: "Dutch Verbs (Common 500)", front: "bebezoeken", back: "actively to visit" },
  { deck: "Dutch Verbs (Common 500)", front: "beontdekken", back: "actively to discover" },
  { deck: "Dutch Verbs (Common 500)", front: "beontwikkelen", back: "actively to develop" },
  { deck: "Dutch Verbs (Common 500)", front: "beverbeteren", back: "actively to improve" },
  { deck: "Dutch Verbs (Common 500)", front: "berepareren", back: "actively to repair" },
  { deck: "Dutch Verbs (Common 500)", front: "bebeschermen", back: "actively to protect" },
  { deck: "Dutch Verbs (Common 500)", front: "beverzamelen", back: "actively to collect" },
  { deck: "Dutch Verbs (Common 500)", front: "begooien", back: "actively to throw" },
  { deck: "Dutch Verbs (Common 500)", front: "bevangen", back: "actively to catch" },
  { deck: "Dutch Verbs (Common 500)", front: "bespringen", back: "actively to jump" },
  { deck: "Dutch Verbs (Common 500)", front: "bevliegen", back: "actively to fly" },
  { deck: "Dutch Verbs (Common 500)", front: "bevallen", back: "actively to fall" },
  { deck: "Dutch Verbs (Common 500)", front: "bedragen", back: "actively to carry/wear" },
  { deck: "Dutch Verbs (Common 500)", front: "betrekken", back: "actively to pull" },
  { deck: "Dutch Verbs (Common 500)", front: "beduwen", back: "actively to push" },
  { deck: "Dutch Verbs (Common 500)", front: "beblijken", back: "actively to appear" },
  { deck: "Dutch Verbs (Common 500)", front: "bepassen", back: "actively to fit" },
  { deck: "Dutch Verbs (Common 500)", front: "beklinken", back: "actively to sound" },
  { deck: "Dutch Verbs (Common 500)", front: "beruiken", back: "actively to smell" },
  { deck: "Dutch Verbs (Common 500)", front: "besmaken", back: "actively to taste" },
  { deck: "Dutch Verbs (Common 500)", front: "bekieperen", back: "actively to tip over" },
  { deck: "Dutch Verbs (Common 500)", front: "bezenden", back: "actively to broadcast" },
  { deck: "Dutch Verbs (Common 500)", front: "beroepen", back: "actively to shout" },
  { deck: "Dutch Verbs (Common 500)", front: "befluisteren", back: "actively to whisper" },
  { deck: "Dutch Verbs (Common 500)", front: "benodigen", back: "actively to invite" },
  { deck: "Dutch Verbs (Common 500)", front: "beweigeren", back: "actively to refuse" },
  { deck: "Dutch Verbs (Common 500)", front: "beaccepteren", back: "actively to accept" },
  { deck: "Dutch Verbs (Common 500)", front: "berespecteren", back: "actively to respect" },
  { deck: "Dutch Verbs (Common 500)", front: "bevertrouwen", back: "actively to trust" },
  { deck: "Dutch Verbs (Common 500)", front: "betwijfelen", back: "actively to doubt" },
  { deck: "Dutch Verbs (Common 500)", front: "verzijn", back: "thoroughly to be" },
  { deck: "Dutch Verbs (Common 500)", front: "verhebben", back: "thoroughly to have" },
  { deck: "Dutch Verbs (Common 500)", front: "verworden", back: "thoroughly to become" },
  { deck: "Dutch Verbs (Common 500)", front: "vergaan", back: "thoroughly to go" },
  { deck: "Dutch Verbs (Common 500)", front: "verkomen", back: "thoroughly to come" },
  { deck: "Dutch Verbs (Common 500)", front: "verzien", back: "thoroughly to see" },
  { deck: "Dutch Verbs (Common 500)", front: "verdoen", back: "thoroughly to do" },
  { deck: "Dutch Verbs (Common 500)", front: "vermaken", back: "thoroughly to make" },
  { deck: "Dutch Verbs (Common 500)", front: "vergeven", back: "thoroughly to give" },
  { deck: "Dutch Verbs (Common 500)", front: "vernemen", back: "thoroughly to take" },
  { deck: "Dutch Verbs (Common 500)", front: "verstaan", back: "thoroughly to stand" },
  { deck: "Dutch Verbs (Common 500)", front: "verzitten", back: "thoroughly to sit" },
  { deck: "Dutch Verbs (Common 500)", front: "verliggen", back: "thoroughly to lie" },
  { deck: "Dutch Verbs (Common 500)", front: "verblijven", back: "thoroughly to stay" },
  { deck: "Dutch Verbs (Common 500)", front: "verdenken", back: "thoroughly to think" },
  { deck: "Dutch Verbs (Common 500)", front: "verweten", back: "thoroughly to know" },
  { deck: "Dutch Verbs (Common 500)", front: "verzeggen", back: "thoroughly to say" },
  { deck: "Dutch Verbs (Common 500)", front: "vervragen", back: "thoroughly to ask" },
  { deck: "Dutch Verbs (Common 500)", front: "verantwoorden", back: "thoroughly to answer" },
  { deck: "Dutch Verbs (Common 500)", front: "verhoren", back: "thoroughly to hear" },
  { deck: "Dutch Verbs (Common 500)", front: "verluisteren", back: "thoroughly to listen" },
  { deck: "Dutch Verbs (Common 500)", front: "verkijken", back: "thoroughly to look" },
  { deck: "Dutch Verbs (Common 500)", front: "vervoelen", back: "thoroughly to feel" },
  { deck: "Dutch Verbs (Common 500)", front: "verwerken", back: "thoroughly to work" },
  { deck: "Dutch Verbs (Common 500)", front: "verleren", back: "thoroughly to learn" },
  { deck: "Dutch Verbs (Common 500)", front: "verstuderen", back: "thoroughly to study" },
  { deck: "Dutch Verbs (Common 500)", front: "verlezen", back: "thoroughly to read" },
  { deck: "Dutch Verbs (Common 500)", front: "verschrijven", back: "thoroughly to write" },
  { deck: "Dutch Verbs (Common 500)", front: "verspreken", back: "thoroughly to speak" },
  { deck: "Dutch Verbs (Common 500)", front: "verlopen", back: "thoroughly to walk" },
  { deck: "Dutch Verbs (Common 500)", front: "verrennen", back: "thoroughly to run" },
  { deck: "Dutch Verbs (Common 500)", front: "verfietsen", back: "thoroughly to cycle" },
  { deck: "Dutch Verbs (Common 500)", front: "verrijden", back: "thoroughly to drive" },
  { deck: "Dutch Verbs (Common 500)", front: "verreizen", back: "thoroughly to travel" },
  { deck: "Dutch Verbs (Common 500)", front: "verwonen", back: "thoroughly to live" },
  { deck: "Dutch Verbs (Common 500)", front: "verslapen", back: "thoroughly to sleep" },
  { deck: "Dutch Verbs (Common 500)", front: "vereten", back: "thoroughly to eat" },
  { deck: "Dutch Verbs (Common 500)", front: "verdrinken", back: "thoroughly to drink" },
  { deck: "Dutch Verbs (Common 500)", front: "verkoken", back: "thoroughly to cook" },
  { deck: "Dutch Verbs (Common 500)", front: "verbakken", back: "thoroughly to bake" },
  { deck: "Dutch Verbs (Common 500)", front: "verwassen", back: "thoroughly to wash" },
  { deck: "Dutch Verbs (Common 500)", front: "verschoonmaken", back: "thoroughly to clean" },
  { deck: "Dutch Verbs (Common 500)", front: "veropenen", back: "thoroughly to open" },
  { deck: "Dutch Verbs (Common 500)", front: "versluiten", back: "thoroughly to close" },
  { deck: "Dutch Verbs (Common 500)", front: "verbeginnen", back: "thoroughly to begin" },
  { deck: "Dutch Verbs (Common 500)", front: "vereindigen", back: "thoroughly to end" },
  { deck: "Dutch Verbs (Common 500)", front: "verwinnen", back: "thoroughly to win" },
  { deck: "Dutch Verbs (Common 500)", front: "ververliezen", back: "thoroughly to lose" },
  { deck: "Dutch Verbs (Common 500)", front: "verhelpen", back: "thoroughly to help" },
  { deck: "Dutch Verbs (Common 500)", front: "vergebruiken", back: "thoroughly to use" },
  { deck: "Dutch Verbs (Common 500)", front: "verproberen", back: "thoroughly to try" },
  { deck: "Dutch Verbs (Common 500)", front: "vervinden", back: "thoroughly to find" },
  { deck: "Dutch Verbs (Common 500)", front: "verzoeken", back: "thoroughly to search" },
  { deck: "Dutch Verbs (Common 500)", front: "verbetalen", back: "thoroughly to pay" },
  { deck: "Dutch Verbs (Common 500)", front: "ververkopen", back: "thoroughly to sell" },
  { deck: "Dutch Verbs (Common 500)", front: "versturen", back: "thoroughly to send" },
  { deck: "Dutch Verbs (Common 500)", front: "verontvangen", back: "thoroughly to receive" },
  { deck: "Dutch Verbs (Common 500)", front: "verbrengen", back: "thoroughly to bring" },
  { deck: "Dutch Verbs (Common 500)", front: "verhalen", back: "thoroughly to fetch" },
  { deck: "Dutch Verbs (Common 500)", front: "verhouden", back: "thoroughly to keep" },
  { deck: "Dutch Verbs (Common 500)", front: "verbreken", back: "thoroughly to break" },
  { deck: "Dutch Verbs (Common 500)", front: "verbouwen", back: "thoroughly to build" },
  { deck: "Dutch Verbs (Common 500)", front: "vertekenen", back: "thoroughly to draw" },
  { deck: "Dutch Verbs (Common 500)", front: "verschilderen", back: "thoroughly to paint" },
  { deck: "Dutch Verbs (Common 500)", front: "verspelen", back: "thoroughly to play" },
  { deck: "Dutch Verbs (Common 500)", front: "verzingen", back: "thoroughly to sing" },
  { deck: "Dutch Verbs (Common 500)", front: "verdansen", back: "thoroughly to dance" },
  { deck: "Dutch Verbs (Common 500)", front: "verlachen", back: "thoroughly to laugh" },
  { deck: "Dutch Verbs (Common 500)", front: "verhuilen", back: "thoroughly to cry" },
  { deck: "Dutch Verbs (Common 500)", front: "verhaten", back: "thoroughly to hate" },
  { deck: "Dutch Verbs (Common 500)", front: "verkiezen", back: "thoroughly to choose" },
  { deck: "Dutch Verbs (Common 500)", front: "ververanderen", back: "thoroughly to change" },
  { deck: "Dutch Verbs (Common 500)", front: "vergroeien", back: "thoroughly to grow" },
  { deck: "Dutch Verbs (Common 500)", front: "verdalen", back: "thoroughly to decline" },
  { deck: "Dutch Verbs (Common 500)", front: "verstijgen", back: "thoroughly to rise" },
  { deck: "Dutch Verbs (Common 500)", front: "verbestaan", back: "thoroughly to exist" },
  { deck: "Dutch Verbs (Common 500)", front: "verleven", back: "thoroughly to live" },
  { deck: "Dutch Verbs (Common 500)", front: "versterven", back: "thoroughly to die" },
  { deck: "Dutch Verbs (Common 500)", front: "verontmoeten", back: "thoroughly to meet" },
  { deck: "Dutch Verbs (Common 500)", front: "verherinneren", back: "thoroughly to remember" },
  { deck: "Dutch Verbs (Common 500)", front: "ververgeten", back: "thoroughly to forget" },
  { deck: "Dutch Verbs (Common 500)", front: "verbegrijpen", back: "thoroughly to understand" },
  { deck: "Dutch Verbs (Common 500)", front: "veruitleggen", back: "thoroughly to explain" },
  { deck: "Dutch Verbs (Common 500)", front: "ververtellen", back: "thoroughly to tell" },
  { deck: "Dutch Verbs (Common 500)", front: "verbellen", back: "thoroughly to call" },
  { deck: "Dutch Verbs (Common 500)", front: "vermailen", back: "thoroughly to email" },
  { deck: "Dutch Verbs (Common 500)", front: "verdownloaden", back: "thoroughly to download" },
  { deck: "Dutch Verbs (Common 500)", front: "veruploaden", back: "thoroughly to upload" },
  { deck: "Dutch Verbs (Common 500)", front: "ververbinden", back: "thoroughly to connect" },
  { deck: "Dutch Verbs (Common 500)", front: "verdelen", back: "thoroughly to share" },
  { deck: "Dutch Verbs (Common 500)", front: "vervolgen", back: "thoroughly to follow" },
  { deck: "Dutch Verbs (Common 500)", front: "verleiden", back: "thoroughly to lead" },
  { deck: "Dutch Verbs (Common 500)", front: "verbewegen", back: "thoroughly to move" },
  { deck: "Dutch Verbs (Common 500)", front: "verstoppen", back: "thoroughly to stop" },
  { deck: "Dutch Verbs (Common 500)", front: "verstarten", back: "thoroughly to start" },
  { deck: "Dutch Verbs (Common 500)", front: "verwachten", back: "thoroughly to wait" },
  { deck: "Dutch Verbs (Common 500)", front: "verbeslissen", back: "thoroughly to decide" },
  { deck: "Dutch Verbs (Common 500)", front: "verplannen", back: "thoroughly to plan" },
  { deck: "Dutch Verbs (Common 500)", front: "verorganiseren", back: "thoroughly to organize" },
  { deck: "Dutch Verbs (Common 500)", front: "ververgelijken", back: "thoroughly to compare" },
  { deck: "Dutch Verbs (Common 500)", front: "vercontroleren", back: "thoroughly to check" },
  { deck: "Dutch Verbs (Common 500)", front: "vermeten", back: "thoroughly to measure" },
  { deck: "Dutch Verbs (Common 500)", front: "verrekenen", back: "thoroughly to calculate" },
  { deck: "Dutch Verbs (Common 500)", front: "verbeschrijven", back: "thoroughly to describe" },
  { deck: "Dutch Verbs (Common 500)", front: "verbezoeken", back: "thoroughly to visit" },
  { deck: "Dutch Verbs (Common 500)", front: "verontdekken", back: "thoroughly to discover" },
  { deck: "Dutch Verbs (Common 500)", front: "verontwikkelen", back: "thoroughly to develop" },
  { deck: "Dutch Verbs (Common 500)", front: "ververbeteren", back: "thoroughly to improve" },
  { deck: "Dutch Verbs (Common 500)", front: "verrepareren", back: "thoroughly to repair" },
  { deck: "Dutch Verbs (Common 500)", front: "verbeschermen", back: "thoroughly to protect" },
  { deck: "Dutch Verbs (Common 500)", front: "ververzamelen", back: "thoroughly to collect" },
  { deck: "Dutch Verbs (Common 500)", front: "vergooien", back: "thoroughly to throw" },
  { deck: "Dutch Verbs (Common 500)", front: "vervangen", back: "thoroughly to catch" },
  { deck: "Dutch Verbs (Common 500)", front: "verspringen", back: "thoroughly to jump" },
  { deck: "Dutch Verbs (Common 500)", front: "vervliegen", back: "thoroughly to fly" },
  { deck: "Dutch Verbs (Common 500)", front: "vervallen", back: "thoroughly to fall" },
  { deck: "Dutch Verbs (Common 500)", front: "verdragen", back: "thoroughly to carry/wear" },
  { deck: "Dutch Verbs (Common 500)", front: "vertrekken", back: "thoroughly to pull" },
  { deck: "Dutch Verbs (Common 500)", front: "verduwen", back: "thoroughly to push" },
  { deck: "Dutch Verbs (Common 500)", front: "verblijken", back: "thoroughly to appear" },
  { deck: "Dutch Verbs (Common 500)", front: "verpassen", back: "thoroughly to fit" },
  { deck: "Dutch Verbs (Common 500)", front: "verklinken", back: "thoroughly to sound" },
  { deck: "Dutch Verbs (Common 500)", front: "verruiken", back: "thoroughly to smell" },
  { deck: "Dutch Verbs (Common 500)", front: "versmaken", back: "thoroughly to taste" },
  { deck: "Dutch Verbs (Common 500)", front: "verkieperen", back: "thoroughly to tip over" },
  { deck: "Dutch Verbs (Common 500)", front: "verzenden", back: "thoroughly to broadcast" },
  { deck: "Dutch Verbs (Common 500)", front: "verroepen", back: "thoroughly to shout" },
  { deck: "Dutch Verbs (Common 500)", front: "verfluisteren", back: "thoroughly to whisper" },
  { deck: "Dutch Verbs (Common 500)", front: "vernodigen", back: "thoroughly to invite" },
  { deck: "Dutch Verbs (Common 500)", front: "verweigeren", back: "thoroughly to refuse" },
  { deck: "Dutch Verbs (Common 500)", front: "veraccepteren", back: "thoroughly to accept" },
  { deck: "Dutch Verbs (Common 500)", front: "verrespecteren", back: "thoroughly to respect" },
  { deck: "Dutch Verbs (Common 500)", front: "ververtrouwen", back: "thoroughly to trust" },
  { deck: "Dutch Verbs (Common 500)", front: "vertwijfelen", back: "thoroughly to doubt" },
  { deck: "Dutch Verbs (Common 500)", front: "herzijn", back: "again to be" },
  { deck: "Dutch Verbs (Common 500)", front: "herhebben", back: "again to have" },
  { deck: "Dutch Verbs (Common 500)", front: "herworden", back: "again to become" },
  { deck: "Dutch Verbs (Common 500)", front: "hergaan", back: "again to go" },
  { deck: "Dutch Verbs (Common 500)", front: "herkomen", back: "again to come" },
  { deck: "Dutch Verbs (Common 500)", front: "herzien", back: "again to see" },
  { deck: "Dutch Verbs (Common 500)", front: "herdoen", back: "again to do" },
  { deck: "Dutch Verbs (Common 500)", front: "hermaken", back: "again to make" },
  { deck: "Dutch Verbs (Common 500)", front: "hergeven", back: "again to give" },
  { deck: "Dutch Verbs (Common 500)", front: "hernemen", back: "again to take" },
  { deck: "Dutch Verbs (Common 500)", front: "herstaan", back: "again to stand" },
  { deck: "Dutch Verbs (Common 500)", front: "herzitten", back: "again to sit" },
  { deck: "Dutch Verbs (Common 500)", front: "herliggen", back: "again to lie" },
  { deck: "Dutch Verbs (Common 500)", front: "herblijven", back: "again to stay" },
  { deck: "Dutch Verbs (Common 500)", front: "herdenken", back: "again to think" },
  { deck: "Dutch Verbs (Common 500)", front: "herweten", back: "again to know" },
  { deck: "Dutch Verbs (Common 500)", front: "herzeggen", back: "again to say" },
  { deck: "Dutch Verbs (Common 500)", front: "hervragen", back: "again to ask" },
  { deck: "Dutch Verbs (Common 500)", front: "herantwoorden", back: "again to answer" },
  { deck: "Dutch Verbs (Common 500)", front: "herhoren", back: "again to hear" },
  { deck: "Dutch Verbs (Common 500)", front: "herluisteren", back: "again to listen" },
  { deck: "Dutch Verbs (Common 500)", front: "herkijken", back: "again to look" },
  { deck: "Dutch Verbs (Common 500)", front: "hervoelen", back: "again to feel" },
  { deck: "Dutch Verbs (Common 500)", front: "herwerken", back: "again to work" },
  { deck: "Dutch Verbs (Common 500)", front: "herleren", back: "again to learn" },
  { deck: "Dutch Verbs (Common 500)", front: "herstuderen", back: "again to study" },
  { deck: "Dutch Verbs (Common 500)", front: "herlezen", back: "again to read" },
  { deck: "Dutch Verbs (Common 500)", front: "herschrijven", back: "again to write" },
  { deck: "Dutch Verbs (Common 500)", front: "herspreken", back: "again to speak" },
  { deck: "Dutch Verbs (Common 500)", front: "herlopen", back: "again to walk" },
  { deck: "Dutch Verbs (Common 500)", front: "herrennen", back: "again to run" },
  { deck: "Dutch Verbs (Common 500)", front: "herfietsen", back: "again to cycle" },
  { deck: "Dutch Verbs (Common 500)", front: "herrijden", back: "again to drive" },
  { deck: "Dutch Verbs (Common 500)", front: "herreizen", back: "again to travel" },
  { deck: "Dutch Verbs (Common 500)", front: "herwonen", back: "again to live" },
  { deck: "Dutch Verbs (Common 500)", front: "herslapen", back: "again to sleep" },
  { deck: "Dutch Verbs (Common 500)", front: "hereten", back: "again to eat" },
  { deck: "Dutch Verbs (Common 500)", front: "herdrinken", back: "again to drink" },
  { deck: "Dutch Verbs (Common 500)", front: "herkoken", back: "again to cook" },
  { deck: "Dutch Verbs (Common 500)", front: "herbakken", back: "again to bake" },
  { deck: "Dutch Verbs (Common 500)", front: "herwassen", back: "again to wash" },
  { deck: "Dutch Verbs (Common 500)", front: "herschoonmaken", back: "again to clean" },
  { deck: "Dutch Verbs (Common 500)", front: "heropenen", back: "again to open" },
  { deck: "Dutch Verbs (Common 500)", front: "hersluiten", back: "again to close" },
  { deck: "Dutch Verbs (Common 500)", front: "herbeginnen", back: "again to begin" },
  { deck: "Dutch Verbs (Common 500)", front: "hereindigen", back: "again to end" },
  { deck: "Dutch Verbs (Common 500)", front: "herwinnen", back: "again to win" },
  { deck: "Dutch Verbs (Common 500)", front: "herverliezen", back: "again to lose" },
  { deck: "Dutch Verbs (Common 500)", front: "herhelpen", back: "again to help" },
  { deck: "Dutch Verbs (Common 500)", front: "hergebruiken", back: "again to use" },
  { deck: "Dutch Verbs (Common 500)", front: "herproberen", back: "again to try" },
  { deck: "Dutch Verbs (Common 500)", front: "hervinden", back: "again to find" },
  { deck: "Dutch Verbs (Common 500)", front: "herzoeken", back: "again to search" },
  { deck: "Dutch Verbs (Common 500)", front: "herbetalen", back: "again to pay" },
  { deck: "Dutch Verbs (Common 500)", front: "herkopen", back: "again to buy" },
  { deck: "Dutch Verbs (Common 500)", front: "herverkopen", back: "again to sell" },
  { deck: "Dutch Verbs (Common 500)", front: "hersturen", back: "again to send" },
  { deck: "Dutch Verbs (Common 500)", front: "herontvangen", back: "again to receive" },
  { deck: "Dutch Verbs (Common 500)", front: "herbrengen", back: "again to bring" },
  { deck: "Dutch Verbs (Common 500)", front: "herhalen", back: "again to fetch" },
  { deck: "Dutch Verbs (Common 500)", front: "herhouden", back: "again to keep" },
  { deck: "Dutch Verbs (Common 500)", front: "herbreken", back: "again to break" },
  { deck: "Dutch Verbs (Common 500)", front: "herbouwen", back: "again to build" },
  { deck: "Dutch Verbs (Common 500)", front: "hertekenen", back: "again to draw" },
  { deck: "Dutch Verbs (Common 500)", front: "herschilderen", back: "again to paint" },
  { deck: "Dutch Verbs (Common 500)", front: "herspelen", back: "again to play" },
  { deck: "Dutch Verbs (Common 500)", front: "herzingen", back: "again to sing" },
  { deck: "Dutch Verbs (Common 500)", front: "herdansen", back: "again to dance" },
  { deck: "Dutch Verbs (Common 500)", front: "herlachen", back: "again to laugh" },
  { deck: "Dutch Verbs (Common 500)", front: "herhuilen", back: "again to cry" },
  { deck: "Dutch Verbs (Common 500)", front: "herhaten", back: "again to hate" },
  { deck: "Dutch Verbs (Common 500)", front: "herkiezen", back: "again to choose" },
  { deck: "Dutch Verbs (Common 500)", front: "herveranderen", back: "again to change" },
  { deck: "Dutch Verbs (Common 500)", front: "hergroeien", back: "again to grow" },
  { deck: "Dutch Verbs (Common 500)", front: "herdalen", back: "again to decline" },
  { deck: "Dutch Verbs (Common 500)", front: "herstijgen", back: "again to rise" },
  { deck: "Dutch Verbs (Common 500)", front: "herbestaan", back: "again to exist" },
  { deck: "Dutch Verbs (Common 500)", front: "herleven", back: "again to live" },
  { deck: "Dutch Verbs (Common 500)", front: "hersterven", back: "again to die" },
  { deck: "Dutch Verbs (Common 500)", front: "herontmoeten", back: "again to meet" },
  { deck: "Dutch Verbs (Common 500)", front: "herherinneren", back: "again to remember" },
  { deck: "Dutch Verbs (Common 500)", front: "hervergeten", back: "again to forget" },
  { deck: "Dutch Verbs (Common 500)", front: "herbegrijpen", back: "again to understand" },
  { deck: "Dutch Verbs (Common 500)", front: "heruitleggen", back: "again to explain" },
  { deck: "Dutch Verbs (Common 500)", front: "hervertellen", back: "again to tell" },
  { deck: "Dutch Verbs (Common 500)", front: "herbellen", back: "again to call" },
  { deck: "Dutch Verbs (Common 500)", front: "hermailen", back: "again to email" },
  { deck: "Dutch Verbs (Common 500)", front: "herdownloaden", back: "again to download" },
  { deck: "Dutch Verbs (Common 500)", front: "heruploaden", back: "again to upload" },
  { deck: "Dutch Verbs (Common 500)", front: "herverbinden", back: "again to connect" },
  { deck: "Dutch Verbs (Common 500)", front: "herdelen", back: "again to share" },
  { deck: "Dutch Verbs (Common 500)", front: "hervolgen", back: "again to follow" },
  { deck: "Dutch Verbs (Common 500)", front: "herleiden", back: "again to lead" },
  { deck: "Dutch Verbs (Common 500)", front: "herbewegen", back: "again to move" },
  { deck: "Dutch Verbs (Common 500)", front: "herstoppen", back: "again to stop" },
  { deck: "Dutch Verbs (Common 500)", front: "herstarten", back: "again to start" },
];

const starterCards = [
  ...dutchCommonVerbDeck,
  { deck: "Spanish Basics", front: "Hola", back: "Hello" },
  { deck: "Spanish Basics", front: "Gracias", back: "Thank you" },
  { deck: "French Basics", front: "Bonjour", back: "Good morning / Hello" },
  { deck: "French Basics", front: "S'il vous plaît", back: "Please" },
  { deck: "Japanese Basics", front: "Arigatō", back: "Thank you" }
];

const state = {
  cards: loadCards(),
  filteredDeck: "All decks",
  order: [],
  currentIndex: 0,
  flipped: false
};

const elements = {
  deckFilter: document.getElementById("deck-filter"),
  card: document.getElementById("flashcard"),
  frontText: document.getElementById("card-front-text"),
  backText: document.getElementById("card-back-text"),
  progress: document.getElementById("progress"),
  prevButton: document.getElementById("prev-btn"),
  nextButton: document.getElementById("next-btn")
};

initialize();

function initialize() {
  wireEvents();
  rebuildDeckFilter();
  rebuildOrder();
  renderCard();
}

function wireEvents() {
  elements.prevButton.addEventListener("click", () => stepCard(-1));
  elements.nextButton.addEventListener("click", () => stepCard(1));
  elements.card.addEventListener("click", toggleFlip);
  elements.card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleFlip();
    }
  });

  elements.deckFilter.addEventListener("change", () => {
    state.filteredDeck = elements.deckFilter.value;
    state.currentIndex = 0;
    state.flipped = false;
    rebuildOrder();
    renderCard();
  });
}

function loadCards() {
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return [...starterCards];
  }

  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [...starterCards];
  } catch {
    return [...starterCards];
  }
}

function rebuildDeckFilter() {
  const decks = ["All decks", ...new Set(state.cards.map((card) => card.deck))];

  elements.deckFilter.innerHTML = "";
  decks.forEach((deck) => {
    const option = document.createElement("option");
    option.value = deck;
    option.textContent = deck;
    if (deck === state.filteredDeck) {
      option.selected = true;
    }
    elements.deckFilter.append(option);
  });

  if (!decks.includes(state.filteredDeck)) {
    state.filteredDeck = "All decks";
    elements.deckFilter.value = state.filteredDeck;
  }
}

function rebuildOrder() {
  state.order = state.cards
    .map((_, index) => index)
    .filter((cardIndex) => {
      if (state.filteredDeck === "All decks") {
        return true;
      }
      return state.cards[cardIndex].deck === state.filteredDeck;
    });
}

function renderCard() {
  const card = getCurrentCard();

  if (!card) {
    elements.frontText.textContent = "No cards found.";
    elements.backText.textContent = "No cards available in this deck.";
    elements.progress.textContent = "0 / 0";
    setFlip(false);
    return;
  }

  elements.frontText.textContent = card.front;
  elements.backText.textContent = card.back;
  elements.progress.textContent = `${state.currentIndex + 1} / ${state.order.length} • ${card.deck}`;
  setFlip(state.flipped);
}

function getCurrentCard() {
  if (state.order.length === 0) {
    return null;
  }
  if (state.currentIndex >= state.order.length) {
    state.currentIndex = 0;
  }
  const actualIndex = state.order[state.currentIndex];
  return state.cards[actualIndex];
}

function setFlip(isFlipped) {
  state.flipped = isFlipped;
  elements.card.classList.toggle("flipped", state.flipped);
  elements.card.setAttribute("aria-pressed", String(state.flipped));
}

function toggleFlip() {
  if (state.order.length === 0) {
    return;
  }
  setFlip(!state.flipped);
}

function stepCard(step) {
  if (state.order.length === 0) {
    return;
  }
  const lastIndex = state.order.length - 1;
  state.currentIndex = state.currentIndex + step;
  if (state.currentIndex < 0) {
    state.currentIndex = lastIndex;
  } else if (state.currentIndex > lastIndex) {
    state.currentIndex = 0;
  }
  setFlip(false);
  renderCard();
}
