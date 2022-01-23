// deutsch als default
let defaultLocale = "de";

let locale;
let translations = {};

document.addEventListener("DOMContentLoaded", () => {
    if(locale){
        var currLanag = JSON.stringify(localStorage.getItem('currLang'));
        setLocale(currLanag);
        bindLocaleSwitcher(currLanag);

    } else {
        setLocale(defaultLocale);
        bindLocaleSwitcher(defaultLocale);
    }
});


async function setLocale(newLocale) {
    if (newLocale === locale) return;

    const newTranslations =
        await fetchTranslationsFor(newLocale);

    locale = newLocale;
    localStorage.setItem('currLang', JSON.stringify(locale));
    translations = newTranslations;

    translatePage();
}

// Retrieve translations JSON object for the given
// locale over the network
async function fetchTranslationsFor(newLocale) {
    const response = await fetch(`../lang/${newLocale}.json`);

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
    const options = JSON.parse(
        element.getAttribute("data-i18n-opt")
    );
    element.innerText = options
        ? interpolate(translation, options)
        : translation;
}


const fullyQualifiedLocaleDefaults = {
    en: "en-US",
    de: "de-DE",
};

function interpolate(message, interpolations) {
    return Object.keys(interpolations).reduce(
        (interpolated, key) => {
            const value = formatNumber(interpolations[key]);
            return interpolated.replace(
                new RegExp(`{\s*${key}\s*}`, "g"),
                value,
            );
        },
        message,
    );
}
function formatNumber(value) {
    if (typeof value === "object" && value.number) {
        const { number, ...options } = value;
        return new Intl.NumberFormat(
            fullyQualifiedLocaleDefaults[locale],
            options,
        ).format(number);
    } else {
        return value;
    }
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
