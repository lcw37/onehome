/** Custom HTML progress-bar element. */
class ProgressBar extends HTMLElement {
    connectedCallback() {
        var donePct = Number(this.attributes.donePct.value);
        var inProgressPct = Number(this.attributes.inProgressPct.value);
        var notStartedPct = 100 - donePct - inProgressPct;

        this.innerHTML =    `<div class="progress-bar columns">
                                <div class="done-segment progress-segment" style="width: ${donePct}%;">
                                </div>
                                <div class="inProgress-segment progress-segment" style="width: ${inProgressPct}%;">
                                </div>
                                <div class="notStarted-segment progress-segment" style="width: ${notStartedPct}%;">
                                </div>
                            </div>`;

        var progressBar = this.querySelector(".progress-bar");
        // if no done portion, round left-side corners of inProgress-segment
        if (donePct === 0) {
            progressBar.querySelector(".inProgress-segment").style.cssText += "border-top-left-radius: 10px; border-bottom-left-radius: 10px;";
        }
        // if no done or in-progress portion, round left-side corners of notStarted-segment
        if (notStartedPct === 100) {
            progressBar.querySelector(".notStarted-segment").style.cssText += "border-top-left-radius: 10px; border-bottom-left-radius: 10px;";
        }
    }    
}
customElements.define('progress-bar', ProgressBar);


/** Toggles the right-side panel.
         * First resets all background and coloring inversion, then styles accordingly. */
function toggleRightPanel(callingProgressBarHero) {
    var rhs = document.getElementById("main-right");
    var progressBar = callingProgressBarHero.querySelector("progress-bar").children[0];
    
    uninvertAll();
    if (rhs.style.display === "none") {
        showRightPanel();
        callingProgressBarHero.classList.add("has-background-dark");
        invertColors(progressBar);
    } else if (rhs.style.display === "block") {
        hideRightPanel();
    }
}

    /** Show right-side panel. */
    function showRightPanel() {
        document.getElementById("main-right").style.display = "block";
    }

    /** Hide right-side panel. */
    function hideRightPanel() {
        document.getElementById("main-right").style.display = "none";
    }

    /** Invert progress bar segment and border colors. */
    function invertColors(progressBar) {
        var progressBarSegments = progressBar.children;
        progressBarSegments[0].style.backgroundColor = "white";
        progressBarSegments[2].style.backgroundColor = "#5178FF";
        progressBar.style.borderColor = "white";
    }

    /** Un-invert progress bar segment and border colors. */
    function uninvertColors(progressBar) {
        var progressBarSegments = progressBar.children;
        progressBarSegments[2].style.backgroundColor = "white";
        progressBarSegments[0].style.backgroundColor = "#5178FF";
        progressBar.style.borderColor = "#5178FF";
    }

    /** Un-inverts all progress bar's segment and border coloring. */
    function uninvertAll() {
        const allProgressBars = document.getElementsByClassName("progress-bar-container");
        for (let i = 0; i < allProgressBars.length; i++) {
            var progressBar = allProgressBars[i].querySelector("progress-bar").children[0];
            uninvertColors(progressBar);
            allProgressBars[i].classList.remove("has-background-dark");
        }
    }