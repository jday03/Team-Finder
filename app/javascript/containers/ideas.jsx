function createIdeaBox(ideaObj, index) {
    return (
      <div key={"ideaObj" + index} className={"text-secondary"}>
          <h2>{ideaObj.title}</h2>
          {/*<p> {"hello"}</p>*/}
      </div>
    );
}

import React from 'react';

export default class Ideas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ideas: props.ideas
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ideas: nextProps.ideas
        });
    }

    render() {
        let ideas_html_array = [];
        _.each(this.state.ideas, function(idea, index) {
            ideas_html_array.push(createIdeaBox(idea, index));
        });

        return (
            <div>
                {ideas_html_array}
            </div>
        );
    }
}
