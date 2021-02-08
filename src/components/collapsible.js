import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({ open: !this.state.open });
  }

  componentDidUpdate() { }

  render() {
    return (
      <Draggable
        draggableId={String(this.props.cards.id)}
        index={this.props.index}
      >
        {(provided) => (
          <div
            className="exerciseHeader"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              className="exerciseHeaderClickable"
              onClick={(e) => this.togglePanel(e)}
            >
              {this.props.title}
            </div>
            {this.state.open ? (
              <div className="content">{this.props.children}</div>
            ) : null}
          </div>
        )}
      </Draggable>
    );
  }
}
