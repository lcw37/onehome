class ProgressBar extends HTMLElement {
    connectedCallback() {
        var donePct = Number(this.attributes.donePct.value);
        var inProgressPct = Number(this.attributes.inProgressPct.value);
        var notStartedPct = Number(this.attributes.notStartedPct.value);

        this.innerHTML =    `<div class="progress-bar">
                                
                                ${donePct}<br>${inProgressPct}<br>${notStartedPct}
                            </div>`;
    }
}

customElements.define('progress-bar', ProgressBar);