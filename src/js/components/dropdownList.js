export const dropdownList = () => {
  // create expand arrow image
  const createExpandArrow = () => {
    const expandArrow = document.createElement('div')
    expandArrow.classList.add('expand_arrow');
    const img = document.createElement('img');
    img.setAttribute('src', './../../src/img/expand_circle_down.svg');
    expandArrow.append(img);
    return expandArrow;
  }

  // create class exapnd_list
  const createExpandListClass = () => {
    const orderedList = document.querySelectorAll('article > ol ol');
    orderedList.forEach((ol) => {
      ol.classList.add('expand_list');
    })
  }
  const expandList = () => {
    createExpandListClass();
      const expandList = document.querySelectorAll('.expand_list');
  
      for (let i = 0; i < expandList.length; i++) {
         // create li with class value "expand_list-item"
        const expandListItems = expandList[i].querySelectorAll('li');
        if(expandListItems) {
          for(let i = 0; i < expandListItems.length; i++) {
            expandListItems[i].classList.add('expand_list-item');
          }
        }
        
        const firstExpandListItem = expandList[i].querySelector('.expand_list-item')
        const isExpandArrowAxis = expandList[i].querySelector('.expand_arrow');
  
        const newExpandArrow = createExpandArrow();
        if(!isExpandArrowAxis) {expandList[i].insertBefore(newExpandArrow, firstExpandListItem)}
  
        expandList[i].addEventListener('click', () => {
          const listItem = expandList[i].querySelectorAll('.expand_list-item');
          const arrowImg = expandList[i].querySelector('.expand_arrow > img');
          const isRotated = arrowImg.style.transform === 'rotate(180deg)';
  
          arrowImg.style.setProperty('transform', isRotated ? 'rotate(0deg)' : 'rotate(180deg)');
          listItem.forEach(item => {
            item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
            item.style.paddingBottom = (item.style.paddingBottom === '0px' || item.style.paddingBottom === '') ? '30px' : '0px';
          });
        });
      }
    };
    expandList()
}