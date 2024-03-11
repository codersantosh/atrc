/* Local */
export default function AtrcGetGoogleFontsUrl(googleFontsCollections){
    const url = googleFontsCollections
        .filter(({ family }) => !!(family))
        .map(
            ({ family, weight }) =>
                weight
                    ? `family=${family}:wght@${weight.replace(/,/g, ';')}`
                    : `family=${family}`

        )
        .join('&');

    return url ? `https://fonts.googleapis.com/css2?${url}` : '';
};