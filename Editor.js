import React, { Component } from 'react';

export default class Editor extends Component {
  constructor() {
    super();

    this.state = {
      dropdown : {
        left: 0,
        top: 0,
        //right: 'auto',
      }
    }
    //this.onClick = this.onClick.bind(this);
  }


    createShadowElementAndGetBoundingClientRect(elementNodeName, elementClassNames, parentElement) {
      let element = document.createElement(elementNodeName);
      element.setAttribute('class', elementClassNames);
      element.style.opacity = 0;
      document.querySelector(parentElement).appendChild(element)
      const elementRect = element.getBoundingClientRect();
      element.remove();
      return elementRect;
    }

  onClick(
    element, 
    elementOffsetParent = document.querySelector('.editor-ctnr'), 
    dropdown = document.querySelector('.dropdown'),
    dropdownOffsetParent =  document.querySelector('main')
    ) {
    let elementOffsetLeft = 0,
        elementOffsetTop = 0,
        //right = 'initial';
    
    const element = element;
    const elementRect = element.getBoundingClientRect();
    const elementOffsetParent = elementOffsetParent;
    const elementOffsetParentRect = elementOffsetParent.getBoundingClientRect();
    const dropdown = dropdown;
    const dropdownRect = dropdown ? dropdown.getBoundingClientRect() : this.createShadowElementAndGetBoundingClientRect('div', 'dropdown', 'main');
    const dropdownOffsetParent = dropdownOffsetParent ? dropdownOffsetParent : elementOffsetParent;
    const dropdownOffsetParentRect = dropdownOffsetParent.getBoundingClientRect();
    const dropdownWidth = dropdownRect.width;
    this.createShadowElementAndGetBoundingClientRect('div', 'dropdown', '.editor-ctnr');

console.log(elementOffsetParent === dropdownOffsetParent)
console.log(dropdownRect);
//return;

    //console.log(elementRect);
    //console.log(element.offsetLeft)

    elementOffsetLeft = element.offsetLeft;
    elementOffsetTop = element.offsetTop + elementRect.height;
    console.log(elementOffsetLeft)



    if (!(elementOffsetParent === dropdownOffsetParent)) {
      let parentsTopDiffrence = elementOffsetParentRect.top - dropdownOffsetParentRect.top;
      let parentsLeftDiffrence = elementOffsetParentRect.left - dropdownOffsetParentRect.left;

      elementOffsetLeft = elementOffsetLeft + parentsLeftDiffrence;
      elementOffsetTop = elementOffsetTop + parentsTopDiffrence;
      
    }

    const canDropdownAlignedCenter = elementOffsetLeft > dropdownWidth / 2;
    const canDropdownAlignedRight = elementOffsetLeft + elementRect.width + dropdownRect.width / 2  > elementOffsetParentRect.width;

    console.log('canAlignedCenter = ', canDropdownAlignedCenter, ' canAlignedRight = ', canDropdownAlignedRight);

    if (!dropdown) {
      console.log('.dropdown element not found... returning!')
      return;
    }

    dropdown.classList.remove('dropdown-center'); 
    dropdown.classList.remove('dropdown-right'); 


    console.log(elementRect);
    console.log(elementOffsetParentRect)

    if ( !canDropdownAlignedRight && canDropdownAlignedCenter ) {
      console.log('if one')
      dropdown.classList.add('dropdown-center');
      elementOffsetLeft = elementOffsetLeft + (elementRect.width / 2) - (dropdownRect.width / 2)
    }

    if (canDropdownAlignedRight) {
      console.log('if two')
      dropdown.classList.add('dropdown-right');
      elementOffsetLeft = elementOffsetLeft + elementRect.width - dropdownRect.width;
    }



    this.setState({
      dropdown: {
        left: elementOffsetLeft,
        top: elementOffsetTop,
        //right: right
      }
    })

  }

  render() {
    console.log('render triggers....');

    return (
      <main>
      <h1>main header</h1>
    <div className="editor-ctnr">
      <section className="editor">
        This <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake1</span> fact that lists render their markers outside their own box (by default) is slightly weird. Any hidden overflow <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake2</span> or overhanging off the edge of the browser will hide them. Moving them inside the box <span className="bad-word" onClick={ () => this.onClick(event.target) }>feels</span> better and safer, but doing it that the easy way means losing the really <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake3</span> nice alignment we got for free with outside list markers. We want it both ways! Let’s do that with our own custom counters, CSS grid (<span className="bad-word" onClick={ () => this.onClick(event.target) }>with</span> subgrid), and  <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake4</span> some more...
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