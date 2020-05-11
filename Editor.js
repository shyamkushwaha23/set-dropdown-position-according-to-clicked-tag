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

      // window.addEventListener('scroll', () => {
      //   this.getFixedPosition(document.querySelector('.bad-word-active'), document.querySelector('.dropdown')); 
      // })
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

  getFixedPosition(srcElement, targetElement, srcElementOffsetParent, targetElementOffsetParent) {
    let targetLeftPosition = 0, targetTopPosition = 0;

    if (!srcElement || srcElement.nodeType !== 1 || !targetElement || targetElement.nodeType !== 1) {
      console.log('srcElement or targterElement not found!');
      return;
    }

    let srcElement = (typeof srcElement === 'string') ? document.querySelector(srcElement) : srcElement;
    let srcElementRect = srcElement.getBoundingClientRect();
    let srcElementOffsetParent = srcElementOffsetParent ? srcElementOffsetParent : srcElement.offsetParent;
    let srcElementOffsetParentRect = srcElementOffsetParent.getBoundingClientRect();

    let targetElement = (typeof targetElement === 'string') ? document.querySelector(targetElement) : targetElement;
    let targetElementRect = targetElement.getBoundingClientRect();
    let targetElementOffsetParent = targetElementOffsetParent ? targetElementOffsetParent : targetElement.offsetParent;
    let targetElementOffsetParentRect = targetElementOffsetParent.getBoundingClientRect();
    console.log(targetElementRect)



    let targetLeftPosition = srcElement.offsetLeft;
    let targetTopPosition = srcElement.offsetTop + srcElementRect.height;
    console.log('w', targetLeftPosition)


    if (!(srcElementOffsetParent === targetElementOffsetParent)) {
      console.log('offset parents are different');
      let parentsTopDiffrence = srcElementOffsetParentRect.top - targetElementOffsetParentRect.top;
      let parentsLeftDiffrence = srcElementOffsetParentRect.left - targetElementOffsetParentRect.left;

      targetLeftPosition = targetLeftPosition + parentsLeftDiffrence;
      targetTopPosition = targetTopPosition + parentsTopDiffrence;
    }


    let canTargetElementAlignedCenter = srcElement.offsetLeft > targetElementRect.width / 2;
    let canTargetElementAlignedRight = srcElement.offsetLeft + srcElementRect.width + targetElementRect.width / 2  > srcElementOffsetParentRect.width;

    console.log('canAlignedCenter = ', canTargetElementAlignedCenter, ' canAlignedRight = ', canTargetElementAlignedRight);

    targetElement.classList.remove('dropdown-center'); 
    targetElement.classList.remove('dropdown-right'); 


    console.log('srcElement.offsetLeft = ', srcElement.offsetLeft);
    console.log(srcElementOffsetParentRect)

    if ( !canTargetElementAlignedRight && canTargetElementAlignedCenter ) {
      console.log('if one')
      targetElement.classList.add('dropdown-center');
      targetLeftPosition = srcElement.offsetLeft > targetElementRect.width / 2;
    }

    if (canTargetElementAlignedRight) {
      console.log('if two')
      targetElement.classList.add('dropdown-right');
      targetLeftPosition = srcElement.offsetLeft + srcElementRect.width + targetElementRect.width / 2  > srcElementOffsetParentRect.width;
    }



    this.setState({
      dropdown: {
        left: targetLeftPosition,
        top: targetTopPosition,
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

      <aside className="dropdown" 
        style={{
          left: this.state.dropdown.left,
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
      
    </div>
    <h1>main footer</h1>

    
    </main>
  );
  }
}