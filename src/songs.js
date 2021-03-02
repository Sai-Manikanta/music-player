import { v4 as uuidv4 } from 'uuid';

function getSongs(){
    return [
        {
            name: 'Sodium',
            cover: 'https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg',
            artist: 'Tesk, Sai Mani Bandaru',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9149',
            color: ['#6AB1F7', '#E9BC86'],
            id: uuidv4(),
            active: true
        },
        {
            name: 'Never Ending',
            cover: 'https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg',
            artist: 'squeeda, Pradeep',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9275',
            color: ['#6EC9BA', '#5B332A'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Cruisin',
            cover: 'https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg',
            artist: 'G Mills, Kiran',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8200',
            color: ['#53B4B3', '#F09552'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Sugarless',
            cover: 'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
            artist: 'Aviino',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11243',
            color: ['#343539', '#819E5C'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Chillhop Essentials Winter 2020',
            cover: 'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
            artist: 'Aviino',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10305',
            color: ['#E4C5D4', '#3C3579'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Rest Until Dark',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg',
            artist: 'Sleepy Fish',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10015',
            color: ['#3D7D9A', '#9B5030'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Canary Forest',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg',
            artist: 'Middle School',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10075',
            color: ['#173A35', '#F09741'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Hidden Structure',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
            artist: 'Leavv',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11243',
            color: ['#98C3AD', '#C69067'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Bliss',
            cover: 'https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg',
            artist: 'Jussi Halme',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9248',
            color: ['#2A416D', '#EF94A0'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Vinho Verde',
            cover: 'https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg',
            artist: 'Clap Cotton',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9447',
            color: ['#D5EE86', '#AAF1E2'],
            id: uuidv4(),
            active: false
        },
        {
            name: 'Persist',
            cover: 'https://chillhop.com/wp-content/uploads/2020/05/16bcbe48680098798af04f176daae3693839238d-1024x1024.jpg',
            artist: 'invention_',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8291',
            color: ['#4A62A0', '#EF96AE'],
            id: uuidv4(),
            active: false
        },
    ];
}

export default getSongs;