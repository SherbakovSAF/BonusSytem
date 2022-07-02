let clientsList = [
    {id: 1, number: 89886046467, name: 'Sergey', points: 1000},
    {id: 2, number: 89886087846467, name: 'Sergey', points: 0},
    {id: 3, number: 89885446467, name: 'Sergey', points: 0},
    {id: 4, number: 8988656046467, name: 'Sergey', points: 0},
    {id: 5, number: 8988604986467, name: 'Sergey', points: 0},
    {id: 6, number: 898860046467, name: 'Ibragim', points: 0},
    {id: 7, number: 8988607646467, name: 'Sergey', points: 0}
];

// const clientNumber = +prompt('Введите номер телефона клиента')
// clientPhone = clientsList.find(e => e.number == clientNumber)



function mainWindow() {
    let sumPurchase = +prompt(`
    Клиента зовут ${clientPhone.name} у него ${clientPhone.points} бонусов
    На какую сумму клиент сделал покупку?`)
    return sumPurchase;
};

let gggg = function answerClient() {
    const answer = +prompt(`
    Напишите "1" если клиент хочет списать баллы
    или
    Напишите "2" если клиент хочет начислить баллы с покупки`)
    return answer;
};
answerClient()
console.log(gggg)

function bonusSystem() {
    if (ffff == 1) {
        let writeOff = +prompt(`Введите сколько баллов хочет списать клиент, у него ${clientPhone.points}`)
        clientPhone.points = clientPhone.points - writeOff
    } else if (ffff == 2) {
        clientPhone.points = clientPhone.points + (mainWindow * 0.15)
    }
console.log(clientPhone)
};


