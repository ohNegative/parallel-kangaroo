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
                            <form name="main-contact" method="POST" data-netlify="true">
                                    <p>
                                        <label>Your Name: <input type="text" name="name" /></label>   
                                    </p>
                                    <p>
                                        <label>Your Email: <input type="email" name="email" /></label>
                                    </p>
                                    <p>
                                        <label>Your Role: <select name="role[]" multiple>
                                        <option value="leader">Leader</option>
                                        <option value="follower">Follower</option>
                                        </select></label>
                                    </p>
                                    <p>
                                        <label>Message: <textarea name="message"></textarea></label>
                                    </p>
                                    <p>
                                        <button type="submit">Send</button>
                                    </p>
                                    </form>
                            </section>
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
