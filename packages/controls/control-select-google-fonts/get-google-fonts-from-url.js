/* Local */
export default function AtrcGetGoogleFontsFromUrl(url) {
    if (!url) return [];

    // Extract the query string from the URL
    const queryString = url.split('?')[1];
    if (!queryString) return [];

    // Split the query string into an array of key-value pairs
    const fontPairs = queryString.split('&');
    if (!fontPairs.length) return [];

    // Extract the font family and weight for each key-value pair
    return fontPairs.map((pair) => {
        // Split the pair into a key and value
        const [key, value] = pair.split('=');
        if (key !== 'family') return {};

        // Split the value into a font family and weight string
        const [family, weightString] = value.split(':');
        if (!family) return {};

        // Extract the weights from the weight string
        let weights = weightString ? weightString.replace('wght@', '').split(';') : [];
        // Convert the weights to a comma-separated string
        weights = weights.join(',');

        return { family, weight: weights };
    });
}