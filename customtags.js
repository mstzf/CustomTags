document.addEventListener('DOMContentLoaded', function () {
    // 获取所有的tabs组件
    const tabsComponents = document.querySelectorAll('.tabs');
  
    // 为每一个tabs组件定义行为
    tabsComponents.forEach(function (tabsComponent) {
      function clearActiveClasses(elements) {
        elements.forEach(function (element) {
          element.classList.remove('active');
        });
      }
  
      // 对于每一个组件,只显示第一个tab内容
      const tabs = tabsComponent.querySelectorAll('.tab');
      const tabContents = tabsComponent.querySelectorAll('.tab-item-content');
  
      clearActiveClasses(tabs); // 清除所有tab的active类
      tabs[0].classList.add('active'); // 为第一个选项卡添加active类
      tabContents.forEach(content => content.style.display = 'none'); // 隐藏所有内容
      tabContents[0].style.display = 'block'; // 只显示第一个内容块
  
      // 为每个tab添加点击事件
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          const targetContentId = tab.getAttribute('data-href');
  
          clearActiveClasses(tabs); // 清除所有tab的active类
          tab.classList.add('active'); // 为当前tab添加active类
  
          tabContents.forEach(function (content) {
            content.style.display = 'none'; // 隐藏所有tab内容
            if (content.getAttribute('id') === targetContentId) {
              content.style.display = 'block'; // 显示与当前tab匹配的内容
            }
          });
        });
      });

      tabsComponent.querySelector(".tab-to-top button").addEventListener("click", function() {
        // 计算tabs组件相对于视口顶部的偏移量
        const elementRect = tabsComponent.getBoundingClientRect();
        const elementTopRelativeToViewport = elementRect.top;
    
        // 使用window.scrollBy方法令元素相对当前位置垂直滚动至视口顶部
        // 确保我们不是向上滚动更远超过了页面顶部
        const offsetPosition = elementTopRelativeToViewport + window.scrollY - (document.documentElement.clientTop || 0);
        window.scroll({
          top: offsetPosition, 
          behavior: 'smooth'
        });
      });
    });
  });