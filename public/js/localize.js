const locale = "de";

const translations = {
    "de": {
        "login_msg": "MEld dich an"
    },
    "en": {
        "login_msg": "log the f in"
    },
};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
    document
        // Find all elements that have the key attribute
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);
});
// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[locale][key];
    element.innerText = translation;
}