/**
 * @file <%- componentName %>
 * @author <%- author %><<%- email %>>
 */

import React, {PropTypes, Component} from 'react';

import {create} from 'melon-core/classname/cxBuilder';

const cx = create('<%- componentName %>');

/**
 * melon 选色器
 */
export default class <%- componentName %> extends Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
            ...this.state
        };

    }


    /**
     * 渲染
     *
     * @public
     * @return {React.Element}
     */
    render() {
        return (
            <div className={cx(this.props).build()}>
            </div>
        );
    }

}

<%- componentName %>.displayName = '<%- componentName %>';

<%- componentName %>.defaultProps = {
};

<%- componentName %>.propTypes = {
};
