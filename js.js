

const btn1 = document.getElementById('btn_1')
const btn2= document.getElementById('btn_2')

const send= document.getElementById('send')

const popup= document.querySelector('.popup')
const popup_finish= document.querySelector('.popup_finish')

send.onclick =()=>{
    popup.classList.remove('active')
    popup.classList.add('unactive')
    popup_finish.classList.remove('unactive')
    popup_finish.classList.add('active')
}
btn1.addEventListener('click',(ev)=>{
    ev.preventDefault()
    popup.classList.add('active')
    popup.classList.remove('unactive')
    popup_finish.classList.add('unactive')
    popup_finish.classList.remove('active')
})

btn2.addEventListener('click',(ev)=>{
    ev.preventDefault()
    popup.classList.add('active')
    popup.classList.remove('unactive')
    popup_finish.classList.add('unactive')
    popup_finish.classList.remove('active')
})
