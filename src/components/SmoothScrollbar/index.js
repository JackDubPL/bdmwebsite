import React from 'react'
import Scrollbar from 'smooth-scrollbar'
import { css } from '@emotion/core'

export default class SmoothScroll extends React.Component {
    constructor(props) {
        super(props);
        this.scrollbarContainer = React.createRef();
        this.state = {
            options: {
                damping: .04,
            }
        }        
    }

    componentDidMount() {
        Scrollbar.init(this.scrollbarContainer.current, this.state.options);
    }

    render() {
        return (
            <div id="smooth-scrollbar" ref={this.scrollbarContainer} css={css`width: 1000px; height: 1000px; overflow: auto;`}>
                {this.props.children}
            </div>
        )
    }
}