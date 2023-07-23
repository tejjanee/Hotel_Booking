function calculateProfit(K, N, A) {
    let prev = Array.from({ length: 2 }, () => Array(K + 1).fill(0));
    let curr = [...prev];

    for (let i = N - 1; i >= 0; i--) {
        for (let j = 1; j >= 0; j--) {
            for (let k = K; k > 0; k--) {
                if (j) {
                    curr[j][k] = Math.max(prev[1][k], -A[i] + prev[0][k]);
                } else {
                    curr[j][k] = Math.max(prev[0][k], A[i] + prev[1][k - 1]);
                }
            }
        }
        prev = [...curr];
    }

    return curr[1][K];
}

document.addEventListener("DOMContentLoaded", function () {
    const outputElement = document.getElementById("output");

    const t = parseInt(prompt("Enter the number of test cases:"));

    let outputHTML = "<h2>Results:</h2>";

    for (let i = 0; i < t; i++) {
        const K = parseInt(prompt("Enter maximum transaction for test case " + (i + 1) + ":"));
        const N = parseInt(prompt("Enter no of days for test case " + (i + 1) + ":"));
        const A = [];

        for (let j = 0; j < N; j++) {
            A.push(parseInt(prompt("Enter stock price for day " + (j + 1) + ":")));
        }

        const result = calculateProfit(K, N, A);

        outputHTML += "<p>Test case " + (i + 1) + ": " + result + "</p>";
    }

    outputElement.innerHTML = outputHTML;
});
