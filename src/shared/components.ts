const button = (text: string, id: string) => {
    return `
        <button id="${id}">${text}</button>
    `;
}

export {
    button
}