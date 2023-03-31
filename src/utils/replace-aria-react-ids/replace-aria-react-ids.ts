const ariaSelector = (el: string) => `[${el}^="react-aria"]`;

export const replaceReactAriaIds = (container: HTMLElement) => {
    const selectors = ['id', 'for', 'aria-labelledby'];
    const regexp = /react-aria\d+-\d+/g;
    const staticId = 'static-id';

    /**
     * keep a map of the replaceIds to keep the matching between input "id" and label "for" attributes
     */
    const attributesMap: Record<string, string> = {};

    for (const [index, el] of container
        .querySelectorAll(selectors.map(ariaSelector).join(', '))
        .entries()) {
        for (const selector of selectors) {
            const attr = el.getAttribute(selector);

            if (attr?.match(regexp)) {
                const newAttr = `${staticId}-${index}`;

                el.setAttribute(selector, attributesMap[attr] || newAttr);

                attributesMap[attr] = newAttr;
            }
        }
    }
};
