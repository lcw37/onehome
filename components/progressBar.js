class ProgressBar extends HTMLElement {
    connectedCallback() {
        // var donePct = Number(this.attributes.donePct.value);
        // var inProgressPct = Number(this.attributes.inProgressPct.value);
        // var notStartedPct = Number(this.attributes.notStartedPct.value);

        var donePct = 50;
        var inProgressPct = 25;
        var notStartedPct = 25; // 100 - donePct - inProgressPct

        this.innerHTML =    `<div class="progress-bar columns">
                                <div class="progress-segment" style="background-color: #5178FF; width: ${donePct}%">
                                    ${donePct}
                                </div>
                                <div class="progress-segment" style="background-color: #5178FF; opacity: 50%; width: ${inProgressPct}%">
                                    ${inProgressPct}
                                </div>
                                <div class="progress-segment" style="background-color: white; width: ${notStartedPct}%">
                                    ${notStartedPct}
                                </div>
                            </div>`;
        // this.getElementsByClassName("done-segment").style.width = "10px";
        // this.getElementsByClassName("inProgress-segment").style.width = "15px";
        // this.getElementsByClassName("notStarted-segment").style.width = "20px";
    }
}

customElements.define('progress-bar', ProgressBar);