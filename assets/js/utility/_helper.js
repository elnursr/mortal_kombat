export function removeClasses({ elements, className = 'active' }) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}

export function setFlexOrders(elements) {
    for (let i = 0; i < elements.length; i++) {
        let flexOrder = i + 1;
        elements[i].style.order = flexOrder;
        if (flexOrder === 13) {
            elements[i].style.order = 14;
        }
        else if (flexOrder === 14) {
            elements[i].style.order = 13;
        }
    }
}