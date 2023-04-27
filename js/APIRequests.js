// recebe os dados de todas as akuma no mi
const API_AKUMA_NO_MI = 'https://api.api-onepiece.com/fruits';

// recebe os dados de todas as espadas
const API_SWORDS = 'https://api.api-onepiece.com/swords';
// recebe os dados de todos os tipos de haki
const API_HAKI = 'https://api.api-onepiece.com/hakis';

// recebe os dados de todas as gears do luffy
const API_GEARS_LUFFY = 'https://api.api-onepiece.com/luffy/gears';
// recebe os dados de todas as técnicas do luffy
const API_LUFFY_TECHNIQUES = 'https://api.api-onepiece.com/luffy/gears';

// lista TODOS os personagens de one piece
const API_ALL_CHARACTERS = 'https://api.api-onepiece.com/characters';
getMovies(API_AKUMA_NO_MI);
getMovies(API_GEARS_LUFFY);

export function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}
