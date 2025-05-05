document.ondragstart = function() {return false}

let tickets = [
    {id:1,price:151000,chair:1,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"درسا VIP با مانیتور شخصی",
     maghsad:"تبریز",mabda:"ساری",terminal:"ترمینال جنوب",travelTime:10},
    {id:2,price:145000,chair:0,img:"images/seyr-safar.jpg",companyName:"سیر و سفر",busType:"مارال VIP با مانیتور شخصی",
    maghsad:"اصفهان",mabda:"کیش",terminal:"ترمینال شمال",travelTime:13.3},
    {id:3,price:149000,chair:5,img:"images/tbt-safar.png",companyName:"شرکت تی بی تی",busType:"25 نفره (VIP)",
    maghsad:"مشهد",mabda:"ساری",terminal:"ترمینال شمال",travelTime:8},
    {id:4,price:158000,chair:8,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"درسا VIP با مانیتور شخصی",
    maghsad:"گیلان",mabda:"تهران",terminal:"ترمینال غرب",travelTime:4.3},
    {id:5,price:171000,chair:14,img:"images/seyr-safar.jpg",companyName:"سیر و سفر",busType:"VIP+مانیتوردار+مارال+شارژر+پذیرایی",
    maghsad:"تبریز",mabda:"جعفر آباد",terminal:"ترمینال جنوب",travelTime:19},
    {id:6,price:159000,chair:0,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"مارال VIP با مانیتور شخصی",
    maghsad:"کرمان",mabda:"کیش",terminal:"ترمینال غرب",travelTime:24},
    {id:7,price:152000,chair:10,img:"images/tbt-safar.png",companyName:"شرکت تی بی تی",busType:"25 نفره (VIP)",
    maghsad:"مشهد",mabda:"ساری",terminal:"ترمینال غرب",travelTime:21},
    {id:8,price:175000,chair:22,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"VIP+مانیتوردار+مارال+شارژر+پذیرایی",
    maghsad:"اصفهان",mabda:"تبریز",terminal:"ترمینال شرق",travelTime:22},
    {id:9,price:167000,chair:14,img:"images/tbt-safar.png",companyName:"شرکت تی بی تی",busType:"25 نفره (VIP)",
    maghsad:"گیلان",mabda:"تهران",terminal:"ترمینال شمال",travelTime:5},
    {id:10,price:174000,chair:12,img:"images/seyr-safar.jpg",companyName:"سیر و سفر",busType:"مارال VIP با مانیتور شخصی",
    maghsad:"تبریز",mabda:"اراک",terminal:"ترمینال شرق",travelTime:6.3},
    {id:11,price:151000,chair:17,img:"images/seyr-safar.jpg",companyName:"سیر و سفر",busType:"25 نفره (VIP)",
    maghsad:"کرمان",mabda:"ساری",terminal:"ترمینال جنوب",travelTime:9},
    {id:12,price:167000,chair:15,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"درسا VIP با مانیتور شخصی",
    maghsad:"اصفهان",mabda:"تبریز",terminal:"ترمینال غرب",travelTime:12},
    {id:13,price:147000,chair:0,img:"images/tbt-safar.png",companyName:"شرکت تی بی تی",busType:"VIP+مانیتوردار+مارال+شارژر+پذیرایی",
    maghsad:"گیلان",mabda:"کیش",terminal:"ترمینال شمال",travelTime:14.3},
    {id:14,price:143000,chair:4,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"درسا VIP با مانیتور شخصی",
    maghsad:"مشهد",mabda:"تهران",terminal:"ترمینال جنوب",travelTime:18.3},
    {id:15,price:173000,chair:24,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"درسا VIP با مانیتور شخصی",
    maghsad:"کرمان",mabda:"کیش",terminal:"ترمینال شرق",travelTime:17},
    {id:16,price:161000,chair:0,img:"images/seyr-safar.jpg",companyName:"سیر و سفر",busType:"VIP+مانیتوردار+مارال+شارژر+پذیرایی",
    maghsad:"اصفهان",mabda:"اراک",terminal:"ترمینال شمال",travelTime:0},
    {id:17,price:169000,chair:18,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"25 نفره (VIP)",
    maghsad:"تبریز",mabda:"تهران",terminal:"ترمینال شرق",travelTime:21.3},
    {id:18,price:172000,chair:16,img:"images/tbt-safar.png",companyName:"شرکت تی بی تی",busType:"مارال VIP با مانیتور شخصی",
    maghsad:"گیلان",mabda:"تبریز",terminal:"ترمینال غرب",travelTime:20},
    {id:19,price:162000,chair:20,img:"images/royal-safar.jpg",companyName:"رویال سفر",busType:"VIP+مانیتوردار+مارال+شارژر+پذیرایی",
    maghsad:"کرمان",mabda:"اراک",terminal:"ترمینال شرق",travelTime:7.3},
    {id:20,price:181000,chair:24,img:"images/seyr-safar.jpg",companyName:"سیر و سفر",busType:"مارال VIP با مانیتور شخصی",
    maghsad:"مشهد",mabda:"اراک",terminal:"ترمینال جنوب",travelTime:19.3} 
]

function inputFill(input,output) {
    setInterval(() => {
        if(input.value == .3 || input.value == 1.3 || input.value == 2.3 || input.value == 3.3 ||
           input.value == 4.3 || input.value == 5.3 || input.value == 6.3 || input.value == 7.3 ||
           input.value == 8.3 || input.value == 9.3) {
            output.innerHTML = "0" + input.value + "0"
        }
        if(input.value == 10.3 || input.value == 11.3 || input.value == 12.3 || input.value == 13.3 ||
           input.value == 14.3 || input.value == 15.3 || input.value == 16.3 || input.value == 17.3 ||
           input.value == 18.3 || input.value == 19.3 || input.value == 20.3 || input.value == 21.3 ||
           input.value == 22.3 || input.value == 23.3 || input.value == 24.3) {
            output.innerHTML = input.value + "0"
        }
    }, 1);
    output.innerHTML = input.value + ":00"
}
let parent = document.querySelector("#content > .container > .left > .bottom")
let modalTravelTime = document.querySelector("#selectTicketModal > #modalContainer > #selTicket > .right > .travelTime")

function create(itemData) {

    let ticket = document.createElement("div")
    ticket.className = "ticket"
    parent.appendChild(ticket)

    let ticketLeft = document.createElement("div")
    ticketLeft.className = "left"
    ticket.appendChild(ticketLeft)

    let price = document.createElement("div")
    price.className = "price"
    price.innerHTML = itemData.price
    ticketLeft.appendChild(price)

    let selectTicket = document.createElement("div")
    selectTicket.className = "select-ticket"
    selectTicket.innerHTML = "انتخاب بلیط"
    selectTicket.addEventListener("click" , ()=> {
        selectTicketModal.className = "showModal"
        let selTicket = document.createElement("div")
        selTicket.setAttribute("id" , "selTicket")
        selTicket.innerHTML = `
            <div class="left">
                <div class="changeTicket">تغییر بلیط</div>
                <div>هر صندلی &nbsp;&nbsp; ${itemData.price} تومان</div>
                <div>مجموع &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${itemData.price} تومان</div>
            </div>
        `
        let addMyTravel = document.createElement("div")
        addMyTravel.className = "buyTicket"
        addMyTravel.setAttribute("id" , "addMyTravel")
        addMyTravel.innerHTML = "افزودن به سفر های من"
        addMyTravel.setAttribute("data-id",itemData.id)

        addMyTravel.addEventListener("click" , function() {
            alert(addMyTravel.getAttribute("data-id"))

            let currentTicket = addMyTravel.getAttribute("data-id")

            let myObject = tickets.find(element => element.id == currentTicket)

            console.log(myObject);

            let myBasket = JSON.parse(localStorage.getItem("basket"))
        
            if(!myBasket) {
                myBasket = []
            }
        
            let elementId = myObject.id 
            let price = myObject.price 
            let chair = myObject.chair 
            let mabda = myObject.mabda 
            let maghsad = myObject.maghsad 
            let travelTime = myObject.travelTime 
            let terminal = myObject.terminal 
            let companyName = myObject.companyName 
            let busType = myObject.busType 
            let tedad = 1
        
            let myObjectId = myBasket.findIndex(function(element) {
                return element.elementId == currentTicket
            })
        
            if(myObjectId !== -1) {
                myBasket[myObjectId].tedad ++;
            }
            else {
                myBasket.push({elementId,price,chair,mabda,maghsad,travelTime,terminal,companyName,busType,tedad})
            }
        
            localStorage.setItem("basket",JSON.stringify(myBasket))
        })
        selTicket.appendChild(addMyTravel)

        modalContainer.innerHTML = ""
        modalContainer.appendChild(selTicket)

        let modalRight = document.createElement("div")
        modalRight.className = "right"
        selTicket.appendChild(modalRight)

        let modalCompanyImg = document.createElement("img")
        modalCompanyImg.className = "companyImg"
        modalCompanyImg.src = itemData.img
        modalRight.appendChild(modalCompanyImg)

        let modalBusType = document.createElement("div")
        modalBusType.className = "busType"
        modalBusType.innerHTML = itemData.busType
        modalRight.appendChild(modalBusType)

        let modalCompanyName = document.createElement("div")
        modalCompanyName.className = "companyName"
        modalCompanyName.innerHTML = itemData.companyName
        modalRight.appendChild(modalCompanyName)

        let modalMaghsad = document.createElement("div")
        modalMaghsad.className = "maghsad"
        modalMaghsad.innerHTML = itemData.maghsad
        modalRight.appendChild(modalMaghsad)

        let modalMabda = document.createElement("div")
        modalMabda.className = "mabda"
        modalMabda.innerHTML = itemData.mabda
        modalRight.appendChild(modalMabda)

        let modalTerminal = document.createElement("div")
        modalTerminal.className = "terminal"
        modalTerminal.innerHTML = itemData.terminal
        modalRight.appendChild(modalTerminal)
        
        let modalTravelImg = document.createElement("img")
        modalTravelImg.className = "travelImg"
        modalTravelImg.src = "images/travel.png"
        modalRight.appendChild(modalTravelImg)        

        let travelTime = document.createElement("div")
        travelTime.className = "travelTime"
        travelTime.innerHTML = itemData.travelTime + ":00"
        modalRight.appendChild(travelTime)
        
        let closeModal2 = document.createElement("img")
        closeModal2.src = "images/close.png"
        closeModal2.setAttribute("id" , "closeModal2")
        closeModal2.addEventListener("click", function(){selectTicketModal.className = ""}) 
        modalContainer.appendChild(closeModal2)

        checker(itemData,travelTime)
    })
    ticketLeft.appendChild(selectTicket)

    let chairCounter = document.createElement("div")
    chairCounter.className = "chair-counter"
    chairCounter.innerHTML = itemData.chair + " صندلی باقیمانده مانده"
    ticketLeft.appendChild(chairCounter)

    let ticketRight = document.createElement("div")
    ticketRight.className = "right"
    ticket.appendChild(ticketRight)

    let companyImg = document.createElement("img")
    companyImg.className = "companyImg"
    companyImg.src = itemData.img
    ticketRight.appendChild(companyImg)

    let companyName = document.createElement("div")
    companyName.className = "companyName"
    companyName.innerHTML = itemData.companyName
    ticketRight.appendChild(companyName)

    let busType = document.createElement("div")
    busType.className = "busType"
    busType.innerHTML = itemData.busType
    ticketRight.appendChild(busType)

    let maghsad = document.createElement("div")
    maghsad.className = "maghsad"
    maghsad.innerHTML = itemData.maghsad
    ticketRight.appendChild(maghsad)

    let mabda = document.createElement("div")
    mabda.className = "mabda"
    mabda.innerHTML = itemData.mabda
    ticketRight.appendChild(mabda)

    let terminal = document.createElement("div")
    terminal.className = "terminal"
    terminal.innerHTML = itemData.terminal
    ticketRight.appendChild(terminal)    

    let travelTime = document.createElement("div")
    travelTime.className = "travelTime"
    travelTime.innerHTML = itemData.travelTime + ":00"
    ticketRight.appendChild(travelTime)    

    let travelImg = document.createElement("img")
    travelImg.className = "travelImg"
    travelImg.src = "images/travel.png"
    ticketRight.appendChild(travelImg)

    let bottom = document.createElement("div")
    bottom.className = "bottom"
    ticketRight.appendChild(bottom) 
    
    let rule = document.createElement("div")
    rule.className = "rule"
    rule.innerHTML = "قوانین جریمه و استرداد"
    bottom.appendChild(rule)        

    let info = document.createElement("div")
    info.className = "info"
    info.innerHTML = "اطلاعات اتوبوس و سفر"
    bottom.appendChild(info)        

    let map = document.createElement("div")
    map.className = "map"
    map.innerHTML = "نقشه صندلی‌ ها"
    bottom.appendChild(map)        

    if(itemData.chair < 8) chairCounter.style.color = "red"
    if(itemData.chair == 0) {
        ticket.style.backgroundColor = "#f8fafb"
        chairCounter.innerHTML = "تکمیل ظرفیت"
        selectTicket.remove()
    }
    checker(itemData,travelTime)
}

function checker(itemData,travelTime) {
    if(itemData.travelTime == .3 || itemData.travelTime == 1.3 || itemData.travelTime == 2.3 || itemData.travelTime == 3.3 ||
        itemData.travelTime == 4.3 || itemData.travelTime == 5.3 || itemData.travelTime == 6.3 || itemData.travelTime == 7.3 ||
        itemData.travelTime == 8.3 || itemData.travelTime == 9.3) {
        travelTime.innerHTML = "0" + itemData.travelTime + "0"
    } 
    else if(itemData.travelTime < 10 ) travelTime.innerHTML = "0" + itemData.travelTime + ":00"
    if(itemData.travelTime == 10.3 || itemData.travelTime == 11.3 || itemData.travelTime == 12.3 || itemData.travelTime == 13.3 ||
        itemData.travelTime == 14.3 || itemData.travelTime == 15.3 || itemData.travelTime == 16.3 || itemData.travelTime == 17.3 ||
        itemData.travelTime == 18.3 || itemData.travelTime == 19.3 || itemData.travelTime == 20.3 || itemData.travelTime == 21.3 ||
        itemData.travelTime == 22.3 || itemData.travelTime == 23.3 || itemData.travelTime == 24.3) {
        travelTime.innerHTML = itemData.travelTime + "0"
    }
}

setInterval(() => {
    if(parent.children.length == 0) result.innerHTML = 0
}, 10);

ter1.onclick = function(){filtring()}
ter2.onclick = function(){filtring()}
ter3.onclick = function(){filtring()}
ter4.onclick = function(){filtring()}
allter.onclick = function(){filtring()}

royal.onclick = function(){filtring()}
seyr.onclick = function(){filtring()}
tbt.onclick = function(){filtring()}
allcomp.onclick = function(){filtring()}

sort1.onclick = function(){filtring()}
sort2.onclick = function(){filtring()}
sort3.onclick = function(){filtring()}

function foring(json) {
    for(i=0;i<json.length;i++) {
        result.innerHTML = json.length
        create(json[i])
    }
}
foring(tickets)

function filtring() {
    
    let allterminal = true
    let mabda1 = ""
    let mabda2 = ""
    let mabda3 = ""
    let mabda4 = ""

    if(ter1.checked){
        mabda1 = "ترمینال شمال"
        allterminal = false
    }
    if(ter2.checked){
        mabda2 = "ترمینال جنوب"
        allterminal = false
    }
    if(ter3.checked){
        mabda3 = "ترمینال شرق"
        allterminal = false
    }
    if(ter4.checked){
        mabda4 = "ترمینال غرب"
        allterminal = false
    }
    if(allterminal == false) allter.checked = false
    else allter.checked = true


    let allcompany = true
    let company1 = ""
    let company2 = ""
    let company3 = ""

    if(royal.checked) {
        company1 = "رویال سفر"
        allcompany = false
    }
    if(seyr.checked) {
        company2 = "سیر و سفر"
        allcompany = false
    }
    if(tbt.checked) {
        company3 = "شرکت تی بی تی"
        allcompany = false
    }
    if(allcompany == false) allcomp.checked = false
    else allcomp.checked = true

    parent.innerHTML = "";

    let filterShode = tickets.filter(function(ticket){
        return ticket.travelTime >= timeFrom.value && ticket.travelTime <= timeTo.value && ticket.mabda.indexOf(mabdaInput.value) !== -1 &&
        ticket.maghsad.indexOf(maghsadInput.value) !== -1 && (ticket.terminal == mabda1 || ticket.terminal == mabda2 || ticket.terminal == mabda3 || 
        ticket.terminal == mabda4 || allterminal) && (ticket.companyName == company1 || ticket.companyName == company2 || ticket.companyName == company3
        || allcompany)
    })

    if(sort1.checked) filterShode = filterShode.sort((a,b)=> a.price - b.price)
    if(sort2.checked) filterShode = filterShode.sort((a,b)=> a.travelTime - b.travelTime)
    if(sort3.checked) filterShode = filterShode.sort()
    
    foring(filterShode)
}

mabdaInput.oninput = function() {filtring()}
maghsadInput.oninput = function() {filtring()}


timeFrom.oninput = function(){
    inputFill(timeFrom,timeFromOut)
    filtring()
}
timeTo.oninput = function(){
    inputFill(timeTo,timeToOut)
    filtring()
}
function showMTM() {
    myTravelModal.className = "showMTDModal"

    let myBasket = JSON.parse(localStorage.getItem("basket"))

    myTravelsData.innerHTML = ""

    myBasket.forEach(element => {
        let item = document.createElement("div")
        item.className = "myTicket"
        myTravelsData.appendChild(item)

        let mabda = document.createElement("div")
        mabda.className = "mabda"
        mabda.innerHTML = "مبدا : </br>" + element.mabda
        item.appendChild(mabda)

        let maghsad = document.createElement("div")
        maghsad.className = "maghsad"
        maghsad.innerHTML = "مقصد : </br>" + element.maghsad
        item.appendChild(maghsad)

        let companyName = document.createElement("div")
        companyName.className = "companyName"
        companyName.innerHTML = element.companyName
        item.appendChild(companyName)

        let travelTime = document.createElement("div")
        travelTime.className = "travelTime"
        travelTime.innerHTML = "زمان حرکت </br>" + element.travelTime + ":00"
        checker(element,travelTime)
        item.appendChild(travelTime)

        let busType = document.createElement("div")
        busType.className = "busType"
        busType.innerHTML = element.busType
        item.appendChild(busType)

        let price = document.createElement("div")
        price.className = "price"
        price.innerHTML = "قیمت : " + element.price + " تومان"
        item.appendChild(price)

        let tedad = document.createElement("div")
        tedad.className = "tedad"
        tedad.innerHTML = "تعداد : " + element.tedad
        item.appendChild(tedad)
    });
}
function closeMTM() {myTravelModal.className = ""}