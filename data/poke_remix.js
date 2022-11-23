const shuffledPokemon = [
    {
        national_number: '102',
        evolution: 'Exeggutor',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggcute.png',
            large: 'https://img.pokemondb.net/artwork/exeggcute.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif'
        },
        name: 'Exeggcute',
        type: ['Grass', 'Psychic'],
        stats: [
            { category: 'total', value: 325 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 40 },
            { category: 'defense', value: 80 },
            { category: 'special attack', value: 60 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 40 }
        ]
    },
    {
        national_number: '057',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png',
            large: 'https://img.pokemondb.net/artwork/primeape.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif'
        },
        name: 'Primeape',
        type: ['Fighting'],
        stats: [
            { category: 'total', value: 455 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 105 },
            { category: 'defense', value: 60 },
            { category: 'special attack', value: 60 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 95 }
        ]
    },
    {
        national_number: '090',
        evolution: 'Cloyster',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/shellder.png',
            large: 'https://img.pokemondb.net/artwork/shellder.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif'
        },
        name: 'Shellder',
        type: ['Water'],
        stats: [
            { category: 'total', value: 305 },
            { category: 'hp', value: 30 },
            { category: 'attack', value: 65 },
            { category: 'defense', value: 100 },
            { category: 'special attack', value: 45 },
            { category: 'special defense', value: 25 },
            { category: 'speed', value: 40 }
        ]
    },
    {
        national_number: '052',
        evolution: 'Persian',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/meowth.png',
            large: 'https://img.pokemondb.net/artwork/meowth.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif'
        },
        name: 'Meowth',
        type: ['Normal'],
        stats: [
            { category: 'total', value: 290 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 45 },
            { category: 'defense', value: 35 },
            { category: 'special attack', value: 40 },
            { category: 'special defense', value: 40 },
            { category: 'speed', value: 90 }
        ]
    },
    {
        national_number: '010',
        evolution: 'Metapod',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/caterpie.png',
            large: 'https://img.pokemondb.net/artwork/caterpie.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif'
        },
        name: 'Caterpie',
        type: ['Bug'],
        stats: [
            { category: 'total', value: 195 },
            { category: 'hp', value: 45 },
            { category: 'attack', value: 30 },
            { category: 'defense', value: 35 },
            { category: 'special attack', value: 20 },
            { category: 'special defense', value: 20 },
            { category: 'speed', value: 45 }
        ]
    },
    {
        national_number: '058',
        evolution: 'Arcanine',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/growlithe.png',
            large: 'https://img.pokemondb.net/artwork/growlithe.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif'
        },
        name: 'Growlithe',
        type: ['Fire'],
        stats: [
            { category: 'total', value: 350 },
            { category: 'hp', value: 55 },
            { category: 'attack', value: 70 },
            { category: 'defense', value: 45 },
            { category: 'special attack', value: 70 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 60 }
        ]
    },
    {
        national_number: '132',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ditto.png',
            large: 'https://img.pokemondb.net/artwork/ditto.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif'
        },
        name: 'Ditto',
        type: ['Normal'],
        stats: [
            { category: 'total', value: 288 },
            { category: 'hp', value: 48 },
            { category: 'attack', value: 48 },
            { category: 'defense', value: 48 },
            { category: 'special attack', value: 48 },
            { category: 'special defense', value: 48 },
            { category: 'speed', value: 48 }
        ]
    },
    {
        national_number: '021',
        evolution: 'Fearow',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/spearow.png',
            large: 'https://img.pokemondb.net/artwork/spearow.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif'
        },
        name: 'Spearow',
        type: ['Normal', 'Flying'],
        stats: [
            { category: 'total', value: 262 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 60 },
            { category: 'defense', value: 30 },
            { category: 'special attack', value: 31 },
            { category: 'special defense', value: 31 },
            { category: 'speed', value: 70 }
        ]
    },
    {
        national_number: '061',
        evolution: 'Poliwrath',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwhirl.png',
            large: 'https://img.pokemondb.net/artwork/poliwhirl.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif'
        },
        name: 'Poliwhirl',
        type: ['Water'],
        stats: [
            { category: 'total', value: 385 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 65 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 90 }
        ]
    },
    {
        national_number: '056',
        evolution: 'Primeape',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mankey.png',
            large: 'https://img.pokemondb.net/artwork/mankey.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif'
        },
        name: 'Mankey',
        type: ['Fighting'],
        stats: [
            { category: 'total', value: 305 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 80 },
            { category: 'defense', value: 35 },
            { category: 'special attack', value: 35 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 70 }
        ]
    },
    {
        national_number: '022',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png',
            large: 'https://img.pokemondb.net/artwork/fearow.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif'
        },
        name: 'Fearow',
        type: ['Normal', 'Flying'],
        stats: [
            { category: 'total', value: 442 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 90 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 61 },
            { category: 'special defense', value: 61 },
            { category: 'speed', value: 100 }
        ]
    }
];

module.exports = shuffledPokemon;