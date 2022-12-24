const bodyEl = document.querySelector('body')
bodyEl.style.width = '70%'
bodyEl.style.margin = 'auto'
bodyEl.style.fontFamily = 'segoe UI'
bodyEl.style.textAlign = 'center'

const titleEl = document.createElement('h1')
titleEl.textContent = 'Number Generator'
titleEl.style.fontWeight = 'bold'
titleEl.style.color = '#5bbc7a'
titleEl.style.margin = 'auto'

const subtiEl = document.createElement('p')
subtiEl.textContent = '30DaysOfJavaScript:DOM DAY 3'
subtiEl.style.fontSize = '1.5rem'
subtiEl.style.fontWeight = '500'
subtiEl.style.margin = 'auto'


const authorEl = document.createElement('p')
authorEl.textContent = 'Author: Asabeneh Yetayeh'
authorEl.style.fontWeight = '600'
authorEl.style.margin = 'auto'

bodyEl.appendChild(titleEl)
bodyEl.appendChild(subtiEl)
bodyEl.appendChild(authorEl)

const warning = document.createElement('p')
warning.style.color = 'red'
bodyEl.append(warning)

const divEl = document.createElement('div')
divEl.style.display = 'flex'
divEl.style.width = '60%'
divEl.style.height = '2.5rem'
divEl.style.margin = '0 auto 2rem'
divEl.style.gap = '0.5rem'

const inputEl = document.createElement('input')
inputEl.style.width = '41rem'
inputEl.style.border = '0.1rem solid #5bbc7a'
inputEl.style.cursor = 'pointer'
inputEl.placeholder = 'Generate more numbers...'
inputEl.style.paddingLeft = '0.7rem'
inputEl.style.outline = 'none'

divEl.appendChild(inputEl)

const generateEl = document.createElement('button')
generateEl.style.width = '11rem'
generateEl.textContent = 'Generate numbers'
generateEl.style.background = '#5bbc7a'
generateEl.style.color = '#fff'
generateEl.style.border = 'none'
generateEl.style.display = 'flex'
generateEl.style.alignItems = 'center'
generateEl.style.justifyContent = 'center'
generateEl.style.cursor = 'pointer'
divEl.appendChild(generateEl)
bodyEl.append(divEl)


const mainEl = document.createElement('div')
mainEl.style.display = 'grid'
mainEl.style.width = '80%'
mainEl.style.margin = 'auto'
mainEl.style.gridTemplateColumns = 'repeat(9, 1fr)'
mainEl.style.gridGap = '0.5rem'

function isPrime(n) {
    if (n < 2) {
      return false;
    }
    if (n == 2) {
      return true;
    }
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    for (let i = 2; i < n; i++) {
      if (n % i == 1) {
        return true;
      }
  }    
}

generateEl.addEventListener(
  'click',
  (generator = () => {
    mainEl.innerHTML = ' '
    if(inputEl.value === ''){
     warning.textContent = 'Enter a number value in the input field to generate number'
    }
    else if(inputEl.value.match(/[a-zA-Z]/)){
      warning.textContent = 'Input must be a Number'
    }
    else{
      mainEl.innerHTML = ' '
      for(i=0; i<=inputEl.value; i++){
        const numberEl = document.createElement('p')
        numberEl.textContent = i
        numberEl.style.height = '100%'
        numberEl.style.width = '100%'
        numberEl.style.margin = '0'
        numberEl.style.color = '#ffffff'
        numberEl.style.fontSize = '2rem'
        numberEl.style.display = 'flex'
        numberEl.style.justifyContent = 'center'
        numberEl.style.fontWeight = 'bold'
        numberEl.style.alignItems = 'center'
        if(i%2 === 0){
            numberEl.style.background = '#5bbc7a'
        }else if(isPrime(i)){
            numberEl.style.background = 'red'
        } else{
            numberEl.style.background = 'yellow'
        }
        mainEl.appendChild(numberEl)
    }
    }
  })
)

bodyEl.append(mainEl)