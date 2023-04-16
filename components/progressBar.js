class ProgressBar extends HTMLElement {
    connectedCallback() {
        var donePct = this.attributes.donePct.value;
        var inProgressPct = this.attributes.inProgressPct.value;
        var notStartedPct = this.attributes.notStartedPct.value;

        this.innerHTML = `<h1>${donePct}<br>${inProgressPct}<br>${notStartedPct}</h1>`;
    }
}

customElements.define('progress-bar', ProgressBar);