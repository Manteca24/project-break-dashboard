const body = document.body
const photos = [
  "../assets/animals/bob-brewer-KlOFK62fvD8-unsplash.jpg",
  "../assets/animals/andreas-weilguny-q3z02Km4e2A-unsplash.jpg",
  "../assets/animals/neom-bOMVTvE2QFU-unsplash.jpg",
  "../assets/animals/alexis-antonio-awKTWHx2wHE-unsplash.jpg",
  "../assets/animals/david-clode-KwyglmcLTSw-unsplash.jpg",
  "../assets/animals/jonathan-greenaway-h6soC4pt24c-unsplash.jpg",
  "../assets/animals/keenan-shepard-zWpo1UwUh14-unsplash.jpg",
  "../assets/animals/david-clode-CIMk0FSOrAE-unsplash.jpg",
  "../assets/animals/bankim-desai-HzXc5mN7nnc-unsplash.jpg",
  "../assets/animals/barnabas-davoti-6JGz6JZacyw-unsplash.jpg",
  "../assets/animals/bianca-ackermann-4Chuane9YwM-unsplash.jpg",
  "../assets/animals/bob-brewer-XsBNUwUzie0-unsplash.jpg",
  "../assets/animals/boys-in-bristol-photography-ZCzkUr1WDRQ-unsplash.jpg",
  "../assets/animals/brigitte-elsner-54Gir72gk4A-unsplash.jpg",
  "../assets/animals/david-clode-yBraeHiDXi8-unsplash.jpg",
  "../assets/animals/david-clode-yctzHRij4ZA-unsplash.jpg",
  "../assets/animals/devang-punia-k8tE5rOdOLk-unsplash.jpg",
  "../assets/animals/dix-balino-isSfdzUX7Xg-unsplash.jpg",
  "../assets/animals/dustin-humes--OWtTDK-z68-unsplash.jpg",
  "../assets/animals/einar-storsul-_rhctDSLxxo-unsplash.jpg",
  "../assets/animals/francesco-ungaro-72LnabABnTI-unsplash.jpg",
  "../assets/animals/francesco-ungaro-JxcoMW_GUKM-unsplash.jpg",
  "../assets/animals/gabor-koszegi-5vzmoPug7rs-unsplash.jpg",
  "../assets/animals/gary-bendig-e7A-8mxRXJg-unsplash.jpg",
  "../assets/animals/geranimo-f0oe9P9Yixs-unsplash.jpg",
  "../assets/animals/hunter-reilly-hCSfUy3nacw-unsplash.jpg",
  "../assets/animals/jeremy-stewardson-1HmPxC8G5uI-unsplash.jpg",
  "../assets/animals/jonas-BfmLemplhMI-unsplash.jpg",
  "../assets/animals/jonas-ku47q550SaI-unsplash.jpg",
  "../assets/animals/jonathan-marchal-AN1xQsGXY1M-unsplash.jpg",
  "../assets/animals/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg",
  "../assets/animals/lukasz-rawa-RqGWGYhXKQo-unsplash.jpg",
  "../assets/animals/mathias-dargnat-C4CPDnHfU44-unsplash.jpg",
  "../assets/animals/nathan-anderson-XHK0JdmJxJc-unsplash.jpg",
  "../assets/animals/noah-boyer-hi0m3qcMcK0-unsplash.jpg",
  "../assets/animals/ricardo-frantz-GvyyGV2uWns-unsplash.jpg",
  "../assets/animals/rolf-schmidbauer-ltAZi37cKxo-unsplash.jpg",
  "../assets/animals/ryan-klaus-hgDpw45aFNk-unsplash.jpg",
  "../assets/animals/sam-badmaeva-qQL6BLpk27A-unsplash.jpg",
  "../assets/animals/saradasish-pradhan-UOlUXsoTf8w-unsplash.jpg",
  "../assets/animals/shaylyn-MFsXPxG8X7Y-unsplash.jpg",
  "../assets/animals/timothy-brown-xuZNHA1Zrgo-unsplash.jpg",
  "../assets/animals/tobias-mrzyk-3_gjh0OE1-c-unsplash.jpg",
  "../assets/animals/wolfgang-hasselmann-TX4gyAXvfYk-unsplash.jpg",
  "../assets/animals/yezhang-wang-2gHef64lPXM-unsplash.jpg",
  "../assets/animals/yezhang-wang-HCJK7e5uK8w-unsplash.jpg",
  "../assets/animals/zdenek-machacek-EYbuaPyfkIY-unsplash.jpg",
]

let usedImages = new Set();
/*Un Set es una colección de valores en JS en la que cada valor debe ser único.
NO puede haber valores duplicados en un Set.
Métodos del set:
add(value): añade valores, si el valor ya existe no lo añade.
clear(): elimina todos los valores.
delete(value): elimina ek valor. TRUE si lo ha eliminado. FALSE si el valor no estaba.
has(value): verificar si tiene el valor: TRUE si lo tiene, FALSE si no.
size(): devuelve el número de valores en el set.  */ 

const changeBackground = () => {
  if (usedImages.size === photos.length) {
    usedImages.clear(); // Reinicia la lista de imágenes usadas si todas han sido usadas
  }

  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * photos.length);
  } while (usedImages.has(randomNumber));

  usedImages.add(randomNumber);
  const newBackground = photos[randomNumber];
  body.style.backgroundImage = `url(${newBackground})`;
};

setInterval(() => {
  changeBackground();
}, 10000);

changeBackground();