var showConsole = true;

window.addEventListener('load', function(e) {
  var sponsoredLink = document.querySelectorAll('a[rel="nofollow"');
  if(sponsoredLink) {
    sponsoredLink.forEach(function(el,idx) {
      el.style.background = 'red';
      recurseFindParent(el);
    });
  }
}, false);

document.addEventListener('scroll', function(e) {
  var sponsoredLink = document.querySelectorAll('a[rel="nofollow"');
  if(sponsoredLink) {
    sponsoredLink.forEach(function(el,idx) {
      el.style.background = 'red';
      recurseFindParent(el);
    });
  }
}, false);


function recurseFindParent(child) {
  var parent = null,
      targetCheck = null;
  while(!parent) {
    targetCheck = child.parentElement.getAttribute('data-fte');
    if(!targetCheck) {
      child = child.parentElement;
      clog('==================================');
      clog('PARENT-NOT-FOUND');
      clog('child:', child);
      clog('parent:', child.parentElement);
      clog('parent.attr:', child.parentElement.getAttribute('data-fte'));
      clog('==================================');
    }else {
      clog('==================================');
      clog('PARENT-FOUND');
      clog('child:', child);
      clog('parent:', child.parentElement);
      clog('parent.attr:', child.parentElement.getAttribute('data-fte'));
      clog('==================================');
      parent = child.parentElement;
      console.log('Removing', parent);
      parent.remove();
    }
  }
}

function clog(msg, el) {
  if(showConsole) {
    console.log(msg, el);
  }
}
