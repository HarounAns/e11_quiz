import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css'

import MainPage from './MainPage';
import Question from './Question';
import ResultCard from './ResultCard/ResultCard.jsx';
import LandingPage from './LandingPage';

export default class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: 'landing', // main, question, result
            q_index: 0,
            result: null
        };

        this.score = {
            "Salih": 0,
            "Haroun": 0,
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

        this.ranks = []; // takes rank objects from questions
    }

    render() {
        if (this.state.screen == 'landing') {
            return <LandingPage 
                name={quiz_obj.name} 
                disclaimer={quiz_obj.disclaimer}
                setMain={this.setMain}/>
        }

        if (this.state.screen == 'main') {
            return <MainPage 
                name={quiz_obj.name} 
                overview={quiz_obj.overview} 
                setQuestion={this.setQuestion}/>
        }

        if (this.state.screen == 'question') {
            return (
                <div>
                    <Question 
                        q={quiz_obj.questions[this.state.q_index]} 
                        nextQuestion={this.nextQuestion}
                        prevQuestion={this.prevQuestion}
                        isFinalQuestion={this.state.q_index == quiz_obj.questions.length - 1}
                        calculateScores={this.calculateScores}/>
                </div>
            )
        }

        if (this.state.screen == 'result') {
            return (
                <div>
                    <ResultCard squadMember={this.state.result || 'Haroun'}/>
                </div>
            )
        }
    }
    setMain = () => {
        this.setState({
            screen: 'main'
        })
    }

    setQuestion = () => {
        this.setState({
            screen: 'question'
        })
    }

    nextQuestion = (rank) => {
        this.setState({
            q_index: this.state.q_index + 1,
            ranks: this.ranks.push(rank)
        })
    }

    prevQuestion = () => {
        if (this.state.q_index > 0) {
            this.setState({
                q_index: this.state.q_index - 1,
                ranks: this.ranks.pop()
            })
        }
    }

    calculateScores = () => {
        let max = {
            name: '',
            score: 0
        };

        // for each rank
        for (let rank of this.ranks){
            // get keys
            let keys = Object.keys(rank);
            
            // for each key
            for (let key of keys){
                // increment score
                this.score[key] += rank[key];

                // adjust max
                if (this.score[key] > max.score){
                    max.score = this.score[key];
                    max.name = key;
                }
            }
        }
        
        console.log(this.score);
        console.log(max);
        this.setState({
            screen: 'result',
            result: max.name
        })
    }
}

const quiz_obj = {
    "_id": "c7fe70b52cb0eb6ac19c8b3034000a66",
    "_rev": "12-473a06a9e66c54dd31ff423bccda2508",
    "name": "Which Squad Member Are You?",
    "type": "quiz",
    "overview": "This Quiz will tell you which of the Elite 11 (one of 13 possibilities) members you are, based on your everyday actions, likenesses, and preferences. Warning, if you get any of these guys please remain calm and call the suicide hotline at 1-800-273-8255.",
    "disclaimer": "Disclaimer: These questions are 3 years old and most don't apply anymore. Answer as you best see fit. I might f around and do a rewrite.",
    "questions": [
        {
            "title": "Question 1",
            "question": "You come home after a long day of classes and realize you're in the hip hop mood. Who are you most likely listening to?",
            "choices": {
                "A": "Kendrick Lamar",
                "B": "Drake",
                "C": "Lil Wayne",
                "D": "Kid Cudi"
            },
            "rank": {
                "A": {
                    "Edrees": 1,
                    "Shabi": 2
                },
                "B": {
                    "Salih": 1,
                    "Haroun": 2,
                    "Musstafa": 1,
                    "Omer": 4,
                    "Zohaib": 5,
                    "Samee": 2,
                    "Husam": 1,
                    "Faraz": 1
                },
                "C": {
                    "Juzer": 5,
                    "Youssef": 3
                },
                "D": {
                    "Akber": 5,
                }
            }
        },
        {
            "title": "Question 2",
            "question": "When you’ve got a project/test/assignment that you need to work on/study for, which of the following is most likely your go to study spot?",
            "choices": {
                "A": "Newman Library",
                "B": "Mill Mountain (FOAMO didnt exist back then)",
                "C": "Starbucks",
                "D": "I think I’m just gonna do it at home"
            },
            "rank": {
                "A": {
                    "Zohaib": 2,
                    "Omer": 2,
                    "Shabi": 3
                },
                "B": {
                    "Haroun": 4,
                    "Salih": 3,
                    "Musstafa": 2
                },
                "C": {
                    "Edrees": 2,
                    "Samee": 4,
                    "Husam": 3
                },
                "D": {
                    "Akber": 3,
                    "Youssef": 1,
                    "Juzer": 2,
                    "Faraz": 4
                }
            }
        },
        {
            "title": "Question 3",
            "question": " You're feeling hungry and don't feel like cooking, what are you most likely getting to eat tonight?",
            "choices": {
                "A": "Tacos",
                "B": "Burgers",
                "C": "General Tso’s",
                "D": "Butter Chicken"
            },
            "rank": {
                "A": {
                    "Musstafa": 2
                },
                "B": {
                    "Salih": 4,
                    "Omer": 3,
                    "Husam": 3,
                    "Faraz": 4
                },
                "C": {
                    "Haroun": 3,
                    "Zohaib": 3
                },
                "D": {
                    "Edrees": 2,
                    "Youssef": 2,
                    "Juzer": 3,
                    "Samee": 4,
                    "Akber": 3,
                    "Shabi": 1
                }
            }
        },
        {
            "title": "Question 4",
            "question": " Everyone is huddled on the sofa trying to figure out what show to watch. What show are you pitching?",
            "choices": {
                "A": "Naruto Shippuden",
                "B": "Kevin Hart stand-up",
                "C": "Game of Thrones",
                "D": "Screw that Imma go read a book"
            },
            "rank": {
                "A": {
                    "Salih": 4,
                    "Haroun": 5,
                    "Musstafa": 2,
                    "Omer": 5,
                    "Husam": 5,
                    "Faraz": 5,
                    "Shabi": 1
                },
                "B": {
                    "Zohaib": 2,
                    "Akber": 1
                },
                "C": {
                    "Edrees": 1,
                    "Youssef": 1,
                    "Juzer": 3
                },
                "D": {
                    "Samee": 5
                }
            }
        },
        {
            "title": "Question 5",
            "question": " Fast forward 5 years from now, you’ve graduated from college (hopefully iA) and you open up your garage, what car do you see?",
            "choices": {
                "A": "BMW 5 Series",
                "B": "Honda Accord",
                "C": "Tesla Model S",
                "D": "Toyota Sequoia/something I can fit hella people in"
            },
            "rank": {
                "A": {
                    "Omer": 5,
                    "Youssef": 5,
                    "Shabi": 2,
                    "Faraz": 3
                },
                "B": {
                    "Musstafa": 4,
                    "Zohaib": 3,
                    "Husam": 2,
                    "Akber": 2
                },
                "C": {
                    "Salih": 5,
                    "Edrees": 3,
                    "Juzer": 5,
                    "Samee": 5
                },
                "D": {
                    "Haroun": 2
                }
            }
        },
        {
            "title": "Question 6",
            "question": "You’re back home for the week, and your parents spring the “when are you getting married” question.  What do you tell them?",
            "choices": {
                "A": "I just gotta finish up college and it's a done deal",
                "B": "Mama give me a couple years until I'm financially stable",
                "C": "Baba I just gotta find the right one, I’ll wait till the time is right",
                "D": "Actually guys… the Nikah is next week, here’s your invitation"
            },
            "rank": {
                "A": {
                    "Omer": 1,
                    "Zohaib": 5,
                    "Samee": 5,
                    "Akber": 5
                },
                "B": {
                    "Haroun": 1,
                    "Edrees": 5,
                    "Juzer": 4,
                    "Husam": 2
                },
                "C": {
                    "Salih": 5,
                    "Faraz": 1
                },
                "D": {
                    "Youssef": 5,
                    "Musstafa": 3,
                    "Shabi": 4
                }
            }
        },
        {
            "title": "Question 7",
            "question": " It’s Thursday night and there are no Friday classes tomorrow. You look at your bois. What’s the move?",
            "choices": {
                "A": "This is a good chance to catch up on work",
                "B": "Bro - we gotta go to MUGS",
                "C": "Let’s go to Maple/Foxridge/Pack and watch a movie",
                "D": "Ayy lets make this Florida Trip"
            },
            "rank": {
                "A": {
                    "Omer": 3,
                    "Zohaib": 3,
                    "Akber": 4
                },
                "B": {
                    "Haroun": 1,
                    "Edrees": 4,
                    "Husam": 4
                },
                "C": {
                    "Musstafa": 1,
                    "Juzer": 1,
                    "Faraz": 2
                },
                "D": {
                    "Salih": 2,
                    "Youssef": 4,
                    "Samee": 4,
                    "Shabi": 5
                }
            }
        },
        {
            "title": "Question 8",
            "question": " A friend borrows your laptop and goes on to Youtube. What is most likely found on your recommended videos?",
            "choices": {
                "A": "Sports Center Top 10 plays of the week",
                "B": "Butter Chicken Lasagna (A Tasty Video)",
                "C": "Top 5 Funniest Fail Videos",
                "D": "Best Freestyle of the Year: King Los Kills the 5 Fingers of Death"
            },
            "rank": {
                "A": {
                    "Salih": 2
                },
                "B": {
                    "Haroun": 3,
                    "Juzer": 2,
                    "Faraz": 2
                },
                "C": {
                    "Musstafa": 3,
                    "Omer": 2,
                    "Husam": 2,
                    "Shabi": 1
                },
                "D": {
                    "Edrees": 5,
                    "Youssef": 3,
                    "Zohaib": 4,
                    "Samee": 4,
                    "Akber": 2
                }
            }
        },
        {
            "title": "Question 9",
            "question": " Your friends never seem to learn their lessons, so when your boi leaves their facebook wide open, what are you doing?",
            "choices": {
                "A": "Close it, no one messes with your mans",
                "B": "Comment on and like other peoples photos",
                "C": "Confess their love to someone through DMs",
                "D": "Announce to the entire world that they’re getting engaged to some MSA person without telling either of them"
            },
            "rank": {
                "A": {
                    "Musstafa": 4,
                    "Youssef": 2,
                    "Zohaib": 1,
                    "Samee": 1,
                    "Husam": 4,
                    "Akber": 4
                },
                "B": {
                    "Shabi": 4,
                    "Faraz": 5
                },
                "C": {
                    "Salih": 3,
                    "Omer": 4,
                    "Juzer": 1
                },
                "D": {
                    "Haroun": 5,
                    "Edrees": 3
                }
            }
        },
        {
            "title": "Question 10",
            "question": " You’ve got a test for an important class tomorrow and it’s 9:00 pm, what you doing?",
            "choices": {
                "A": "You’re good, you’ve studied for a week",
                "B": "Looks like youve got an all nighter ahead of you",
                "C": "Too late to study now, what is the move fellas?",
                "D": "I’m straight, just gotta find an open seat next to a smart-looking Asian "
            },
            "rank": {
                "A": {
                    "Salih": 1,
                    "Zohaib": 1,
                    "Akber": 1
                },
                "B": {
                    "Juzer": 1,
                    "Shabi": 5
                },
                "C": {
                    "Omer": 1,
                    "Edrees": 4,
                    "Youssef": 4,
                    "Samee": 3,
                    "Husam": 5,
                    "Faraz": 3
                },
                "D": {
                    "Haroun": 4,
                    "Musstafa": 5
                }
            }
        }
    ]
}