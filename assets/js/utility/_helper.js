export function removeClasses({ elements, className = 'active' }) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}

export function setFlexOrders({ elements, firstOrder, secondOrder }) {
    for (let i = 0; i < elements.length; i++) {
        let flexOrder = i + 1;
        elements[i].style.order = flexOrder;
        if (flexOrder === firstOrder) {
            elements[i].style.order = secondOrder;
        }
        else if (flexOrder === secondOrder) {
            elements[i].style.order = firstOrder;
        }
    }
}