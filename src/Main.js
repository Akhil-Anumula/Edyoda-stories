import React, { Component } from "react";
import "./Styles.css"
export class Main extends Component {
    render() {
        return (
            <div id="menu">

                <div>
                <p id="fp"><i class="fas fa-filter"></i> Filter by Category</p>
                <button class="button">All</button>
                <button class="button">Artificial Intelligence</button>
                <button class="button">Cloud Computing</button>
                <button class="button">Devops</button>
                <button class="button">Programming Languages</button>
                <button class="button">Mobile Application Development</button>
                <button class="button">Technology And Tools</button>
                <button class="button">Get a job in Tech Company</button>
                <button class="button">Others</button><br />
                <br />
                </div>

                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt="machine-learning-img" />
                    <p class="title">Introduction To A Machine Learning Online Course</p>
                    <p class="author">Edyoda<span class="date">| 23 Aug 2019</span></p>
                    <p class="text">We have had an insight into Artificial Intelligence.
                        Well, one of its subfields is machine learning and this introduction will
                        help you get a fair idea of what a machine learning online course holds.
                    </p>
                </div>
                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt="mean-stack-img" />
                    <p class="title">Lamp Stack Vs Mean Stack: Choosing The Right Platform</p>
                    <p class="author">Edyoda<span class="date">| 24 Aug 2019</span></p>
                    <p class="text">In today’s dynamic world, rapid web application development
                        with a smooth user interface that can adapt to specific features is the
                        main business requirement. Many organizations..
                    </p>
                </div>
                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt="cloud-comp-img" />
                    <p class="title">Impact Of Cloud Computing In Various Industries</p>
                    <p class="author">Edyoda<span class="date">| 24 Aug 2019</span></p>
                    <p class="text">Cloud computing has been rapidly gaining pace in the world
                        of information technology. It has been observed that over 90% of global
                        enterprises are using cloud technology.Every industry..
                    </p>
                </div>


                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt="big-data-analytics-img" />
                    <p class="title">Challenges Of Machine Learning In Big Data Analytics</p>
                    <p class="author">Edyoda<span class="date">| 24 Aug 2019</span></p>
                    <p class="text">Machine Learning is a subset of artificial intelligence which
                        is an important part of computer discovering in science.
                        The revolution of Big Data promises to transform the way we...
                    </p>
                </div>
                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt="cyber-security-img" />
                    <p class="title">Breaking The Myths Around Cyber Security</p>
                    <p class="author">Edyoda<span class="date">| 26 Aug 2019</span></p>
                    <p class="text">Cybersecurity plays an integral role in the process of
                        good business models. But even cybersecurity programs built with
                        good intentions can fall short in front of advanced cyber attacking programs...
                    </p>
                </div>
                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt="data-backup-img" />
                    <p class="title">Importance Of Data Backup And Recovery In IT Industry</p>
                    <p class="author">Edyoda<span class="date">| 26 Aug 2019</span></p>
                    <p class="text">A business must always introspect the areas where they lack
                        in order to bring about a positive change in the work environment.
                        One of the main precautions or a contingency plan that is necessary..
                    </p>
                </div>


                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" alt="web-scraping-img" />
                    <p class="title">What is Web Scraping ?</p>
                    <p class="author">Zac Clancy<span class="date">| 25 Sep 2019</span></p>
                    <p class="text">Simply put, web scraping is one of the tools developers use
                        to gather and analyze information from the Internet.
                        Some websites and platforms offer application programming interface(API)
                        which we can use to access information..
                    </p>
                </div>
                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt="isa-img" />
                    <p class="title">What is Income Share Agreement ?</p>
                    <p class="author">Edyoda<span class="date">| 14 Oct 2019</span></p>
                    <p class="text">The term Income Share Agreement has been around for a
                        long time since 1955 to be precise. Surprised, eh? It was first
                        introduced by Milton Friedman, an American economist, and statistician who strongly believe in free market capitalism..
                    </p>
                </div>
                <div class="cards">
                    <img class="img" src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt="prac-mach-learning-img" />
                    <p class="title">Practical Machine Learning With Python And Keras</p>
                    <p class="author">Daniel Pyrathon<span class="date">| 16 Oct 2019</span></p>
                    <p class="text">Machine learning is a field of artificial intelligence
                        that uses statistical techniques to give computer systems the ability to
                        “learn”(e.g., progressively improve performance on a specific task)
                        from data....
                    </p>
                </div>
            </div>
        )
    }
}


export default Main;