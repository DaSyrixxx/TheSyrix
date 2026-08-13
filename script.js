document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputResult = document.getElementById('outputResult');
    const btnMinify = document.getElementById('btnMinify');
    const btnFormatJson = document.getElementById('btnFormatJson');

    if (btnMinify && inputText && outputResult) {
        btnMinify.addEventListener('click', () => {
            const val = inputText.value;
            if (!val) return;
            const minified = val.replace(/\s+/g, ' ').trim();
            outputResult.textContent = minified;
        });
    }

    if (btnFormatJson && inputText && outputResult) {
        btnFormatJson.addEventListener('click', () => {
            const val = inputText.value;
            if (!val) return;
            try {
                const parsed = JSON.parse(val);
                outputResult.textContent = JSON.stringify(parsed, null, 2);
            } catch (err) {
                outputResult.textContent = 'Hiba: Érvénytelen JSON formátum!';
            }
        });
    }
});