// deutsch als default
//let defaultLocale = "de";

let locale;
let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    setLocale(locale);
    bindLocaleSwitcher(locale);
});


async function setLocale(newLocale) {
    if (newLocale === locale) return;

    const newTranslations =
        await fetchTranslationsFor(newLocale);

    locale = newLocale;
    translations = newTranslations;

    translatePage();
}

// Retrieve translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
    const response = await fetch(`../lang/${newLocale}.json`);
    console.log("fetchTranslationsFor: " + locale);

    return await response.json();

}

// alles was den data-i18n-key hat soll uebersetzt werden
function translatePage() {
    document
        .querySelectorAll("[data-i18n-key]")
        .forEach(translateElement);

}

function translateElement(element) {
    const key = element.getAttribute("data-i18n-key");
    const translation = translations[key];
    element.innerText = translation;

}
function bindLocaleSwitcher(initialValue) {
    const switcher =
        document.querySelector("[data-i18n-switcher]");

    switcher.value = initialValue;

    switcher.onchange = (e) => {
        // Set the locale to the selected option[value]
        setLocale(e.target.value);
        console.log("switcher.onchange: " + locale);

    };
}