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
                    <meta name="description" content="This is the about page which is all about me, six" />
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
                                <h4>Text</h4>
                                <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
                                    This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
                                    This is <u>underlined</u> and this is code: <code>for (;;) &#123; ... &#125;</code>. Finally, <Link to="#">this is a link</Link>.</p>
                                <hr />
                                <header>
                                    <h4>Heading with a Subtitle</h4>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <header>
                                    <h5>Heading with a Subtitle</h5>
                                    <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
                                </header>
                                <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
                                <hr />
                                <h2>Heading Level 2</h2>
                                <h3>Heading Level 3</h3>
                                <h4>Heading Level 4</h4>
                                <h5>Heading Level 5</h5>
                                <h6>Heading Level 6</h6>
                                <hr />
                                <h5>Blockquote</h5>
                                <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
                                <h5>Preformatted</h5>
                                <pre><code>{`i = 0;\n\nwhile (!deck.isInOrder()) {\n  print 'Iteration ' + i;\n  deck.shuffle();\n  i++;\n}\n\nprint 'It took ' + i + ' iterations to sort the deck.';`}</code></pre>
                            </section>
                            <section>
                                <h4>Lists</h4>
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <h5>Unordered</h5>
                                        <ul>
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Sagittis adipiscing.</li>
                                            <li>Felis enim feugiat.</li>
                                        </ul>
                                        <h5>Alternate</h5>
                                        <ul className="alt">
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Sagittis adipiscing.</li>
                                            <li>Felis enim feugiat.</li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <h5>Ordered</h5>
                                        <ol>
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Etiam vel felis viverra.</li>
                                            <li>Felis enim feugiat.</li>
                                            <li>Dolor pulvinar etiam.</li>
                                            <li>Etiam vel felis lorem.</li>
                                            <li>Felis enim et feugiat.</li>
                                        </ol>
                                        <h5>Icons</h5>
                                        <ul className="icons">
                                            <li><Link to="#" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
                                            <li><Link to="#" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
                                            <li><Link to="#" className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
                                            <li><Link to="#" className="icon fa-github"><span className="label">Github</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5>Actions</h5>
                                <div className="row">
                                    <div className="col-6 col-12-medium">
                                        <ul className="actions">
                                            <li><Link to="#" className="button primary">Default</Link></li>
                                            <li><Link to="#" className="button">Default</Link></li>
                                        </ul>
                                        <ul className="actions small">
                                            <li><Link to="#" className="button primary small">Small</Link></li>
                                            <li><Link to="#" className="button small">Small</Link></li>
                                        </ul>
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary">Default</Link></li>
                                            <li><Link to="#" className="button">Default</Link></li>
                                        </ul>
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary small">Small</Link></li>
                                            <li><Link to="#" className="button small">Small</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-6 col-12-medium">
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary fit">Default</Link></li>
                                            <li><Link to="#" className="button fit">Default</Link></li>
                                        </ul>
                                        <ul className="actions stacked">
                                            <li><Link to="#" className="button primary small fit">Small</Link></li>
                                            <li><Link to="#" className="button small fit">Small</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h4>Table</h4>
                                <h5>Default</h5>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item One</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Two</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Three</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Four</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Five</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <h5>Alternate</h5>
                                <div className="table-wrapper">
                                    <table className="alt">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Item One</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Two</td>
                                                <td>Vis ac commodo adipiscing arcu aliquet.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Three</td>
                                                <td> Morbi faucibus arcu accumsan lorem.</td>
                                                <td>29.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Four</td>
                                                <td>Vitae integer tempus condimentum.</td>
                                                <td>19.99</td>
                                            </tr>
                                            <tr>
                                                <td>Item Five</td>
                                                <td>Ante turpis integer aliquet porttitor.</td>
                                                <td>29.99</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2" />
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </section>
                </article>
            </Layout>
        );
    }
}
