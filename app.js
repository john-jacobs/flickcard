const STORAGE_KEY = "flickcard-v1";

const starterCards = [
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
  nextButton: document.getElementById("next-btn"),
  flipButton: document.getElementById("flip-btn"),
  shuffleButton: document.getElementById("shuffle-btn"),
  form: document.getElementById("add-card-form"),
  deckNameInput: document.getElementById("deck-name"),
  frontInput: document.getElementById("front"),
  backInput: document.getElementById("back")
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
  elements.flipButton.addEventListener("click", toggleFlip);
  elements.shuffleButton.addEventListener("click", shuffleCards);
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

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const deck = elements.deckNameInput.value.trim();
    const front = elements.frontInput.value.trim();
    const back = elements.backInput.value.trim();

    if (!deck || !front || !back) {
      return;
    }

    state.cards.push({ deck, front, back });
    saveCards(state.cards);

    if (state.filteredDeck !== "All decks" && state.filteredDeck !== deck) {
      state.filteredDeck = deck;
    }

    elements.form.reset();
    rebuildDeckFilter();
    rebuildOrder();
    state.currentIndex = Math.max(0, state.order.length - 1);
    state.flipped = false;
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

function saveCards(cards) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
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
    elements.backText.textContent = "Add one below to get started.";
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

function shuffleCards() {
  if (state.order.length <= 1) {
    return;
  }
  for (let i = state.order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [state.order[i], state.order[j]] = [state.order[j], state.order[i]];
  }
  state.currentIndex = 0;
  setFlip(false);
  renderCard();
}
