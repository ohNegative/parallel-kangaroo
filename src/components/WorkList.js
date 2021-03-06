import React from 'react';
import _ from 'lodash';

import {markdownify, safePrefix} from '../utils';

export default class Features extends React.Component {
    render() {
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'wrapper ' + _.get(this.props, 'section.background_style') + ' special'}>
                <div className="inner">

                    <ul className="features worklist">
                        {_.map(_.get(this.props, 'section.features'), (feature, feature_idx) => (
                            <li key={feature_idx} className={'project'}>
                                <h3>{_.get(feature, 'title')}</h3>

                                {_.get(feature, 'feature_img_path') && 
                                    <div className="image work"><img src={safePrefix(_.get(feature, 'feature_img_path'))} alt="" /></div>
                                } 
                                <p>{markdownify(_.get(feature, 'text'))}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
    }
}
