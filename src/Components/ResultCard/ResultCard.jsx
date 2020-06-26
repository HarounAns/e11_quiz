import React from 'react';

import './ResultCard.css';
import CardModal from '../CardModal';

export default class ResultCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
        this.pictures = {
            "Salih": 0,
            "Haroun": 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/65668197_2275320369201576_1199723106101362688_n.jpg?_nc_cat=100&_nc_ohc=udb0-LjqLNQAQmw5vBZkjB3_bPx4JZscEvZu7qRSl5UHT7pRfnyHhQv-A&_nc_ht=scontent-iad3-1.xx&oh=12c708fc061467cb1410e516819d7753&oe=5E809F1D',
            "Musstafa": 0,
            "Omer": 0,
            "Husam": 0,
            "Faraz": 0,
            "Shabi": 0,
            "Zohaib": 0,
            "Akber": 0,
            "Edrees": 0,
            "Youssef": 0,
            "Juzer": 0,
            "Samee": 0
        };
    }



    render() {
        return (
            <div style={{ minHeight: '100%' }}>
                {this.createModalListener()}
                {this.frontCard()}
                <button style={{ marginBottom:"25px" , marginTop: "25px" }} type="button" class="btn btn-success" onClick={() => {window.location.reload(false)}}>TAKE AGAIN</button>
            </div>
        )
    }

    frontCard = () => {
        let member = info[this.props.squadMember];

        return (
            <div style={styles.body}>
                <div class="card" style={styles.card}>
                    <img src={member.picture} style={{ "width": "100%" }} />
                    <h1>{member.fullName}</h1>
                    <p class="title">Occupation: <i>{member.occupation}</i></p>
                    <p><strong>E11</strong> Certified</p>
                    <span>
                        <a href="#" style={styles.a}><i class="fa fa-dribbble"></i></a> &nbsp;
                        <a href="#" style={styles.a}><i class="fa fa-twitter"></i></a> &nbsp;
                        <a href="#" style={styles.a}><i class="fa fa-linkedin"></i></a> &nbsp;
                        <a href="#" style={styles.a}><i class="fa fa-facebook"></i></a> &nbsp;
                    </span>
                    <p><button style={styles.button} onClick={this.openModal}>Description</button></p>
                </div>
            </div>
        )
    }

    // this creates the modal element, it only renders when the state for modal
    // is set to true, and closes it when set to false
    createModalListener = () => {
        let member = info[this.props.squadMember];

        if (this.state.modal) {
            return (
                <CardModal
                    isOpen={this.state.modal}
                    closeModal={this.closeModal}
                    name={member.fullName}
                    about={member.about} />
            )
        }
    }

    // sets the state to true, and passes the item to the modal to render by placing 
    // it in the state
    openModal = () => {
        this.setState({
            modal: true
        })
    }

    // sets the state to false for the modal, effectively closing it
    closeModal = () => {
        this.setState({
            modal: false
        })
    }
}

const styles = {
    card: {
        "boxShadow": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "maxWidth": "400px",
        "margin": "auto",
        "textAlign": "center",
        "marginTop": "30px"
    },
    button: {
        "border": "none",
        "outline": "0",
        "display": "inline-block",
        "padding": "8px",
        "color": "white",
        "backgroundColor": "#000",
        "textAlign": "center",
        "cursor": "pointer",
        "width": "100%",
        "fontSize": "18px"
    },
    title: {
        "color": 'grey',
        "fontSize": '18px'
    },
    a: {
        "textDecoration": "none",
        "fontSize": "22px",
        "color": "black"
    }
}

const info = {
    'Haroun': {
        fullName: 'Haroun Ansari',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/65668197_2275320369201576_1199723106101362688_n.jpg?_nc_cat=100&_nc_ohc=udb0-LjqLNQAQmw5vBZkjB3_bPx4JZscEvZu7qRSl5UHT7pRfnyHhQv-A&_nc_ht=scontent-iad3-1.xx&oh=12c708fc061467cb1410e516819d7753&oe=5E809F1D',
        about: "Congratulations, you won! You're the GOAT. The greatest of all time. The smartest, funniest, most handsome dude in squad, if not the entire world. You can stop trying to reset the quiz becuase you have finally beat the game. Seriously, Well Done!",
        occupation: 'Professional GOAT'
    },
    "Salih": {
        fullName: 'Ahmed Salih',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/60570619_10212944686564311_1478429357914456064_o.jpg?_nc_cat=103&_nc_ohc=diCG1MlwzSoAQmwBKrS23ldLYBu0NOMXoVipR957LhPhrcL-ojq-nFRyg&_nc_ht=scontent-iad3-1.xx&oh=4991e4324a80fb666702d79d929f7ee4&oe=5E7CACBE',
        about: "You peaked in high school, so the only way you can get your kicks now is occasionally entering flag football games against children, since you can no longer handle tackle. Overall youre a weak bitch-boi",
        occupation: "Retired Jock"
    },
    "Musstafa": {
        fullName: 'Musstafa Mohamedali',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/13923842_10207243649353260_7623664468638902920_o.jpg?_nc_cat=107&_nc_ohc=SpPxC7RtF-cAQn4psgmzVjLfLQld6NCeBfOD6WJFXdbd0SMop48oIX9Tg&_nc_ht=scontent-iad3-1.xx&oh=967cf5baafe4bfa1f5232ea4c315cc8a&oe=5E6F33A7',
        about: "If you haven't picked up on it yet, everyones job title is a joke... You're the tallest of your friends and somehow still cant dunk. You're extremely soft and need your cousin to perpetually comfort you. If this hurt your feelings please reach out to me, seriously.",
        occupation: "Full Stack Developer @ Src Logic"
    },
    "Omer": {
        fullName: 'Omer Zulfiqar',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/66438597_10216613231216029_6628856145303830528_n.jpg?_nc_cat=108&_nc_ohc=IamBRiyptIoAQl8IiNlojWVRGYrcmvy3-w8MmMle6L2Eq8iF2fCtLXW1g&_nc_ht=scontent-iad3-1.xx&oh=f5bff21d6b7988e1b4834391b4601e18&oe=5E78556A',
        about: "LOOOOOL. Unfortunate I must say. 👀👀👀",
        occupation: "Fulltime Student"
    },
    "Husam": {
        fullName: 'Husam Sheikh',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/22228327_2084405931576949_1821418929840952005_n.jpg?_nc_cat=103&_nc_ohc=4w5iATR2w6MAQlgtTJpNJOb7LCDg2XepBfeVcGgfu-UAoOA7YzduUpcig&_nc_ht=scontent-iad3-1.xx&oh=a45499e3e6bc73be72477df18cf8d510&oe=5E7A1A07',
        about: "You're a nihilistic, selfish, asshole who thinks about nobody except himself. Your blashphemy and ill intents will be your own undoing. You're kinda cute though",
        occupation: "Puppy"
    },
    "Faraz": {
        fullName: 'Faraz Khan',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/15822696_1841023452848979_8727961975583473262_n.jpg?_nc_cat=107&_nc_ohc=TIHhzotBWuAAQlbcUKORvQXAICaMlMJ7Y8HOXeoxrgoFu3V-_oS-DYWfw&_nc_ht=scontent-iad3-1.xx&oh=4cbee7b6b1831e5a9c2073ad8a2cf418&oe=5E78760D',
        about: "\"Faraz ain't squad but I'll include him just cuz\" -Ahmad Edrees",
        occupation: "Error 404: Not Found"
    },
    "Shabi": {
        fullName: 'Shabi Mustafa',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-1/p320x320/12711033_10207483270714234_4220932937645374374_o.jpg?_nc_cat=109&_nc_ohc=vvZs4O-qpxUAQmN5XDmYdD3g4y2q-mnyRQOL39oYcJvjLqlRhSJH7ET3g&_nc_ht=scontent-iad3-1.xx&oh=43b79a3b816059b71d23e7185b4ae37d&oe=5E6A7CE4',
        about: "You're attracted to girls much taller than you. You're a terrible Engineer, and I'm pretty sure you're finacee doesnt appreciate how 'close' you are to other men. Seriously, stop calling me at random times of the night to debug your code. CODA deserves better. So does Morsel",
        occupation: "Motivational Speaker"
    },
    "Zohaib": {
        fullName: 'Zohaib Qureishi',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/17990427_10155198014999557_1791433467204164681_o.jpg?_nc_cat=100&_nc_ohc=hJn9bme0ANYAQm_zQdby2E9P6cPu79ZpOCwjYZts7TAvoOu-1uSyx7wXA&_nc_ht=scontent-iad3-1.xx&oh=50b9a9954927aca19d81b4938981e20f&oe=5E78A86B',
        about: "You're the quiet, mysterious type. No one knows anything about you. Like for real I've been friends with you for about 6 years and I think we've spoken like twice.",
        occupation: "Stripper"
    },
    "Akber": {
        fullName: 'Akber Ghori',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c0.0.1061.1061a/53046542_2404700739816126_2906249643006361600_o.jpg?_nc_cat=110&_nc_ohc=ioHVZmJQEYcAQnk_0cdqWtjoqUX2BjNjSFy1PoYJQ9eljnpxIPwjJDZfg&_nc_ht=scontent-iad3-1.xx&oh=d1337fcb045a8043325776a261c327ff&oe=5E7D317A',
        about: "You have weird hobbies, like sniffing almonds in your free time. You always blow up the groupchat with whatevers on your mind. Which is good sometimes, but most of the time you're friends just wanna strangle you.",
        occupation: "Professional Weirdo"
    },
    "Edrees": {
        fullName: 'Ahmad Edrees',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/60585514_10218781502231810_3782204641022836736_n.jpg?_nc_cat=102&_nc_ohc=pzc77Y1CHnoAQmTJuBgxpx5UkSQR0HHKNkqPG_o6HgpT45s3W0rHzkVwQ&_nc_ht=scontent-iad3-1.xx&oh=c58a9743297bd721227dbb65fbc97615&oe=5E6D2356',
        about: "HAVE YOU SEEN THIS MISSING PERSON? IF SO PLEASE CONTACT 911. Last seen getting cooked by everyone in everything. Used to be the GOAT, now you're afloat 😔",
        occupation: "Illegal Alien"
    },
    "Youssef": {
        fullName: 'Youssef Rhanime',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/12741998_10207462447492689_7316581430591908246_n.jpg?_nc_cat=107&_nc_ohc=1vvFKH5Pu2MAQkYbC6UQXgMB5T9UAy9AQWbxbvYSF0XRZaiYTpKxBwfuA&_nc_ht=scontent-iad3-1.xx&oh=57dbd922949d3c4fa53f0933711adc50&oe=5E77BA8E',
        about: "You're loud, annoying, and a pretty garbage person overall. You will never amount to anything except maybe being a measely fry cook, and your wife will always have to support you",
        occupation: "Fast Food Employee"
    },
    "Juzer": {
        fullName: 'Juzer Nomani',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/35886358_10216757577277607_2395980637451321344_o.jpg?_nc_cat=111&_nc_ohc=xuUTlz5rVVAAQnvFLtChFY2g4_kctSzJm1eFFTw3GveKTjZbeD3netYZw&_nc_ht=scontent-iad3-1.xx&oh=c1928621694ad10761aff0ef2dd3698b&oe=5E6A5527',
        about: "Only Engineer in squad worse than Shabi. You don't care about your friends and moved to Seattle and said F**K IT. Your mom makes really good butter chicken",
        occupation: "Delivers Packages"
    },
    "Samee": {
        fullName: 'Samee Khan',
        picture: 'https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/14682166_10208068928503163_1879684366288792153_o.jpg?_nc_cat=105&_nc_ohc=wq-MjBCL9U0AQlpqdz_Jnigy2gsR2xrqMgz-F7biCBESpN9XujqMwYqtA&_nc_ht=scontent-iad3-1.xx&oh=5d039bc75703a9ed339b4ab827f22276&oe=5E6BCC94',
        about: "You're the definition of #whipped. May Allah make it easy for you and your family, you stupid bitch",
        occupation: "Housewife"
    }
}