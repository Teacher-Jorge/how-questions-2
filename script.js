let input1 =document.getElementById('input1')
let input2 =document.getElementById('input2')
let check1 = document.getElementById('check1')
let score = document.getElementById('score')
let value = score.innerHTML
let audioSword = document.getElementById('audioSword')

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'often') {
        audioSword.play()
        input1.style.color = 'limegreen'
        check1.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})      
input1.addEventListener('keyup', (e) => {
    if (input1.value != 'often') {
        input1.style.color = 'red'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'o') {
        input1.style.color = 'limegreen'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'of') {
        input1.style.color = 'limegreen'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'oft') {
        input1.style.color = 'limegreen'
    } 
}) 
input1.addEventListener('keyup', (e) => {
    if (input1.value === 'ofte') {
        input1.style.color = 'limegreen'
    } 
}) 

let translation = document.getElementById('translation')

btn1T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn1T.style.backgroundColor = 'red'
    btn1T.style.color = 'yellow'
    translation.innerHTML = 'Com quanta frequência você pratica seu inglês?'
    setTimeout(function() {
        btn1T.style.backgroundColor = 'white'
        btn1T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})

//Question 02

let check2 = document.getElementById('check2')


input2.addEventListener('keyup', (e) => {
    if (input2.value === 'hot') {
        audioSword.play()
        input2.style.color = 'limegreen'
        check2.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input2.disabled = true
        document.getElementById('input3').focus()
    }
})      
input2.addEventListener('keyup', (e) => {
    if (input2.value != 'hot') {
        input2.style.color = 'red'
    } 
}) 
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'h') {
        input2.style.color = 'limegreen'
    } 
}) 
input2.addEventListener('keyup', (e) => {
    if (input2.value === 'ho') {
        input2.style.color = 'limegreen'
    } 
})

btn2T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn2T.style.backgroundColor = 'red'
    btn2T.style.color = 'yellow'
    translation.innerHTML = 'Quão quente está hoje?'
    setTimeout(function() {
        btn2T.style.backgroundColor = 'white'
        btn2T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})
//Question 03
let input3 =document.getElementById('input3')
let check3 = document.getElementById('check3')

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'high') {
        audioSword.play()
        input3.style.color = 'limegreen'
        check3.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input3.disabled = true
        document.getElementById('input4').focus()
    }
})      
input3.addEventListener('keyup', (e) => {
    if (input3.value != 'high') {
        input3.style.color = 'red'
    } 
}) 
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'h') {
        input3.style.color = 'limegreen'
    } 
}) 
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'hi') {
        input3.style.color = 'limegreen'
    } 
})
input3.addEventListener('keyup', (e) => {
    if (input3.value === 'hig') {
        input3.style.color = 'limegreen'
    } 
})

btn3T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn3T.style.backgroundColor = 'red'
    btn3T.style.color = 'yellow'
    translation.innerHTML = 'Quão alto é o monte Everest?'
    setTimeout(function() {
        btn3T.style.backgroundColor = 'white'
        btn3T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})
//Question 04
let input4 =document.getElementById('input4')
let check4 = document.getElementById('check4')

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'long') {
        audioSword.play()
        input4.style.color = 'limegreen'
        check4.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input4.disabled = true
        document.getElementById('input5').focus()
    }
})      
input4.addEventListener('keyup', (e) => {
    if (input4.value != 'long') {
        input4.style.color = 'red'
    } 
}) 
input4.addEventListener('keyup', (e) => {
    if (input4.value === 'l') {
        input4.style.color = 'limegreen'
    } 
}) 
input4.addEventListener('keyup', (e) => {
    if (input4.value === 'lo') {
        input4.style.color = 'limegreen'
    } 
})
input4.addEventListener('keyup', (e) => {
    if (input4.value === 'lon') {
        input4.style.color = 'limegreen'
    } 
})

btn4T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn4T.style.backgroundColor = 'red'
    btn4T.style.color = 'yellow'
    translation.innerHTML = 'Qual o comprimento da ponte Golden Gate?'
    setTimeout(function() {
        btn4T.style.backgroundColor = 'white'
        btn4T.style.color = 'darkcyan'
        translation.innerHTML = ''
    }, 1800)
})
//Question 05
let input5 =document.getElementById('input5')
let check5 = document.getElementById('check5')

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'deep') {
        audioSword.play()
        input5.style.color = 'limegreen'
        check5.style.visibility = 'visible'
        value++
        document.getElementById('score').innerHTML = value
        input5.disabled = true
        document.getElementById('input6').focus()
    }
})      
input5.addEventListener('keyup', (e) => {
    if (input5.value != 'deep') {
        input5.style.color = 'red'
    } 
}) 
input5.addEventListener('keyup', (e) => {
    if (input5.value === 'd') {
        input5.style.color = 'limegreen'
    } 
}) 
input5.addEventListener('keyup', (e) => {
    if (input5.value === 'de') {
        input5.style.color = 'limegreen'
    } 
})
input5.addEventListener('keyup', (e) => {
    if (input5.value === 'dee') {
        input5.style.color = 'limegreen'
    } 
})

btn5T.addEventListener('click', function() {
    let audio = document.getElementById('clickSound')
    audio.play()
    btn5T.style.backgroundColor = 'red'
    btn5T.style.color = 'yellow'
    translation.innerHTML = 'Quão profundo é o Grand Canyon?'
  
    setTimeout(function() {
        btn5T.style.backgroundColor = 'white'
        btn5T.style.color = 'darkcyan'
        translation.innerHTML = ''
        let audio2 = document.getElementById('howdeep')
        audio2.play()
    }, 1800)
})









