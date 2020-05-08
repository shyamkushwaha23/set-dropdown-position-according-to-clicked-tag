import React, { Component } from 'react';

export default class Editor extends Component {
  constructor() {
    super();

    this.state = {
      dropdown : {
        left: 'auto',
        top: 'auto',
        //right: 'auto',
      }
    }
    //this.onClick = this.onClick.bind(this);
  }

  onClick(element, relatedElement = document.querySelector('.editor-ctnr')) {
    let left = 'initial',
        top = 'initial',
        //right = 'initial';
    
    const elementRect = element.getBoundingClientRect();
    const relatedElementRect = relatedElement.getBoundingClientRect();
    const dropdownWidth = 150;
    const dropdown = document.querySelector('.dropdown');
    const dropdownRect = dropdown.getBoundingClientRect();

    //console.log(elementRect);
    console.log(element.offsetLeft)

    left = element.offsetLeft;
    top = element.offsetTop + elementRect.height;


    const canAlignedCenter = left > (dropdownWidth/2);
    const canAlignedRight = left + dropdownRect.width > relatedElementRect.width;

    console.log('canAlignedCenter = ', canAlignedCenter, ' canAlignedRight = ', canAlignedRight);


    dropdown.classList.remove('dropdown-center'); 
    dropdown.classList.remove('dropdown-right'); 


    console.log('if two')
    console.log(elementRect);
    console.log(relatedElementRect)

    if ( !canAlignedRight && canAlignedCenter ) {
      console.log('if one')
      dropdown.classList.add('dropdown-center');
      left = element.offsetLeft + (elementRect.width / 2) - (dropdownRect.width / 2)
    }

    if (canAlignedRight) {
      dropdown.classList.add('dropdown-right');
      left = element.offsetLeft + elementRect.width - dropdownRect.width;
    }



    this.setState({
      dropdown: {
        left: left,
        top: top,
        //right: right
      }
    })

  }

  render() {
    console.log('render triggers...');

    return (
    <div className="editor-ctnr">
      <section className="editor">
        The <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake1</span> fact that lists render their markers outside their own box (by default) is slightly weird. Any hidden overflow <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake2</span> or overhanging off the edge of the browser will hide them. Moving them inside the box <span className="bad-word" onClick={ () => this.onClick(event.target) }>feels</span> better and safer, but doing it that the easy way means losing the really <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake3</span> nice alignment we got for free with outside list markers. We want it both ways! Let’s do that with our own custom counters, CSS grid (<span className="bad-word" onClick={ () => this.onClick(event.target) }>with</span> subgrid), and  <span className="bad-word" onClick={ () => this.onClick(event.target) }>Mistake4</span> some more...
      </section>

      
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
    </div>
  );
  }
}