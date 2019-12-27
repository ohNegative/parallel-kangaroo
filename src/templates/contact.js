import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {markdownify, Link} from '../utils';
import {Helmet} from 'react-helmet';

/* eslint-disable */

export default class Contact extends React.Component {
    render() {
        return (

            <Layout {...this.props}>
            <div> 
                <Helmet>
                    <title>Thirteen | Contact</title>
                    <meta name="description" content="This is the design page with all the cool SEO titles in it" />
                </Helmet>
            </div>
                <article id="main">
                    <header>
                        <h2>{_.get(this.props, 'pageContext.frontmatter.title')}</h2>
                        {markdownify(_.get(this.props, 'pageContext.frontmatter.subtitle'))}
                    </header>
                    <section className="wrapper style5">
                        <div className="inner">
                            <section>
                            <form method="post" netlify-honeypot="bot-field" data-netlify="true">
                              <input type="hidden" name="bot-field" />
                                    <label>
                                        Name
                                        <input type="text" name="name" id="name" />
                                    </label>
                                    <label>
                                        Email
                                        <input type="email" name="email" id="email" />
                                    </label>
                                    <label>
                                        Subject
                                        <input type="text" name="subject" id="subject" />
                                    </label>
                                    <label>
                                        Message
                                        <textarea name="message" id="message" rows="5" />
                                    </label>
                                <button type="submit">Send</button>
                                <input type="reset" value="Clear" />
                                </form>
                            </section>
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
