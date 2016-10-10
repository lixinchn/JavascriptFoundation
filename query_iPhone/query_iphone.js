function query() {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://reserve.cdn-apple.com/CN/zh_CN/reserve/iPhone/availability.json?t=' + Date.now());
  xhr.onload = function() {
    if (xhr.status === 200) {
      iObj = JSON.parse(xhr.responseText);

      // 三里屯
      console.log(iObj['R320']['MNFR2CH/A']);
      if (iObj['R320']['MNFR2CH/A'] !== 'NONE') {
        alert('三里屯有iPhone 7 Plus 128GB 金色');
      } else if (iObj['R320']['MNFQ2CH/A'] !== 'NONE') {
        alert('三里屯有iiPhone 7 Plus 128GB 银色');
      } else if (iObj['R320']['MNFT2CH/A'] !== 'NONE') {
        alert('三里屯有iPhone 7 Plus 128GB 玫瑰金色');
      } else if (iObj['R320']['MNFP2CH/A'] !== 'NONE') {
        alert('三里屯有iPhone 7 Plus 128GB 黑色');
      }

      
      // 朝阳大悦城
      if (iObj['R645']['MNFR2CH/A'] !== 'NONE') {
        alert('朝阳大悦城有iPhone 7 Plus 128GB 金色');
      } else if (iObj['R645']['MNFQ2CH/A'] !== 'NONE') {
        alert('朝阳大悦城有iiPhone 7 Plus 128GB 银色');
      } else if (iObj['R645']['MNFT2CH/A'] !== 'NONE') {
        alert('朝阳大悦城有iPhone 7 Plus 128GB 玫瑰金色');
      } else if (iObj['R645']['MNFP2CH/A'] !== 'NONE') {
        alert('朝阳大悦城有iPhone 7 Plus 128GB 黑色');
      }

      // 王府井
      if (iObj['R448']['MNFR2CH/A'] !== 'NONE') {
        alert('王府井有iPhone 7 Plus 128GB 金色');
      } else if (iObj['R448']['MNFQ2CH/A'] !== 'NONE') {
        alert('王府井有iiPhone 7 Plus 128GB 银色');
      } else if (iObj['R448']['MNFT2CH/A'] !== 'NONE') {
        alert('王府井有iPhone 7 Plus 128GB 玫瑰金色');
      } else if (iObj['R448']['MNFP2CH/A'] !== 'NONE') {
        alert('王府井有iPhone 7 Plus 128GB 黑色');
      }

      // 西单大悦城
      if (iObj['R388']['MNFR2CH/A'] !== 'NONE') {
        alert('西单大悦城有iPhone 7 Plus 128GB 金色');
      } else if (iObj['R388']['MNFQ2CH/A'] !== 'NONE') {
        alert('西单大悦城有iiPhone 7 Plus 128GB 银色');
      } else if (iObj['R388']['MNFT2CH/A'] !== 'NONE') {
        alert('西单大悦城有iPhone 7 Plus 128GB 玫瑰金色');
      } else if (iObj['R388']['MNFP2CH/A'] !== 'NONE') {
        alert('西单大悦城有iPhone 7 Plus 128GB 黑色');
      }

      // 华茂
      if (iObj['R479']['MNFR2CH/A'] !== 'NONE') {
        alert('华茂有iPhone 7 Plus 128GB 金色');
      } else if (iObj['R479']['MNFQ2CH/A'] !== 'NONE') {
        alert('华茂有iiPhone 7 Plus 128GB 银色');
      } else if (iObj['R479']['MNFT2CH/A'] !== 'NONE') {
        alert('华茂有iPhone 7 Plus 128GB 玫瑰金色');
      } else if (iObj['R479']['MNFP2CH/A'] !== 'NONE') {
        alert('华茂有iPhone 7 Plus 128GB 黑色');
      }
    }
  }
  xhr.send();
}