class ProgressBar extends HTMLElement {
    connectedCallback() {
        // var donePct = Number(this.attributes.donePct.value);
        // var inProgressPct = Number(this.attributes.inProgressPct.value);
        // var notStartedPct = Number(this.attributes.notStartedPct.value);

        var donePct = 50;
        var inProgressPct = 25;
        var notStartedPct = 25; // 100 - donePct - inProgressPct

        this.innerHTML =    `<div class="progress-bar columns">
                                <div class="done-segment progress-segment" style="width: ${donePct}%;">
                                </div>
                                <div class="inProgress-segment progress-segment" style="width: ${inProgressPct}%;">
                                </div>
                                <div class="notStarted-segment progress-segment" style="width: ${notStartedPct}%;">
                                </div>
                            </div>`;
    }    
}

customElements.define('progress-bar', ProgressBar);