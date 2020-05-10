import React, { Component } from 'react';

export default class EditorFixed extends Component {
  constructor() {
    super();
    //alert(1)
    this.state = {
      dropdown : {
        left: 0,
        top: 0
      }
    }
    //this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {

      window.addEventListener('scroll', () => {
        this.getFixedPosition(document.querySelector('.bad-word-active'), document.querySelector('.dropdown')); 
      })
  }


    createShadowElementAndGetBoundingClientRect(elementNodeName, elementClassNames, parentElement) {
      let element = document.createElement(elementNodeName);
      element.setAttribute('class', elementClassNames);
      element.style.opacity = 0;
      document.querySelector(parentElement).appendChild(element)
      let elementRect = element.getBoundingClientRect();
      element.remove();
      return elementRect;
    }

    onClick(element) {
      this.getFixedPosition(element, document.querySelector('.dropdown'));
    }

  getFixedPosition(srcElement, targetElement) {
    let left = 0, top = 0;

    if ((srcElement.nodeType !== 1) || (targetElement.nodeType !== 1)) {
      console.log('srcElement or targterElement not found!');
      return;
    }

    let srcElement = srcElement;
console.log(srcElement)
    let srcElementRect = srcElement.getBoundingClientRect();
    let srcElementOffsetParent = srcElementOffsetParent ? srcElementOffsetParent : srcElement.offsetParent;
    let srcElementOffsetParentRect = srcElementOffsetParent.getBoundingClientRect();
    let targetElementRect = targetElement.getBoundingClientRect();
    let targetElementWidth = targetElementRect.width;



    let srcElementOffsetLeft = srcElement.offsetLeft;
    let srcElementRectLeft = srcElementRect.left;
    let srcElementRectTop = srcElementRect.top + srcElementRect.height;
console.log('w', srcElementRectLeft)
    let cantargetElementAlignedCenter = srcElementOffsetLeft > targetElementWidth / 2;
    let cantargetElementAlignedRight = srcElementOffsetLeft + srcElementRect.width + targetElementRect.width / 2  > srcElementOffsetParentRect.width;

    console.log('canAlignedCenter = ', cantargetElementAlignedCenter, ' canAlignedRight = ', cantargetElementAlignedRight);

    targetElement.classList.remove('dropdown-center'); 
    targetElement.classList.remove('dropdown-right'); 


    console.log(srcElementRect);
    console.log(srcElementOffsetParentRect)

    if ( !cantargetElementAlignedRight && cantargetElementAlignedCenter ) {
      console.log('if one')
      targetElement.classList.add('dropdown-center');
      srcElementRectLeft = srcElementRectLeft + (srcElementRect.width / 2) - (targetElementRect.width / 2)
    }

    if (cantargetElementAlignedRight) {
      console.log('if two')
      targetElement.classList.add('dropdown-right');
      srcElementRectLeft = srcElementRectLeft + srcElementRect.width - targetElementRect.width;
    }



    this.setState({
      dropdown: {
        left: srcElementRectLeft,
        top: srcElementRectTop,
        //right: right
      }
    })

  }

  render() {
    console.log('render triggers...');

    return (
      <main>
      <h1>main header</h1>
    <div className="editor-ctnr">
      <section className="editor">
        This <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake1</span> fact that lists render their markers outside their own box (by default) is slightly weird. Any hidden overflow <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake2</span> or overhanging off the edge of the browser will hide them. Moving them inside the box <span className="bad-word" onClick={ () => this.onClick(event.target) }>feels</span> better and safer, but doing it that the easy way means losing the really <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake3</span> nice alignment we got for free with outside list markers. We want it both ways! Let’s do that with our own custom counters, CSS grid (<span className="bad-word bad-word-active" onClick={ () => this.onClick(event.target) }>with</span> subgrid), and  <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake4</span> some more...

        <br />

        <p>My tutorials help 60,000+ developers learn React and JavaScript every month. If you'd like to receive a friendly email once in a while of all new React tutorials, just pop your email above! I appreciate the support!</p>

        <br />

        <p>My tutorials help 60,000+ developers learn React and JavaScript every month. If you'd like to receive a friendly email once in a while of all new React tutorials, just pop your email above! I appreciate the support!</p>

        <br />

        <p>My tutorials help 60,000+ developers learn React and JavaScript every month. If you'd like to receive a friendly email once in a while of all new React tutorials, just pop your email above! I appreciate the support!</p>

        <br />

        <p>My tutorials help 60,000+ developers learn React and JavaScript every month. If you'd like to receive a friendly email once in a while of all new React tutorials, just pop your email above! I appreciate the support!</p>
      </section>

      
      
    </div>
    <h1>main footer</h1>

    <aside className="dropdown" 
        style={{
          left: this.state.dropdown.left,
          right: this.state.dropdown.right,
          top: this.state.dropdown.top
        }}
      >
        <select>
          <option>English</option>
          <option>Hindi</option>
          <option>Economics</option>
          <option>Political Science</option>
          <option>History</option>
        </select>
      </aside>
    </main>
  );
  }
}