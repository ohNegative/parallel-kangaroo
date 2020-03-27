import React from 'react';
import _ from 'lodash';
import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';
import {Helmet} from 'react-helmet';

/* eslint-disable */

export default class Elements extends React.Component {
    render() {
        return (

            <Layout {...this.props}>
            <div> 
                <Helmet>
                    <title>Thirteen | About</title>
                    <meta name="description" content="This is the about page which is all about me, Six" />
                </Helmet>
            </div>
                <article id="main">
                    <header class="about">
                        <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section className="wrapper style5">
                        <div className="inner">
                            <section>
                                <blockquote>My road to becoming a developer didn't start with a four year degree and lots of Silicon Valley companies dangling offers in front of me. I took the long, hard route. I went from wanting to be in academia to a chance encounter with a co-worker that changed everything. All the details are below.</blockquote>
                                <hr />
                                <h4>In The beginning</h4>
                                <p>I graduated with a degree in Cultural Anthropology. I had dreams of studying and writing about cultures while teaching in a university setting. When I was a senior, working on my thesis, I burned out by over stretching myself, trying to do way too much at the same time. I went to take a year off and all of my dreams and aspirations of being an anthropologist went off like a light switch.</p>
                                <p>I spent most of my post college career jumping from job to job. I was working for small businesses. The kind where your job will be same if you’re there a day or ten years. I still had a yearning to do something else, I just couldn’t manage to get out of the rut I had put myself in.</p>
                                <p>Then I started dating my future wife. She pushed me to want more. She kept telling me I was smarter than a hardware hacker who fixes cellphones for a measly paycheck every week. I should aim higher. Get a gig at a big corporation and then look around and figure out what you really want to do.</p>
                            </section>
                            <section>
                                <h4>Thompson Reuters</h4>
                                <p>I landed a gig at Thomson Reuters in their inside sales department. I was selling database subscriptions to attorneys. From the first moment I got there, I started networking, started talking to people, making connections with people in other departments. The job was a meat grinder, and after I put in my mandatory 12 months, I started applying for other positions. I happened to land a gig as an account manager with Findlaw, a company Reuters recently bought.</p>
                                <p>My job was part sales, part customer service. I excelled at the job because I was able to know enough code to make changes on the fly for my customers. My sales experience was good enough so that by mid-month I was already at my quota. In 2 years, I found myself bored. My job was too easy, and I started looking again.</p>
                            </section>
                            <section>
                                <h4>A Chance Encounter</h4>
                                <p>Then, one day I bumped into my friend Amanda who had been working as a service tech and was just promoted to manager of the development group. I told her I was bored and looking for something else. She said she had eight desks to fill and if I wanted a real challenge, to come down and learn how to be a web developer.</p>
                                <p>We talked about it over lunch and at the end she said I had 24 hours to decide. There would be no counter offer. After this, the door was closed. Needless to say, I didn’t sleep a minute. This was it, a career change at my age? Are you kidding me? Even when I met with her the next day, walking down the hall towards her office, I didn’t know if I was going to be up for this.</p>
                            </section>
                            <section>
                                <h4>The Hardest Interview</h4>
                                <p>I told her I would do it. She scheduled an interview with her manager the following day. The interview was, quite short. The manager kept asking me technical questions. Tell me about HTML. Tell me about CSS. Have you worked with Photoshop? I kept saying no until he finally put his packet of questions down and looked at me and said, “Tell me then, why I should hire you?”</p>
                                <p>I took a deep breathe and told him, “I’m going to work hard. I want this. I’ll do whatever it takes to make this happen. I’ll be the first person in the office in the morning and the last person to leave. I can pick up stuff fast and I will put 110% effort into this, you will not be sorry you hired me.” He nodded and then said that was all he needed. The next day friend Amanda called and said we need to meet. We went to the cafeteria and we sat down. I thought, “No way I’m going to get this.” The first thing she said to me was, “You’re in. Mark told me to take a chance. You seem hungry to do this.”</p>
                            </section>
                            <section>
                                <h4>The Career Change</h4>
                                <p>It was the beginning of a massive career change. I was paired with a senior dev for the first two months. After that, I was swimming in the deep end with the sharks. Make it or break it. No handouts. I had a full quota of websites to build each month just like the new graduates they were hiring out of college. In the 36 months I worked there, I missed one month of my quota. Otherwise, I was at 100% those other 35 months.</p>
                                <p>After two years, I hit the ceiling. I didn’t want to move into management, and that’s what they were grooming me for. At that point, I knew I needed to find a new home. I had fell in love with coding. There was no way I was going to stop now. Just sitting down and writing code from scratch is still something I love to do. I still put in a ton of time away from my 9-5 job building and working on projects that excite me.</p>
                            </section>
 
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
