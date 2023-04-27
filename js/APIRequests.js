const API_AKUMA_NO_MI = 'https://api.api-onepiece.com/fruits';
const API_SWORDS = 'https://api.api-onepiece.com/swords';
const API_HAKI = 'https://api.api-onepiece.com/hakis';
const API_GEARS_LUFFY = 'https://api.api-onepiece.com/luffy/gears';
const API_LUFFY_TECHNIQUES = 'https://api.api-onepiece.com/luffy/gears';

getMovies(API_AKUMA_NO_MI);
getMovies(API_GEARS_LUFFY);

export function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}
