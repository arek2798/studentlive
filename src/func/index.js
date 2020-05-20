export const numToMonthName = (num) => {
    switch (num) {
        case 1: return "styczeń"
        case 2: return "luty"
        case 3: return "marzec"
        case 4: return "kwiecień"
        case 5: return "maj"
        case 6: return "czerwiec"
        case 7: return "lipiec"
        case 8: return "sierpień"
        case 9: return "wrzesień"
        case 10: return "październik"
        case 11: return "listopad"
        case 12: return "grudzień"
        default: break;
    }
}
export const numToDayName = (num) => {
    switch (num) {
        case 0: return "Niedziela"
        case 1: return "Poniedziałek"
        case 2: return "Wtorek"
        case 3: return "Środa"
        case 4: return "Czwartek"
        case 5: return "Piątek"
        case 6: return "Sobota"
        default: break;
    }
}

export const sortEvents = (events) => {
    events.sort((a, b) => {
        let firstDate = new Date(a.date);
        let secondDate = new Date(b.date);
        if (firstDate.getHours() - secondDate.getHours()) return firstDate.getHours() - secondDate.getHours();
        else return firstDate.getMinutes() - secondDate.getMinutes()
    })

    return events;
}

