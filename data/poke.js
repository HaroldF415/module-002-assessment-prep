const pokemon = [
    {
        national_number: '001',
        evolution: 'Ivysaur',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bulbasaur.png',
            large: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif'
        },
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
        stats: [
            { category: 'total', value: 318 },
            { category: 'hp', value: 45 },
            { category: 'attack', value: 49 },
            { category: 'defense', value: 49 },
            { category: 'special attack', value: 65 },
            { category: 'special defense', value: 65 },
            { category: 'speed', value: 45 }
        ]
    },
    {
        national_number: '002',
        evolution: 'Venusaur',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ivysaur.png',
            large: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif'
        },
        name: 'Ivysaur',
        type: ['Grass', 'Poison'],
        stats: [
            { category: 'total', value: 405 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 62 },
            { category: 'defense', value: 63 },
            { category: 'special attack', value: 80 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 60 }
        ]
    },
    {
        national_number: '003',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png',
            large: 'https://img.pokemondb.net/artwork/venusaur.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif'
        },
        name: 'Venusaur',
        type: ['Grass', 'Poison'],
        stats: [
            { category: 'total', value: 525 },
            { category: 'hp', value: 80 },
            { category: 'attack', value: 82 },
            { category: 'defense', value: 83 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 100 },
            { category: 'speed', value: 80 }
        ]
    },
    {
        national_number: '004',
        evolution: 'Charmeleon',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmander.png',
            large: 'https://img.pokemondb.net/artwork/charmander.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif'
        },
        name: 'Charmander',
        type: ['Fire'],
        stats: [
            { category: 'total', value: 309 },
            { category: 'hp', value: 39 },
            { category: 'attack', value: 52 },
            { category: 'defense', value: 43 },
            { category: 'special attack', value: 60 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 65 }
        ]
    },
    {
        national_number: '005',
        evolution: 'Charizard',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charmeleon.png',
            large: 'https://img.pokemondb.net/artwork/charmeleon.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif'
        },
        name: 'Charmeleon',
        type: ['Fire'],
        stats: [
            { category: 'total', value: 405 },
            { category: 'hp', value: 58 },
            { category: 'attack', value: 64 },
            { category: 'defense', value: 58 },
            { category: 'special attack', value: 80 },
            { category: 'special defense', value: 65 },
            { category: 'speed', value: 80 }
        ]
    },
    {
        national_number: '006',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png',
            large: 'https://img.pokemondb.net/artwork/charizard.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif'
        },
        name: 'Charizard',
        type: ['Fire', 'Flying'],
        stats: [
            { category: 'total', value: 534 },
            { category: 'hp', value: 78 },
            { category: 'attack', value: 84 },
            { category: 'defense', value: 78 },
            { category: 'special attack', value: 109 },
            { category: 'special defense', value: 85 },
            { category: 'speed', value: 100 }
        ]
    },
    {
        national_number: '007',
        evolution: 'Wartortle',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/squirtle.png',
            large: 'https://img.pokemondb.net/artwork/squirtle.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif'
        },
        name: 'Squirtle',
        type: ['Water'],
        stats: [
            { category: 'total', value: 314 },
            { category: 'hp', value: 44 },
            { category: 'attack', value: 48 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 64 },
            { category: 'speed', value: 43 }
        ]
    },
    {
        national_number: '008',
        evolution: 'Blastoise',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wartortle.png',
            large: 'https://img.pokemondb.net/artwork/wartortle.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif'
        },
        name: 'Wartortle',
        type: ['Water'],
        stats: [
            { category: 'total', value: 405 },
            { category: 'hp', value: 59 },
            { category: 'attack', value: 63 },
            { category: 'defense', value: 80 },
            { category: 'special attack', value: 65 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 58 }
        ]
    },
    {
        national_number: '009',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png',
            large: 'https://img.pokemondb.net/artwork/blastoise.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif'
        },
        name: 'Blastoise',
        type: ['Water'],
        stats: [
            { category: 'total', value: 530 },
            { category: 'hp', value: 79 },
            { category: 'attack', value: 83 },
            { category: 'defense', value: 100 },
            { category: 'special attack', value: 85 },
            { category: 'special defense', value: 105 },
            { category: 'speed', value: 78 }
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
        national_number: '013',
        evolution: 'Kakuna',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weedle.png',
            large: 'https://img.pokemondb.net/artwork/weedle.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif'
        },
        name: 'Weedle',
        type: ['Bug', 'Poison'],
        stats: [
            { category: 'total', value: 195 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 35 },
            { category: 'defense', value: 30 },
            { category: 'special attack', value: 20 },
            { category: 'special defense', value: 20 },
            { category: 'speed', value: 50 }
        ]
    },
    {
        national_number: '016',
        evolution: 'Pidgeotto',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgey.png',
            large: 'https://img.pokemondb.net/artwork/pidgey.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif'
        },
        name: 'Pidgey',
        type: ['Normal', 'Flying'],
        stats: [
            { category: 'total', value: 251 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 45 },
            { category: 'defense', value: 40 },
            { category: 'special attack', value: 35 },
            { category: 'special defense', value: 35 },
            { category: 'speed', value: 56 }
        ]
    },
    {
        national_number: '017',
        evolution: 'Pidgeot',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeotto.png',
            large: 'https://img.pokemondb.net/artwork/pidgeotto.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif'
        },
        name: 'Pidgeotto',
        type: ['Normal', 'Flying'],
        stats: [
            { category: 'total', value: 349 },
            { category: 'hp', value: 63 },
            { category: 'attack', value: 60 },
            { category: 'defense', value: 55 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 71 }
        ]
    },
    {
        national_number: '018',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png',
            large: 'https://img.pokemondb.net/artwork/pidgeot.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif'
        },
        name: 'Pidgeot',
        type: ['Normal', 'Flying'],
        stats: [
            { category: 'total', value: 479 },
            { category: 'hp', value: 83 },
            { category: 'attack', value: 80 },
            { category: 'defense', value: 75 },
            { category: 'special attack', value: 70 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 101 }
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
    },
    {
        national_number: '024',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png',
            large: 'https://img.pokemondb.net/artwork/arbok.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif'
        },
        name: 'Arbok',
        type: ['Poison'],
        stats: [
            { category: 'total', value: 448 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 95 },
            { category: 'defense', value: 69 },
            { category: 'special attack', value: 65 },
            { category: 'special defense', value: 79 },
            { category: 'speed', value: 80 }
        ]
    },
    {
        national_number: '025',
        evolution: 'Raichu',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pikachu.png',
            large: 'https://img.pokemondb.net/artwork/pikachu.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif'
        },
        name: 'Pikachu',
        type: ['Electric'],
        stats: [
            { category: 'total', value: 320 },
            { category: 'hp', value: 35 },
            { category: 'attack', value: 55 },
            { category: 'defense', value: 40 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 90 }
        ]
    },
    {
        national_number: '026',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png',
            large: 'https://img.pokemondb.net/artwork/raichu.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif'
        },
        name: 'Raichu',
        type: ['Electric'],
        stats: [
            { category: 'total', value: 485 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 90 },
            { category: 'defense', value: 55 },
            { category: 'special attack', value: 90 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 110 }
        ]
    },
    {
        national_number: '027',
        evolution: 'Sandslash',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandshrew.png',
            large: 'https://img.pokemondb.net/artwork/sandshrew.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif'
        },
        name: 'Sandshrew',
        type: ['Ground', 'Steel'],
        stats: [
            { category: 'total', value: 300 },
            { category: 'hp', value: 50 },
            { category: 'attack', value: 75 },
            { category: 'defense', value: 85 },
            { category: 'special attack', value: 20 },
            { category: 'special defense', value: 30 },
            { category: 'speed', value: 40 }
        ]
    },
    {
        national_number: '028',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png',
            large: 'https://img.pokemondb.net/artwork/sandslash.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif'
        },
        name: 'Sandslash',
        type: ['Ground'],
        stats: [
            { category: 'total', value: 450 },
            { category: 'hp', value: 75 },
            { category: 'attack', value: 100 },
            { category: 'defense', value: 110 },
            { category: 'special attack', value: 45 },
            { category: 'special defense', value: 55 },
            { category: 'speed', value: 65 }
        ]
    },
    {
        national_number: '035',
        evolution: 'Clefable',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefairy.png',
            large: 'https://img.pokemondb.net/artwork/clefairy.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif'
        },
        name: 'Clefairy',
        type: ['Fairy'],
        stats: [
            { category: 'total', value: 323 },
            { category: 'hp', value: 70 },
            { category: 'attack', value: 45 },
            { category: 'defense', value: 48 },
            { category: 'special attack', value: 60 },
            { category: 'special defense', value: 65 },
            { category: 'speed', value: 35 }
        ]
    },
    {
        national_number: '036',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefable.png',
            large: 'https://img.pokemondb.net/artwork/clefable.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif'
        },
        name: 'Clefable',
        type: ['Fairy'],
        stats: [
            { category: 'total', value: 483 },
            { category: 'hp', value: 95 },
            { category: 'attack', value: 70 },
            { category: 'defense', value: 73 },
            { category: 'special attack', value: 95 },
            { category: 'special defense', value: 90 },
            { category: 'speed', value: 60 }
        ]
    },
    {
        national_number: '037',
        evolution: 'Ninetales',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vulpix.png',
            large: 'https://img.pokemondb.net/artwork/vulpix.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif'
        },
        name: 'Vulpix',
        type: ['Fire'],
        stats: [
            { category: 'total', value: 299 },
            { category: 'hp', value: 38 },
            { category: 'attack', value: 41 },
            { category: 'defense', value: 40 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 65 },
            { category: 'speed', value: 65 }
        ]
    },
    {
        national_number: '038',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png',
            large: 'https://img.pokemondb.net/artwork/ninetales.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif'
        },
        name: 'Ninetales',
        type: ['Fire'],
        stats: [
            { category: 'total', value: 505 },
            { category: 'hp', value: 73 },
            { category: 'attack', value: 76 },
            { category: 'defense', value: 75 },
            { category: 'special attack', value: 81 },
            { category: 'special defense', value: 100 },
            { category: 'speed', value: 100 }
        ]
    },
    {
        national_number: '039',
        evolution: 'Wigglytuff',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jigglypuff.png',
            large: 'https://img.pokemondb.net/artwork/jigglypuff.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif'
        },
        name: 'Jigglypuff',
        type: ['Normal', 'Fairy'],
        stats: [
            { category: 'total', value: 270 },
            { category: 'hp', value: 115 },
            { category: 'attack', value: 45 },
            { category: 'defense', value: 20 },
            { category: 'special attack', value: 45 },
            { category: 'special defense', value: 25 },
            { category: 'speed', value: 20 }
        ]
    },
    {
        national_number: '040',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wigglytuff.png',
            large: 'https://img.pokemondb.net/artwork/wigglytuff.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif'
        },
        name: 'Wigglytuff',
        type: ['Normal', 'Fairy'],
        stats: [
            { category: 'total', value: 435 },
            { category: 'hp', value: 140 },
            { category: 'attack', value: 70 },
            { category: 'defense', value: 45 },
            { category: 'special attack', value: 85 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 45 }
        ]
    },
    {
        national_number: '046',
        evolution: 'Parasect',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/paras.png',
            large: 'https://img.pokemondb.net/artwork/paras.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif'
        },
        name: 'Paras',
        type: ['Bug', 'Grass'],
        stats: [
            { category: 'total', value: 285 },
            { category: 'hp', value: 35 },
            { category: 'attack', value: 70 },
            { category: 'defense', value: 55 },
            { category: 'special attack', value: 45 },
            { category: 'special defense', value: 55 },
            { category: 'speed', value: 25 }
        ]
    },
    {
        national_number: '047',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/parasect.png',
            large: 'https://img.pokemondb.net/artwork/parasect.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif'
        },
        name: 'Parasect',
        type: ['Bug', 'Grass'],
        stats: [
            { category: 'total', value: 405 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 95 },
            { category: 'defense', value: 80 },
            { category: 'special attack', value: 60 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 30 }
        ]
    },
    {
        national_number: '048',
        evolution: 'Venomoth',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venonat.png',
            large: 'https://img.pokemondb.net/artwork/venonat.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif'
        },
        name: 'Venonat',
        type: ['Bug', 'Poison'],
        stats: [
            { category: 'total', value: 305 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 55 },
            { category: 'defense', value: 50 },
            { category: 'special attack', value: 40 },
            { category: 'special defense', value: 55 },
            { category: 'speed', value: 45 }
        ]
    },
    {
        national_number: '049',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venomoth.png',
            large: 'https://img.pokemondb.net/artwork/venomoth.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif'
        },
        name: 'Venomoth',
        type: ['Bug', 'Poison'],
        stats: [
            { category: 'total', value: 450 },
            { category: 'hp', value: 70 },
            { category: 'attack', value: 65 },
            { category: 'defense', value: 60 },
            { category: 'special attack', value: 90 },
            { category: 'special defense', value: 75 },
            { category: 'speed', value: 90 }
        ]
    },
    {
        national_number: '050',
        evolution: 'Dugtrio',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/diglett.png',
            large: 'https://img.pokemondb.net/artwork/diglett.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif'
        },
        name: 'Diglett',
        type: ['Ground', 'Steel'],
        stats: [
            { category: 'total', value: 265 },
            { category: 'hp', value: 10 },
            { category: 'attack', value: 55 },
            { category: 'defense', value: 25 },
            { category: 'special attack', value: 35 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 95 }
        ]
    },
    {
        national_number: '051',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png',
            large: 'https://img.pokemondb.net/artwork/dugtrio.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif'
        },
        name: 'Dugtrio',
        type: ['Ground', 'Steel'],
        stats: [
            { category: 'total', value: 425 },
            { category: 'hp', value: 35 },
            { category: 'attack', value: 100 },
            { category: 'defense', value: 50 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 120 }
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
        national_number: '053',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png',
            large: 'https://img.pokemondb.net/artwork/persian.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif'
        },
        name: 'Persian',
        type: ['Normal'],
        stats: [
            { category: 'total', value: 440 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 70 },
            { category: 'defense', value: 60 },
            { category: 'special attack', value: 65 },
            { category: 'special defense', value: 65 },
            { category: 'speed', value: 115 }
        ]
    },
    {
        national_number: '054',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/psyduck.png',
            large: 'https://img.pokemondb.net/artwork/psyduck.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif'
        },
        name: 'Psyduck',
        type: ['Water'],
        stats: [
            { category: 'total', value: 320 },
            { category: 'hp', value: 50 },
            { category: 'attack', value: 52 },
            { category: 'defense', value: 48 },
            { category: 'special attack', value: 65 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 55 }
        ]
    },
    {
        national_number: '055',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golduck.png',
            large: 'https://img.pokemondb.net/artwork/golduck.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif'
        },
        name: 'Golduck',
        type: ['Water'],
        stats: [
            { category: 'total', value: 500 },
            { category: 'hp', value: 80 },
            { category: 'attack', value: 82 },
            { category: 'defense', value: 78 },
            { category: 'special attack', value: 95 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 85 }
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
        national_number: '059',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png',
            large: 'https://img.pokemondb.net/artwork/arcanine.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif'
        },
        name: 'Arcanine',
        type: ['Fire'],
        stats: [
            { category: 'total', value: 555 },
            { category: 'hp', value: 90 },
            { category: 'attack', value: 110 },
            { category: 'defense', value: 80 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 95 }
        ]
    },
    {
        national_number: '060',
        evolution: 'Poliwhirl',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwag.png',
            large: 'https://img.pokemondb.net/artwork/poliwag.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif'
        },
        name: 'Poliwag',
        type: ['Water'],
        stats: [
            { category: 'total', value: 300 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 50 },
            { category: 'defense', value: 40 },
            { category: 'special attack', value: 40 },
            { category: 'special defense', value: 40 },
            { category: 'speed', value: 90 }
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
        national_number: '062',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwrath.png',
            large: 'https://img.pokemondb.net/artwork/poliwrath.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif'
        },
        name: 'Poliwrath',
        type: ['Water', 'Fighting'],
        stats: [
            { category: 'total', value: 510 },
            { category: 'hp', value: 90 },
            { category: 'attack', value: 95 },
            { category: 'defense', value: 95 },
            { category: 'special attack', value: 70 },
            { category: 'special defense', value: 90 },
            { category: 'speed', value: 70 }
        ]
    },
    {
        national_number: '063',
        evolution: 'Kadabra',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/abra.png',
            large: 'https://img.pokemondb.net/artwork/abra.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif'
        },
        name: 'Abra',
        type: ['Psychic'],
        stats: [
            { category: 'total', value: 310 },
            { category: 'hp', value: 25 },
            { category: 'attack', value: 20 },
            { category: 'defense', value: 15 },
            { category: 'special attack', value: 105 },
            { category: 'special defense', value: 55 },
            { category: 'speed', value: 90 }
        ]
    },
    {
        national_number: '064',
        evolution: 'Alakazam',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kadabra.png',
            large: 'https://img.pokemondb.net/artwork/kadabra.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif'
        },
        name: 'Kadabra',
        type: ['Psychic'],
        stats: [
            { category: 'total', value: 400 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 35 },
            { category: 'defense', value: 30 },
            { category: 'special attack', value: 120 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 105 }
        ]
    },
    {
        national_number: '065',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png',
            large: 'https://img.pokemondb.net/artwork/alakazam.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif'
        },
        name: 'Alakazam',
        type: ['Psychic'],
        stats: [
            { category: 'total', value: 500 },
            { category: 'hp', value: 55 },
            { category: 'attack', value: 50 },
            { category: 'defense', value: 45 },
            { category: 'special attack', value: 135 },
            { category: 'special defense', value: 95 },
            { category: 'speed', value: 120 }
        ]
    },
    {
        national_number: '069',
        evolution: 'Weepinbell',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/bellsprout.png',
            large: 'https://img.pokemondb.net/artwork/bellsprout.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif'
        },
        name: 'Bellsprout',
        type: ['Grass', 'Poison'],
        stats: [
            { category: 'total', value: 300 },
            { category: 'hp', value: 50 },
            { category: 'attack', value: 75 },
            { category: 'defense', value: 35 },
            { category: 'special attack', value: 70 },
            { category: 'special defense', value: 30 },
            { category: 'speed', value: 40 }
        ]
    },
    {
        national_number: '070',
        evolution: 'Victreebel',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weepinbell.png',
            large: 'https://img.pokemondb.net/artwork/weepinbell.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif'
        },
        name: 'Weepinbell',
        type: ['Grass', 'Poison'],
        stats: [
            { category: 'total', value: 390 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 90 },
            { category: 'defense', value: 50 },
            { category: 'special attack', value: 85 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 55 }
        ]
    },
    {
        national_number: '071',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victreebel.png',
            large: 'https://img.pokemondb.net/artwork/victreebel.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif'
        },
        name: 'Victreebel',
        type: ['Grass', 'Poison'],
        stats: [
            { category: 'total', value: 490 },
            { category: 'hp', value: 80 },
            { category: 'attack', value: 105 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 70 }
        ]
    },
    {
        national_number: '074',
        evolution: 'Graveler',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/geodude.png',
            large: 'https://img.pokemondb.net/artwork/geodude.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif'
        },
        name: 'Geodude',
        type: ['Rock', 'Ground'],
        stats: [
            { category: 'total', value: 300 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 80 },
            { category: 'defense', value: 100 },
            { category: 'special attack', value: 30 },
            { category: 'special defense', value: 30 },
            { category: 'speed', value: 20 }
        ]
    },
    {
        national_number: '075',
        evolution: 'Golem',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/graveler.png',
            large: 'https://img.pokemondb.net/artwork/graveler.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif'
        },
        name: 'Graveler',
        type: ['Rock', 'Ground'],
        stats: [
            { category: 'total', value: 390 },
            { category: 'hp', value: 55 },
            { category: 'attack', value: 95 },
            { category: 'defense', value: 115 },
            { category: 'special attack', value: 45 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 35 }
        ]
    },
    {
        national_number: '076',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golem.png',
            large: 'https://img.pokemondb.net/artwork/golem.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif'
        },
        name: 'Golem',
        type: ['Rock', 'Ground'],
        stats: [
            { category: 'total', value: 495 },
            { category: 'hp', value: 80 },
            { category: 'attack', value: 120 },
            { category: 'defense', value: 130 },
            { category: 'special attack', value: 55 },
            { category: 'special defense', value: 65 },
            { category: 'speed', value: 45 }
        ]
    },
    {
        national_number: '079',
        evolution: 'Slowbro',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowpoke.png',
            large: 'https://img.pokemondb.net/artwork/slowpoke.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif'
        },
        name: 'Slowpoke',
        type: ['Water', 'Psychic'],
        stats: [
            { category: 'total', value: 315 },
            { category: 'hp', value: 90 },
            { category: 'attack', value: 65 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 40 },
            { category: 'special defense', value: 40 },
            { category: 'speed', value: 15 }
        ]
    },
    {
        national_number: '080',
        evolution: 'Slowking',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowbro.png',
            large: 'https://img.pokemondb.net/artwork/slowbro.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif'
        },
        name: 'Slowbro',
        type: ['Water', 'Psychic'],
        stats: [
            { category: 'total', value: 490 },
            { category: 'hp', value: 95 },
            { category: 'attack', value: 75 },
            { category: 'defense', value: 110 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 30 }
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
        national_number: '091',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cloyster.png',
            large: 'https://img.pokemondb.net/artwork/cloyster.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif'
        },
        name: 'Cloyster',
        type: ['Water', 'Ice'],
        stats: [
            { category: 'total', value: 525 },
            { category: 'hp', value: 50 },
            { category: 'attack', value: 95 },
            { category: 'defense', value: 180 },
            { category: 'special attack', value: 85 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 70 }
        ]
    },
    {
        national_number: '092',
        evolution: 'Haunter',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gastly.png',
            large: 'https://img.pokemondb.net/artwork/gastly.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif'
        },
        name: 'Gastly',
        type: ['Ghost', 'Poison'],
        stats: [
            { category: 'total', value: 310 },
            { category: 'hp', value: 30 },
            { category: 'attack', value: 35 },
            { category: 'defense', value: 30 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 35 },
            { category: 'speed', value: 80 }
        ]
    },
    {
        national_number: '093',
        evolution: 'Gengar',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/haunter.png',
            large: 'https://img.pokemondb.net/artwork/haunter.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif'
        },
        name: 'Haunter',
        type: ['Ghost', 'Poison'],
        stats: [
            { category: 'total', value: 405 },
            { category: 'hp', value: 45 },
            { category: 'attack', value: 50 },
            { category: 'defense', value: 45 },
            { category: 'special attack', value: 115 },
            { category: 'special defense', value: 55 },
            { category: 'speed', value: 95 }
        ]
    },
    {
        national_number: '095',
        evolution: 'Steelix',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png',
            large: 'https://img.pokemondb.net/artwork/onix.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif'
        },
        name: 'Onix',
        type: ['Rock', 'Ground'],
        stats: [
            { category: 'total', value: 385 },
            { category: 'hp', value: 35 },
            { category: 'attack', value: 45 },
            { category: 'defense', value: 160 },
            { category: 'special attack', value: 30 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 70 }
        ]
    },
    {
        national_number: '096',
        evolution: 'Hypno',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/drowzee.png',
            large: 'https://img.pokemondb.net/artwork/drowzee.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif'
        },
        name: 'Drowzee',
        type: ['Psychic'],
        stats: [
            { category: 'total', value: 328 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 48 },
            { category: 'defense', value: 45 },
            { category: 'special attack', value: 43 },
            { category: 'special defense', value: 90 },
            { category: 'speed', value: 42 }
        ]
    },
    {
        national_number: '097',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hypno.png',
            large: 'https://img.pokemondb.net/artwork/hypno.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif'
        },
        name: 'Hypno',
        type: ['Psychic'],
        stats: [
            { category: 'total', value: 483 },
            { category: 'hp', value: 85 },
            { category: 'attack', value: 73 },
            { category: 'defense', value: 70 },
            { category: 'special attack', value: 73 },
            { category: 'special defense', value: 115 },
            { category: 'speed', value: 67 }
        ]
    },
    {
        national_number: '098',
        evolution: 'Kingler',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/krabby.png',
            large: 'https://img.pokemondb.net/artwork/krabby.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif'
        },
        name: 'Krabby',
        type: ['Water'],
        stats: [
            { category: 'total', value: 325 },
            { category: 'hp', value: 30 },
            { category: 'attack', value: 105 },
            { category: 'defense', value: 90 },
            { category: 'special attack', value: 25 },
            { category: 'special defense', value: 25 },
            { category: 'speed', value: 50 }
        ]
    },
    {
        national_number: '099',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kingler.png',
            large: 'https://img.pokemondb.net/artwork/kingler.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif'
        },
        name: 'Kingler',
        type: ['Water'],
        stats: [
            { category: 'total', value: 475 },
            { category: 'hp', value: 55 },
            { category: 'attack', value: 130 },
            { category: 'defense', value: 115 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 75 }
        ]
    },
    {
        national_number: '100',
        evolution: 'Electrode',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/voltorb.png',
            large: 'https://img.pokemondb.net/artwork/voltorb.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif'
        },
        name: 'Voltorb',
        type: ['Electric'],
        stats: [
            { category: 'total', value: 330 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 30 },
            { category: 'defense', value: 50 },
            { category: 'special attack', value: 55 },
            { category: 'special defense', value: 55 },
            { category: 'speed', value: 100 }
        ]
    },
    {
        national_number: '101',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electrode.png',
            large: 'https://img.pokemondb.net/artwork/electrode.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif'
        },
        name: 'Electrode',
        type: ['Electric'],
        stats: [
            { category: 'total', value: 490 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 50 },
            { category: 'defense', value: 70 },
            { category: 'special attack', value: 80 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 150 }
        ]
    },
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
        national_number: '103',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png',
            large: 'https://img.pokemondb.net/artwork/exeggutor.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif'
        },
        name: 'Exeggutor',
        type: ['Grass', 'Psychic'],
        stats: [
            { category: 'total', value: 530 },
            { category: 'hp', value: 95 },
            { category: 'attack', value: 95 },
            { category: 'defense', value: 85 },
            { category: 'special attack', value: 125 },
            { category: 'special defense', value: 75 },
            { category: 'speed', value: 55 }
        ]
    },
    {
        national_number: '104',
        evolution: 'Marowak',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cubone.png',
            large: 'https://img.pokemondb.net/artwork/cubone.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif'
        },
        name: 'Cubone',
        type: ['Ground'],
        stats: [
            { category: 'total', value: 320 },
            { category: 'hp', value: 50 },
            { category: 'attack', value: 50 },
            { category: 'defense', value: 95 },
            { category: 'special attack', value: 40 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 35 }
        ]
    },
    {
        national_number: '105',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png',
            large: 'https://img.pokemondb.net/artwork/marowak.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif'
        },
        name: 'Marowak',
        type: ['Ground'],
        stats: [
            { category: 'total', value: 425 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 80 },
            { category: 'defense', value: 110 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 45 }
        ]
    },
    {
        national_number: '106',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonlee.png',
            large: 'https://img.pokemondb.net/artwork/hitmonlee.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif'
        },
        name: 'Hitmonlee',
        type: ['Fighting'],
        stats: [
            { category: 'total', value: 455 },
            { category: 'hp', value: 50 },
            { category: 'attack', value: 120 },
            { category: 'defense', value: 53 },
            { category: 'special attack', value: 35 },
            { category: 'special defense', value: 110 },
            { category: 'speed', value: 87 }
        ]
    },
    {
        national_number: '107',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonchan.png',
            large: 'https://img.pokemondb.net/artwork/hitmonchan.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif'
        },
        name: 'Hitmonchan',
        type: ['Fighting'],
        stats: [
            { category: 'total', value: 455 },
            { category: 'hp', value: 50 },
            { category: 'attack', value: 105 },
            { category: 'defense', value: 79 },
            { category: 'special attack', value: 35 },
            { category: 'special defense', value: 110 },
            { category: 'speed', value: 76 }
        ]
    },
    {
        national_number: '109',
        evolution: 'Weezing',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/koffing.png',
            large: 'https://img.pokemondb.net/artwork/koffing.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif'
        },
        name: 'Koffing',
        type: ['Poison'],
        stats: [
            { category: 'total', value: 340 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 65 },
            { category: 'defense', value: 95 },
            { category: 'special attack', value: 60 },
            { category: 'special defense', value: 45 },
            { category: 'speed', value: 35 }
        ]
    },
    {
        national_number: '110',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weezing.png',
            large: 'https://img.pokemondb.net/artwork/weezing.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif'
        },
        name: 'Weezing',
        type: ['Poison'],
        stats: [
            { category: 'total', value: 490 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 90 },
            { category: 'defense', value: 120 },
            { category: 'special attack', value: 85 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 60 }
        ]
    },
    {
        national_number: '113',
        evolution: 'Blissey',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chansey.png',
            large: 'https://img.pokemondb.net/artwork/chansey.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif'
        },
        name: 'Chansey',
        type: ['Normal'],
        stats: [
            { category: 'total', value: 450 },
            { category: 'hp', value: 250 },
            { category: 'attack', value: 5 },
            { category: 'defense', value: 5 },
            { category: 'special attack', value: 35 },
            { category: 'special defense', value: 105 },
            { category: 'speed', value: 50 }
        ]
    },
    {
        national_number: '114',
        evolution: 'Tangrowth',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tangela.png',
            large: 'https://img.pokemondb.net/artwork/tangela.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif'
        },
        name: 'Tangela',
        type: ['Grass'],
        stats: [
            { category: 'total', value: 435 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 55 },
            { category: 'defense', value: 115 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 40 },
            { category: 'speed', value: 60 }
        ]
    },
    {
        national_number: '116',
        evolution: 'Seadra',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/horsea.png',
            large: 'https://img.pokemondb.net/artwork/horsea.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif'
        },
        name: 'Horsea',
        type: ['Water'],
        stats: [
            { category: 'total', value: 295 },
            { category: 'hp', value: 30 },
            { category: 'attack', value: 40 },
            { category: 'defense', value: 70 },
            { category: 'special attack', value: 70 },
            { category: 'special defense', value: 25 },
            { category: 'speed', value: 60 }
        ]
    },
    {
        national_number: '118',
        evolution: 'Seaking',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/goldeen.png',
            large: 'https://img.pokemondb.net/artwork/goldeen.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif'
        },
        name: 'Goldeen',
        type: ['Water'],
        stats: [
            { category: 'total', value: 320 },
            { category: 'hp', value: 45 },
            { category: 'attack', value: 67 },
            { category: 'defense', value: 60 },
            { category: 'special attack', value: 35 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 63 }
        ]
    },
    {
        national_number: '119',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seaking.png',
            large: 'https://img.pokemondb.net/artwork/seaking.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif'
        },
        name: 'Seaking',
        type: ['Water'],
        stats: [
            { category: 'total', value: 450 },
            { category: 'hp', value: 80 },
            { category: 'attack', value: 92 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 65 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 68 }
        ]
    },
    {
        national_number: '120',
        evolution: 'Starmie',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/staryu.png',
            large: 'https://img.pokemondb.net/artwork/staryu.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif'
        },
        name: 'Staryu',
        type: ['Water'],
        stats: [
            { category: 'total', value: 340 },
            { category: 'hp', value: 30 },
            { category: 'attack', value: 45 },
            { category: 'defense', value: 55 },
            { category: 'special attack', value: 70 },
            { category: 'special defense', value: 55 },
            { category: 'speed', value: 85 }
        ]
    },
    {
        national_number: '121',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/starmie.png',
            large: 'https://img.pokemondb.net/artwork/starmie.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif'
        },
        name: 'Starmie',
        type: ['Water', 'Psychic'],
        stats: [
            { category: 'total', value: 520 },
            { category: 'hp', value: 60 },
            { category: 'attack', value: 75 },
            { category: 'defense', value: 85 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 85 },
            { category: 'speed', value: 115 }
        ]
    },
    {
        national_number: '122',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mr.-mime.png',
            large: 'https://img.pokemondb.net/artwork/mr.-mime.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mr.-mime.gif'
        },
        name: 'Mr. Mime',
        type: ['Psychic', 'Fairy'],
        stats: [
            { category: 'total', value: 460 },
            { category: 'hp', value: 40 },
            { category: 'attack', value: 45 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 120 },
            { category: 'speed', value: 90 }
        ]
    },
    {
        national_number: '123',
        evolution: 'Scizor',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png',
            large: 'https://img.pokemondb.net/artwork/scyther.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif'
        },
        name: 'Scyther',
        type: ['Bug', 'Flying'],
        stats: [
            { category: 'total', value: 500 },
            { category: 'hp', value: 70 },
            { category: 'attack', value: 110 },
            { category: 'defense', value: 80 },
            { category: 'special attack', value: 55 },
            { category: 'special defense', value: 80 },
            { category: 'speed', value: 105 }
        ]
    },
    {
        national_number: '124',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png',
            large: 'https://img.pokemondb.net/artwork/jynx.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif'
        },
        name: 'Jynx',
        type: ['Ice', 'Psychic'],
        stats: [
            { category: 'total', value: 455 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 50 },
            { category: 'defense', value: 35 },
            { category: 'special attack', value: 115 },
            { category: 'special defense', value: 95 },
            { category: 'speed', value: 95 }
        ]
    },
    {
        national_number: '127',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pinsir.png',
            large: 'https://img.pokemondb.net/artwork/pinsir.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif'
        },
        name: 'Pinsir',
        type: ['Bug'],
        stats: [
            { category: 'total', value: 500 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 125 },
            { category: 'defense', value: 100 },
            { category: 'special attack', value: 55 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 85 }
        ]
    },
    {
        national_number: '128',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tauros.png',
            large: 'https://img.pokemondb.net/artwork/tauros.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif'
        },
        name: 'Tauros',
        type: ['Normal'],
        stats: [
            { category: 'total', value: 490 },
            { category: 'hp', value: 75 },
            { category: 'attack', value: 100 },
            { category: 'defense', value: 95 },
            { category: 'special attack', value: 40 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 110 }
        ]
    },
    {
        national_number: '129',
        evolution: 'Gyarados',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magikarp.png',
            large: 'https://img.pokemondb.net/artwork/magikarp.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif'
        },
        name: 'Magikarp',
        type: ['Water'],
        stats: [
            { category: 'total', value: 200 },
            { category: 'hp', value: 20 },
            { category: 'attack', value: 10 },
            { category: 'defense', value: 55 },
            { category: 'special attack', value: 15 },
            { category: 'special defense', value: 20 },
            { category: 'speed', value: 80 }
        ]
    },
    {
        national_number: '130',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png',
            large: 'https://img.pokemondb.net/artwork/gyarados.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif'
        },
        name: 'Gyarados',
        type: ['Water', 'Flying'],
        stats: [
            { category: 'total', value: 540 },
            { category: 'hp', value: 95 },
            { category: 'attack', value: 125 },
            { category: 'defense', value: 79 },
            { category: 'special attack', value: 60 },
            { category: 'special defense', value: 100 },
            { category: 'speed', value: 81 }
        ]
    },
    {
        national_number: '131',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lapras.png',
            large: 'https://img.pokemondb.net/artwork/lapras.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif'
        },
        name: 'Lapras',
        type: ['Water', 'Ice'],
        stats: [
            { category: 'total', value: 535 },
            { category: 'hp', value: 130 },
            { category: 'attack', value: 85 },
            { category: 'defense', value: 80 },
            { category: 'special attack', value: 85 },
            { category: 'special defense', value: 95 },
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
        national_number: '137',
        evolution: 'Porygon2',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon.png',
            large: 'https://img.pokemondb.net/artwork/porygon.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif'
        },
        name: 'Porygon',
        type: ['Normal'],
        stats: [
            { category: 'total', value: 395 },
            { category: 'hp', value: 65 },
            { category: 'attack', value: 60 },
            { category: 'defense', value: 70 },
            { category: 'special attack', value: 85 },
            { category: 'special defense', value: 75 },
            { category: 'speed', value: 40 }
        ]
    },
    {
        national_number: '143',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snorlax.png',
            large: 'https://img.pokemondb.net/artwork/snorlax.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif'
        },
        name: 'Snorlax',
        type: ['Normal'],
        stats: [
            { category: 'total', value: 540 },
            { category: 'hp', value: 160 },
            { category: 'attack', value: 110 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 65 },
            { category: 'special defense', value: 110 },
            { category: 'speed', value: 30 }
        ]
    },
    {
        national_number: '144',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/articuno.png',
            large: 'https://img.pokemondb.net/artwork/articuno.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif'
        },
        name: 'Articuno',
        type: ['Ice', 'Flying'],
        stats: [
            { category: 'total', value: 580 },
            { category: 'hp', value: 90 },
            { category: 'attack', value: 85 },
            { category: 'defense', value: 100 },
            { category: 'special attack', value: 95 },
            { category: 'special defense', value: 125 },
            { category: 'speed', value: 85 }
        ]
    },
    {
        national_number: '145',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zapdos.png',
            large: 'https://img.pokemondb.net/artwork/zapdos.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif'
        },
        name: 'Zapdos',
        type: ['Electric', 'Flying'],
        stats: [
            { category: 'total', value: 580 },
            { category: 'hp', value: 90 },
            { category: 'attack', value: 90 },
            { category: 'defense', value: 85 },
            { category: 'special attack', value: 125 },
            { category: 'special defense', value: 90 },
            { category: 'speed', value: 100 }
        ]
    },
    {
        national_number: '146',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/moltres.png',
            large: 'https://img.pokemondb.net/artwork/moltres.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif'
        },
        name: 'Moltres',
        type: ['Fire', 'Flying'],
        stats: [
            { category: 'total', value: 580 },
            { category: 'hp', value: 90 },
            { category: 'attack', value: 100 },
            { category: 'defense', value: 90 },
            { category: 'special attack', value: 125 },
            { category: 'special defense', value: 85 },
            { category: 'speed', value: 90 }
        ]
    },
    {
        national_number: '147',
        evolution: 'Dragonair',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dratini.png',
            large: 'https://img.pokemondb.net/artwork/dratini.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif'
        },
        name: 'Dratini',
        type: ['Dragon'],
        stats: [
            { category: 'total', value: 300 },
            { category: 'hp', value: 41 },
            { category: 'attack', value: 64 },
            { category: 'defense', value: 45 },
            { category: 'special attack', value: 50 },
            { category: 'special defense', value: 50 },
            { category: 'speed', value: 50 }
        ]
    },
    {
        national_number: '148',
        evolution: 'Dragonite',
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonair.png',
            large: 'https://img.pokemondb.net/artwork/dragonair.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif'
        },
        name: 'Dragonair',
        type: ['Dragon'],
        stats: [
            { category: 'total', value: 420 },
            { category: 'hp', value: 61 },
            { category: 'attack', value: 84 },
            { category: 'defense', value: 65 },
            { category: 'special attack', value: 70 },
            { category: 'special defense', value: 70 },
            { category: 'speed', value: 70 }
        ]
    },
    {
        national_number: '149',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonite.png',
            large: 'https://img.pokemondb.net/artwork/dragonite.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif'
        },
        name: 'Dragonite',
        type: ['Dragon', 'Flying'],
        stats: [
            { category: 'total', value: 600 },
            { category: 'hp', value: 91 },
            { category: 'attack', value: 134 },
            { category: 'defense', value: 95 },
            { category: 'special attack', value: 100 },
            { category: 'special defense', value: 100 },
            { category: 'speed', value: 80 }
        ]
    },
    {
        national_number: '150',
        evolution: null,
        sprites: {
            normal: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png',
            large: 'https://img.pokemondb.net/artwork/mewtwo.jpg',
            animated: 'https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif'
        },
        name: 'Mewtwo',
        type: ['Psychic'],
        stats: [
            { category: 'total', value: 680 },
            { category: 'hp', value: 106 },
            { category: 'attack', value: 110 },
            { category: 'defense', value: 90 },
            { category: 'special attack', value: 154 },
            { category: 'special defense', value: 90 },
            { category: 'speed', value: 130 }
        ]
    }
];

module.exports = pokemon;