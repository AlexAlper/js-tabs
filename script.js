   
function createTabs(tabHeader, tabHeaderElem, tabContentElem){

    let info = document.querySelector(tabHeader),
        tab = document.querySelectorAll(tabHeaderElem),
        tabContent = document.querySelectorAll(tabContentElem);

        function hideTabContent(a){
            for(let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(a){
            if(tabContent[a].classList.contains('hide')){
                tabContent[a].classList.remove('hide');
                tabContent[a].classList.add('show');
            }
        }

        info.addEventListener('click', function(e){
            let target = e.target;
            if(target && target.classList.contains(tabHeaderElem)){
                for(let i = 0; i < tab.length; i++){
                    if(target == tab[i]){
                        hideTabContent(0);
                        showTabContent(i);
                    }
                }
            }
        });

    }
