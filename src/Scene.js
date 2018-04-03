import React from 'react';

export default class Scene extends React.Component {

  item(index, data) {
    var style = {
      display: 'block',
      position: 'absolute',
      transform: '',
      transformStyle: 'preserve-3d',
      backfaceVisibility: 'hidden'
    };
    var items = [];

    if (data.texture) {
      style.backgroundImage = 'url(' + data.texture + ')';
      style.backgroundSize = '100%';
      style.width = data.size[0] + 'px';
      style.height = data.size[1] + 'px';
      style.clipPath = data.clip;
    } else {
      if (data.size) {
        style.transform += ' scale3d(' + (data.size[0] / 100) + ', ' + (data.size[1] / 100) + ', ' + (data.size[2] / 100) + ')';
      }
    }

    if (data.items) {
      for (var i in data.items) {
        if (data.items[i]) items.push(this.item(i, data.items[i]));
      }
    }

    if (data.position) {
      style.transform += ' translate3d(' + data.position[0] + 'px, ' + data.position[1] + 'px, ' + data.position[2] + 'px)';
    }
    if (data.orientation) {
      style.transform += ' rotateX(' + data.orientation[0] + 'deg) rotateY(' + data.orientation[1] + 'deg) rotateZ(' + data.orientation[2] + 'deg)';
    }

    return (
      <div key={ index } style={ style }>
        { items }
      </div>
    );
  }

  render() {
    var style = {
      position: 'relative',
      perspective: '1600px',
      margin: (this.props.height * 2) + 'px ' + (this.props.width * 2) + 'px',
      left: (-this.props.width * 2) + 'px',
      width: this.props.width + 'px',
      top: (-this.props.height * 2) + 'px',
      height: this.props.height + 'px',
      overflow: 'hidden'
    };

    return (
      <div style={ { width: this.props.width + 'px', height: this.props.height + 'px', overflow: 'hidden' } }>
        <section style={ style }>
          { this.item(0, this.props.model) }
        </section>
      </div>
    );
  }
}
