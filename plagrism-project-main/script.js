
document.getElementById('plagiarismForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var codeInput = document.getElementById('codeInput').value;

  var similarityPercentage = checkPlagiarism(codeInput);

  var resultDiv = document.getElementById('result');
  resultDiv.innerText = 'Plagiarism Result: ' + similarityPercentage + '%';
});

function checkPlagiarism(codeInput) {
  // Assume there is a reference code snippet against which plagiarism is checked
  var referenceCode = 'Some reference code snippet goes here';

  var similarityPercentage = calculateSimilarity(codeInput, referenceCode);

  return similarityPercentage.toFixed(2); // Fixed to 2 decimal places
}

function calculateSimilarity(str1, str2) {
  var longestCommonSubsequenceLength = findLongestCommonSubsequence(str1, str2);

  var similarityPercentage = (longestCommonSubsequenceLength / Math.max(str1.length, str2.length)) * 100;

  return similarityPercentage;
}

function findLongestCommonSubsequence(str1, str2) {
  var m = str1.length;
  var n = str2.length;
  var dp = [];

  for (var i = 0; i <= m; i++) {
    dp[i] = [];
    for (var j = 0; j <= n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 0;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

