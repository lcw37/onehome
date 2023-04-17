class ProgressBar extends HTMLElement {
    connectedCallback() {
        // var donePct = Number(this.attributes.donePct.value);
        // var inProgressPct = Number(this.attributes.inProgressPct.value);
        // var notStartedPct = Number(this.attributes.notStartedPct.value);

        var donePct = 0.5;
        var inProgressPct = 0.25;
        var notStartedPct = 0.25; // 1 - donePct - inProgressPct

        this.innerHTML =    `<div class="progress-bar">
                                ${donePct}<br>${inProgressPct}<br>${notStartedPct}
                            </div>`;
        // this.getElementsByClassName("done-segment").style.width = "10px";
        // this.getElementsByClassName("inProgress-segment").style.width = "15px";
        // this.getElementsByClassName("notStarted-segment").style.width = "20px";
    }
}

customElements.define('progress-bar', ProgressBar);