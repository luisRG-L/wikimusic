const $: (selector: string) => HTMLElement | null = (selector: string) => {
    return document.querySelector(selector);
}

export default $;