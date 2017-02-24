const showConsoleLog = true;
const selectors = '#facebook a[rel="nofollow"]';
const selectorContent = [
  'Sponsored',
  // 'Instagram'
];

window.addEventListener('load', checkSponsoredLink, false);
document.addEventListener('scroll', checkSponsoredLink, false);

function checkSponsoredLink(e) {
  let sponsoredLink = document.querySelectorAll(selectors);
  if(sponsoredLink) {
    sponsoredLink.forEach(function(el,idx) {
      el.style.background = 'red';
      if (selectorContent.indexOf(el.innerText) >= 0) {
        recurseFindParent(el);
      }
    });
  }
}


function recurseFindParent(child) {
  let parent = null,
      targetCheck = null,
      raf = window.requestAnimationFrame;
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

      clog('Removing', parent);

      raf(function() {
        parent.remove();
      });
    }
  }
}

function clog(msg, el) {
  if(showConsoleLog) {
    console.log(msg, el);
  }
}
