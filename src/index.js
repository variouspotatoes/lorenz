function component() {
    const element = document.createElement('div');
  
    element.innerHTML = 'fuck';
  
    return element;
  }
  
  document.body.appendChild(component());