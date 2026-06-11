// ===================================
// EDU MOST POLSKI V1
// ===================================

let currentSlide = 0;

const slideContainer = document.getElementById("slide-container");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const progressFill = document.getElementById("progress-fill");
const slideCounter = document.getElementById("slide-counter");

const helpBtn = document.getElementById("help-btn");
const helpModal = document.getElementById("help-modal");
const helpText = document.getElementById("help-text");
const closeHelp = document.getElementById("close-help");

const zoomModal = document.getElementById("zoom-modal");
const zoomImage = document.getElementById("zoom-image");
const zoomClose =  document.getElementById("zoom-close");

// ===================================
// INIT
// ===================================

renderSlide();
updateProgress();

// ===================================
// NAVIGATION
// ===================================

nextBtn.addEventListener("click", () => {
  if (currentSlide < lesson.slides.length - 1) {
    currentSlide++;

    renderSlide();
    updateProgress();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;

    renderSlide();
    updateProgress();
  }
});

// ===================================
// HELP
// ===================================

helpBtn.addEventListener("click", () => {
  helpText.textContent =
    lesson.slides[currentSlide].help || "Brak podpowiedzi.";

  helpModal.classList.remove("hidden");
});

closeHelp.addEventListener("click", () => {
  helpModal.classList.add("hidden");
});

// ===================================
// PROGRESS
// ===================================

function updateProgress() {
  const percent = ((currentSlide + 1) / lesson.slides.length) * 100;

  progressFill.style.width = percent + "%";

  slideCounter.textContent = `${currentSlide + 1} / ${lesson.slides.length}`;

  prevBtn.disabled = currentSlide === 0;

  if (currentSlide === lesson.slides.length - 1) {
    nextBtn.textContent = "🏆 Koniec";
  } else {
    nextBtn.textContent = "Dalej →";
  }
}

// ===================================
// RENDER
// ===================================

function renderSlide() {
  const slide = lesson.slides[currentSlide];

  slideContainer.innerHTML = "";

  switch (slide.type) {
    case "story":
      renderStory(slide);
      break;

    case "quiz":
      renderQuiz(slide);
      break;

    case "info":
      renderInfo(slide);
      break;

    case "map":
      renderMap(slide);
      break;

    case "summary":
      renderSummary(slide);
      break;

    default:
      slideContainer.innerHTML = "<p>Nieznany typ slajdu.</p>";
  }
}

// ===================================
// STORY
// ===================================

function renderStory(slide) {
  const template = document.getElementById("story-template");

  const clone = template.content.cloneNode(true);

  const imageContainer = clone.querySelector(".image-placeholder");

  if (slide.image) {
    imageContainer.innerHTML = `
        <img
            src="${slide.image}"
            alt="${slide.title}"
            class="slide-image zum"
        >
    `;
  }

  clone.querySelector(".slide-title").textContent = slide.title;

  slideContainer.appendChild(clone);
  initZoom();
  const textElement = document.querySelector(".slide-text");

  typeWriter(slide.text.trim(), textElement);

  const uaBtn = document.querySelector(".ua-btn");

  const uaBox = document.querySelector(".ua-box");

  if (slide.uaMeaning) {
    uaBtn.addEventListener("click", () => {
      const isHidden = uaBox.classList.contains("hidden");

      if (isHidden) {
        uaBox.innerHTML = `
            <strong>🇺🇦 Zrozumieć po ukraińskuю</strong>
            <br><br>
            ${slide.uaMeaning}
        `;

        uaBox.classList.remove("hidden");

        uaBtn.textContent = "🇺🇦 Schowaj wyjaśnienie";
      } else {
        uaBox.classList.add("hidden");

        uaBtn.textContent = "🇺🇦 Zrozumieć po ukraińsku";
      }
    });
  } else {
    uaBtn.style.display = "none";
  }
}

// ===================================
// QUIZ
// ===================================

function renderQuiz(slide) {
  const template = document.getElementById("quiz-template");

  const clone = template.content.cloneNode(true);
  const imageContainer = clone.querySelector(".image-placeholder");

  if (slide.image) {
    imageContainer.innerHTML = `
        <img
            src="${slide.image}"
            alt="${slide.title}"
            class="slide-image zum"
        >
    `;
  }

  clone.querySelector(".slide-title").textContent = slide.title;

  clone.querySelector(".question").textContent = slide.question;

  if (slide.uaMeaning) {

    const question =
        clone.querySelector(".question");

    const button =
        document.createElement("button");

    button.className = "ua-btn";

    button.textContent =
        "🇺🇦 Zrozumieć po ukraińsku";

    const box =
        document.createElement("div");

    box.className =
        "ua-box hidden";

    button.addEventListener("click", () => {

        if(box.classList.contains("hidden")){

            box.innerHTML = `
                <strong>
                🇺🇦 Пояснення українською
                </strong>
                <br><br>
                ${slide.uaMeaning}
            `;

            box.classList.remove("hidden");

            button.textContent =
                "🇺🇦 Schowaj wyjaśnienie";

        }else{

            box.classList.add("hidden");

            button.textContent =
                "🇺🇦 Zrozumieć po ukraińsku";

        }

    });

    question.after(button);
    button.after(box);
}
  const answersContainer = clone.querySelector(".answers");

  slide.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.className = "answer-btn";

    button.textContent = answer;

    button.addEventListener("click", () => {
      const buttons = answersContainer.querySelectorAll("button");

      buttons.forEach((btn) => {
        btn.disabled = true;
      });

      if (index === slide.correct) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");

        buttons[slide.correct].classList.add("correct");
      }
    });

    answersContainer.appendChild(button);
  });

  slideContainer.appendChild(clone);
  initZoom();
}

// ===================================
// INFO
// ===================================

function renderInfo(slide) {

    const template =
        document.getElementById("info-template");

    const clone =
        template.content.cloneNode(true);

    const imageContainer =
        clone.querySelector(".image-placeholder");

    // ==========================
    // IMAGE
    // ==========================

    if (slide.image) {

        imageContainer.innerHTML = `
            <img
                src="${slide.image}"
                alt="${slide.title}"
                class="slide-image zum"
            >
        `;
    }

    clone.querySelector(".slide-title")
        .textContent = slide.title;

    const content =
        clone.querySelector(".info-content");

    content.innerHTML = slide.content
        .trim()
        .replace(/\n/g, "<br>");

    // ==========================
    // UKRAINIAN HELP
    // ==========================

    if (slide.uaMeaning) {

        const button =
            document.createElement("button");

        button.className = "ua-btn";

        button.textContent =
            "🇺🇦 Zrozumieć po ukraińsku";

        const box =
            document.createElement("div");

        box.className =
            "ua-box hidden";

        button.addEventListener("click", () => {

            if (box.classList.contains("hidden")) {

                box.innerHTML = `
                    <strong>
                        🇺🇦 Пояснення українською
                    </strong>
                    <br><br>
                    ${slide.uaMeaning}
                `;

                box.classList.remove("hidden");

                button.textContent =
                    "🇺🇦 Schowaj wyjaśnienie";

            } else {

                box.classList.add("hidden");

                button.textContent =
                    "🇺🇦 Zrozumieć po ukraińsku";
            }
        });

        content.after(button);
        button.after(box);
    }

    slideContainer.appendChild(clone);

    initZoom();
}

// ===================================
// MAP
// ===================================

function renderMap(slide) {

    const template =
        document.getElementById("map-template");

    const clone =
        template.content.cloneNode(true);

    const imageContainer =
        clone.querySelector(".image-placeholder");

    if (slide.image) {

        imageContainer.innerHTML = `
            <img
                src="${slide.image}"
                alt="${slide.title}"
                class="slide-image zum"
            >
        `;
    }

    clone.querySelector(".slide-title")
        .textContent = slide.title;

    clone.querySelector(".slide-text")
        .innerHTML = slide.text
            .trim()
            .replace(/\n/g, "<br>");

    // ===================================
    // UKRAINIAN HELP
    // ===================================

    if (slide.uaMeaning) {

        const text =
            clone.querySelector(".slide-text");

        const button =
            document.createElement("button");

        button.className = "ua-btn";

        button.textContent =
            "🇺🇦 Zrozumieć po ukraińsku";

        const box =
            document.createElement("div");

        box.className =
            "ua-box hidden";

        button.addEventListener("click", () => {

            if (box.classList.contains("hidden")) {

                box.innerHTML = `
                    <strong>
                        🇺🇦 Пояснення українською
                    </strong>
                    <br><br>
                    ${slide.uaMeaning}
                `;

                box.classList.remove("hidden");

                button.textContent =
                    "🇺🇦 Schowaj wyjaśnienie";

            } else {

                box.classList.add("hidden");

                button.textContent =
                    "🇺🇦 Zrozumieć po ukraińsku";
            }
        });

        text.after(button);
        button.after(box);
    }

    slideContainer.appendChild(clone);

    initZoom();
}

// ===================================
// SUMMARY
// ===================================

function renderSummary(slide) {

    const template =
        document.getElementById("summary-template");

    const clone =
        template.content.cloneNode(true);

    const imageContainer =
        clone.querySelector(".image-placeholder");

    // ==========================
    // IMAGE
    // ==========================

    if (slide.image) {

        imageContainer.innerHTML = `
            <img
                src="${slide.image}"
                alt="${slide.title}"
                class="slide-image zum"
            >
        `;
    }

    clone.querySelector(".slide-title")
        .textContent = slide.title;

    const container =
        clone.querySelector(".summary-content");

    slide.items.forEach((item) => {

        const block =
            document.createElement("div");

        block.className =
            "summary-item";

        block.textContent =
            item;

        container.appendChild(block);

    });

    // ==========================
    // UKRAINIAN HELP
    // ==========================

    if (slide.uaMeaning) {

        const button =
            document.createElement("button");

        button.className =
            "ua-btn";

        button.textContent =
            "🇺🇦 Zrozumieć po ukraińsku";

        const box =
            document.createElement("div");

        box.className =
            "ua-box hidden";

        button.addEventListener("click", () => {

            if (box.classList.contains("hidden")) {

                box.innerHTML = `
                    <strong>
                        🇺🇦 Пояснення українською
                    </strong>
                    <br><br>
                    ${slide.uaMeaning}
                `;

                box.classList.remove("hidden");

                button.textContent =
                    "🇺🇦 Schowaj wyjaśnienie";

            } else {

                box.classList.add("hidden");

                button.textContent =
                    "🇺🇦 Zrozumieć po ukraińsku";

            }
        });

        container.after(button);
        button.after(box);
    }

    slideContainer.appendChild(clone);

    initZoom();
}

// ===================================
// TYPEWRITER
// ===================================

function typeWriter(text, element) {
  let i = 0;

  element.innerHTML = "";

  const timer = setInterval(() => {
    element.innerHTML += text.charAt(i);

    i++;

    if (i >= text.length) {
      clearInterval(timer);
    }
  }, 85);
}

function initZoom(){

    const images =
        document.querySelectorAll(".zum");

    images.forEach(image => {

        image.addEventListener("click", () => {

            zoomImage.src = image.src;

            zoomModal.classList.remove("hidden");

        });

    });

}

zoomClose.addEventListener("click", () => {

    zoomModal.classList.add("hidden");

});

zoomModal.addEventListener("click", (e) => {

    if(e.target === zoomModal){

        zoomModal.classList.add("hidden");

    }

});
