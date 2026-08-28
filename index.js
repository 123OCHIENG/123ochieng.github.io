/* =========================================================
   VANTYX STUDIOS KENYA
   COMPLETE CLEAN JAVASCRIPT
   ========================================================= */


/* =========================================================
   PROJECT DATA / CASE STUDIES
   ========================================================= */

const projects = {
  1: {
    title: "Luxury Hotel Branding",
    challenge: "The client lacked a premium visual identity.",
    solution: "We created a luxury branding system with elegant typography.",
    tools: "Figma, Photoshop",
    result: "Increased brand recognition by 40%"
  },

  2: {
    title: "E-Commerce UI Design",
    challenge: "Low user engagement on platform.",
    solution: "Redesigned UI with better UX flow.",
    tools: "Figma, React",
    result: "Boosted conversions by 25%"
  },

  3: {
    title: "Corporate Brand Identity",
    challenge: "Outdated branding.",
    solution: "Modern identity redesign.",
    tools: "Illustrator",
    result: "Improved brand perception"
  },

  4: {
    title: "Restaurant Visual Identity",
    challenge: "Build a strong food brand.",
    solution: "Created a vibrant visual identity.",
    tools: "Photoshop",
    result: "Higher engagement"
  }
};


/* =========================================================
   GLOBAL DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* -------------------------------------------------------
     LUCIDE ICONS
     ------------------------------------------------------- */

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }


  /* -------------------------------------------------------
     AI ASSISTANT
     ------------------------------------------------------- */

  initVantyxAI();


  /* -------------------------------------------------------
     PORTFOLIO FILTER
     ------------------------------------------------------- */

  initPortfolioFilter();


  /* -------------------------------------------------------
     SEARCH
     ------------------------------------------------------- */

  initSearch();


  /* -------------------------------------------------------
     FAQ
     ------------------------------------------------------- */

  initFAQ();


  /* -------------------------------------------------------
     PRICING TOGGLE
     ------------------------------------------------------- */

  initPricingToggle();


  /* -------------------------------------------------------
     NEWSLETTER
     ------------------------------------------------------- */

  initNewsletter();


  /* -------------------------------------------------------
     LANGUAGE
     ------------------------------------------------------- */

  initLanguage();


  console.log(
    "VANTYX STUDIOS KENYA: JavaScript initialized successfully."
  );

});


/* =========================================================
   VANTYX AI ASSISTANT — GEMINI / VERCEL
   ========================================================= */

function initVantyxAI() {

  const aiSystem = document.getElementById("ai-system");
  const orbButton = document.getElementById("ai-orb-btn");
  const closeButton = document.getElementById("ai-close-btn");
  const chatWindow = document.getElementById("ai-chat");
  const aiBody = document.getElementById("ai-body");
  const aiInput = document.getElementById("ai-user-input");
  const sendButton = document.getElementById("ai-send-btn");
  const thinking = document.getElementById("ai-thinking");

  /* =======================================================
     CHECK REQUIRED ELEMENTS
     ======================================================= */

  if (!aiSystem) {
    console.error("VANTYX AI: #ai-system not found.");
    return;
  }

  if (!orbButton) {
    console.error("VANTYX AI: #ai-orb-btn not found.");
    return;
  }

  if (!closeButton) {
    console.error("VANTYX AI: #ai-close-btn not found.");
    return;
  }

  if (!chatWindow) {
    console.error("VANTYX AI: #ai-chat not found.");
    return;
  }

  if (!aiBody) {
    console.error("VANTYX AI: #ai-body not found.");
    return;
  }

  if (!aiInput) {
    console.error("VANTYX AI: #ai-user-input not found.");
    return;
  }

  if (!sendButton) {
    console.error("VANTYX AI: #ai-send-btn not found.");
    return;
  }

  if (!thinking) {
    console.error("VANTYX AI: #ai-thinking not found.");
    return;
  }

  /* =======================================================
     STATE
     ======================================================= */

  let isThinking = false;

  let conversationHistory = [];

  /* =======================================================
     OPEN CHAT
     ======================================================= */

  function openChat() {

    aiSystem.classList.add("chat-open");

    setTimeout(function () {
      aiInput.focus();
    }, 300);

  }

  /* =======================================================
     CLOSE CHAT
     ======================================================= */

  function closeChat() {

    aiSystem.classList.remove("chat-open");

    aiInput.blur();

  }

  /* =======================================================
     GLOBAL FUNCTIONS
     ======================================================= */

  window.openAI = openChat;
  window.closeAI = closeChat;

  /* =======================================================
     OPEN BUTTON
     ======================================================= */

  orbButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    openChat();

  });

  /* =======================================================
     CLOSE BUTTON
     ======================================================= */

  closeButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    closeChat();

  });

  /* =======================================================
     PREVENT CHAT CLICK PROPAGATION
     ======================================================= */

  chatWindow.addEventListener("click", function (event) {

    event.stopPropagation();

  });

  /* =======================================================
     ESCAPE TO CLOSE
     ======================================================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeChat();
    }

  });

  /* =======================================================
     SCROLL
     ======================================================= */

  function scrollToBottom() {

    requestAnimationFrame(function () {

      aiBody.scrollTop = aiBody.scrollHeight;

    });

  }

  /* =======================================================
     ADD MESSAGE
     ======================================================= */

  function addMessage(message, type) {

    const messageElement =
      document.createElement("div");

    messageElement.className =
      "ai-message " + type;

    messageElement.textContent =
      message;

    aiBody.appendChild(messageElement);

    scrollToBottom();

    return messageElement;

  }

  /* =======================================================
     THINKING
     ======================================================= */

  function showThinking() {

    thinking.classList.add("active");

    isThinking = true;

    sendButton.disabled = true;

    sendButton.style.opacity = "0.6";

    sendButton.style.cursor = "not-allowed";

    scrollToBottom();

  }

  function hideThinking() {

    thinking.classList.remove("active");

    isThinking = false;

    sendButton.disabled = false;

    sendButton.style.opacity = "";

    sendButton.style.cursor = "";

  }

  /* =======================================================
     SEND MESSAGE TO GEMINI
     ======================================================= */

  async function sendMessage() {

    if (isThinking) {
      return;
    }

    const message =
      aiInput.value.trim();

    if (!message) {
      return;
    }

    /* USER MESSAGE */

    addMessage(message, "user");

    /* CLEAR INPUT */

    aiInput.value = "";

    /* THINKING */

    showThinking();

    try {

      console.log(
        "VANTYX AI: Sending message to /api/chat..."
      );

      const response =
        await fetch("/api/chat", {

          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({

            message: message,

            history: conversationHistory

          })

        });

      console.log(
        "VANTYX AI: API status:",
        response.status
      );

      /* =================================================
         READ RESPONSE
         ================================================= */

      const data =
        await response.json();

      console.log(
        "VANTYX AI: API response:",
        data
      );

      /* =================================================
         API ERROR
         ================================================= */

      if (!response.ok) {

        throw new Error(
          data.error ||
          "The AI server returned an error."
        );

      }

      /* =================================================
         GET REPLY
         ================================================= */

      const reply =
        typeof data.reply === "string"
          ? data.reply.trim()
          : "";

      if (!reply) {

        throw new Error(
          "The AI returned an empty response."
        );

      }

      /* =================================================
         SAVE HISTORY
         ================================================= */

      conversationHistory.push({

        role: "user",

        text: message

      });

      conversationHistory.push({

        role: "assistant",

        text: reply

      });

      /* Keep history manageable */

      if (conversationHistory.length > 20) {

        conversationHistory =
          conversationHistory.slice(-20);

      }

      /* =================================================
         DISPLAY RESPONSE
         ================================================= */

      hideThinking();

      addMessage(
        reply,
        "bot"
      );

    } catch (error) {

      console.error(
        "VANTYX AI ERROR:",
        error
      );

      hideThinking();

      addMessage(
        "I'm unable to connect to the AI service right now. Please try again in a moment.",
        "bot"
      );

    }

    aiInput.focus();

  }

  /* =======================================================
     SEND BUTTON
     ======================================================= */

  sendButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();
      event.stopPropagation();

      sendMessage();

    }
  );

  /* =======================================================
     ENTER KEY
     ======================================================= */

  aiInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();

      }

    }
  );

  /* =======================================================
     DEBUG
     ======================================================= */

  console.log(
    "VANTYX AI: Gemini frontend initialized successfully."
  );

}
