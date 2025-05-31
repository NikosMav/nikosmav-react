// Remove "use strict" as modules are strict by default
// Export the initialization function
export function initializeWebsite() {
  // element toggle function
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  function initializeSidebar() {
    // sidebar variables
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    if (sidebarBtn) {
      // sidebar toggle functionality for mobile
      sidebarBtn.addEventListener("click", function () {
        elementToggleFunc(sidebar);
      });
    }
  }

  function initializeFilters() {
    // custom select variables
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    if (select) {
      select.addEventListener("click", function () {
        elementToggleFunc(this);
      });
    }

    // add event in all select items
    selectItems.forEach((item) => {
      item.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        if (selectValue) selectValue.innerText = this.innerText;
        if (select) elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    });

    // filter variables
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {
      filterItems.forEach((item) => {
        if (selectedValue === "all") {
          item.classList.add("active");
        } else if (selectedValue === item.dataset.category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    // add event in all filter button items for large screen
    let lastClickedBtn = filterBtn[0];

    filterBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        let selectedValue = this.innerText.toLowerCase();
        if (selectValue) selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        if (lastClickedBtn) lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    });
  }

  function initializeNavigation() {
    // page navigation variables
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    // add event to all nav link
    navigationLinks.forEach((link, i) => {
      link.addEventListener("click", function () {
        pages.forEach((page, pageIndex) => {
          if (this.innerHTML.toLowerCase() === page.dataset.page) {
            page.classList.add("active");
            navigationLinks[pageIndex].classList.add("active");
            window.scrollTo(0, 0);
          } else {
            page.classList.remove("active");
            navigationLinks[pageIndex].classList.remove("active");
          }
        });
      });
    });
  }

  function initializeCV() {
    const modal = document.getElementById("cvModal");
    const btn = document.getElementById("cvLink");
    const span = document.getElementsByClassName("close")[0];

    if (!modal || !btn || !span) return;

    btn.onclick = function () {
      modal.classList.add("show");
    };

    span.onclick = function () {
      modal.classList.remove("show");
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.classList.remove("show");
      }
    };
  }

  function initializeTheme() {
    const themeToggle = document.querySelector(".theme-toggle");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (!themeToggle) return;

    // Check for saved theme preference or use system preference
    const currentTheme =
      localStorage.getItem("theme") ||
      (prefersDarkScheme.matches ? "dark" : "light");

    if (currentTheme === "light") {
      document.body.classList.add("light-theme");
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      const theme = document.body.classList.contains("light-theme")
        ? "light"
        : "dark";
      localStorage.setItem("theme", theme);
    });
  }

  // Initialize all components
  document.addEventListener("DOMContentLoaded", () => {
    initializeSidebar();
    initializeFilters();
    initializeFormElements();
    initializeNavigation();
    initializeCV();
    initializeTheme();
  });
}

// Export the showToast function so it can be imported where needed
export function showToast(message, type = "success") {
  const toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <ion-icon name="${
      type === "success" ? "checkmark-circle" : "alert-circle"
    }"></ion-icon>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideOut 0.3s ease-out forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Testimonials-related JavaScript (Comment out below)

/*
// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
*/

// contact form variables
let form, formInputs, submitBtn;

function initializeFormElements() {
  form = document.querySelector("[data-form]");
  formInputs = document.querySelectorAll("[data-form-input]");
  submitBtn = document.querySelector("[data-form-btn]");

  if (!form) return;

  // Basic form validation
  function validateForm() {
    let isValid = true;
    formInputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = "var(--bittersweet-shimmer)";
      } else {
        input.style.borderColor = "var(--jet)";
      }
    });
    return isValid;
  }

  // Email validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast("Please fill in all fields", "error");
      return;
    }

    const emailInput = form.querySelector('input[type="email"]');
    if (!validateEmail(emailInput.value)) {
      showToast("Please enter a valid email address", "error");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span>Sending...</span>";

    try {
      // Get reCAPTCHA token
      const token = await grecaptcha.execute(
        "6LfkJlArAAAAAHqi_yrki8TnnTfbPrXxXOm1ofGh",
        {
          action: "submit",
        }
      );

      // Add token to form data
      const formData = new FormData(form);
      formData.append("recaptcha_token", token);

      // Submit form to Formspree
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        showToast("Message sent successfully!", "success");
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      showToast("Failed to send message. Please try again.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "<span>Send Message</span>";
    }
  });

  // Real-time validation
  formInputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (input.value.trim()) {
        input.style.borderColor = "var(--jet)";
      }
      if (input.type === "email" && input.value.trim()) {
        input.style.borderColor = validateEmail(input.value)
          ? "var(--jet)"
          : "var(--bittersweet-shimmer)";
      }
    });
  });
}

//RESUME
//UNI
function toggleDetails(id) {
  var moreInfo = document.getElementById(id);
  var button = document.querySelector(
    "button[onclick=\"toggleDetails('" + id + "')\"]"
  );
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    button.textContent = "Show Less";
  } else {
    moreInfo.style.display = "none";
    button.textContent = "Show More";
  }
}
